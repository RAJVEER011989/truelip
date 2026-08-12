import PageShell from '../components/PageShell'

import buildingImg from '../assets/images/building-automation.webp'
import officeImg from '../assets/images/office-automation.webp'
import homeImg from '../assets/images/home-automation.webp'
import networkImg from '../assets/images/network-communications.webp'
import industrialImg from '../assets/images/industrial-operations.webp'
import softwareImg from '../assets/images/custom-software-development.webp'
import energyImg from '../assets/images/em.JPG'
import securityImg from '../assets/images/su.jpg'
import buildImg from '../assets/images/ba.jpg'


const solutionCards = [
  {
    title: 'Building automation',
    description:
      'Full-spectrum intelligent building systems that unify security, energy, and facility management into a single seamless ecosystem.',
    image: buildImg,
    tags: [
      'Access Control',
      'Biometric Devices',
      'Boom Barriers',
      'Gate Automation',
      'BMS',
      'Energy Management',
      'Electrical Automation',
    ],
  },

  {
    title: 'Office automation',
    description:
      'Transform your workplace with cutting-edge attendance, surveillance, connectivity, and collaboration technologies that boost productivity.',
    image: officeImg,
    tags: [
      'Attendance Management',
      'CCTV Surveillance',
      'Wi-Fi Networks',
      'Structured Cabling',
      'Interactive Displays',
      'Boardroom AV',
    ],
  },

  {
    title: 'Home automation',
    description:
      'Live smarter with voice-controlled lighting, climate, security, and entertainment systems — all controllable from your smartphone, anywhere.',
    image: homeImg,
    tags: [
      'Smart Lighting',
      'Climate Control',
      'Video Door Phone',
      'Smart Security',
      'AV Integration',
      'App Control',
    ],
  },

  {
    title: 'Network & communications',
    description:
      'Enterprise-grade structured networking and wireless solutions ensuring rock-solid connectivity across campuses, factories, and multi-floor offices.',
    image: networkImg,
    tags: [
      'LAN / WAN',
      'Fibre Optic',
      'Enterprise Wi-Fi',
      'Server Rooms',
      'VLAN Segmentation',
    ],
  },

  {
    title: 'Energy management',
    description:
      'Intelligent power monitoring, automated load control, and real-time energy analytics that slash electricity bills and carbon footprint.',
    image: energyImg,
    tags: [
      'Smart Metering',
      'Load Scheduling',
      'Power Analytics',
      'Solar Integration',
      'AMF Panels',
    ],
  },

  {
    title: 'Security & surveillance',
    description:
      'Multi-layered security ecosystems — AI-powered cameras, intrusion detection, fire alarms, and integrated command centres keeping every premise safe 24/7.',
    image: securityImg,
    tags: [
      'IP CCTV',
      'AI Analytics',
      'Intrusion Alarm',
      'Fire Detection',
      'PSIM Integration',
    ],
  },

  {
    title: 'Industrial operations automation',
    description:
      'Bridging the gap between plant-floor hardware and enterprise business logic — we design and deploy integrated automation systems that digitise, optimise, and intelligently manage industrial operations end-to-end.',
    image: industrialImg,
    tags: [
      'PLC / SCADA Integration',
      'Sensor Networks',
      'MES Connectivity',
      'OEE Dashboards',
      'Process Automation',
      'Hardware–Software Bridge',
    ],
  },

  {
    title: 'Custom software development',
    description:
      'From a crisp corporate website to a complex, bespoke business automation platform — our in-house software team is ready for any challenge.',
    image: softwareImg,
    tags: [
      'Business Websites',
      'Web Applications',
      'ERP / CRM Tools',
      'Automation Platforms',
      'API Integration',
      'Mobile Apps',
    ],
  },
]


export default function SolutionsPage() {
  return (
    <PageShell>

      {/* =========================================================
          FULL-SCREEN SOLUTIONS HERO
         ========================================================= */}

      <section
  className="solutions-full-hero"
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
    className="solutions-full-hero-copy"
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
      One partner.
      <br />
      Every layer.
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
      Truelip brings software, automation, infrastructure, security,
      networking and intelligent building systems together under one
      technology partner. From connected physical environments and industrial
      operations to enterprise software and digital platforms, we design
      integrated solutions that simplify operations, connect systems and
      deliver measurable long-term value.
    </p>
  </div>

  {/* RIGHT — IMAGE */}
  <div
    className="solutions-full-hero-media"
    style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      background: '#111318',
    }}
  >
    <img
      src={buildingImg}
      alt="Integrated technology solutions"
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
      className="solutions-full-hero-label"
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
      Integrated technology solutions
    </div>
  </div>
</section>


      {/* =========================================================
          SOLUTIONS SECTION
         ========================================================= */}

      <section
        className="section solutions"
        id="solutions"
      >

        <div className="container">

         <div
  style={{
    textAlign: 'center',
    maxWidth: '920px',
    margin: '0 auto 54px',
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
    Integrated Solutions
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
    From smart buildings and connected infrastructure to industrial
    automation and software — every layer engineered to work together.
  </p>
</div>


          <div className="solution-grid">

            {solutionCards.map((card) => (

              <article
                className="solution-card"
                key={card.title}
              >

                {card.image && (

                  <div className="solution-media">
                    <img
                      src={card.image}
                      alt={card.title}
                    />
                  </div>

                )}


                <div className="solution-body">

                  <h3>
                    {card.title}
                  </h3>


                  <p>
                    {card.description}
                  </p>


                  <div className="tag-row">

                    {card.tags.map((tag) => (

                      <span key={tag}>
                        {tag}
                      </span>

                    ))}

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

    </PageShell>
  )
}