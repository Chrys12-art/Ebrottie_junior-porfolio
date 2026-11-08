// Arrière-plan fixe : grille technologique + halos lumineux.
// Animé en CSS uniquement (léger, désactivé avec prefers-reduced-motion).
export default function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <div className="bg__grid" />
      <div className="bg__orb bg__orb--blue" />
      <div className="bg__orb bg__orb--violet" />
      <div className="bg__orb bg__orb--cyan" />
      <div className="bg__noise" />
    </div>
  )
}
