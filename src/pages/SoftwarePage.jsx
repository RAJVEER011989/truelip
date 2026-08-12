import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import softwareImg from '../assets/images/software-team.webp'
import code from '../assets/images/code.png'

const capabilities = [
  {
    title: 'Web applications & digital platforms',
    text: 'High-performance websites, customer portals and web applications engineered around your brand, users and business goals — designed to deliver exceptional experiences and measurable results.',
    tags: ['Corporate Websites', 'Web Applications', 'Customer Portals', 'E-Commerce'],
  },
  {
    title: 'Custom business software',
    text: 'Purpose-built software that digitises operations, removes repetitive work and brings complex business processes into one intelligent system — built around the way your organisation actually works.',
    tags: ['ERP Systems', 'CRM Platforms', 'Workflow Automation', 'AI-Enabled Tools'],
  },
  {
    title: 'Hardware–software integration',
    text: 'One of our core strengths — connecting machines, sensors, RFID systems and industrial devices with software, databases, dashboards and enterprise applications to create fully connected operations.',
    tags: ['Industrial IoT', 'SCADA Integration', 'API Middleware', 'Device Platforms'],
  },
  {
    title: 'Mobile applications',
    text: 'Powerful mobile applications for Android and iOS — from customer-facing products and employee applications to field operations, asset tracking and real-time monitoring solutions.',
    tags: ['Android & iOS', 'Business Apps', 'Field Operations', 'Remote Monitoring'],
  },
  {
    title: 'Cloud, SaaS & APIs',
    text: 'Scalable cloud platforms and SaaS products designed for reliability, security and growth — supported by modern APIs, cloud infrastructure and architectures that evolve with your business.',
    tags: ['AWS / Azure / GCP', 'SaaS Platforms', 'API Development', 'Microservices'],
  },
  {
    title: 'Legacy modernisation & integration',
    text: 'Transform ageing software into faster, maintainable and future-ready systems while preserving critical business logic — through modern interfaces, APIs, cloud migration and architecture upgrades.',
    tags: ['System Modernisation', 'API Integration', 'Cloud Migration', 'UI / UX Upgrade'],
  },
]
export default function SoftwarePage() {
  return (
    <PageShell>
  <section className="software-hero-panel">

  {/* LEFT — CONTENT */}
  <div className="software-hero-copy">
    <h1>
      Software engineered
      <br />
      for your business
    </h1>

    <p>
      We design, develop and modernise powerful software solutions built around
      real business needs. From custom web and mobile applications, enterprise
      platforms and SaaS products to AI-enabled workflows, cloud systems, API
      integrations and industrial IoT, we turn complex requirements into
      reliable digital products that automate operations, improve visibility,
      connect teams and systems, and scale confidently as your business grows.
    </p>
  </div>

  {/* RIGHT — IMAGE */}
  <div className="software-hero-image">
    <img
      src={softwareImg}
      alt="Custom software engineering and digital platforms"
    />

    <div className="software-hero-label">
      Custom Software · Cloud · AI · Enterprise Platforms
    </div>
  </div>

</section>

      <section className="section" id="software">
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
    Software built to evolve.
  </h2>

  <p
    style={{
      maxWidth: '780px',

      margin: '18px auto 0',

      color: '#656a72',

      fontSize: '16px',
      lineHeight: 1.7,
    }}
  >
    From custom business applications and AI-enabled workflows to SaaS,
    mobile, cloud and industrial IoT — engineered for performance,
    reliability and long-term growth.
  </p>
</div>
          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article className="capability" key={capability.title}>
                <div className="cap-no">•</div>
                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
                <div className="tag-row dark-tags">
                  {capability.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
          <div className="dev-panel">
            <div className="dev-image"><img src={code} alt="Software development team" /></div>
          <div className="dev-copy">

  <h3>
    Engineering expertise
    <br />
    across the stack.
  </h3>

  <p>
    Our software team brings together expertise across frontend, backend,
    mobile, cloud, databases, APIs and industrial connectivity — allowing us
    to take products from idea and architecture through development,
    integration and deployment.
  </p>

  <div className="stack">
    {[
      'React / Vue / Angular',
      'Node.js / Python / Java',
      'MySQL / PostgreSQL / MongoDB',
      'MQTT / OPC-UA / Modbus',
      'AWS / Azure / GCP',
      'Flutter / React Native',
    ].map((item) => (
      <span key={item}>{item}</span>
    ))}
  </div>

  <div className="dev-cta">
    <Link className="btn btn-primary" to="/contact">
      Start a project
    </Link>
  </div>
</div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
