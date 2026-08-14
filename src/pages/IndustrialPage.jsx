import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import industrialImg from '../assets/images/industrial-dashboard.webp'
import industrialImg1 from '../assets/images/IA2.jpg'

const features = [
  {
    title: 'Hardware Integration',
    text: 'PLCs, RTUs, sensors, actuators, HMIs and SCADA panels unified on a single backbone.',
  },
  {
    title: 'Live Dashboards',
    text: 'Real-time OEE, energy, throughput and alert dashboards on any device, anywhere.',
  },
  {
    title: 'Predictive Maintenance',
    text: 'Condition-based alerts and failure prediction to eliminate unplanned downtime.',
  },
  {
    title: 'Auto Reporting',
    text: 'Automated production logs, quality reports and compliance docs — zero manual effort.',
  },
]

export default function IndustrialPage() {
  return (
    <PageShell>

      {/* =========================================================
          INDUSTRIAL HERO
         ========================================================= */}

      <section
        className="industrial-hero"
        style={{
          width: '100%',
          height: '100vh',
          minHeight: '720px',

          paddingTop: '81px',

          boxSizing: 'border-box',

          background: '#111318',
          color: '#fff',

          overflow: 'hidden',

          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }}
      >

        {/* LEFT CONTENT */}
        <div
          className="industrial-hero-copy"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',

            padding: '60px 70px 60px var(--pad)',

            minWidth: 0,
          }}
        >
          <h1
            style={{
              margin: 0,

              maxWidth: '920px',

              fontFamily: 'Manrope, Inter, Arial, sans-serif',

              fontSize: 'clamp(60px, 5.8vw, 94px)',
              fontWeight: 500,

              lineHeight: 0.94,
              letterSpacing: '-0.055em',

              color: '#fff',
            }}
          >
            From machine data
            <br />
            to business decisions.
          </h1>

          <p
            style={{
              maxWidth: '820px',

              margin: '38px 0 0',

              color: '#b9bcc3',

              fontSize: '18px',
              lineHeight: 1.75,
            }}
          >
            We connect machines, PLCs, SCADA systems, sensors and industrial
            equipment with intelligent software, live dashboards and business
            systems — transforming plant-floor data into real-time visibility,
            smarter decisions and more efficient operations.
          </p>
        </div>


        {/* RIGHT IMAGE */}
        <div
          className="industrial-hero-media"
          style={{
            position: 'relative',

            width: '100%',
            height: '100%',

            minHeight: 0,

            overflow: 'hidden',

            background: '#111318',
          }}
        >
          <img
            src={industrialImg}
            alt="Industrial operations automation"
            style={{
              position: 'absolute',
              inset: 0,

              width: '100%',
              height: '100%',

              maxWidth: 'none',

              objectFit: 'cover',
              objectPosition: 'center',

              filter:
                'saturate(.88) contrast(1.04) brightness(.80)',
            }}
          />

          {/* IMAGE BLEND INTO LEFT SIDE */}
          <div
            style={{
              position: 'absolute',
              inset: 0,

              background:
                'linear-gradient(90deg, #111318 0%, rgba(17,19,24,.72) 8%, rgba(17,19,24,.32) 22%, rgba(17,19,24,.08) 36%, transparent 50%)',

              pointerEvents: 'none',
            }}
          />

          {/* BOTTOM SHADING */}
          <div
            style={{
              position: 'absolute',
              inset: 0,

              background:
                'linear-gradient(0deg, rgba(17,19,24,.58) 0%, transparent 38%)',

              pointerEvents: 'none',
            }}
          />

          <div
            className="industrial-hero-label"
            style={{
              position: 'absolute',

              zIndex: 2,

              right: '34px',
              bottom: '34px',

              width: '290px',

              paddingTop: '12px',

              borderTop:
                '1px solid rgba(255,255,255,.6)',

              color: '#fff',

              fontSize: '11px',
              letterSpacing: '.14em',

              textTransform: 'uppercase',
            }}
          >
            Industrial operations automation
          </div>
        </div>

      </section>


      {/* =========================================================
          OPERATIONS AUTOMATION
         ========================================================= */}

      <section
        id="industrial"
        style={{
          width: '100%',

          background: '#07080a',
          color: '#fff',

          padding: 0,
          margin: 0,

          overflow: 'visible',
        }}
      >

        {/* MAIN DESKTOP GRID */}
        <div className="industrial-layout">

          {/* LEFT — STICKY IMAGE */}
          <div className="industrial-sticky-image">

            <img
              src={industrialImg1}
              alt="Building management and industrial automation dashboard"
              style={{
                position: 'absolute',
                inset: 0,

                width: '100%',
                height: '100%',

                maxWidth: 'none',

                objectFit: 'cover',
                objectPosition: 'center',

                filter:
                  'saturate(.88) contrast(1.03) brightness(.80)',
              }}
            />

            {/* IMAGE → CONTENT BLEND */}
            <div
              style={{
                position: 'absolute',
                inset: 0,

                background:
                  'linear-gradient(90deg, transparent 0%, transparent 55%, rgba(7,8,10,.12) 68%, rgba(7,8,10,.45) 82%, #07080a 100%)',

                pointerEvents: 'none',
              }}
            />

          </div>


          {/* RIGHT — CONTENT */}
          <div className="industry-copy">

            <h2 className="display reveal">
              Operations
              <br />
              automation.
            </h2>

            <p className="lead reveal">
              Seamlessly bridging plant-floor hardware with intelligent
              business software — delivering real-time control,
              visibility, and efficiency across your entire operation.
            </p>


            {features.map((feature) => (
              <div
                className="feature-row reveal"
                key={feature.title}
              >
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </div>
            ))}


            <p className="industry-note reveal">
              We design end-to-end industrial automation ecosystems where
              electronic hardware is seamlessly integrated with custom
              business logic software — giving plant managers a unified,
              real-time command over their entire facility. Reduced
              downtime, optimised throughput, and measurable cost savings.
            </p>


            {/* INDUSTRY TAGS */}
            <div className="reveal industrial-tags">

              {[
                'Steel & Metals',
                'Mining',
                'Pharma',
                'Food & Beverage',
                'Power & Utilities',
                'Cement',
                'Automotive',
                'Warehousing',
              ].map((item) => (
                <span key={item}>
                  {item}
                </span>
              ))}

            </div>


            <div
              className="actions"
              style={{
                marginTop: 32,
              }}
            >
              <Link
                className="btn btn-primary"
                to="/contact"
              >
                Discuss your plant
              </Link>
            </div>

          </div>

        </div>

      </section>

    </PageShell>
  )
}