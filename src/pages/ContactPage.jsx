import { useState } from 'react'
import PageShell from '../components/PageShell'
import contactImg from '../assets/images/office-automation.webp'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })

  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setSending(true)
    setStatus('')

    try {
      const response = await fetch('/api/send-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Unable to send enquiry')
      }

      setStatus('success')

      setFormData({
        name: '',
        organisation: '',
        phone: '',
        email: '',
        service: '',
        message: '',
      })
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('error')
    } finally {
      setSending(false)
    }
  }

  return (
    <PageShell>
      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        className="contact-full-hero"
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
        {/* LEFT — CONTENT */}
        <div
          className="contact-full-hero-copy"
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
            Let’s build
            <br />
            something better.
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
            Whether you are planning a software platform, automation project,
            connected infrastructure or a complete technology transformation,
            talk to our team about how Truelip Technocrates can help turn your
            requirements into a reliable, scalable solution.
          </p>
        </div>

        {/* RIGHT — IMAGE */}
        <div
          className="contact-full-hero-media"
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            background: '#111318',
          }}
        >
          <img
            src={contactImg}
            alt="Contact Truelip Technocrates"
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

          {/* IMAGE → DARK BLEND */}
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
            className="contact-full-hero-label"
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
            Software · Automation · Integrated Technology
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT SECTION
      ========================================================= */}

      <section className="section contact" id="contact">
        <div
          style={{
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto 70px',
          }}
        >
          <h2
            style={{
              margin: 0,
              fontFamily: 'Manrope, Inter, Arial, sans-serif',
              fontSize: 'clamp(46px, 5vw, 72px)',
              fontWeight: 500,
              lineHeight: 1,
              letterSpacing: '-0.055em',
              color: '#fff',
            }}
          >
            Start a conversation
          </h2>

          <p
            style={{
              maxWidth: '640px',
              margin: '20px auto 0',
              color: '#b9bcc3',
              fontSize: '17px',
              lineHeight: 1.7,
            }}
          >
            Tell us about your project
          </p>
        </div>

        <div className="container contact-layout">
          {/* CONTACT DETAILS */}
          <div className="contact-details">
            <div className="contact-item">
              <span>Address</span>
              <p>
                Plot No. 95, Kohka-Junwani Mall Road, Bhilai,
                Chhattisgarh – India
              </p>
            </div>

            <div className="contact-item">
              <span>Phone</span>
              <p>
                <a href="tel:+917883555709">
                  +91-788-355-5709
                </a>
              </p>
            </div>

            <div className="contact-item">
              <span>Email</span>
              <p>
                <a href="mailto:varun@truelip.in">
                  varun@truelip.in
                </a>
              </p>
            </div>

            <a
              className="whatsapp"
              href="https://wa.me/918770217959"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp ↗
            </a>
          </div>

          {/* ENQUIRY FORM */}
          <form
            className="form-card"
            onSubmit={handleSubmit}
          >
             {status === 'success' && (
              <div
                style={{
                  marginTop: '18px',
                  padding: '13px 16px',
                  background: '#edf8f1',
                  color: '#237a47',
                  fontSize: '14px',
                  lineHeight: 1.5,
                }}
              >
                Thank you. Your enquiry has been sent successfully.
              </div>
            )}

            {status === 'error' && (
              <div
                style={{
                  marginTop: '18px',
                  padding: '13px 16px',
                  background: '#fff0f0',
                  color: '#bb3636',
                  fontSize: '14px',
                  lineHeight: 1.5,
                }}
              >
                Unable to send your enquiry. Please try again.
              </div>
            )}
            <h3>Request a free assessment</h3>

            <div className="form-row">
              <div className="field">
                <label>Name</label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="field">
                <label>Organisation</label>

                <input
                  type="text"
                  name="organisation"
                  value={formData.organisation}
                  onChange={handleChange}
                  placeholder="Company / Institution"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label>Phone</label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>

              <div className="field">
                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="field">
              <label>Service required</label>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select a service
                </option>

                <option value="Building Automation System">
                  Building Automation System
                </option>

                <option value="Access Control & Biometrics">
                  Access Control & Biometrics
                </option>

                <option value="Industrial Operations Automation">
                  Industrial Operations Automation
                </option>

                <option value="Custom Software Development">
                  Custom Software Development
                </option>

                <option value="Home Automation">
                  Home Automation
                </option>

                <option value="Network & Communications">
                  Network & Communications
                </option>
              </select>
            </div>

            <div className="field">
              <label>Project details</label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                placeholder="Tell us about your requirement"
              />
            </div>

            <button
              className="submit"
              type="submit"
              disabled={sending}
            >
              {sending ? 'Sending...' : 'Send enquiry'}
            </button>

            <div className="form-note">
              We typically respond within 24 hours.
            </div>
          </form>
        </div>
      </section>
    </PageShell>
  )
}