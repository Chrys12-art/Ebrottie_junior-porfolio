// Données techniques des projets (les textes FR/EN sont dans translations.js,
// sous `projects.items[id]`).
//
// Pour AJOUTER un projet :
//   1. ajoute un objet ci-dessous (id, icône, accent, tech, liens) ;
//   2. ajoute ses textes dans translations.js → projects.items.<id> (FR et EN).
//
// `github` / `demo` : laisse '' tant que le lien n'existe pas (rien n'est affiché).

export const projects = [
  {
    id: 'alertc',
    icon: 'Zap',
    accent: 'cyan',
    tech: ['React', 'Vite', 'JavaScript', 'CSS'],
    github: 'https://github.com/Chrys12-art/AlertC',
    demo: 'https://alert-c.vercel.app/',
  },
  {
    id: 'upbconnect',
    icon: 'Smartphone',
    accent: 'blue',
    tech: ['Flutter', 'Dart', 'Supabase', 'Riverpod', 'go_router'],
    github: '', // À COMPLÉTER si le dépôt est public
    demo: '',
  },
  {
    id: 'undonci',
    icon: 'HeartHandshake',
    accent: 'violet',
    tech: ['React', 'Vite', 'JavaScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'GeniusPay'],
    github: 'https://github.com/Chrys12-art/UN-DON-CI',
    demo: '',
  },
  {
    id: 'carcontroller',
    icon: 'Car',
    accent: 'cyan',
    tech: ['Flutter', 'Dart', 'Arduino', 'Bluetooth HC-05'],
    github: '', // À COMPLÉTER si le dépôt est public
    demo: '',
  },
  {
    id: 'nounouconnect',
    icon: 'Baby',
    accent: 'violet',
    tech: ['React', 'Vite', 'Supabase', 'PostgreSQL'],
    github: '', // À COMPLÉTER si le dépôt est public
    demo: '',
  },
  {
    id: 'moncabinet',
    icon: 'Stethoscope',
    accent: 'blue',
    status: 'wip', // affiche l'étiquette « En cours »
    tech: ['React', 'Spring Boot', 'PostgreSQL'], // technologies prévues
    github: '',
    demo: '',
  },
  {
    id: 'kmeans',
    icon: 'BarChart3',
    accent: 'cyan',
    tech: ['Python', 'Excel', 'K-Means'],
    github: '', // À COMPLÉTER si le notebook / dépôt est public
    demo: '',
  },
  {
    id: 'oracle',
    icon: 'Database',
    accent: 'blue',
    tech: ['Oracle SQL', 'Docker'],
    github: '',
    demo: '',
  },
]
