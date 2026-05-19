const CATEGORIES = {
  general: {
    label: "Culture Générale",
    icon: "🌍",
    color: "#4f46e5",
  },
  science: {
    label: "Science",
    icon: "🔬",
    color: "#059669",
  },
  histoire: {
    label: "Histoire",
    icon: "📜",
    color: "#d97706",
  },
  sport: {
    label: "Sport",
    icon: "⚽",
    color: "#dc2626",
  },
  tech: {
    label: "Technologie",
    icon: "💻",
    color: "#7c3aed",
  },
};

const QUESTIONS = {
  general: [
    {
      question: "Quelle est la capitale de la France ?",
      choices: ["Lyon", "Marseille", "Paris", "Bordeaux"],
      answer: 2,
    },
    {
      question: "Combien de continents y a-t-il sur Terre ?",
      choices: ["5", "6", "7", "8"],
      answer: 2,
    },
    {
      question: "Quelle est la plus grande océan du monde ?",
      choices: ["Atlantique", "Indien", "Arctique", "Pacifique"],
      answer: 3,
    },
    {
      question: "Quel est le symbole chimique de l'or ?",
      choices: ["Ag", "Fe", "Au", "Cu"],
      answer: 2,
    },
    {
      question: "Qui a peint la Joconde ?",
      choices: ["Michel-Ange", "Raphaël", "Botticelli", "Léonard de Vinci"],
      answer: 3,
    },
    {
      question: "Combien de jours compte une année bissextile ?",
      choices: ["363", "364", "365", "366"],
      answer: 3,
    },
    {
      question: "Quelle langue est la plus parlée dans le monde ?",
      choices: ["Anglais", "Espagnol", "Mandarin", "Hindi"],
      answer: 2,
    },
    {
      question: "Quel est le plus grand pays du monde par superficie ?",
      choices: ["Canada", "Chine", "États-Unis", "Russie"],
      answer: 3,
    },
    {
      question: "Combien de cordes a une guitare standard ?",
      choices: ["4", "5", "6", "7"],
      answer: 2,
    },
    {
      question: "Quel animal est le symbole de la paix ?",
      choices: ["Aigle", "Colombe", "Hibou", "Cygne"],
      answer: 1,
    },
  ],
  science: [
    {
      question: "Quelle est la vitesse de la lumière dans le vide ?",
      choices: ["200 000 km/s", "250 000 km/s", "300 000 km/s", "350 000 km/s"],
      answer: 2,
    },
    {
      question: "Quel est l'élément le plus abondant dans l'univers ?",
      choices: ["Hélium", "Hydrogène", "Oxygène", "Carbone"],
      answer: 1,
    },
    {
      question: "Combien d'os compte le corps humain adulte ?",
      choices: ["186", "206", "226", "246"],
      answer: 1,
    },
    {
      question: "Quelle planète est la plus proche du Soleil ?",
      choices: ["Vénus", "Mercure", "Mars", "Terre"],
      answer: 1,
    },
    {
      question: "Quelle est la formule chimique de l'eau ?",
      choices: ["HO", "H2O", "H3O", "OH2"],
      answer: 1,
    },
    {
      question: "Qui a découvert la pénicilline ?",
      choices: ["Louis Pasteur", "Marie Curie", "Alexander Fleming", "Isaac Newton"],
      answer: 2,
    },
    {
      question: "Quel gaz représente environ 78% de l'atmosphère terrestre ?",
      choices: ["Oxygène", "CO2", "Azote", "Argon"],
      answer: 2,
    },
    {
      question: "Combien de chromosomes possède un être humain ?",
      choices: ["23", "44", "46", "48"],
      answer: 2,
    },
    {
      question: "Quelle est l'unité de mesure de la force ?",
      choices: ["Joule", "Watt", "Newton", "Pascal"],
      answer: 2,
    },
    {
      question: "Quel organe produit l'insuline ?",
      choices: ["Foie", "Rate", "Rein", "Pancréas"],
      answer: 3,
    },
  ],
  histoire: [
    {
      question: "En quelle année a débuté la Première Guerre mondiale ?",
      choices: ["1910", "1912", "1914", "1916"],
      answer: 2,
    },
    {
      question: "Qui était le premier président des États-Unis ?",
      choices: ["Thomas Jefferson", "Benjamin Franklin", "John Adams", "George Washington"],
      answer: 3,
    },
    {
      question: "En quelle année a eu lieu la Révolution française ?",
      choices: ["1779", "1789", "1799", "1809"],
      answer: 1,
    },
    {
      question: "Quel empire fut le plus étendu de l'histoire ?",
      choices: ["Romain", "Mongol", "Britannique", "Ottoman"],
      answer: 2,
    },
    {
      question: "Qui a construit les Pyramides de Gizeh ?",
      choices: ["Les Grecs", "Les Romains", "Les Égyptiens", "Les Babyloniens"],
      answer: 2,
    },
    {
      question: "En quelle année le mur de Berlin est-il tombé ?",
      choices: ["1987", "1988", "1989", "1990"],
      answer: 2,
    },
    {
      question: "Quel navigateur a découvert l'Amérique en 1492 ?",
      choices: ["Vasco de Gama", "Magellan", "Christophe Colomb", "Marco Polo"],
      answer: 2,
    },
    {
      question: "Quelle civilisation a inventé l'écriture cunéiforme ?",
      choices: ["Égyptienne", "Sumérienne", "Grecque", "Chinoise"],
      answer: 1,
    },
    {
      question: "Combien de temps a duré la Guerre de Cent Ans ?",
      choices: ["100 ans", "116 ans", "125 ans", "87 ans"],
      answer: 1,
    },
    {
      question: "Qui était Napoléon Bonaparte ?",
      choices: ["Roi de France", "Général et Empereur français", "Duc de Normandie", "Prince de Monaco"],
      answer: 1,
    },
  ],
  sport: [
    {
      question: "Combien de joueurs composent une équipe de football ?",
      choices: ["9", "10", "11", "12"],
      answer: 2,
    },
    {
      question: "Dans quel pays sont nés les Jeux olympiques modernes ?",
      choices: ["Italie", "France", "Grèce", "Grande-Bretagne"],
      answer: 2,
    },
    {
      question: "Quel joueur de tennis a remporté le plus de titres du Grand Chelem ?",
      choices: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
      answer: 2,
    },
    {
      question: "Quelle est la distance du marathon ?",
      choices: ["40 km", "41,5 km", "42,195 km", "43 km"],
      answer: 2,
    },
    {
      question: "Quel pays a remporté la Coupe du Monde 2018 ?",
      choices: ["Brésil", "Croatie", "France", "Allemagne"],
      answer: 2,
    },
    {
      question: "Combien de points vaut un panier à 3 points au basketball ?",
      choices: ["1", "2", "3", "4"],
      answer: 2,
    },
    {
      question: "En quel sport utilise-t-on un volant ?",
      choices: ["Tennis", "Squash", "Badminton", "Ping-pong"],
      answer: 2,
    },
    {
      question: "Combien de tours compte le Tour de France cycliste ?",
      choices: ["18", "19", "20", "21"],
      answer: 3,
    },
    {
      question: "Quel athlète est surnommé 'The Greatest' ?",
      choices: ["Michael Jordan", "Muhammad Ali", "Pelé", "Usain Bolt"],
      answer: 1,
    },
    {
      question: "Combien de temps dure une mi-temps au football ?",
      choices: ["40 min", "45 min", "50 min", "55 min"],
      answer: 1,
    },
  ],
  tech: [
    {
      question: "Qui a fondé Microsoft ?",
      choices: ["Steve Jobs", "Elon Musk", "Bill Gates", "Mark Zuckerberg"],
      answer: 2,
    },
    {
      question: "En quelle année a été lancé le premier iPhone ?",
      choices: ["2005", "2006", "2007", "2008"],
      answer: 2,
    },
    {
      question: "Que signifie 'HTML' ?",
      choices: [
        "Hyper Text Markup Language",
        "High Transfer Mode Language",
        "Hyper Tool Multi Language",
        "Home Tool Markup Language",
      ],
      answer: 0,
    },
    {
      question: "Quel est le langage de programmation le plus utilisé en 2024 ?",
      choices: ["Java", "C++", "Python", "JavaScript"],
      answer: 3,
    },
    {
      question: "Que signifie 'CPU' ?",
      choices: [
        "Central Processing Unit",
        "Computer Personal Unit",
        "Central Program Utility",
        "Core Processing Unit",
      ],
      answer: 0,
    },
    {
      question: "Quel protocole sécurise les communications web (HTTPS) ?",
      choices: ["SSH", "FTP", "TLS/SSL", "UDP"],
      answer: 2,
    },
    {
      question: "Combien de bits dans un octet ?",
      choices: ["4", "6", "8", "16"],
      answer: 2,
    },
    {
      question: "Qui a inventé le World Wide Web ?",
      choices: ["Bill Gates", "Tim Berners-Lee", "Vint Cerf", "Steve Jobs"],
      answer: 1,
    },
    {
      question: "Quel est le système d'exploitation open-source le plus utilisé sur les serveurs ?",
      choices: ["Windows Server", "macOS", "Linux", "FreeBSD"],
      answer: 2,
    },
    {
      question: "Que signifie 'API' ?",
      choices: [
        "Application Programming Interface",
        "Automated Program Integration",
        "Advanced Protocol Interface",
        "Application Processing Input",
      ],
      answer: 0,
    },
  ],
};

function getQuestions(category, count = 10) {
  const pool = [...QUESTIONS[category]];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}
