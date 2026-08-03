#!/usr/bin/env node
/**
 * Hook PreToolUse : refuse toute écriture contenant un tiret cadratin (—)
 * ou demi-cadratin (–) dans le périmètre contrôlé par la CI.
 *
 * Le workflow deploy.yml fait échouer le déploiement sur ces caractères.
 * Ce hook déplace la détection au moment de la frappe plutôt qu'au push.
 *
 * Entrée : l'événement JSON sur stdin (tool_name, tool_input).
 * Sortie : code 0 = autorisé, code 2 = refusé (stderr renvoyé au modèle).
 */

import { relative, isAbsolute } from "node:path";

// Même périmètre que le grep bloquant de .github/workflows/deploy.yml
const CHEMINS_SURVEILLES = [
  /^src\//,
  /^README\.md$/,
  /^public\/llms\.txt$/,
  /^public\/chatbot-knowledge\.txt$/,
];

const TIRETS = /[—–]/g;

function lireStdin() {
  return new Promise((resolve) => {
    let brut = "";
    process.stdin.setEncoding("utf8");
    process.stdin.on("data", (bloc) => (brut += bloc));
    process.stdin.on("end", () => resolve(brut));
  });
}

function estSurveille(cheminFichier) {
  if (!cheminFichier) return false;
  const rel = isAbsolute(cheminFichier)
    ? relative(process.cwd(), cheminFichier)
    : cheminFichier;
  // Hors du dépôt : ne concerne pas le contrôle rédactionnel du site
  if (rel.startsWith("..")) return false;
  return CHEMINS_SURVEILLES.some((motif) => motif.test(rel));
}

/** Renvoie les textes que l'outil s'apprête à écrire dans le fichier. */
function contenusEcrits(nomOutil, entree) {
  switch (nomOutil) {
    case "Write":
      return [entree.content ?? ""];
    case "Edit":
      return [entree.new_string ?? ""];
    case "NotebookEdit":
      return [entree.new_source ?? ""];
    default:
      return [];
  }
}

function extraitFautif(texte) {
  const index = texte.search(TIRETS);
  if (index === -1) return null;
  const debut = Math.max(0, index - 40);
  const fin = Math.min(texte.length, index + 40);
  return `${debut > 0 ? "..." : ""}${texte.slice(debut, fin).replace(/\n/g, " ")}${fin < texte.length ? "..." : ""}`;
}

const brut = await lireStdin();

let evenement;
try {
  evenement = JSON.parse(brut);
} catch {
  // Événement illisible : ne jamais bloquer le travail sur un doute de parsing
  process.exit(0);
}

const nomOutil = evenement.tool_name ?? "";
const entree = evenement.tool_input ?? {};

if (!estSurveille(entree.file_path ?? entree.notebook_path)) process.exit(0);

for (const texte of contenusEcrits(nomOutil, entree)) {
  const extrait = extraitFautif(texte);
  if (!extrait) continue;

  const compte = (texte.match(TIRETS) || []).length;
  console.error(
    [
      `Écriture refusée : ${compte} tiret(s) cadratin/demi-cadratin détecté(s) dans ${entree.file_path}.`,
      "",
      `Extrait : ${extrait}`,
      "",
      "Règle du projet (CLAUDE.md) : jamais de — ni de – dans les articles, titres,",
      "alt d'images, meta descriptions, JSON-LD, aria-labels, commentaires ou README.",
      "Remplacer par une virgule, un deux-points, une parenthèse ou un point.",
      "Pour une plage de dates, utiliser un tiret simple (2024 - 2026).",
      "",
      "La CI applique le même contrôle et fait échouer le déploiement.",
      "Corriger le texte, puis réessayer l'écriture.",
    ].join("\n"),
  );
  process.exit(2);
}

process.exit(0);
