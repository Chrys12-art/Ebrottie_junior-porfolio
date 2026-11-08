// Tout le contenu textuel du site, en français et en anglais.
// Chaque clé existe dans les deux langues.

export const translations = {
  fr: {
    meta: {
      title: 'Ebrottie Chrys Junior — Étudiant MIAGE · Data & Développement',
      description:
        "Portfolio de Ebrottie Chrys Junior, étudiant en Licence 3 MIAGE à Abidjan : développement web et mobile, bases de données, analyse de données et systèmes d'information.",
    },
    nav: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      experience: 'Expérience',
      education: 'Formation',
      goals: 'Objectifs',
      contact: 'Contact',
      menuOpen: 'Ouvrir le menu',
      menuClose: 'Fermer le menu',
      langLabel: 'Changer de langue',
      skip: 'Aller au contenu',
      main: 'Navigation principale',
    },
    hero: {
      role: 'Étudiant MIAGE · Data & Développement',
      tagline:
        "Je conçois des solutions numériques et j'explore la donnée pour transformer les idées en projets utiles.",
      intro:
        "Étudiant en Licence 3 MIAGE à Abidjan, j'apprends en construisant : applications web, bases de données et analyse de données, avec une approche à la fois technique et orientée métier.",
      ctaProjects: 'Découvrir mes projets',
      ctaContact: 'Me contacter',
      cv: 'Télécharger mon CV',
      github: 'GitHub',
      location: "Abidjan, Côte d'Ivoire",
      availability: 'Ouvert aux échanges et collaborations',
      portraitAlt: 'Portrait de Ebrottie Chrys Junior',
      scroll: 'Défiler',
      badgeLabel: 'Licence 3 MIAGE',
    },
    about: {
      eyebrow: 'À propos',
      title: 'Entre logique, données et créativité.',
      paragraphs: [
        "Je suis étudiant en Licence 3 MIAGE à l'Université Polytechnique de Bingerville (UPB), en Côte d'Ivoire.",
        "Passionné par les technologies informatiques, je m'intéresse particulièrement à la conception de solutions numériques, au développement d'applications et à l'analyse de données.",
        "Mon parcours en MIAGE me permet de développer une compréhension à la fois technique et fonctionnelle des systèmes d'information.",
        "J'aime apprendre par la pratique, résoudre des problèmes et transformer des idées en solutions concrètes.",
        "Mon ambition est de développer une expertise à la croisée de la technologie et de la donnée, afin de contribuer à des projets innovants et à fort impact.",
      ],
      facts: [
        { label: 'Formation', value: 'Licence 3 MIAGE — Université Polytechnique de Bingerville' },
        { label: 'Localisation', value: "Abidjan, Côte d'Ivoire" },
        { label: 'Profil', value: 'Polyvalent : Data + Développement' },
        { label: 'Langues', value: 'Français · Anglais' },
      ],
      interestsTitle: "Centres d'intérêt professionnels",
      interests: [
        'Analyse et exploitation des données',
        'Conception de solutions informatiques',
        "Applications web et mobiles",
        'Bases de données et administration',
        "Systèmes d'information",
        'Transformation numérique',
      ],
      ambitionsTitle: 'Ambitions',
      ambitionsText:
        "Acquérir de l'expérience dans le secteur technologique, me spécialiser dans la Data et poursuivre mes études à l'international.",
      qualitiesTitle: 'Atouts',
      qualities: ["Sens de l'organisation", 'Gestion du temps', 'Capacité à apprendre rapidement'],
      personalTitle: 'Hors écran',
      personal: ['Sport', 'Dessin', 'Lecture'],
    },
    skills: {
      eyebrow: 'Compétences',
      title: 'Une base technique, construite par la pratique.',
      subtitle:
        'Des compétences réparties par domaine, présentées sans pourcentages : ce que je pratique, et ce que je suis encore en train d\'apprendre.',
      categories: {
        dev: { title: 'Développement', desc: 'Langages et frameworks pour le web, le mobile et les applications.' },
        data: { title: 'Data & bases de données', desc: 'Interroger, concevoir, administrer et analyser des données.' },
        methods: { title: 'Méthodes & conception', desc: "Modéliser un besoin et concevoir un système d'information." },
        tools: { title: 'Outils & environnement', desc: 'Les outils du quotidien pour développer et collaborer.' },
      },
      names: {
        dbAdmin: 'Administration de bases de données',
        dbDesign: 'Conception de bases de données',
        dataAnalysis: 'Analyse de données',
        needsAnalysis: 'Analyse des besoins',
        isDesign: "Conception de systèmes d'information",
        linuxWindows: 'Environnements Linux et Windows',
        dsNotions: 'Data Science et algorithmique',
        paymentApi: "Intégration d'API de paiement",
      },
      levels: { learning: "en cours d'apprentissage", notions: 'notions pratiques', basics: 'notions' },
      inProgress: {
        title: "En cours d'apprentissage",
        desc: 'Ce que je développe activement en ce moment.',
        items: ['Java', 'Spring Boot', 'Administration système'],
      },
    },
    projects: {
      eyebrow: 'Projets',
      title: 'Des idées transformées en réalisations.',
      subtitle:
        'Projets personnels et travaux académiques. Chaque carte précise le problème visé, les fonctionnalités développées et les technologies utilisées.',
      problem: 'Problème adressé',
      features: 'Fonctionnalités',
      stack: 'Technologies',
      github: 'Code source',
      demo: 'Voir la démo',
      noPublicLink: 'Pas de dépôt public pour le moment',
      statusWip: 'En cours',
      open: 'Ouvrir',
      moreTitle: 'Et la suite…',
      moreText: "D'autres projets viendront enrichir cette section au fil de mon apprentissage.",
      items: {
        alertc: {
          type: 'Application web progressive',
          name: 'AlertC',
          description:
            "Application de suivi du crédit d'électricité prépayé. Elle permet de suivre son crédit, de renseigner ses consommations et d'anticiper le moment de la prochaine recharge.",
          problem:
            "Avec un compteur prépayé, on découvre souvent que le crédit est épuisé au dernier moment. AlertC aide à anticiper ce moment.",
          features: [
            'Enregistrement du montant du crédit',
            'Suivi de la consommation',
            'Tableau de bord',
            'Alertes anticipées',
            'Interface responsive',
            'Mode sombre',
          ],
        },
        undonci: {
          type: 'Plateforme web — initiative à vocation sociale',
          name: 'UN DON CI',
          description:
            "Plateforme web de sensibilisation et de collecte de dons en Côte d'Ivoire, pour soutenir différentes causes sociales. Elle repose sur un front React et un backend Node.js, avec une intégration du paiement GeniusPay testée en environnement sandbox.",
          problem:
            "Faciliter la mise en relation entre des personnes qui souhaitent aider et des causes qui ont besoin de soutien, avec un paiement en ligne.",
          features: [
            'Causes : sinistrés, orphelins, personnes malades',
            'Backend Node.js, Express, Prisma et PostgreSQL',
            'Intégration du paiement GeniusPay (mode checkout)',
            'Vérification des webhooks par signature HMAC-SHA256',
            'Tests de bout en bout en mode sandbox',
          ],
          note: "Paiements testés en sandbox uniquement : la plateforme n'est pas encore en production.",
        },
        upbconnect: {
          type: 'Application mobile Flutter',
          name: 'UPB Connect',
          description:
            "Application mobile Flutter qui centralise les fichiers et dossiers de l'université : partage et téléchargement de fichiers, d'informations et d'actualités.",
          problem: "Faciliter l'accès aux fichiers et aux informations de l'université, et leur partage.",
          features: [
            "Centralisation des fichiers et dossiers de l'université",
            'Partage et téléchargement de fichiers',
            'Informations et actualités',
            'Backend Supabase',
            "Gestion d'état avec Riverpod",
            'Navigation avec go_router',
          ],
        },
        carcontroller: {
          type: 'Projet de compétition — Génie UPB',
          name: 'Car Controller',
          description:
            "Application mobile Flutter pour piloter à distance une voiture télécommandée à base d'Arduino, via un module Bluetooth HC-05. Réalisée dans le cadre de la compétition Génie UPB.",
          problem: 'Commander une voiture télécommandée sans fil depuis un smartphone.',
          features: [
            'Application mobile Flutter',
            'Connexion Bluetooth avec un module HC-05',
            "Pilotage à distance d'une voiture Arduino",
          ],
        },
        nounouconnect: {
          type: 'Application web progressive',
          name: 'NounouConnect',
          description:
            "PWA qui met en relation des familles et des agences de garde d'enfants. J'y ai tenu le rôle de développeur backend : conception du schéma de base de données et configuration de Supabase.",
          problem: "Aider les familles à trouver une nounou via des agences de garde d'enfants.",
          features: [
            'Schéma Supabase/PostgreSQL conçu de zéro (6 tables)',
            'Migrations SQL, politiques RLS, buckets de stockage et fonctions SQL',
            'Projet soutenu devant un jury',
          ],
        },
        moncabinet: {
          type: "Projet d'équipe — cours AGL",
          name: 'MonCabinet',
          description:
            "Application de gestion de cabinet et de clinique de proximité, pensée pour remplacer le cahier de rendez-vous et les dossiers papier. Projet d'équipe du cours d'Atelier de Génie Logiciel (AGL), en cours de réalisation.",
          problem: 'Digitaliser la prise de rendez-vous, le dossier patient et la facturation des petits cabinets.',
          featuresTitle: 'Fonctionnalités visées',
          features: [
            'Prise de rendez-vous en ligne avec rappel par SMS',
            'Agenda des praticiens géré par le secrétariat',
            'Dossier patient et ordonnances numériques',
            "Facturation, suivi des paiements et tableau de bord d'activité",
          ],
          note: 'Projet en cours : les fonctionnalités et technologies affichées sont celles prévues.',
        },
        kmeans: {
          type: "Projet d'analyse de données",
          name: 'Segmentation client par K-Means',
          description:
            "Segmentation d'une clientèle par clustering K-Means : préparation d'un jeu de données client sous Python, puis analyse des données.",
          problem: 'Regrouper des clients aux profils proches pour mieux comprendre une clientèle.',
          features: [
            'Nettoyage et préparation du dataset client sous Python',
            'Analyse de données',
            'Segmentation par clustering K-Means',
          ],
        },
        oracle: {
          type: 'Travaux pratiques académiques',
          name: 'Administration de bases de données Oracle',
          description:
            "Expérience pratique en administration de bases de données Oracle, réalisée dans un environnement Docker dans le cadre de ma formation.",
          problem:
            "Comprendre comment une base Oracle est organisée et administrée : stockage, journalisation, sécurité.",
          features: [
            "Découverte de l'architecture Oracle",
            'Tablespaces permanents et temporaires',
            'Tablespaces UNDO',
            'Tablespaces SYSTEM et SYSAUX',
            'Analyse des fichiers Redo Log',
            'Rôles et privilèges',
            "Vues d'administration Oracle",
          ],
        },
      },
    },
    experience: {
      eyebrow: 'Expérience',
      title: 'Des immersions en entreprise.',
      items: [
        {
          id: 'genius',
          role: 'Stagiaire',
          company: 'Genius Groups',
          type: 'Stage',
          description:
            "Stage au sein de la startup Genius Groups, qui développe l'agrégateur de paiement GeniusPay. Cette expérience m'a beaucoup appris, notamment sur l'importance de GitHub et sur le fonctionnement d'un agrégateur de paiement, que nous avons essayé d'intégrer dans un projet.",
          toolsTitle: "Ce que j'y ai appris",
          tools: [
            { name: 'GitHub', desc: "L'importance de GitHub dans un projet de développement." },
            { name: 'GeniusPay', desc: "Fonctionnement d'un agrégateur de paiement, intégré dans le projet UN DON CI (testé en sandbox)." },
          ],
        },
        {
          id: 'connect',
          role: 'Stagiaire service client',
          company: 'Connect RCI',
          type: 'Stage',
          description:
            "J'ai effectué un stage dans le domaine du service client chez Connect RCI. Cette expérience a été une première immersion dans un environnement professionnel : j'y ai découvert l'utilisation d'outils de gestion de la relation client et d'amélioration de la qualité des communications.",
          toolsTitle: 'Outils découverts',
          tools: [
            { name: 'Hermes CRM', desc: "Outil de gestion des appels et de la relation client." },
            { name: 'Krisp AI Noise Cancellation', desc: "Solution d'annulation intelligente des bruits de fond." },
          ],
        },
      ],
    },
    education: {
      eyebrow: 'Formation',
      title: 'Un cursus entre informatique et gestion.',
      school: 'Université Polytechnique de Bingerville (UPB)',
      degree: 'Licence 3 MIAGE',
      full: "Méthodes Informatiques Appliquées à la Gestion des Entreprises",
      status: 'En cours',
      location: "Côte d'Ivoire",
      pathTitle: 'Parcours',
      path: [
        { period: '2024', title: 'Baccalauréat série C', place: 'Lycée Moderne de Marcory' },
        { period: '2024 – 2025', title: 'Licence 1 — Informatique MIAGE', place: 'Université Polytechnique de Bingerville' },
        { period: '2025 – 2026', title: 'Licence 2 — Informatique MIAGE', place: 'Université Polytechnique de Bingerville' },
        { period: 'En cours', title: 'Licence 3 — MIAGE', place: 'Université Polytechnique de Bingerville' },
      ],
      description:
        'La MIAGE combine informatique et gestion pour former des profils capables de faire le lien entre les besoins des organisations et les solutions techniques.',
      pillars: [
        'Informatique',
        'Développement',
        'Bases de données',
        "Systèmes d'information",
        'Gestion',
        'Analyse et conception',
      ],
    },
    goals: {
      eyebrow: 'Objectifs',
      title: 'Une direction claire, une progression pas à pas.',
      intro:
        "Mon objectif est de poursuivre mes études et de construire une carrière dans la technologie et la donnée, avec une ouverture vers les organisations internationales.",
      items: [
        { title: 'Data Analytics', desc: "Exploiter les données pour éclairer la décision." },
        { title: 'Data Science', desc: 'Évoluer progressivement vers des fonctions plus avancées.' },
        { title: 'Développement logiciel', desc: 'Concevoir et construire des applications utiles.' },
        { title: "Systèmes d'information", desc: 'Relier besoins métiers et solutions techniques.' },
        { title: 'Transformation numérique', desc: 'Accompagner la modernisation des organisations.' },
        { title: 'Technologies pour le développement', desc: 'Mettre la technologie au service de causes concrètes.' },
      ],
      closing: "Prochaine étape : poursuivre en Master, à l'international.",
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Un projet, une opportunité ? Parlons-en.',
      subtitle: "Un message suffit pour démarrer la conversation.",
      emailLabel: 'E-mail',
      emailPending: 'Adresse e-mail professionnelle à compléter',
      phoneLabel: 'Téléphone',
      cvLabel: 'CV',
      cvLink: 'Télécharger mon CV (PDF)',
      linkedinLabel: 'LinkedIn',
      locationLabel: 'Localisation',
      githubLabel: 'GitHub',
      formTitle: 'Formulaire de contact',
      formLoading: 'Chargement du formulaire…',
      formFallback: "Le formulaire ne s'affiche pas ? ",
      formOpen: 'Ouvrez-le dans un nouvel onglet',
    },
    footer: {
      rights: 'Tous droits réservés.',
      built: 'Conçu et développé avec React & Motion.',
      top: 'Retour en haut',
    },
  },

  en: {
    meta: {
      title: 'Ebrottie Chrys Junior — MIAGE Student · Data & Development',
      description:
        'Portfolio of Ebrottie Chrys Junior, a third-year MIAGE student in Abidjan: web and mobile development, databases, data analysis and information systems.',
    },
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
      goals: 'Goals',
      contact: 'Contact',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      langLabel: 'Switch language',
      skip: 'Skip to content',
      main: 'Main navigation',
    },
    hero: {
      role: 'MIAGE Student · Data & Development',
      tagline: 'I build digital solutions and explore data to turn ideas into useful projects.',
      intro:
        'A third-year MIAGE student in Abidjan, I learn by building: web applications, databases and data analysis, with an approach that is both technical and business-minded.',
      ctaProjects: 'Explore my projects',
      ctaContact: 'Get in touch',
      cv: 'Download my CV',
      github: 'GitHub',
      location: 'Abidjan, Côte d’Ivoire',
      availability: 'Open to conversations and collaboration',
      portraitAlt: 'Portrait of Ebrottie Chrys Junior',
      scroll: 'Scroll',
      badgeLabel: 'Third-year MIAGE',
    },
    about: {
      eyebrow: 'About',
      title: 'Between logic, data and creativity.',
      paragraphs: [
        'I am a third-year MIAGE student at the Polytechnic University of Bingerville (UPB), in Côte d’Ivoire.',
        'Passionate about computing technologies, I am especially interested in designing digital solutions, developing applications and analysing data.',
        'My MIAGE programme helps me build both a technical and a functional understanding of information systems.',
        'I like learning by doing, solving problems and turning ideas into concrete solutions.',
        'My ambition is to build expertise at the crossroads of technology and data, so I can contribute to innovative, high-impact projects.',
      ],
      facts: [
        { label: 'Education', value: 'Third-year MIAGE — Polytechnic University of Bingerville' },
        { label: 'Location', value: 'Abidjan, Côte d’Ivoire' },
        { label: 'Profile', value: 'Versatile: Data + Development' },
        { label: 'Languages', value: 'French · English' },
      ],
      interestsTitle: 'Professional interests',
      interests: [
        'Data analysis and exploitation',
        'Designing IT solutions',
        'Web and mobile applications',
        'Databases and administration',
        'Information systems',
        'Digital transformation',
      ],
      ambitionsTitle: 'Ambitions',
      ambitionsText:
        'Gain experience in the tech sector, specialise in Data and continue my studies abroad.',
      qualitiesTitle: 'Strengths',
      qualities: ['Organisation skills', 'Time management', 'Quick learner'],
      personalTitle: 'Beyond the screen',
      personal: ['Sports', 'Drawing', 'Reading'],
    },
    skills: {
      eyebrow: 'Skills',
      title: 'A technical foundation, built through practice.',
      subtitle:
        'Skills grouped by domain and shown without percentages: what I practise, and what I am still learning.',
      categories: {
        dev: { title: 'Development', desc: 'Languages and frameworks for web, mobile and applications.' },
        data: { title: 'Data & databases', desc: 'Querying, designing, administering and analysing data.' },
        methods: { title: 'Methods & design', desc: 'Modelling a need and designing an information system.' },
        tools: { title: 'Tools & environment', desc: 'Everyday tools for building and collaborating.' },
      },
      names: {
        dbAdmin: 'Database administration',
        dbDesign: 'Database design',
        dataAnalysis: 'Data analysis',
        needsAnalysis: 'Requirements analysis',
        isDesign: 'Information systems design',
        linuxWindows: 'Linux and Windows environments',
        dsNotions: 'Data Science and algorithmics',
        paymentApi: 'Payment API integration',
      },
      levels: { learning: 'currently learning', notions: 'hands-on basics', basics: 'foundations' },
      inProgress: {
        title: 'Currently learning',
        desc: 'What I am actively developing right now.',
        items: ['Java', 'Spring Boot', 'System administration'],
      },
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Ideas turned into real work.',
      subtitle:
        'Personal projects and academic work. Each card states the problem addressed, the features built and the technologies used.',
      problem: 'Problem addressed',
      features: 'Features',
      stack: 'Technologies',
      github: 'Source code',
      demo: 'View live demo',
      noPublicLink: 'No public repository yet',
      statusWip: 'In progress',
      open: 'Open',
      moreTitle: 'More to come…',
      moreText: 'More projects will join this section as my learning progresses.',
      items: {
        alertc: {
          type: 'Progressive web app',
          name: 'AlertC',
          description:
            'An app to track prepaid electricity credit. It lets users follow their credit, record their consumption and anticipate when the next top-up is needed.',
          problem:
            'With a prepaid meter, people often find out at the last minute that their credit has run out. AlertC helps anticipate that moment.',
          features: [
            'Credit amount recording',
            'Consumption tracking',
            'Dashboard',
            'Early alerts',
            'Responsive interface',
            'Dark mode',
          ],
        },
        undonci: {
          type: 'Web platform — socially driven initiative',
          name: 'UN DON CI',
          description:
            'A web platform for awareness and fundraising in Côte d’Ivoire, designed to support a range of social causes. It combines a React front end with a Node.js backend, and a GeniusPay payment integration tested in a sandbox environment.',
          problem:
            'Make it easier to connect people who want to help with causes that need support, with online payment.',
          features: [
            'Causes: disaster victims, orphans, people who are ill',
            'Node.js, Express, Prisma and PostgreSQL backend',
            'GeniusPay payment integration (checkout mode)',
            'Webhook verification with HMAC-SHA256 signatures',
            'End-to-end testing in sandbox mode',
          ],
          note: 'Payments tested in sandbox only: the platform is not in production yet.',
        },
        upbconnect: {
          type: 'Flutter mobile app',
          name: 'UPB Connect',
          description:
            'A Flutter mobile app that brings together the university’s files and folders: sharing and downloading files, information and news.',
          problem: 'Make the university’s files and information easier to access and share.',
          features: [
            'Centralised files and folders of the university',
            'File sharing and downloading',
            'Information and news',
            'Supabase backend',
            'State management with Riverpod',
            'Navigation with go_router',
          ],
        },
        carcontroller: {
          type: 'Competition project — Génie UPB',
          name: 'Car Controller',
          description:
            'A Flutter mobile app to remotely drive an Arduino-based remote-controlled car over a Bluetooth HC-05 module. Built for the Génie UPB competition.',
          problem: 'Drive a remote-controlled car wirelessly from a smartphone.',
          features: [
            'Flutter mobile app',
            'Bluetooth connection with an HC-05 module',
            'Remote control of an Arduino-based car',
          ],
        },
        nounouconnect: {
          type: 'Progressive web app',
          name: 'NounouConnect',
          description:
            'A PWA that connects families with childcare agencies. I was the backend developer: I designed the database schema and configured Supabase.',
          problem: 'Help families find a nanny through childcare agencies.',
          features: [
            'Supabase/PostgreSQL schema designed from scratch (6 tables)',
            'SQL migrations, RLS policies, storage buckets and SQL functions',
            'Project defended in front of a jury',
          ],
        },
        moncabinet: {
          type: 'Team project — AGL course',
          name: 'MonCabinet',
          description:
            'A management app for neighbourhood medical practices and clinics, meant to replace paper appointment books and patient files. A team project for the Software Engineering Workshop (AGL) course, currently in progress.',
          problem: 'Digitise appointment booking, patient records and billing for small practices.',
          featuresTitle: 'Planned features',
          features: [
            'Online appointment booking with SMS reminders',
            'Practitioners’ schedule managed by the front desk',
            'Digital patient records and prescriptions',
            'Billing, payment tracking and an activity dashboard',
          ],
          note: 'Work in progress: features and technologies shown are the planned ones.',
        },
        kmeans: {
          type: 'Data analysis project',
          name: 'Customer segmentation with K-Means',
          description:
            'Customer segmentation using K-Means clustering: preparing a customer dataset in Python, then analysing the data.',
          problem: 'Group customers with similar profiles to better understand a customer base.',
          features: [
            'Cleaning and preparing the customer dataset in Python',
            'Data analysis',
            'Segmentation with K-Means clustering',
          ],
        },
        oracle: {
          type: 'Academic lab work',
          name: 'Oracle Database Administration',
          description:
            'Hands-on experience in Oracle database administration, carried out in a Docker environment as part of my studies.',
          problem:
            'Understand how an Oracle database is organised and administered: storage, logging and security.',
          features: [
            'Discovering the Oracle architecture',
            'Permanent and temporary tablespaces',
            'UNDO tablespaces',
            'SYSTEM and SYSAUX tablespaces',
            'Redo log file analysis',
            'Roles and privileges',
            'Oracle administration views',
          ],
        },
      },
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Hands-on experience in companies.',
      items: [
        {
          id: 'genius',
          role: 'Intern',
          company: 'Genius Groups',
          type: 'Internship',
          description:
            'Internship at the startup Genius Groups, which develops the GeniusPay payment aggregator. I learned a great deal, notably about the importance of GitHub and about how a payment aggregator works, which we tried to integrate into a project.',
          toolsTitle: 'What I learned',
          tools: [
            { name: 'GitHub', desc: 'The importance of GitHub in a development project.' },
            { name: 'GeniusPay', desc: 'How a payment aggregator works, integrated into the UN DON CI project (tested in a sandbox).' },
          ],
        },
        {
          id: 'connect',
          role: 'Customer service intern',
          company: 'Connect RCI',
          type: 'Internship',
          description:
            'I completed an internship in customer service at Connect RCI. It was my first immersion in a professional environment, where I discovered tools for customer relationship management and for improving communication quality.',
          toolsTitle: 'Tools discovered',
          tools: [
            { name: 'Hermes CRM', desc: 'A call-handling and customer relationship management tool.' },
            { name: 'Krisp AI Noise Cancellation', desc: 'An intelligent background-noise cancellation solution.' },
          ],
        },
      ],
    },
    education: {
      eyebrow: 'Education',
      title: 'A programme between computing and management.',
      school: 'Polytechnic University of Bingerville (UPB)',
      degree: 'Third-year MIAGE (Licence 3)',
      full: 'Applied Computer Science Methods for Business Management',
      status: 'In progress',
      location: 'Côte d’Ivoire',
      pathTitle: 'Pathway',
      path: [
        { period: '2024', title: 'Baccalauréat, Series C (mathematics)', place: 'Lycée Moderne de Marcory' },
        { period: '2024 – 2025', title: 'Year 1 — MIAGE Computer Science', place: 'Polytechnic University of Bingerville' },
        { period: '2025 – 2026', title: 'Year 2 — MIAGE Computer Science', place: 'Polytechnic University of Bingerville' },
        { period: 'In progress', title: 'Year 3 — MIAGE', place: 'Polytechnic University of Bingerville' },
      ],
      description:
        'MIAGE blends computing and management to train professionals who can bridge the needs of organisations and technical solutions.',
      pillars: [
        'Computer science',
        'Development',
        'Databases',
        'Information systems',
        'Management',
        'Analysis and design',
      ],
    },
    goals: {
      eyebrow: 'Goals',
      title: 'A clear direction, one step at a time.',
      intro:
        'My goal is to continue my studies and build a career in technology and data, with an openness to international organisations.',
      items: [
        { title: 'Data Analytics', desc: 'Use data to support decision-making.' },
        { title: 'Data Science', desc: 'Progressively move toward more advanced roles.' },
        { title: 'Software development', desc: 'Design and build useful applications.' },
        { title: 'Information systems', desc: 'Bridge business needs and technical solutions.' },
        { title: 'Digital transformation', desc: 'Support the modernisation of organisations.' },
        { title: 'Technology for development', desc: 'Put technology at the service of concrete causes.' },
      ],
      closing: 'Next step: a Master’s degree abroad.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'A project, an opportunity? Let’s talk.',
      subtitle: 'One message is enough to start the conversation.',
      emailLabel: 'Email',
      emailPending: 'Professional email address to be added',
      phoneLabel: 'Phone',
      cvLabel: 'CV',
      cvLink: 'Download my CV (PDF)',
      linkedinLabel: 'LinkedIn',
      locationLabel: 'Location',
      githubLabel: 'GitHub',
      formTitle: 'Contact form',
      formLoading: 'Loading the form…',
      formFallback: 'The form does not show up? ',
      formOpen: 'Open it in a new tab',
    },
    footer: {
      rights: 'All rights reserved.',
      built: 'Designed and built with React & Motion.',
      top: 'Back to top',
    },
  },
}
