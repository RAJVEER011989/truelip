import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import aboutImg from '../assets/images/about-team.webp'
import aboutImg1 from '../assets/images/joining_hands.avif'

const capabilities = [
  {
    title: 'Technology-first thinking',
    text: 'We approach every requirement by understanding the real operational challenge first — then engineer the right combination of software, automation and connected infrastructure around it.',
    tags: ['Software', 'Automation', 'IoT', 'Infrastructure'],
  },
  {
    title: 'End-to-end ownership',
    text: 'From initial consultation and system architecture to development, integration, deployment and long-term support, Truelip takes accountability across the complete technology lifecycle.',
    tags: ['Consulting', 'Engineering', 'Deployment', 'Support'],
  },
  {
    title: 'Software engineering',
    text: 'Our software capabilities span custom business applications, enterprise platforms, SaaS products, mobile applications, cloud systems, APIs and AI-enabled workflows.',
    tags: ['Web Applications', 'SaaS', 'Mobile', 'Cloud & AI'],
  },
  {
    title: 'Automation & connected systems',
    text: 'We connect buildings, industrial equipment, sensors, devices and operational systems with intelligent software — creating environments that are measurable, connected and easier to manage.',
    tags: ['Industrial IoT', 'Smart Buildings', 'SCADA', 'Device Integration'],
  },
  {
    title: 'Multidisciplinary expertise',
    text: 'A multidisciplinary team across software, systems engineering, industrial IoT, field implementation and technical support allows us to solve challenges that cross traditional technology boundaries.',
    tags: ['Engineering', 'Software', 'Field Systems', 'Integration'],
  },
  {
    title: 'Pan-India delivery',
    text: 'Headquartered in Bhilai, Chhattisgarh, we support organisations across India with technology solutions designed for practical deployment, reliability and long-term operational value.',
    tags: ['Bhilai HQ', 'Pan-India', 'Implementation', 'Long-Term Support'],
  },
]

export default function AboutPage() {
  return (
    <PageShell>

      {/* =========================================================
          ABOUT HERO
          Same full-screen visual language as Software
         ========================================================= */}

      <section className="hero about-hero" id="about-hero">

  {/* LEFT CONTENT */}
  <div className="hero-copy">

    <h1>
      Built on expertise <br />

      Driven by outcomes 
    </h1>

    <p className="hero-sub">
      Truelip Technocrates brings software engineering, intelligent automation
      and connected infrastructure together under one accountable technology
      partner. From digital platforms and industrial systems to smart
      environments and hardware–software integration, we engineer practical
      technology that helps organisations operate smarter, connect better and
      grow with confidence.
    </p>

  </div>


  {/* RIGHT IMAGE */}
  <div className="hero-media">

    <img
      src={aboutImg}
      alt="Truelip Technocrates technology and engineering expertise"
    />

    <div className="hero-media-label">
      Software · Automation · Integrated Technology
    </div>

  </div>

</section>


      {/* =========================================================
          ABOUT CAPABILITIES
          Same structure as Software capabilities
         ========================================================= */}

      <section
  className="section"
  id="about"
  style={{
    paddingBottom: 0,
  }}
>
        <div className="container">

          <div
  style={{
    textAlign: 'center',
    maxWidth: '900px',
    margin: '0 auto 52px',
  }}
>
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
    About Truelip
  </h2>

  <p
    style={{
      maxWidth: '650px',
      margin: '17px auto 0',

      color: '#656a72',

      fontSize: '16px',
      lineHeight: 1.65,
    }}
  >
    One company. Multiple disciplines. One accountable technology partner.
  </p>
</div>


          {/* 6 CARDS — SAME AS SOFTWARE PAGE */}
          <div className="capability-grid">

            {capabilities.map((capability) => (

              <article
                className="capability"
                key={capability.title}
              >

                <div className="cap-no">•</div>

                <h3>{capability.title}</h3>

                <p>{capability.text}</p>

                <div className="tag-row dark-tags">

                  {capability.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}

                </div>

              </article>

            ))}

          </div>


          {/* =====================================================
              FULL-WIDTH PANEL
              Same as Software Engineering panel
             ===================================================== */}

          <div className="dev-panel">

            {/* LEFT IMAGE */}
            <div className="dev-image">
              <img
                src={aboutImg1}
                alt="Truelip Technocrates multidisciplinary technology team"
              />
            </div>


            {/* RIGHT CONTENT */}
            <div className="dev-copy">

              <h3>
                One partner.
                <br />
                Complete accountability.
              </h3>

              <p>
                Technology projects become difficult when software, hardware,
                automation and implementation are handled in isolation.
                Truelip brings these disciplines together so your organisation
                has one accountable partner from architecture and engineering
                through deployment and long-term support.
              </p>


              <div className="stack">

                {[
                  'Consultation & Architecture',
                  'Software Engineering',
                  'Automation & Industrial IoT',
                  'Hardware–Software Integration',
                  'Deployment & Commissioning',
                  'Support & Maintenance',
                ].map((item) => (

                  <span key={item}>
                    {item}
                  </span>

                ))}

              </div>


              <div className="dev-cta">

                <Link
                  className="btn btn-primary"
                  to="/contact"
                >
                  Start a conversation
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>

    </PageShell>
  )
}