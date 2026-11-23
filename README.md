# Portfolio — Ebrottie Chrys Junior

Portfolio personnel bilingue (FR / EN), sobre et éditorial.
**Stack :** React 19 · Vite · JavaScript · CSS personnalisé · Motion (ex-Framer Motion) · Lucide React · React Icons.

## Lancer le projet

```bash
npm install
npm run dev        # serveur de développement → http://localhost:5173
npm run build      # build de production dans /dist
npm run preview    # prévisualiser le build
```

Prérequis : Node.js 20.19+ ou 22.12+ (Vite 8). Node 24 fonctionne aussi.

## À compléter avant la mise en ligne

| Quoi | Où | Remarque |
|---|---|---|
| **Photo** ✅ | `public/junior-portrait.jpg` | Portrait affiché en petit avatar à côté du titre du hero. Remplace le fichier pour changer la photo. |
| **E-mail et téléphone** ✅ | `src/data/site.js` → `email`, `phone`, `phoneHref` | Déjà renseignés (issus de ton CV). Visibles publiquement sur le site. |
| **Formulaire de contact** ✅ | `src/data/site.js` → `contactFormUrl` | Formulaire Jotform intégré (iframe) + lien « ouvrir dans un nouvel onglet ». Vérifie dans Jotform → *Paramètres → E-mails* que la notification part bien vers ton Gmail. |
| **Ton CV** ✅ | `public/cv.pdf` (`site.js` → `cv`) | CV v3 (1 page, français). Mets `cv: ''` pour masquer les boutons. |
| **LinkedIn** ✅ | `src/data/site.js` → `linkedin` | Profil renseigné. Mets `linkedin: ''` pour masquer les boutons. |

## Ajouter un projet

1. `src/data/projects.js` : ajoute un objet (`id`, `icon`, `accent`, `tech`, `github`, `demo`).
   Ajoute `status: 'wip'` pour l'étiquette « En cours ». Pour une nouvelle icône, importe-la dans `Projects.jsx`.
2. `src/data/translations.js` : ajoute `projects.items.<id>` dans **fr** et **en**
   (`type`, `name`, `description`, `problem`, `features`).

## Modifier les textes ou les compétences

- Tous les textes (FR + EN) : `src/data/translations.js`
- Compétences : `src/data/skills.js` (aucun pourcentage ; `level: 'learning' | 'notions'` pour signaler ce qui est en cours d'apprentissage)

## Déployer sur Vercel

1. Pousse le dossier sur GitHub.
2. Sur https://vercel.com → *Add New → Project* → importe le dépôt.
3. Vercel détecte Vite (config dans `vercel.json`) : *Build* `npm run build`, *Output* `dist`.
4. Clique sur *Deploy*.

## Structure

```
junior-portfolio/
├── public/                 favicon.svg, junior-portrait.jpg, cv.pdf
├── src/
│   ├── components/         Navbar, Hero, About, Skills, Projects, Experience,
│   │                       Education, Goals, Contact, Footer + Reveal, SectionHeader,
│   │                       Mascot, Preloader, ScrollProgress, TechIcon,
│   │                       GithubIcon, LinkedinIcon
│   ├── data/               site.js, projects.js, skills.js, translations.js
│   ├── hooks/              useLang.jsx (FR/EN), useActiveSection.js
│   ├── styles/             global.css, animations.css, components.css
│   ├── App.jsx
│   └── main.jsx
├── index.html              SEO (meta, Open Graph, JSON-LD)
└── vercel.json
```

## Choix techniques

- **Bilingue complet** : sélecteur FR/EN (mémorisé), `<html lang>`, titre et meta description mis à jour. La langue initiale suit celle du navigateur (français par défaut).
- **Accessibilité** : lien « aller au contenu », navigation au clavier, `aria-*`, focus visibles, contrastes élevés.
- **Animations** : Motion pour les entrées, le scroll reveal, la barre de progression et la mascotte ; CSS pour les micro-interactions. `prefers-reduced-motion` est respecté (Motion + CSS). Le préchargeur possède un filet de sécurité pour ne jamais bloquer le défilement.
- **Performance** : une seule image locale (le portrait), icônes vectorielles via Lucide / React Icons, polices Google avec `preconnect`.
- **Honnêteté du contenu** : pas de pourcentages de maîtrise, ce qui est en apprentissage est signalé comme tel, aucune statistique ni coordonnée inventée.
