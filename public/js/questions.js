// ===== QUIZHERO — BASE DE QUESTIONS =====
// 7 catégories × 3 difficultés × 10 questions = 210 questions
// Structure : answers[0] = toujours la bonne réponse (mélangées en jeu)

const QUESTIONS = {

  // ===================== SCIENCE =====================
  science: {
    easy: [
      { question: "Quel est le symbole chimique de l'eau ?", answers: ["H₂O", "CO₂", "NaCl", "O₂"], correct: 0, explanation: "L'eau est composée de 2 atomes d'hydrogène et 1 atome d'oxygène." },
      { question: "Combien de planètes y a-t-il dans notre système solaire ?", answers: ["8", "7", "9", "10"], correct: 0, explanation: "Depuis 2006, Pluton est classée planète naine. Il reste 8 planètes." },
      { question: "Quel gaz les plantes absorbent-elles pour faire la photosynthèse ?", answers: ["CO₂", "Oxygène", "Azote", "Hydrogène"], correct: 0, explanation: "Les plantes absorbent le dioxyde de carbone et rejettent de l'oxygène." },
      { question: "Quel est l'organe qui pompe le sang dans le corps ?", answers: ["Le cœur", "Le foie", "Le rein", "Le poumon"], correct: 0, explanation: "Le cœur est un muscle creux qui propulse le sang dans tout le corps." },
      { question: "Quelle est la substance naturelle la plus dure sur Terre ?", answers: ["Le diamant", "Le fer", "Le granit", "L'or"], correct: 0, explanation: "Le diamant est la forme cristalline du carbone et atteint 10 sur l'échelle de Mohs." },
      { question: "Combien d'os y a-t-il dans le corps humain adulte ?", answers: ["206", "196", "216", "226"], correct: 0, explanation: "Le squelette adulte comprend exactement 206 os." },
      { question: "Quel est l'élément chimique avec le numéro atomique 1 ?", answers: ["L'hydrogène", "L'hélium", "Le carbone", "L'oxygène"], correct: 0, explanation: "L'hydrogène est l'élément le plus simple et le plus abondant dans l'univers." },
      { question: "Quelle est la vitesse approximative de la lumière ?", answers: ["300 000 km/s", "150 000 km/s", "450 000 km/s", "600 000 km/s"], correct: 0, explanation: "La lumière se déplace à 299 792 458 m/s dans le vide." },
      { question: "Quelle planète est la plus proche du Soleil ?", answers: ["Mercure", "Vénus", "Mars", "Terre"], correct: 0, explanation: "Mercure est la plus petite planète et la plus proche du Soleil." },
      { question: "Comment appelle-t-on le processus par lequel les plantes fabriquent leur nourriture ?", answers: ["Photosynthèse", "Respiration", "Digestion", "Fermentation"], correct: 0, explanation: "La photosynthèse convertit la lumière solaire, l'eau et le CO₂ en glucose et oxygène." }
    ],
    medium: [
      { question: "Quel est le 'générateur d'énergie' de la cellule ?", answers: ["La mitochondrie", "Le noyau", "Le ribosome", "L'appareil de Golgi"], correct: 0, explanation: "Les mitochondries produisent l'ATP, la principale source d'énergie cellulaire." },
      { question: "Quel est le numéro atomique du Carbone ?", answers: ["6", "8", "12", "14"], correct: 0, explanation: "Le carbone possède 6 protons dans son noyau, d'où son numéro atomique 6." },
      { question: "Quel est le gaz le plus abondant dans l'atmosphère terrestre ?", answers: ["L'azote (N₂)", "L'oxygène", "L'argon", "Le CO₂"], correct: 0, explanation: "L'azote représente environ 78% de l'atmosphère terrestre." },
      { question: "Quelle est l'unité SI de la force ?", answers: ["Newton", "Watt", "Joule", "Pascal"], correct: 0, explanation: "Le Newton (N) est l'unité de force dans le Système International." },
      { question: "Quel est le symbole chimique de l'or ?", answers: ["Au", "Go", "Ag", "Gd"], correct: 0, explanation: "Au vient du latin 'Aurum', signifiant or." },
      { question: "Quelle partie de la cellule contient l'ADN ?", answers: ["Le noyau", "Le cytoplasme", "La membrane cellulaire", "La vacuole"], correct: 0, explanation: "L'ADN est contenu dans le noyau cellulaire, sous forme de chromosomes." },
      { question: "À quelle température l'eau bout-elle au niveau de la mer ?", answers: ["100 °C", "90 °C", "95 °C", "105 °C"], correct: 0, explanation: "À une pression d'1 atm, l'eau bout exactement à 100 °C." },
      { question: "Quel type d'onde est le son ?", answers: ["Longitudinale", "Transversale", "Électromagnétique", "Mécanique transverse"], correct: 0, explanation: "Le son est une onde mécanique longitudinale : les molécules vibrent dans la direction de propagation." },
      { question: "Quelle est la formule chimique du sel de table ?", answers: ["NaCl", "KCl", "CaCl₂", "MgCl₂"], correct: 0, explanation: "Le sel de cuisine est du chlorure de sodium (NaCl)." },
      { question: "Quelle est la vitesse du son dans l'air à 20 °C ?", answers: ["343 m/s", "143 m/s", "543 m/s", "243 m/s"], correct: 0, explanation: "Le son se déplace à environ 343 m/s dans l'air à température ambiante." }
    ],
    hard: [
      { question: "À quoi sert l'équation de Schrödinger ?", answers: ["Décrire les fonctions d'onde quantiques", "Décrire la mécanique classique", "Calculer la thermodynamique", "Décrire la relativité"], correct: 0, explanation: "L'équation de Schrödinger est l'équation fondamentale de la mécanique quantique." },
      { question: "Quelle est la demi-vie du Carbone-14 ?", answers: ["5 730 ans", "1 000 ans", "10 000 ans", "14 000 ans"], correct: 0, explanation: "Le C-14 se désintègre avec une demi-vie de 5 730 ans, utilisé en datation." },
      { question: "Que stipule le principe d'incertitude d'Heisenberg ?", answers: ["On ne peut connaître simultanément position et quantité de mouvement avec précision", "L'énergie et la masse sont équivalentes", "Le temps et la fréquence sont liés", "La vitesse et l'accélération sont incertaines"], correct: 0, explanation: "ΔxΔp ≥ ℏ/2 : plus on connaît précisément la position, moins on connaît la quantité de mouvement." },
      { question: "Quel est le rôle de la force nucléaire forte ?", answers: ["Maintenir les noyaux atomiques ensemble", "Maintenir les électrons en orbite", "Provoquer la désintégration radioactive", "Générer les ondes électromagnétiques"], correct: 0, explanation: "La force forte lie les quarks en hadrons et maintient les protons et neutrons ensemble." },
      { question: "Qu'est-ce que CRISPR-Cas9 ?", answers: ["Un outil d'édition du génome", "Un système d'exploration spatiale", "Une méthode de synthèse de médicaments", "Un type de scanner neuronal"], correct: 0, explanation: "CRISPR-Cas9 permet de 'couper-coller' précisément des séquences d'ADN." },
      { question: "Que stipule le principe d'exclusion de Pauli ?", answers: ["Deux fermions ne peuvent occuper le même état quantique", "Tous les bosons ont un spin entier", "La lumière a toujours une vitesse constante", "Les charges opposées s'attirent"], correct: 0, explanation: "Ce principe explique la structure des atomes et empêche la matière de s'effondrer." },
      { question: "Qu'est-ce que la matière noire ?", answers: ["De la matière qui n'émet pas de lumière détectable", "Des étoiles invisibles", "Des trous noirs", "De l'antimatière"], correct: 0, explanation: "La matière noire représente ~27% de l'univers mais n'interagit pas avec la lumière." },
      { question: "Qu'est-ce qu'un neutrino ?", answers: ["Un lepton électriquement neutre de très faible masse", "Un type de photon", "Un porteur de force nucléaire", "Un type de quark"], correct: 0, explanation: "Les neutrinos traversent la matière presque sans interaction, des milliards passent par votre corps chaque seconde." },
      { question: "Quelle est la constante d'Avogadro ?", answers: ["6,022 × 10²³ mol⁻¹", "3,14 × 10²³ mol⁻¹", "9,81 × 10²³ mol⁻¹", "1,38 × 10²³ mol⁻¹"], correct: 0, explanation: "La constante d'Avogadro représente le nombre d'entités dans une mole de substance." },
      { question: "Que mesure l'échelle de Richter ?", answers: ["La magnitude des séismes", "L'intensité des ouragans", "La température des étoiles", "La dureté des minéraux"], correct: 0, explanation: "L'échelle de Richter est logarithmique : chaque degré représente 10× plus d'énergie." }
    ]
  },

  // ===================== HISTOIRE =====================
  history: {
    easy: [
      { question: "Qui était le premier président des États-Unis ?", answers: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"], correct: 0, explanation: "George Washington fut président de 1789 à 1797." },
      { question: "En quelle année la Seconde Guerre mondiale s'est-elle terminée ?", answers: ["1945", "1944", "1946", "1947"], correct: 0, explanation: "La capitulation allemande fut signée le 8 mai 1945 et japonaise le 2 septembre 1945." },
      { question: "Qui a peint la Joconde ?", answers: ["Léonard de Vinci", "Michel-Ange", "Raphaël", "Botticelli"], correct: 0, explanation: "Léonard de Vinci peignit la Joconde entre 1503 et 1519." },
      { question: "En quelle année des hommes ont-ils marché pour la première fois sur la Lune ?", answers: ["1969", "1965", "1967", "1971"], correct: 0, explanation: "Neil Armstrong et Buzz Aldrin ont marché sur la Lune le 20 juillet 1969 (mission Apollo 11)." },
      { question: "Quel navire a coulé lors de son voyage inaugural en 1912 ?", answers: ["Le Titanic", "Le Lusitania", "Le Britannic", "L'Olympic"], correct: 0, explanation: "Le Titanic a coulé dans l'Atlantique Nord le 15 avril 1912." },
      { question: "Quelle reine égyptienne a eu des relations avec Jules César et Marc Antoine ?", answers: ["Cléopâtre", "Néfertiti", "Hatchepsout", "Néfertari"], correct: 0, explanation: "Cléopâtre VII fut la dernière pharaonne d'Égypte." },
      { question: "Quel mur séparait l'Allemagne de l'Est et de l'Ouest ?", answers: ["Le Mur de Berlin", "Le Mur de Chine", "Le Rideau de Fer", "Le Mur d'Hadrien"], correct: 0, explanation: "Le Mur de Berlin fut construit en 1961 et tombé en 1989." },
      { question: "Qui a inventé le téléphone ?", answers: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"], correct: 0, explanation: "Alexander Graham Bell breveta le téléphone le 7 mars 1876." },
      { question: "Dans quel pays la Révolution française a-t-elle commencé ?", answers: ["France", "Angleterre", "Espagne", "Italie"], correct: 0, explanation: "La Révolution française débuta en 1789 avec la prise de la Bastille." },
      { question: "Qui était Napoléon Bonaparte ?", answers: ["Empereur des Français", "Roi d'Angleterre", "Pharaon d'Égypte", "Sultan Ottoman"], correct: 0, explanation: "Napoléon Bonaparte fut sacré Empereur des Français le 2 décembre 1804." }
    ],
    medium: [
      { question: "En quelle année la Révolution française a-t-elle débuté ?", answers: ["1789", "1775", "1799", "1804"], correct: 0, explanation: "La prise de la Bastille le 14 juillet 1789 marque le début de la Révolution française." },
      { question: "Qui était le premier Empereur de Rome ?", answers: ["Auguste", "Jules César", "Néron", "Caligula"], correct: 0, explanation: "Auguste (Octave) devint le premier Empereur romain en 27 av. J.-C." },
      { question: "Quel empire Gengis Khan dirigeait-il ?", answers: ["L'Empire mongol", "L'Empire ottoman", "L'Empire romain", "L'Empire perse"], correct: 0, explanation: "L'Empire mongol, fondé par Gengis Khan, fut le plus grand empire terrestre continu de l'histoire." },
      { question: "Quelle civilisation a construit le Machu Picchu ?", answers: ["Les Incas", "Les Aztèques", "Les Mayas", "Les Olmèques"], correct: 0, explanation: "Machu Picchu fut construit par les Incas au XVe siècle, au Pérou." },
      { question: "Quel traité a mis fin à la Première Guerre mondiale ?", answers: ["Le Traité de Versailles", "Le Traité de Paris", "Le Traité de Westphalie", "Le Traité d'Utrecht"], correct: 0, explanation: "Signé le 28 juin 1919, il imposa de lourdes réparations à l'Allemagne." },
      { question: "Qui a écrit le Manifeste du Parti communiste ?", answers: ["Marx et Engels", "Lénine et Staline", "Trotski et Boukharine", "Mao et Zhou"], correct: 0, explanation: "Karl Marx et Friedrich Engels publièrent le Manifeste communiste en 1848." },
      { question: "Quel était le nom de l'opération du Débarquement en Normandie ?", answers: ["Opération Overlord", "Opération Barbarossa", "Opération Market Garden", "Opération Neptune"], correct: 0, explanation: "L'Opération Overlord (6 juin 1944) fut la plus grande opération amphibie de l'histoire." },
      { question: "Quel Premier ministre britannique dirigeait pendant la majeure partie de la WWII ?", answers: ["Winston Churchill", "Neville Chamberlain", "Anthony Eden", "Clement Attlee"], correct: 0, explanation: "Churchill dirigea le Royaume-Uni de 1940 à 1945 puis de 1951 à 1955." },
      { question: "En quelle année la Révolution russe a-t-elle eu lieu ?", answers: ["1917", "1905", "1912", "1923"], correct: 0, explanation: "La Révolution d'Octobre 1917 porta les bolcheviks au pouvoir en Russie." },
      { question: "Quel était le premier satellite artificiel lancé dans l'espace ?", answers: ["Spoutnik 1", "Explorer 1", "Vostok 1", "Luna 1"], correct: 0, explanation: "Spoutnik 1, lancé par l'URSS le 4 octobre 1957, fut le premier objet artificiel en orbite." }
    ],
    hard: [
      { question: "Qui était le dernier Empereur byzantin ?", answers: ["Constantin XI", "Justinien Ier", "Basile II", "Alexis Ier"], correct: 0, explanation: "Constantin XI Paléologue mourut lors de la chute de Constantinople en 1453." },
      { question: "En quelle année la Grande Charte (Magna Carta) fut-elle signée ?", answers: ["1215", "1066", "1347", "1453"], correct: 0, explanation: "La Magna Carta fut signée le 15 juin 1215 par le roi Jean sans Terre." },
      { question: "Qu'était la Guerre du Péloponnèse ?", answers: ["Une guerre entre Athènes et Sparte", "Une guerre entre Rome et Carthage", "Une guerre entre la Perse et la Grèce", "Une guerre entre la Macédoine et la Perse"], correct: 0, explanation: "Cette guerre (431-404 av. J.-C.) opposa la Ligue de Délos (Athènes) à la Ligue du Péloponnèse (Sparte)." },
      { question: "Qui dirigea la Révolution haïtienne contre la France ?", answers: ["Toussaint Louverture", "Jean-Jacques Dessalines", "Henri Christophe", "Dutty Boukman"], correct: 0, explanation: "Toussaint Louverture fut le leader principal avant d'être capturé. Dessalines proclama l'indépendance en 1804." },
      { question: "En quelle année l'ONU fut-elle fondée ?", answers: ["1945", "1944", "1946", "1947"], correct: 0, explanation: "L'Organisation des Nations Unies fut fondée le 24 octobre 1945." },
      { question: "Quel était le dernier Tsar de Russie ?", answers: ["Nicolas II", "Nicolas Ier", "Alexandre III", "Alexandre II"], correct: 0, explanation: "Nicolas II fut abdiqué en 1917 et exécuté avec sa famille en 1918." },
      { question: "Quel était le nom de la bombe atomique larguée sur Hiroshima ?", answers: ["Little Boy", "Fat Man", "Big Boy", "Thin Man"], correct: 0, explanation: "'Little Boy' tomba sur Hiroshima le 6 août 1945. 'Fat Man' fut lancé sur Nagasaki le 9 août." },
      { question: "Qu'a causé la Grande Famine irlandaise des années 1840 ?", answers: ["Un mildiou de la pomme de terre", "La sécheresse", "La guerre", "Les inondations"], correct: 0, explanation: "Le Phytophthora infestans détruisit les récoltes de pommes de terre, principale nourriture des Irlandais." },
      { question: "Quelle était la police secrète de l'Allemagne nazie ?", answers: ["La Gestapo", "La SS", "La SA", "La Wehrmacht"], correct: 0, explanation: "La Gestapo (Geheime Staatspolizei) était la police secrète d'État du Troisième Reich." },
      { question: "En quelle année fut signée la Déclaration d'Indépendance américaine ?", answers: ["1776", "1774", "1778", "1781"], correct: 0, explanation: "La Déclaration d'Indépendance fut adoptée le 4 juillet 1776 par le Congrès continental." }
    ]
  },

  // ===================== GÉOGRAPHIE =====================
  geography: {
    easy: [
      { question: "Quel est le plus grand continent ?", answers: ["L'Asie", "L'Afrique", "L'Amérique du Nord", "L'Europe"], correct: 0, explanation: "L'Asie couvre 44,6 millions de km², soit environ 30% des terres émergées." },
      { question: "Quelle est la capitale de la France ?", answers: ["Paris", "Lyon", "Marseille", "Nice"], correct: 0, explanation: "Paris est la capitale et la plus grande ville de France." },
      { question: "Quel est le plus long fleuve du monde ?", answers: ["Le Nil", "L'Amazone", "Le Mississippi", "Le Yangtsé"], correct: 0, explanation: "Le Nil s'étire sur environ 6 650 km à travers l'Afrique du Nord-Est." },
      { question: "Quel est le plus petit pays du monde ?", answers: ["Le Vatican", "Monaco", "Saint-Marin", "Le Liechtenstein"], correct: 0, explanation: "La Cité du Vatican ne fait que 0,44 km² et est enclavée dans Rome." },
      { question: "Quel est le plus grand océan ?", answers: ["Le Pacifique", "L'Atlantique", "L'Indien", "L'Arctique"], correct: 0, explanation: "L'océan Pacifique couvre plus de 165 millions de km²." },
      { question: "Quelle est la capitale du Japon ?", answers: ["Tokyo", "Osaka", "Kyoto", "Hiroshima"], correct: 0, explanation: "Tokyo est la capitale et la plus grande ville du Japon, avec 14 millions d'habitants en ville." },
      { question: "Quelle est la plus haute montagne du monde ?", answers: ["L'Everest", "Le K2", "Le Kangchenjunga", "Le Lhotse"], correct: 0, explanation: "Le mont Everest culmine à 8 848,86 m d'altitude." },
      { question: "Quelle est la capitale de l'Australie ?", answers: ["Canberra", "Sydney", "Melbourne", "Brisbane"], correct: 0, explanation: "Canberra (et non Sydney) est la capitale de l'Australie depuis 1927." },
      { question: "Combien de continents y a-t-il sur Terre ?", answers: ["7", "5", "6", "8"], correct: 0, explanation: "Les 7 continents : Afrique, Antarctique, Asie, Europe, Amérique du Nord, Océanie, Amérique du Sud." },
      { question: "Sur quel continent se trouve l'Amazonie ?", answers: ["Amérique du Sud", "Afrique", "Asie", "Amérique du Nord"], correct: 0, explanation: "La forêt amazonienne couvre principalement le Brésil, le Pérou et la Colombie." }
    ],
    medium: [
      { question: "Quelle est la capitale du Canada ?", answers: ["Ottawa", "Toronto", "Montréal", "Vancouver"], correct: 0, explanation: "Ottawa, en Ontario, est la capitale fédérale du Canada depuis 1857." },
      { question: "Quelle est la plus longue chaîne de montagnes du monde ?", answers: ["Les Andes", "Les Rocheuses", "Les Alpes", "L'Himalaya"], correct: 0, explanation: "Les Andes s'étendent sur 7 200 km le long de la côte ouest de l'Amérique du Sud." },
      { question: "Quel est le lac le plus profond du monde ?", answers: ["Le lac Baïkal", "Le lac Supérieur", "La mer Caspienne", "Le lac Titicaca"], correct: 0, explanation: "Le lac Baïkal (Russie) atteint 1 642 m de profondeur et contient 20% des eaux douces mondiales." },
      { question: "Quelle est la capitale du Brésil ?", answers: ["Brasília", "São Paulo", "Rio de Janeiro", "Salvador"], correct: 0, explanation: "Brasília est la capitale depuis 1960, remplaçant Rio de Janeiro." },
      { question: "Quel détroit sépare l'Europe de l'Afrique ?", answers: ["Le détroit de Gibraltar", "Le détroit d'Ormuz", "Le détroit de Messine", "Le détroit de Malacca"], correct: 0, explanation: "Le détroit de Gibraltar relie l'Atlantique à la Méditerranée et sépare l'Espagne du Maroc." },
      { question: "Quelle est la capitale de l'Argentine ?", answers: ["Buenos Aires", "Santiago", "Lima", "Bogotá"], correct: 0, explanation: "Buenos Aires est la capitale et la plus grande ville d'Argentine." },
      { question: "Quel pays abrite la ville ancienne de Pétra ?", answers: ["La Jordanie", "Israël", "L'Égypte", "La Syrie"], correct: 0, explanation: "Pétra est une cité nabatéenne taillée dans la roche rose, inscrite au patrimoine UNESCO." },
      { question: "Quel est le plus grand pays du monde par superficie ?", answers: ["La Russie", "Le Canada", "Les États-Unis", "La Chine"], correct: 0, explanation: "La Russie couvre 17,1 millions de km², soit environ 11% de la superficie terrestre." },
      { question: "Quel est le nom de la mer entre l'Italie et la Croatie ?", answers: ["La mer Adriatique", "La mer Tyrrhénienne", "La mer Ionienne", "La mer Égée"], correct: 0, explanation: "La mer Adriatique est un bras de la Méditerranée bordé par l'Italie à l'ouest et les Balkans à l'est." },
      { question: "Quel est le désert le plus grand et le plus chaud du monde ?", answers: ["Le Sahara", "Le désert Arabique", "Le Gobi", "Le Kalahari"], correct: 0, explanation: "Le Sahara couvre 9,2 millions de km² en Afrique du Nord." }
    ],
    hard: [
      { question: "Quelle est la capitale du Kazakhstan ?", answers: ["Astana", "Almaty", "Shymkent", "Karaganda"], correct: 0, explanation: "La capitale est Astana (anciennement Nur-Sultan), rebaptisée en 2022." },
      { question: "Quel pays africain était anciennement appelé Rhodésie ?", answers: ["Le Zimbabwe", "La Zambie", "Le Mozambique", "Le Malawi"], correct: 0, explanation: "La Rhodésie du Sud est devenue le Zimbabwe à l'indépendance en 1980." },
      { question: "Quel est le plus petit pays d'Amérique du Sud par superficie ?", answers: ["Le Suriname", "Le Guyana", "l'Équateur", "L'Uruguay"], correct: 0, explanation: "Le Suriname est le plus petit pays souverain d'Amérique du Sud avec 163 821 km²." },
      { question: "Comment s'appelle la péninsule qui comprend l'Espagne et le Portugal ?", answers: ["La péninsule Ibérique", "La péninsule Balkanique", "La péninsule Scandinave", "La péninsule Italique"], correct: 0, explanation: "La péninsule Ibérique est délimitée par l'Atlantique, la Méditerranée et les Pyrénées." },
      { question: "Quelle est la capitale du Myanmar (Birmanie) ?", answers: ["Naypyidaw", "Yangon", "Mandalay", "Bagan"], correct: 0, explanation: "Naypyidaw est la capitale depuis 2006, remplaçant Rangoun (Yangon)." },
      { question: "Quel détroit sépare l'Alaska de la Russie ?", answers: ["Le détroit de Béring", "Le détroit de Davis", "Le passage de Drake", "Le détroit de Torres"], correct: 0, explanation: "Le détroit de Béring ne mesure que 82 km de large à son point le plus étroit." },
      { question: "Quel est le plus haut sommet d'Afrique ?", answers: ["Le Kilimandjaro", "Le mont Kenya", "Le mont Stanley", "Le Ras Dashen"], correct: 0, explanation: "Le Kilimandjaro culmine à 5 895 m en Tanzanie, c'est un volcan éteint." },
      { question: "Comment s'appelle le grand salar en Bolivie ?", answers: ["Le Salar d'Uyuni", "Le Salar d'Atacama", "Le Bonneville Salt Flat", "Le Grand Lac Salé"], correct: 0, explanation: "Le Salar d'Uyuni (10 582 km²) est le plus grand désert de sel du monde." },
      { question: "Quel est le nom du golfe entre la Suède et la Finlande ?", answers: ["Le golfe de Botnie", "Le golfe de Finlande", "Le golfe de Riga", "Le Kattégat"], correct: 0, explanation: "Le golfe de Botnie est la partie nord de la mer Baltique entre la Suède et la Finlande." },
      { question: "Quelle est la capitale de la Nouvelle-Zélande ?", answers: ["Wellington", "Auckland", "Christchurch", "Dunedin"], correct: 0, explanation: "Wellington est la capitale de la Nouvelle-Zélande depuis 1865, même si Auckland est plus grande." }
    ]
  },

  // ===================== SPORTS =====================
  sports: {
    easy: [
      { question: "Combien de joueurs compte une équipe de football (soccer) ?", answers: ["11", "9", "10", "12"], correct: 0, explanation: "Chaque équipe de football comprend 11 joueurs sur le terrain, dont 1 gardien." },
      { question: "Quel sport est pratiqué à Wimbledon ?", answers: ["Le tennis", "Le cricket", "Le badminton", "Le squash"], correct: 0, explanation: "Wimbledon est le plus ancien tournoi de tennis du monde, fondé en 1877." },
      { question: "Dans quel sport utilise-t-on un 'puck' (rondelle) ?", answers: ["Le hockey sur glace", "Le polo", "La crosse", "Le hockey en salle"], correct: 0, explanation: "La rondelle de hockey mesure 7,62 cm de diamètre et pèse 170 g." },
      { question: "Combien d'anneaux y a-t-il sur le drapeau olympique ?", answers: ["5", "3", "4", "6"], correct: 0, explanation: "Les 5 anneaux représentent les 5 continents unis par le sport." },
      { question: "Quel pays a remporté le plus de Coupes du monde de football ?", answers: ["Le Brésil", "L'Allemagne", "L'Italie", "L'Argentine"], correct: 0, explanation: "Le Brésil a remporté 5 Coupes du monde (1958, 1962, 1970, 1994, 2002)." },
      { question: "Combien de trous compte un parcours de golf standard ?", answers: ["18", "9", "12", "24"], correct: 0, explanation: "Un parcours de golf standard comprend 18 trous, joués en 2 tours de 9 trous." },
      { question: "Combien de points vaut un panier à 3 points au basketball ?", answers: ["3", "2", "4", "5"], correct: 0, explanation: "Un tir réussi derrière la ligne des 3 points vaut 3 points." },
      { question: "Quel est le sport national du Japon ?", answers: ["Le sumo", "Le baseball", "Le judo", "Le football"], correct: 0, explanation: "Le sumo est considéré comme le sport national du Japon avec une histoire de plus de 1 500 ans." },
      { question: "Combien de joueurs sont dans une équipe de volleyball ?", answers: ["6", "5", "7", "8"], correct: 0, explanation: "Une équipe de volleyball compte 6 joueurs sur le terrain." },
      { question: "Dans quel sport utilise-t-on un 'volant' (shuttlecock) ?", answers: ["Le badminton", "Le ping-pong", "Le squash", "Le tennis"], correct: 0, explanation: "Le volant de badminton peut dépasser 400 km/h lors de smashes professionnels." }
    ],
    medium: [
      { question: "En quelle année ont eu lieu les premiers Jeux olympiques modernes ?", answers: ["1896", "1892", "1900", "1904"], correct: 0, explanation: "Les premiers JO modernes se sont tenus à Athènes en 1896, initiés par Pierre de Coubertin." },
      { question: "Quel est le score maximum dans un jeu de bowling parfait ?", answers: ["300", "200", "250", "350"], correct: 0, explanation: "Un jeu parfait en bowling comprend 12 strikes consécutifs pour un score de 300." },
      { question: "Quelle est la distance d'un marathon ?", answers: ["42,195 km", "40 km", "45 km", "38 km"], correct: 0, explanation: "Le marathon mesure exactement 42,195 km, distance courue depuis 1908." },
      { question: "Combien de joueurs y a-t-il dans une équipe de rugby à XV ?", answers: ["15", "13", "11", "7"], correct: 0, explanation: "Le rugby à XV oppose deux équipes de 15 joueurs chacune." },
      { question: "Qui détient le record du monde du 100 m sprint ?", answers: ["Usain Bolt", "Carl Lewis", "Tyson Gay", "Yohan Blake"], correct: 0, explanation: "Usain Bolt détient le record avec 9,58 secondes établi à Berlin en 2009." },
      { question: "En quelle année Michael Jordan a-t-il pris sa retraite pour la première fois ?", answers: ["1993", "1994", "1995", "1996"], correct: 0, explanation: "Jordan prit sa première retraite en octobre 1993 pour jouer au baseball." },
      { question: "Quel est le diamètre d'un panier de basketball ?", answers: ["45,72 cm (18 pouces)", "40 cm", "50 cm", "55 cm"], correct: 0, explanation: "Le cercle du panier mesure exactement 45,72 cm de diamètre intérieur." },
      { question: "Dans quel sport marque-t-on un 'ace' ?", answers: ["Le tennis", "Le basketball", "Le football", "Le golf"], correct: 0, explanation: "Un ace au tennis est un service que l'adversaire ne touche pas." },
      { question: "Quel pays a inventé le cricket ?", answers: ["L'Angleterre", "L'Australie", "L'Inde", "L'Afrique du Sud"], correct: 0, explanation: "Le cricket est originaire d'Angleterre, avec des traces remontant au XVIe siècle." },
      { question: "En combien de sets se joue un match de tennis en Grand Chelem (hommes) ?", answers: ["5 sets maximum", "3 sets maximum", "4 sets maximum", "7 sets maximum"], correct: 0, explanation: "En Grand Chelem masculin, les matchs se jouent au meilleur des 5 sets." }
    ],
    hard: [
      { question: "Combien de médailles d'or olympiques Michael Phelps a-t-il remportées au total ?", answers: ["23", "20", "21", "24"], correct: 0, explanation: "Michael Phelps a gagné 23 médailles d'or sur 28 médailles totales en 4 olympiades." },
      { question: "Comment appelle-t-on 3 strikes consécutifs au bowling ?", answers: ["Turkey", "Hat trick", "Triple", "Strike-out"], correct: 0, explanation: "Un 'Turkey' désigne 3 strikes d'affilée au bowling. 4 strikes = Hambone." },
      { question: "Dans quelle ville se sont déroulés les JO de 1936 ?", answers: ["Berlin", "Rome", "Paris", "Londres"], correct: 0, explanation: "Les JO de 1936 à Berlin furent utilisés par Hitler pour promouvoir l'idéologie nazie, mais Jesse Owens remporta 4 médailles d'or." },
      { question: "Combien de points reçoit le vainqueur d'une course de Formule 1 ?", answers: ["25", "10", "15", "30"], correct: 0, explanation: "Le système actuel (depuis 2010) attribue 25 pts au vainqueur, 18 au 2e, 15 au 3e..." },
      { question: "Quelle est la longueur d'une piscine olympique ?", answers: ["50 m", "25 m", "40 m", "75 m"], correct: 0, explanation: "Les piscines olympiques mesurent 50 m × 25 m avec 8 couloirs." },
      { question: "Qui fut la première gymnaste à obtenir un 10 parfait aux JO ?", answers: ["Nadia Comăneci", "Vera Čáslavská", "Olga Korbut", "Simone Biles"], correct: 0, explanation: "Nadia Comăneci obtint le premier 10 parfait aux JO de Montréal en 1976, à seulement 14 ans." },
      { question: "Combien de pièces y a-t-il sur un échiquier ?", answers: ["32", "16", "48", "64"], correct: 0, explanation: "Un jeu d'échecs comprend 32 pièces (16 par camp) sur 64 cases." },
      { question: "Quel joueur de tennis a remporté le plus de tournois du Grand Chelem (hommes) ?", answers: ["Novak Djokovic", "Roger Federer", "Rafael Nadal", "Pete Sampras"], correct: 0, explanation: "Novak Djokovic détient 24 titres du Grand Chelem (record historique)." },
      { question: "Combien d'outs compte un match de baseball complet (9 manches) ?", answers: ["27", "24", "30", "18"], correct: 0, explanation: "9 manches × 3 outs = 27 outs pour chaque équipe (54 au total)." },
      { question: "Quelle est la hauteur réglementaire d'un filet de tennis ?", answers: ["0,914 m au centre", "1 m au centre", "0,8 m au centre", "1,2 m au centre"], correct: 0, explanation: "Le filet de tennis mesure 91,4 cm au centre et 107 cm aux poteaux." }
    ]
  },

  // ===================== DIVERTISSEMENT =====================
  entertainment: {
    easy: [
      { question: "Qui joue Iron Man dans le MCU (Marvel Cinematic Universe) ?", answers: ["Robert Downey Jr.", "Chris Evans", "Chris Hemsworth", "Mark Ruffalo"], correct: 0, explanation: "Robert Downey Jr. incarne Tony Stark / Iron Man depuis le film de 2008." },
      { question: "Quel film Disney met en scène un lion nommé Simba ?", answers: ["Le Roi Lion", "Bambi", "Le Livre de la Jungle", "Tarzan"], correct: 0, explanation: "Le Roi Lion (1994) s'inspire de Hamlet et reste l'un des plus grands succès Disney." },
      { question: "Qui a chanté 'Thriller' ?", answers: ["Michael Jackson", "Prince", "Whitney Houston", "Tina Turner"], correct: 0, explanation: "Thriller (1982) reste l'album le plus vendu de l'histoire avec plus de 70 millions d'exemplaires." },
      { question: "Quel personnage est le cowboy jouet dans Toy Story ?", answers: ["Woody", "Buzz", "Rex", "Hamm"], correct: 0, explanation: "Woody est le shérif en chef des jouets d'Andy, doublé par Tom Hanks." },
      { question: "Quel groupe a sorti l'album 'Dark Side of the Moon' ?", answers: ["Pink Floyd", "Led Zeppelin", "The Beatles", "The Rolling Stones"], correct: 0, explanation: "Dark Side of the Moon (1973) a passé 741 semaines au Billboard 200." },
      { question: "Dans quelle série TV retrouve-t-on Ross, Rachel, Monica, Chandler, Joey et Phoebe ?", answers: ["Friends", "Seinfeld", "How I Met Your Mother", "The Big Bang Theory"], correct: 0, explanation: "Friends a été diffusée de 1994 à 2004 sur NBC, avec 10 saisons." },
      { question: "Qui a créé Mickey Mouse ?", answers: ["Walt Disney", "Jim Henson", "Chuck Jones", "Tex Avery"], correct: 0, explanation: "Mickey Mouse fit ses débuts dans 'Steamboat Willie' en novembre 1928." },
      { question: "Qui joue Katniss Everdeen dans Hunger Games ?", answers: ["Jennifer Lawrence", "Emma Watson", "Kristen Stewart", "Scarlett Johansson"], correct: 0, explanation: "Jennifer Lawrence a incarné Katniss Everdeen dans les 4 films de la saga (2012-2015)." },
      { question: "Dans quel pays le manga Naruto a-t-il été créé ?", answers: ["Japon", "Corée du Sud", "Chine", "États-Unis"], correct: 0, explanation: "Naruto est un manga de Masashi Kishimoto publié au Japon de 1999 à 2014." },
      { question: "Quel film Pixar se déroule dans le Pays des Morts ?", answers: ["Coco", "Soul", "Là-Haut", "Vice-Versa"], correct: 0, explanation: "Coco (2017) est inspiré de la fête mexicaine du Día de los Muertos." }
    ],
    medium: [
      { question: "En quelle année le premier film Star Wars est-il sorti ?", answers: ["1977", "1975", "1979", "1981"], correct: 0, explanation: "Star Wars : Un Nouvel Espoir sortit le 25 mai 1977 et révolutionna le cinéma." },
      { question: "Qui a réalisé le film 'La Liste de Schindler' ?", answers: ["Steven Spielberg", "Martin Scorsese", "Francis Ford Coppola", "Stanley Kubrick"], correct: 0, explanation: "La Liste de Schindler (1993) remporta 7 Oscars, dont meilleur film et meilleur réalisateur." },
      { question: "Quel était le chanteur principal de Queen ?", answers: ["Freddie Mercury", "David Bowie", "Mick Jagger", "Robert Plant"], correct: 0, explanation: "Freddie Mercury (1946-1991) est considéré comme l'un des plus grands chanteurs de l'histoire du rock." },
      { question: "Qui a écrit la série Harry Potter ?", answers: ["J.K. Rowling", "J.R.R. Tolkien", "C.S. Lewis", "Suzanne Collins"], correct: 0, explanation: "J.K. Rowling a écrit les 7 tomes de Harry Potter entre 1997 et 2007." },
      { question: "En quelle année les Beatles se sont-ils séparés ?", answers: ["1970", "1968", "1972", "1975"], correct: 0, explanation: "Les Beatles se séparèrent officiellement en avril 1970, après la parution de l'album Let It Be." },
      { question: "Dans Breaking Bad, qu'enseigne Walter White avant de devenir chimiste criminel ?", answers: ["La chimie", "La biologie", "La physique", "Les mathématiques"], correct: 0, explanation: "Walter White était professeur de chimie au lycée à Albuquerque, Nouveau-Mexique." },
      { question: "Quel acteur joue le Joker dans le film 'Joker' (2019) ?", answers: ["Joaquin Phoenix", "Heath Ledger", "Jared Leto", "Jack Nicholson"], correct: 0, explanation: "Joaquin Phoenix remporta l'Oscar du meilleur acteur pour ce rôle." },
      { question: "Quel film a remporté l'Oscar du meilleur film en 1994 ?", answers: ["Forrest Gump", "Pulp Fiction", "The Shawshank Redemption", "Quiz Show"], correct: 0, explanation: "Forrest Gump remporta 6 Oscars dont meilleur film et meilleur réalisateur (Robert Zemeckis)." },
      { question: "Qui a écrit le roman '1984' ?", answers: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "H.G. Wells"], correct: 0, explanation: "George Orwell publia 1984 en juin 1949. Big Brother, surveillance de masse, novlangue..." },
      { question: "Quel groupe musical est composé de Beyoncé, Kelly Rowland et Michelle Williams ?", answers: ["Destiny's Child", "TLC", "En Vogue", "The Spice Girls"], correct: 0, explanation: "Destiny's Child est le groupe formé en 1990 à Houston, au Texas." }
    ],
    hard: [
      { question: "Qui a composé l'opéra 'La Flûte enchantée' ?", answers: ["Mozart", "Beethoven", "Brahms", "Schubert"], correct: 0, explanation: "Die Zauberflöte (La Flûte enchantée) est le dernier opéra de Mozart, composé en 1791." },
      { question: "Quel fut le premier long métrage d'animation jamais produit ?", answers: ["Blanche-Neige et les Sept Nains (1937)", "Cendrillon", "Fantasia", "Pinocchio"], correct: 0, explanation: "Blanche-Neige (1937) fut le premier long métrage d'animation de Walt Disney et de l'histoire du cinéma." },
      { question: "Qui a réalisé '2001 : L'Odyssée de l'espace' ?", answers: ["Stanley Kubrick", "Steven Spielberg", "Ridley Scott", "Christopher Nolan"], correct: 0, explanation: "2001 : L'Odyssée de l'espace (1968) est considéré comme le plus grand film de science-fiction jamais réalisé." },
      { question: "Qui a écrit 'À la recherche du temps perdu' ?", answers: ["Marcel Proust", "Gustave Flaubert", "Émile Zola", "Victor Hugo"], correct: 0, explanation: "Cette œuvre monumentale de Marcel Proust (1913-1927) comprend 7 volumes et 3 000 pages." },
      { question: "Quel était le vrai nom de David Bowie ?", answers: ["David Jones", "David Smith", "David Roberts", "David Brown"], correct: 0, explanation: "David Robert Jones (1947-2016) prit le pseudonyme Bowie pour éviter la confusion avec le chanteur Davy Jones des Monkees." },
      { question: "Combien de symphonies Beethoven a-t-il composées ?", answers: ["9", "5", "7", "11"], correct: 0, explanation: "Beethoven a composé 9 symphonies. La 9e (avec l'Ode à la joie) fut composée alors qu'il était sourd." },
      { question: "Quel film de Kubrick est basé sur le roman d'Anthony Burgess ?", answers: ["Orange Mécanique", "Full Metal Jacket", "Shining", "Eyes Wide Shut"], correct: 0, explanation: "Orange Mécanique (1971) est adapté du roman A Clockwork Orange (1962) d'Anthony Burgess." },
      { question: "Qui a écrit 'Gatsby le Magnifique' ?", answers: ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck", "William Faulkner"], correct: 0, explanation: "Gatsby le Magnifique fut publié en 1925 et est considéré comme le symbole du 'Rêve américain'." },
      { question: "Quel genre musical fut pionnier à La Nouvelle-Orléans au début du XXe siècle ?", answers: ["Le jazz", "Le blues", "La soul", "Le ragtime"], correct: 0, explanation: "La Nouvelle-Orléans est considérée comme le berceau du jazz, né au début des années 1900." },
      { question: "Quel auteur a créé le personnage de Sherlock Holmes ?", answers: ["Arthur Conan Doyle", "Agatha Christie", "Edgar Allan Poe", "G.K. Chesterton"], correct: 0, explanation: "Sherlock Holmes est apparu pour la première fois en 1887 dans 'Une étude en rouge' d'Arthur Conan Doyle." }
    ]
  },

  // ===================== TECHNOLOGIE =====================
  technology: {
    easy: [
      { question: "Que signifie 'CPU' ?", answers: ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Core Processing Unit"], correct: 0, explanation: "Le CPU (Unité Centrale de Traitement) est le 'cerveau' d'un ordinateur." },
      { question: "Quelle entreprise fabrique l'iPhone ?", answers: ["Apple", "Google", "Samsung", "Microsoft"], correct: 0, explanation: "Apple a lancé le premier iPhone en 2007 sous la direction de Steve Jobs." },
      { question: "Que signifie 'www' dans une adresse web ?", answers: ["World Wide Web", "World Web Wide", "Wide World Web", "Web World Wide"], correct: 0, explanation: "Le World Wide Web fut inventé par Tim Berners-Lee en 1989 au CERN." },
      { question: "Quel est le moteur de recherche le plus utilisé au monde ?", answers: ["Google", "Bing", "Yahoo", "DuckDuckGo"], correct: 0, explanation: "Google détient plus de 90% des parts du marché mondial des moteurs de recherche." },
      { question: "En quelle année le premier iPhone a-t-il été lancé ?", answers: ["2007", "2005", "2006", "2008"], correct: 0, explanation: "Steve Jobs a présenté le premier iPhone le 9 janvier 2007 lors de la MacWorld Conference." },
      { question: "Que signifie 'PDF' ?", answers: ["Portable Document Format", "Printed Document File", "Personal Data Format", "Portable Data File"], correct: 0, explanation: "Le format PDF a été créé par Adobe Systems en 1993." },
      { question: "Quel est le système d'exploitation mobile de Google ?", answers: ["Android", "iOS", "Windows Mobile", "Symbian"], correct: 0, explanation: "Android est un système open source basé sur Linux, acquis par Google en 2005." },
      { question: "Quelle combinaison de touches permet de copier du texte sur Windows ?", answers: ["Ctrl+C", "Ctrl+V", "Ctrl+X", "Ctrl+Z"], correct: 0, explanation: "Ctrl+C copie, Ctrl+V colle, Ctrl+X coupe, Ctrl+Z annule." },
      { question: "Que signifie 'RAM' ?", answers: ["Random Access Memory", "Read-Only Memory", "Rapid Application Memory", "Remote Access Memory"], correct: 0, explanation: "La RAM (mémoire vive) est une mémoire volatile qui stocke temporairement les données actives." },
      { question: "Quel réseau social utilise un oiseau comme logo ?", answers: ["Twitter / X", "Facebook", "Instagram", "Snapchat"], correct: 0, explanation: "Twitter, rebaptisé 'X' par Elon Musk en 2023, utilisait un oiseau bleu comme logo." }
    ],
    medium: [
      { question: "Quel langage de programmation a été créé par Guido van Rossum ?", answers: ["Python", "Java", "Ruby", "Perl"], correct: 0, explanation: "Python fut créé en 1991 par Guido van Rossum, inspiré du Python de Monty Python." },
      { question: "Que signifie 'HTML' ?", answers: ["HyperText Markup Language", "High Tech Machine Language", "Home Tool Markup Language", "HyperText Machine Learning"], correct: 0, explanation: "HTML est le langage de balisage standard pour créer des pages web." },
      { question: "Quelle est la représentation binaire du nombre décimal 10 ?", answers: ["1010", "1100", "1001", "1110"], correct: 0, explanation: "10 en décimal = 8+2 = 1×2³ + 0×2² + 1×2¹ + 0×2⁰ = 1010 en binaire." },
      { question: "Quel est le numéro de port standard pour HTTPS ?", answers: ["443", "80", "8080", "3000"], correct: 0, explanation: "HTTP utilise le port 80, HTTPS (sécurisé) utilise le port 443." },
      { question: "En quelle année Linux a-t-il été créé pour la première fois ?", answers: ["1991", "1985", "1995", "2000"], correct: 0, explanation: "Linus Torvalds a créé le noyau Linux en 1991 alors qu'il était étudiant en Finlande." },
      { question: "Que signifie 'API' ?", answers: ["Application Programming Interface", "Automated Processing Interface", "Advanced Protocol Integration", "Application Protocol Index"], correct: 0, explanation: "Une API est un ensemble de définitions permettant à des logiciels de communiquer entre eux." },
      { question: "Qui est considéré comme l'un des co-inventeurs d'Internet (protocole TCP/IP) ?", answers: ["Vint Cerf", "Tim Berners-Lee", "Steve Jobs", "Bill Gates"], correct: 0, explanation: "Vint Cerf et Robert Kahn ont co-inventé le protocole TCP/IP en 1974." },
      { question: "Qu'est-ce que la programmation orientée objet ?", answers: ["Un paradigme basé sur des objets contenant données et méthodes", "Un style de programmation fonctionnel", "Un langage de bas niveau", "Une technique de compression de données"], correct: 0, explanation: "La POO organise le code autour d'objets qui encapsulent données et comportements." },
      { question: "Quelle entreprise a développé le langage Java ?", answers: ["Sun Microsystems (Oracle)", "Microsoft", "IBM", "AT&T"], correct: 0, explanation: "Java fut créé par James Gosling chez Sun Microsystems en 1995 (racheté par Oracle en 2010)." },
      { question: "Que fait un pare-feu (firewall) ?", answers: ["Surveille et contrôle le trafic réseau", "Accélère la connexion internet", "Compresse les fichiers", "Chiffre les disques durs"], correct: 0, explanation: "Un pare-feu filtre les paquets réseau entrants et sortants selon des règles de sécurité." }
    ],
    hard: [
      { question: "Quelle est la complexité temporelle d'une recherche binaire ?", answers: ["O(log n)", "O(n)", "O(n²)", "O(n log n)"], correct: 0, explanation: "La recherche binaire divise l'espace de recherche par 2 à chaque étape : O(log n)." },
      { question: "Que signifie la lettre 'L' dans l'acronyme SOLID ?", answers: ["Liskov Substitution Principle", "Low Coupling", "Logical Design", "Linear Structure"], correct: 0, explanation: "Le principe de substitution de Liskov stipule que les sous-classes doivent être substituables à leurs classes parentes." },
      { question: "Qu'est-ce qu'une 'race condition' ?", answers: ["Deux processus accèdent simultanément à une ressource partagée", "Un programme s'exécute plus vite que prévu", "Le CPU surchauffe", "La mémoire est corrompue"], correct: 0, explanation: "Les race conditions provoquent des comportements imprévisibles et sont source de bugs difficiles à détecter." },
      { question: "Que signifie le théorème CAP en systèmes distribués ?", answers: ["Consistency, Availability, Partition tolerance", "Cache, API, Protocol", "Concurrency, Asynchrony, Performance", "Clustering, Automation, Processing"], correct: 0, explanation: "Le théorème CAP (Brewer) stipule qu'un système distribué ne peut garantir que 2 de ces 3 propriétés simultanément." },
      { question: "Qu'est-ce qu'une machine de Turing ?", answers: ["Un modèle théorique de calcul universel", "Un ordinateur quantique", "Un type de robot", "Un système d'IA"], correct: 0, explanation: "Proposée par Alan Turing en 1936, cette abstraction définit les limites fondamentales du calcul." },
      { question: "Quelle est la complexité temporelle du quicksort en cas moyen ?", answers: ["O(n log n)", "O(n)", "O(n²)", "O(log n)"], correct: 0, explanation: "En moyenne, quicksort est O(n log n). Dans le pire cas (pivot mal choisi), il peut être O(n²)." },
      { question: "À quoi sert un arbre de Merkle (Merkle tree) en blockchain ?", answers: ["Vérifier l'intégrité des données efficacement", "Miner des cryptomonnaies", "Exécuter des smart contracts", "Générer des portefeuilles"], correct: 0, explanation: "Les arbres de Merkle permettent de vérifier si une transaction fait partie d'un bloc sans télécharger tout le bloc." },
      { question: "Qu'est-ce que le chiffrement asymétrique ?", answers: ["Utilise une paire de clés publique/privée", "Utilise la même clé pour chiffrer et déchiffrer", "Ne chiffre que les métadonnées", "Est basé sur des tables de hachage"], correct: 0, explanation: "RSA est l'algorithme asymétrique le plus connu. La clé publique chiffre, la clé privée déchiffre." },
      { question: "Que signifie 'SQL' ?", answers: ["Structured Query Language", "Sequential Query Logic", "System Query Language", "Standard Query Layout"], correct: 0, explanation: "SQL est le langage standard pour gérer et interroger les bases de données relationnelles." },
      { question: "Qu'est-ce que l'injection SQL ?", answers: ["Une attaque qui insère du code SQL malveillant dans une requête", "Une méthode d'optimisation de base de données", "Un type de migration de données", "Un protocole de sauvegarde"], correct: 0, explanation: "L'injection SQL est une des vulnérabilités les plus courantes (OWASP Top 10). Utilisez des requêtes préparées !" }
    ]
  },

  // ===================== MATHÉMATIQUES =====================
  math: {
    easy: [
      { question: "Combien font 7 × 8 ?", answers: ["56", "54", "58", "60"], correct: 0, explanation: "7 × 8 = 56. Astuce : 7 × 8 = 7 × 4 × 2 = 28 × 2 = 56." },
      { question: "Quelle est la racine carrée de 144 ?", answers: ["12", "11", "13", "14"], correct: 0, explanation: "√144 = 12 car 12² = 144." },
      { question: "Combien font 25% de 200 ?", answers: ["50", "40", "60", "25"], correct: 0, explanation: "25% = 1/4, donc 200 ÷ 4 = 50." },
      { question: "Quelle est la valeur approximative de π (pi) ?", answers: ["3,14", "3,41", "3,12", "3,18"], correct: 0, explanation: "π ≈ 3,14159265... C'est un nombre irrationnel et transcendant." },
      { question: "Combien de côtés a un hexagone ?", answers: ["6", "4", "5", "7"], correct: 0, explanation: "Hexagone vient du grec 'hexa' (6) + 'gon' (angle). Un nid d'abeilles est composé d'hexagones." },
      { question: "Combien font 15² (15 au carré) ?", answers: ["225", "125", "175", "275"], correct: 0, explanation: "15² = 15 × 15 = 225." },
      { question: "Quelle est la somme des angles d'un triangle ?", answers: ["180°", "90°", "270°", "360°"], correct: 0, explanation: "La somme des angles d'un triangle est toujours 180°, quelle que soit sa forme." },
      { question: "Combien font 2¹⁰ (2 puissance 10) ?", answers: ["1 024", "512", "2 048", "256"], correct: 0, explanation: "2¹⁰ = 1 024, d'où le 'kilo' informatique ≈ 1 000." },
      { question: "Quel triangle a tous ses côtés égaux ?", answers: ["Équilatéral", "Scalène", "Isocèle", "Rectangle"], correct: 0, explanation: "Un triangle équilatéral a 3 côtés égaux et 3 angles de 60°." },
      { question: "Combien font 1 000 ÷ 8 ?", answers: ["125", "115", "120", "130"], correct: 0, explanation: "1 000 ÷ 8 = 125. Vérification : 125 × 8 = 1 000." }
    ],
    medium: [
      { question: "Quelle est la dérivée de sin(x) ?", answers: ["cos(x)", "-cos(x)", "tan(x)", "-sin(x)"], correct: 0, explanation: "La dérivée de sin(x) est cos(x). La dérivée de cos(x) est -sin(x)." },
      { question: "Quelle est la valeur de log₁₀(1000) ?", answers: ["3", "2", "4", "10"], correct: 0, explanation: "log₁₀(1000) = log₁₀(10³) = 3." },
      { question: "Dans un triangle rectangle avec les côtés 3 et 4, quelle est l'hypoténuse ?", answers: ["5", "4", "6", "7"], correct: 0, explanation: "Théorème de Pythagore : c² = 3² + 4² = 9 + 16 = 25, donc c = 5. (Triplet pythagoricien classique !)" },
      { question: "Quelle est la formule de l'aire d'un cercle ?", answers: ["πr²", "πr", "2πr", "πd"], correct: 0, explanation: "L'aire d'un cercle est A = πr², où r est le rayon." },
      { question: "Quelles sont les solutions de x² - 5x + 6 = 0 ?", answers: ["x = 2 et x = 3", "x = 1 et x = 6", "x = -2 et x = -3", "x = -1 et x = 6"], correct: 0, explanation: "Δ = 25-24 = 1, x = (5±1)/2, donc x = 3 ou x = 2. Vérification : (x-2)(x-3) = 0." },
      { question: "Quel est le PGCD de 48 et 36 ?", answers: ["12", "8", "10", "16"], correct: 0, explanation: "48 = 12×4 et 36 = 12×3, donc PGCD(48,36) = 12. (Algorithme d'Euclide : 48=36×1+12, 36=12×3+0)" },
      { question: "Quelle est la primitive (intégrale) de x² ?", answers: ["x³/3 + C", "x³ + C", "2x + C", "x²/2 + C"], correct: 0, explanation: "∫x² dx = x³/3 + C. La règle : ∫xⁿ dx = xⁿ⁺¹/(n+1) + C." },
      { question: "Quelle est la suite de Fibonacci ?", answers: ["1, 1, 2, 3, 5, 8, 13...", "1, 2, 4, 8, 16...", "1, 3, 5, 7, 9...", "2, 4, 6, 8, 10..."], correct: 0, explanation: "Chaque terme de la suite de Fibonacci est la somme des deux précédents : Fₙ = Fₙ₋₁ + Fₙ₋₂." },
      { question: "Quelle est la probabilité de faire 6 deux fois de suite avec un dé ?", answers: ["1/36", "1/6", "1/12", "1/18"], correct: 0, explanation: "P(6 deux fois) = (1/6) × (1/6) = 1/36 ≈ 2,78%." },
      { question: "Quelle est la formule des intérêts composés ?", answers: ["A = P(1 + r/n)^(nt)", "A = P + Prt", "A = P × r × t", "A = P × e^(rt)"], correct: 0, explanation: "A = montant final, P = principal, r = taux annuel, n = capitalisations/an, t = années." }
    ],
    hard: [
      { question: "Qu'est-ce que l'identité d'Euler ?", answers: ["e^(iπ) + 1 = 0", "e^(iπ) - 1 = 0", "e^(iπ) = 1", "e^π = i"], correct: 0, explanation: "Considérée comme la plus belle formule des mathématiques, elle relie e, i, π, 1 et 0." },
      { question: "À quoi s'intéresse l'Hypothèse de Riemann ?", answers: ["La distribution des nombres premiers", "La somme des séries infinies", "La nature des nombres imaginaires", "Les équations différentielles"], correct: 0, explanation: "L'hypothèse de Riemann (1859) est l'un des 7 problèmes du millénaire : 1 million $ de récompense !" },
      { question: "Quelle est la valeur de 0! (zéro factorielle) ?", answers: ["1", "0", "Indéfini", "∞"], correct: 0, explanation: "Par convention, 0! = 1. Cela découle de la relation n! = n × (n-1)! appliquée à n=1." },
      { question: "Quelle est la somme des angles intérieurs d'un polygone à n côtés ?", answers: ["(n-2) × 180°", "n × 180°", "(n+2) × 180°", "n × 90°"], correct: 0, explanation: "Un triangle (n=3) : (3-2)×180° = 180°. Un carré (n=4) : (4-2)×180° = 360°." },
      { question: "À quoi sert la règle de L'Hôpital ?", answers: ["Calculer des limites de formes indéterminées", "Résoudre des équations différentielles", "Calculer des intégrales", "Trouver des nombres premiers"], correct: 0, explanation: "La règle de L'Hôpital : lim f/g = lim f'/g' quand f et g tendent toutes deux vers 0 ou ±∞." },
      { question: "Qu'est-ce qu'un nombre transcendant ?", answers: ["Un nombre qui n'est racine d'aucun polynôme à coefficients rationnels", "Un nombre qui ne peut pas s'exprimer comme fraction", "Un nombre complexe", "Un grand nombre irrationnel"], correct: 0, explanation: "π et e sont transcendants. Tous les nombres transcendants sont irrationnels, mais pas l'inverse." },
      { question: "Combien y a-t-il de nombres premiers entre 1 et 100 ?", answers: ["25", "23", "28", "30"], correct: 0, explanation: "Les 25 premiers nombres premiers : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97." },
      { question: "Que stipule le dernier théorème de Fermat ?", answers: ["aⁿ + bⁿ = cⁿ n'a pas de solution entière pour n > 2", "Tout nombre pair > 2 est la somme de deux premiers", "Il y a une infinité de nombres premiers jumeaux", "Tout entier est produit de premiers"], correct: 0, explanation: "Énoncé par Fermat en 1637, ce théorème fut démontré par Andrew Wiles en 1995, après 358 ans !" },
      { question: "Quelle est la transformée de Laplace de e^(at) ?", answers: ["1/(s-a) pour s > a", "1/(s+a)", "a/(s²+a²)", "s/(s²+a²)"], correct: 0, explanation: "L{e^(at)} = 1/(s-a), valable pour s > a. Essentielle pour résoudre des équations différentielles." },
      { question: "Qu'est-ce que le nombre d'or (φ) ?", answers: ["(1 + √5) / 2 ≈ 1,618", "(1 + √3) / 2 ≈ 1,366", "(2 + √5) / 2 ≈ 2,118", "√2 ≈ 1,414"], correct: 0, explanation: "φ = (1+√5)/2 ≈ 1,618. Il apparaît dans la nature, l'art et l'architecture depuis l'Antiquité." }
    ]
  }
};

// Catégories disponibles avec leurs métadonnées
const CATEGORIES = {
  science:       { label: "Science",        icon: "🔬", color: "#00d9a0" },
  history:       { label: "Histoire",       icon: "📜", color: "#ff9f43" },
  geography:     { label: "Géographie",     icon: "🌍", color: "#54a0ff" },
  sports:        { label: "Sports",         icon: "⚽", color: "#ff6b81" },
  entertainment: { label: "Divertissement", icon: "🎬", color: "#a29bfe" },
  technology:    { label: "Technologie",    icon: "💻", color: "#fd79a8" },
  math:          { label: "Mathématiques",  icon: "🔢", color: "#ffeaa7" }
};

const DIFFICULTY_CONFIG = {
  easy:   { label: "Facile",  time: 30, baseScore: 100, color: "#00d9a0" },
  medium: { label: "Moyen",   time: 25, baseScore: 200, color: "#ff9f43" },
  hard:   { label: "Difficile", time: 20, baseScore: 300, color: "#ff416c" }
};
