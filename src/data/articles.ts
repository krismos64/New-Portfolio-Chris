export interface Article {
  id: string;
  title: string;
  image: string;
  url: string;
  description?: string;
}

export const articles: Article[] = [
  {
    id: 'reconversion',
    title: 'La reconversion, un chemin semé d\'embûches, mais une aventure qui en vaut la peine.',
    image: '/images/articles/montagne.jpeg',
    url: 'https://www.linkedin.com/pulse/la-reconversion-un-chemin-sem%C3%A9-demb%C3%BBches-mais-une-qui-mostefaoui-rxref/?trackingId=QrcGWR1qK810GthqffDFWA%3D%3D'
  },
  {
    id: 'algorithmie',
    title: '📚 Mes Débuts en Algorithmie : Une Découverte Inattendue 🌿(l\'importance des fondamentaux)',
    image: '/images/articles/algo.png',
    url: 'https://www.linkedin.com/pulse/mes-d%C3%A9buts-en-algorithmie-une-d%C3%A9couverte-inattendue-mostefaoui-spkef/?trackingId=ILBDTo2isdyDpJsZjJMBOg%3D%3D'
  },
  {
    id: 'alternance',
    title: '🎯 À la recherche d\'une alternance en Développement Web et IA ! 🚀',
    image: '/images/articles/alternance.webp',
    url: 'https://www.linkedin.com/pulse/%C3%A0-la-recherche-dune-alternance-en-d%C3%A9veloppement-web-et-mostefaoui-317qf/?trackingId=qYSuPsVhkaiNTgegmYw5dA%3D%3D'
  },
  {
    id: 'podcast',
    title: '🎧 Un nouveau format pour se présenter en podcast et en vidéo ! 🚀',
    image: '/images/articles/podcast.png',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7254840621838782464/'
  },
  {
    id: 'ia-moi',
    title: 'L\'intelligence artificielle peut-elle me présenter mieux que moi-même ?',
    image: '/images/articles/IA-moi.png',
    url: 'https://www.linkedin.com/pulse/lintelligence-artificielle-peut-elle-me-pr%C3%A9senter-mieux-mostefaoui-zl0yf/?trackingId=LHWgi4I%2F4KG9g52nSgjnNQ%3D%3D'
  },
  {
    id: 'chatbot',
    title: 'Un chatbot interactif pour faciliter nos échanges ! 🤖',
    image: '/images/articles/chatbot.png',
    url: 'https://www.linkedin.com/pulse/nouveau-sur-mon-portfolio-un-chatbot-interactif-pour-nos-mostefaoui-dqdlc/?trackingId=iTCKliZXRTe8ybuXdOiTjw%3D%3D'
  },
  {
    id: 'candidature',
    title: 'Présentation de ma candidature pour une alternance en concepteur développeur d\'applications et IA.',
    image: '/images/articles/reconversion.png',
    url: 'https://www.linkedin.com/pulse/%C3%A0-la-recherche-dune-alternance-en-d%C3%A9veloppement-web-et-mostefaoui-317qf/?trackingId=qYSuPsVhkaiNTgegmYw5dA%3D%3D'
  },
  {
    id: 'snake-chatbot',
    title: 'Je vous partage le chatbot interactif pour discuter avec le légendaire Solid Snake',
    image: '/images/articles/mgs.jpg',
    url: 'https://www.linkedin.com/pulse/%25C3%25A0-la-rencontre-de-snake-un-chatbot-in%25C3%25A9dit-christophe-mostefaoui-p793c/'
  }
];