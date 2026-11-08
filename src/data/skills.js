// level (facultatif) :
//   'learning' = en cours d'apprentissage
//   'notions'  = notions pratiques
//   'basics'   = bases / notions
// Aucun pourcentage de maîtrise : on reste factuel.

export const skillCategories = [
  {
    id: 'dev',
    icon: 'Code2',
    accent: 'blue',
    items: [
      { name: 'Python' },
      { name: 'Java', level: 'learning' },
      { name: 'C' },
      { name: 'JavaScript' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'React' },
      { name: 'Flask' },
      { name: 'Flutter' },
      { name: 'Dart' },
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'Prisma' },
    ],
  },
  {
    id: 'data',
    icon: 'DatabaseZap',
    accent: 'cyan',
    items: [
      { name: 'SQL' },
      { name: 'PostgreSQL' },
      { name: 'Supabase' },
      { name: 'Oracle' },
      { name: 'dbAdmin' },
      { name: 'dbDesign' },
      { name: 'RStudio' },
      { name: 'Power BI' },
      { name: 'Excel' },
      { name: 'dataAnalysis' },
      { name: 'dsNotions', level: 'basics' },
    ],
  },
  {
    id: 'methods',
    icon: 'Workflow',
    accent: 'violet',
    items: [
      { name: 'MERISE' },
      { name: 'MCD' },
      { name: 'MLD' },
      { name: 'MPD' },
      { name: 'UML' },
      { name: 'needsAnalysis' },
      { name: 'isDesign' },
    ],
  },
  {
    id: 'tools',
    icon: 'Wrench',
    accent: 'blue',
    items: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Visual Studio Code' },
      { name: 'Docker', level: 'notions' },
      { name: 'Canva' },
      { name: 'Arduino' },
      { name: 'paymentApi' },
      { name: 'linuxWindows' },
    ],
  },
]
