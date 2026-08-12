import PageShell from '../components/PageShell'
import heroImg from '../assets/images/hero-smart-building.webp'

const industries = [
  { title: 'Educational institutions', subtitle: 'Universities, colleges & schools' },
  { title: 'Industries & factories', subtitle: 'Manufacturing, steel & mining' },
  { title: 'Real estate developers', subtitle: 'Residential & commercial projects' },
  { title: 'Hotels & hospitality', subtitle: 'Premium guest-experience tech' },
  { title: 'Hospitals & healthcare', subtitle: 'Critical-environment automation' },
  { title: 'Government institutions', subtitle: 'Civic offices & public infrastructure' },
]

export default function IndustriesPage() {
  return (
    <PageShell>
      {/* =========================================================
    SECTORS WE SERVE — FULL SCREEN HERO
   ========================================================= */}

<section
  className="sectors-full-hero"
  style={{
    width: '100vw',
    height: '100vh',
    minHeight: '720px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    background: '#111318',
    color: '#fff',
    overflow: 'hidden',
    paddingTop: '81px',
    boxSizing: 'border-box',
  }}
>
  {/* LEFT — TEXT */}
  <div
    className="sectors-full-hero-copy"
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minWidth: 0,
      padding: '60px 70px 60px var(--pad)',
    }}
  >
    <h1
      style={{
        margin: 0,
        maxWidth: '900px',
        fontFamily: 'Manrope, Inter, Arial, sans-serif',
        fontSize: 'clamp(60px, 5.8vw, 94px)',
        fontWeight: 500,
        lineHeight: 0.94,
        letterSpacing: '-0.055em',
        color: '#fff',
      }}
    >
      Built for real-world
      <br />
      operations.
    </h1>

    <p
      style={{
        maxWidth: '800px',
        margin: '38px 0 0',
        color: '#b9bcc3',
        fontSize: '18px',
        lineHeight: 1.75,
      }}
    >
      We deliver software, automation and connected technology solutions
      designed around the operational needs of manufacturing, education,
      real estate, hospitality, healthcare, government and growing enterprises.
    </p>
  </div>

  {/* RIGHT — IMAGE */}
  <div
    className="sectors-full-hero-media"
    style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      background: '#111318',
    }}
  >
    <img
      src={heroImg}
      alt="Technology solutions across industries and sectors"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        maxWidth: 'none',
        objectFit: 'cover',
        objectPosition: 'center',
        filter: 'saturate(.88) contrast(1.04) brightness(.80)',
      }}
    />

    <div
      style={{
        position: 'absolute',
        inset: 0,
        background:
          'linear-gradient(90deg, #111318 0%, rgba(17,19,24,.72) 8%, rgba(17,19,24,.32) 22%, rgba(17,19,24,.08) 36%, transparent 50%)',
        pointerEvents: 'none',
      }}
    />

    <div
      className="sectors-full-hero-label"
      style={{
        position: 'absolute',
        zIndex: 2,
        right: '34px',
        bottom: '34px',
        width: '280px',
        paddingTop: '12px',
        borderTop: '1px solid rgba(255,255,255,.6)',
        color: '#fff',
        fontSize: '11px',
        letterSpacing: '.14em',
        textTransform: 'uppercase',
      }}
    >
      Technology built around your industry
    </div>
  </div>
</section>

      <section className="section" id="industries">
        <div className="container">
          <div
  style={{
    textAlign: 'center',
    maxWidth: '920px',
    margin: '0 auto 54px',
  }}
>
  <div
    style={{
      marginBottom: '14px',

      color: '#747981',

      fontSize: '11px',
      fontWeight: 600,

      letterSpacing: '.16em',
      textTransform: 'uppercase',
    }}
  >
  </div>

  <h2
    style={{
      margin: 0,

      fontFamily: 'Manrope, Inter, Arial, sans-serif',

      fontSize: 'clamp(44px, 4.2vw, 64px)',
      fontWeight: 500,

      lineHeight: 1,
      letterSpacing: '-0.055em',

      color: '#15171c',
    }}
  >
    Who We Serve
  </h2>

  <p
    style={{
      maxWidth: '760px',

      margin: '18px auto 0',

      color: '#656a72',

      fontSize: '16px',
      lineHeight: 1.7,
    }}
  >
    Built for the way your industry works.
  </p>
</div>
          <div className="industry-list">
            {industries.map((industry) => (
              <div className="industry-row" key={industry.title}>
                <h3>{industry.title}</h3>
                <p>{industry.subtitle}</p>
                <b>↗</b>
              </div>
            ))}
          </div>
          <div className="quote-band">
            <div className="container">
              <p className="quote">
                “From Chhattisgarh to every corner of India — organisations consistently place their full faith in Truelip Technocrates. Not because we chase contracts, but because we build relationships grounded in reliability, accountability, and measurable results, wherever you are.”
              </p>
              <div className="quote-author">
                — Truelip Technocrates · Pan-India Automation Solutions · HQ: Bhilai, CG
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
