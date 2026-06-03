import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/')({
  component: CasaCalypso,
})

const features = [
  {
    number: '1,6',
    unit: 'km',
    title: 'De la Plage',
    desc: 'Atteignez les plages de la côte Caraïbe en quelques minutes à pied, en vélo ou en voiture.',
    accent: '#4A8FA3',
  },
  {
    number: '4',
    unit: '+',
    title: 'Personnes',
    desc: 'Deux chambres confortables avec deux lits doubles chacune — idéales pour familles ou groupes.',
    accent: '#254D37',
  },
  {
    number: '2.5',
    unit: 'km',
    title: 'Du Centre-Ville',
    desc: 'Restaurants, marchés et activités à portée de main dans un cadre tropical authentique.',
    accent: '#BF6950',
  },
  {
    number: '∞',
    unit: '',
    title: 'Nature Luxuriante',
    desc: "Entourée d'une végétation tropicale, la maison offre une intimité totale dans un décor de rêve.",
    accent: '#162D22',
  },
]

const amenities = [
  'WiFi Starlink',
  'Climatisation',
  'Cuisine Équipée',
  'Terrasses Privées',
  'Parking Privé',
  'Draps & Serviettes',
  'Machine à Laver',
]

const testimonials = [
  {
    text: "Un véritable coin de paradis. La maison est magnifique, entourée de verdure, avec tout le confort nécessaire. Nous avons adoré les balades jusqu'à la plage le matin. Un séjour inoubliable.",
    author: 'Marie-Claire & Étienne',
    location: 'Paris, France',
  },
  {
    text: 'Perfecta para teletrabajar desde el paraíso. WiFi rápido, ambiente tranquilo, y la naturaleza a tu puerta. Los anfitriones son muy atentos y el lugar supera todas las expectativas.',
    author: 'Valeria Montoya',
    location: 'Barcelona, España',
  },
  {
    text: "We spent two weeks here with our kids — they couldn't stop talking about the birds and butterflies in the garden. The beach is a short drive away and the house feels like living in a botanical garden.",
    author: 'Thomas & Sarah W.',
    location: 'London, UK',
  },
]

const proximities = [
  { label: 'Plage', dist: '1.6 km', type: 'beach' },
  { label: 'Centre-ville', dist: '2.5 km', type: 'town' },
  { label: 'Parc National Cahuita', dist: '3.2 km', type: 'nature' },
  { label: 'Aéroport Quepos', dist: '6 km', type: 'airport' },
]

function StarRow() {
  return (
    <div className="star-row">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="star-icon">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

function CasaCalypso() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('revealed')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="cc-root">
      {/* ── NAV ─────────────────────────────── */}
      <nav className={`cc-nav${scrolled ? ' nav-on' : ''}`}>
        <button className="nav-brand" onClick={() => go('hero')}>
          Casa Calypso
        </button>
        <div className="nav-links">
          {[
            ['La Maison', 'maison'],
            ['Galerie', 'galerie'],
            ['Avis', 'avis'],
            ['Réserver', 'reserver'],
          ].map(([lbl, id]) => (
            <button key={id} className="nav-link" onClick={() => go(id)}>
              {lbl}
            </button>
          ))}
        </div>
        <a
          href="https://www.airbnb.com"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-book"
        >
          Réserver
        </a>
      </nav>

      {/* ── HERO ─────────────────────────────── */}
      <section id="hero" className="hero">
        <div className="hero-bg" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />

        <div className="hero-body">
          <p className="hero-eyebrow">Costa Rica · Pura Vida</p>
          <h1 className="hero-h1">
            <span className="h1-solid">Casa</span>
            <span className="h1-outline">Calypso</span>
          </h1>
          <p className="hero-sub">
            Un refuge tropical sur la côte Caraïbe,<br />
            entre jungle luxuriante et plages sauvages
          </p>
          <div className="hero-ctas">
            <a
              href="http://airbnb.fr/h/casacalypso-puertoviejo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-terra"
            >
              Réserver sur Airbnb
            </a>
            <button className="btn-ghost" onClick={() => go('reserver')}>
              Nous contacter
            </button>
          </div>
          <div className="hero-stats">
            <div className="h-stat">
              <span className="h-stat-n">1,6 km</span>
              <span className="h-stat-l">de la plage</span>
            </div>
            <div className="h-sep" />
            <div className="h-stat">
              <span className="h-stat-n">2</span>
              <span className="h-stat-l">chambres</span>
            </div>
            <div className="h-sep" />
            <div className="h-stat">
              <span className="h-stat-n">4 +</span>
              <span className="h-stat-l">personnes</span>
            </div>
          </div>
        </div>

        <button className="scroll-cue" onClick={() => go('maison')}>
          <span>Découvrir</span>
          <div className="scroll-line" />
        </button>
      </section>

      {/* ── FEATURES ─────────────────────────── */}
      <section id="maison" className="features-sec">
        <div className="features-hdr reveal">
          <p className="eyebrow">La propriété</p>
          <h2 className="sec-title">
            Tout ce dont vous<br />avez besoin
          </h2>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <div
              key={i}
              className={`f-card reveal reveal-d${i + 1}`}
              style={{ '--acc': f.accent } as React.CSSProperties}
            >
              <div className="f-num">
                {f.number}
                <span className="f-unit">{f.unit}</span>
              </div>
              <h3 className="f-title">{f.title}</h3>
              <p className="f-desc">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="amenities reveal">
          <p className="amen-label">Équipements inclus</p>
          <div className="amen-grid">
            {amenities.map((a) => (
              <div key={a} className="amen-item">
                <span className="amen-dot" />
                <span>{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────── */}
      <section id="galerie" className="gallery-sec">
        <div className="gallery-hdr reveal">
          <p className="eyebrow eyebrow-light">Galerie</p>
          <h2 className="sec-title sec-title-light">
            Votre nouveau<br />terrain de jeu
          </h2>
        </div>

        <div className="gal-grid">
          {[
            { label: 'La Maison', cls: 'g1', image : '/public/facade.jpg' },
            { label: 'Chambre Principale', cls: 'g2' },
            { label: 'Cuisine Équipée', cls: 'g3' },
            { label: 'Jardin Tropical', cls: 'g4' },
            { label: 'Seconde Chambre', cls: 'g5' },
          ].map(({ label, cls }, i) => (
            <div key={i} className={`g-cell ${cls} reveal`}>
              <div className="g-inner" />
              <div className="g-over" />
              <span className="g-lbl">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────── */}
      <section className="about-sec">
        <div className="about-grid">
          <div className="about-txt reveal">
            <p className="eyebrow">À propos</p>
            <h2 className="about-h2">
              La maison idéale<br />pour chaque voyage
            </h2>
            <p className="about-p">
              Casa Calypso est une villa tropicale pensée pour offrir un confort
              total dans un cadre naturel exceptionnel. Nichée dans la verdure
              du Costa Rica, elle accueille familles, couples et nomades
              numériques qui cherchent à déconnecter — sans renoncer au confort.
            </p>
            <p className="about-p">
              Les deux chambres, chacune avec deux lits doubles, offrent
              suffisamment d'espace pour quatre personnes. La terrasse et le
              jardin tropical deviennent rapidement votre salon à ciel ouvert.
            </p>
            <div className="about-facts">
              {[
                ['Superficie', '~120 m²'],
                ['Chambres', '2 (4 lits doubles)'],
                ['Localisation', 'Côte Pacifique, CR'],
                ['Distance plage', '~1.8 km'],
              ].map(([lbl, val]) => (
                <div key={lbl} className="fact">
                  <span className="fact-lbl">{lbl}</span>
                  <span className="fact-val">{val}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-card reveal reveal-d2">
            <div className="map-vis">
              <svg viewBox="0 0 220 180" className="map-svg">
                <circle cx="110" cy="90" r="65" fill="none" stroke="rgba(122,158,135,0.3)" strokeWidth="1" />
                <circle cx="110" cy="90" r="40" fill="none" stroke="rgba(122,158,135,0.2)" strokeWidth="1" />
                <circle cx="110" cy="90" r="15" fill="none" stroke="rgba(122,158,135,0.4)" strokeWidth="1" />
                <line x1="110" y1="25" x2="110" y2="155" stroke="rgba(122,158,135,0.15)" strokeWidth="1" />
                <line x1="45" y1="90" x2="175" y2="90" stroke="rgba(122,158,135,0.15)" strokeWidth="1" />
                <circle cx="110" cy="90" r="5" fill="#BF6950" />
                <circle cx="110" cy="90" r="10" fill="rgba(191,105,80,0.25)" />
              </svg>
              <p className="map-place">Manuel Antonio, Costa Rica</p>
              <p className="map-coords">Côte Pacifique · 9°24'N 84°08'O</p>
            </div>
            <div className="prox-list">
              {proximities.map(({ label, dist, type }) => (
                <div key={label} className="prox-row">
                  <span className={`prox-dot pd-${type}`} />
                  <span className="prox-name">{label}</span>
                  <span className="prox-dist">{dist}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────── */}
      <section id="avis" className="testi-sec">
        <div className="testi-hdr reveal">
          <p className="eyebrow">Témoignages</p>
          <h2 className="sec-title">
            Ce que disent<br />nos voyageurs
          </h2>
        </div>

        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <div key={i} className={`t-card reveal reveal-d${i + 1}`}>
              <div className="t-quote">"</div>
              <p className="t-text">{t.text}</p>
              <div className="t-foot">
                <StarRow />
                <div className="t-author">
                  <span className="t-name">{t.author}</span>
                  <span className="t-loc">{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BOOKING ──────────────────────────── */}
      <section id="reserver" className="book-sec">
        <div className="book-bg" />
        <div className="book-orb" />
        <div className="book-body reveal">
          <p className="eyebrow eyebrow-light">Réservations</p>
          <h2 className="book-h2">
            Prêt pour votre<br />escapade tropicale ?
          </h2>
          <p className="book-desc">
            Réservez directement sur Airbnb ou contactez-nous pour un tarif
            personnalisé et des disponibilités en temps réel.
          </p>
          <div className="book-ctas">
            <a
              href="https://www.airbnb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-terra btn-lg"
            >
              Réserver sur Airbnb
            </a>
            <a
              href="mailto:contact@casacalypso-costarica.com"
              className="btn-sand"
            >
              Envoyer un email
            </a>
          </div>
          <p className="book-note">
            Questions ?{' '}
            <a href="mailto:contact@casacalypso-costarica.com">
              contact@casacalypso-costarica.com
            </a>
          </p>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────── */}
      <footer className="cc-footer">
        <p className="ft-logo">Casa Calypso</p>
        <p className="ft-sub">Pura Vida · Costa Rica</p>
        <div className="ft-links">
          {[
            ['La Maison', 'maison'],
            ['Galerie', 'galerie'],
            ['Avis', 'avis'],
            ['Réserver', 'reserver'],
          ].map(([lbl, id]) => (
            <button key={id} onClick={() => go(id)}>
              {lbl}
            </button>
          ))}
          <a href="mailto:contact@casacalypso-costarica.com">Contact</a>
        </div>
        <p className="ft-copy">© 2025 Casa Calypso · Tous droits réservés</p>
      </footer>
    </div>
  )
}
