import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import heroImg from '../assets/images/hero-smart-building.webp'
import { FiArrowUpRight } from 'react-icons/fi'

const metrics = [
  { value: '10+', label: 'Years of excellence' },
  { value: '200+', label: 'Projects delivered' },
  { value: '50+', label: 'Prestigious clients' },
  { value: 'PAN', label: 'India coverage' },

]

const exploreLinks = [
 
   {
    title: 'Software',
    description:
      'From custom business software and enterprise applications to SaaS platforms, mobile apps, AI integration and legacy modernisation — we engineer software built to perform, scale and evolve.',
    to: '/software-development',
  },
{
    title: 'Industrial Automation',
    description:
      'Connect plant-floor equipment, industrial IoT, live dashboards, intelligent monitoring and business systems.',
    to: '/industrial-automation',
  },

  {
    title: 'Solutions',
    description:
      'Explore intelligent building, office, network, energy, surveillance and integrated technology solutions.',
    to: '/solutions',
  },

  {
    title: 'Sectors We Serve',
    description:
      'Purpose-built technology for manufacturing, education, real estate, hospitality, healthcare, government and growing enterprises.',
    to: '/sectorsweserve',
  },

   {
    title: 'About',
    description:
      'Meet the multidisciplinary team behind Truelip’s software engineering, automation and integrated technology solutions.',
    to: '/about',
  }

]

export default function HomePage() {
  return (
    <PageShell>
      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow">Software Engineering & Automation Experts · Headquartered in Bhilai</div>
          <h1>
            Smarter spaces.<br />
            <em>Smarter business.</em>
          </h1>
          <p className="hero-sub">
            From intelligent buildings and industrial plant automation to custom business software — Truelip Technocrates delivers end-to-end technology solutions across India. Hardware. Software. Integrated.
          </p>
          <div className="actions">
            <Link className="btn btn-primary" to="/contact">
              Request a free quote
            </Link>
            <Link className="btn btn-ghost" to="/solutions">
              Explore services
            </Link>
          </div>
        </div>
        <div className="hero-media">
          <img
            src={heroImg}
            alt="Smart building automation and connected infrastructure"
          />
          <div className="hero-media-label">Connected infrastructure. Unified intelligence.</div>
        </div>
      </section>

      <section className="metrics">
        <div className="container metric-grid">
          {metrics.map((item) => (
            <div className="metric" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section
  className="home-explore"
  style={{
    padding: '68px 0 0',
    background: '#ecece8',
  }}
>
  <div className="container">

    {/* =========================================================
        EXPLORE HEADER
       ========================================================= */}

   <div
  style={{
    textAlign: 'center',
    maxWidth: '900px',
    margin: '0 auto 42px',
  }}
>
  <h2
    style={{
      margin: 0,

      fontFamily: 'Manrope, Inter, Arial, sans-serif',

      fontSize: 'clamp(34px, 4.2vw, 54px)',
      fontWeight: 500,

      lineHeight: 1,
      letterSpacing: '-0.055em',

      color: '#15171c',
    }}
  >
    Explore Truelip
  </h2>

  <p
    style={{
      margin: '16px auto 0',

      maxWidth: '520px',

      color: '#6a6f76',

      fontSize: '15px',
      lineHeight: 1.7,
    }}
  >
    Technology built around your business.
  </p>
</div>


    {/* =========================================================
        EXPLORE LINKS
       ========================================================= */}

    <div className="industry-list">
      {exploreLinks.map((item) => (
        <Link
          key={item.title}
          to={item.to}
          className="industry-row"
          style={{
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <h3>{item.title}</h3>

          <p>{item.description}</p>

          <span className="industry-arrow">
  <FiArrowUpRight />
</span>
        </Link>
      ))}
    </div>

  </div>
</section>

      <section className="home-cta">
        <div className="container home-cta-inner">
          <div>
            <h2>Let’s build something smart.</h2>
            <p>
              Wherever your project is in India — tell us about it and we'll send a free assessment within 24 hours.
            </p>
          </div>
          <Link className="text-link" to="/contact">
            Start a conversation
          </Link>
        </div>
      </section>
    </PageShell>
  )
}
