import express from 'express'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import process from 'node:process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

dotenv.config()

const app = express()

app.use(express.json())
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const transporter = nodemailer.createTransport({
  host: '://hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
})

app.post('/api/send-enquiry', async (req, res) => {
  try {
    const {
      name,
      organisation,
      phone,
      email,
      service,
      message,
    } = req.body

    if (!name || !email || !phone || !service || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please complete all required fields.',
      })
    }

    /* =========================================================
       1. FIRST EMAIL — SEND ENQUIRY TO TRUELIP
       ========================================================= */
    await transporter.sendMail({
      from: `"Truelip Website" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `New enquiry — ${service} — ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;padding:30px;background:#f4f4f4;">
          <div style="max-width:650px;margin:auto;background:#ffffff;padding:30px;">
            <h2>New Website Enquiry</h2>
            <p><strong>Name:</strong><br/>${name}</p>
            <p><strong>Organisation:</strong><br/>${organisation || 'Not provided'}</p>
            <p><strong>Phone:</strong><br/>${phone}</p>
            <p><strong>Email:</strong><br/>${email}</p>
            <p><strong>Service:</strong><br/>${service}</p>
            <p><strong>Project Details:</strong><br/>${message}</p>
          </div>
        </div>
      `,
    })

    /* =========================================================
       2. ACKNOWLEDGEMENT EMAIL
       ========================================================= */
    await transporter.sendMail({
      from: `"Truelip Technocrates" <${process.env.MAIL_USER}>`,
      to: email,
      replyTo: process.env.MAIL_TO,
      subject: 'Thank you for contacting Truelip Technocrates',
      attachments: [
        {
          filename: 'truelip-logo.jpg',
          // FIXED PATH: Uses __dirname to look directly inside your local assets folder safely
          path: path.join(__dirname, 'assets', 'truelip-logo.jpg'),
          cid: 'truelip-logo',
        },
      ],
      html: `
        <!DOCTYPE html>
        <html>
          <body style="margin:0;padding:0;background:#f4f4f2;font-family:Arial, Helvetica, sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f2;">
              <tr>
                <td align="center" style="padding:45px 18px;">
                  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:650px;background:#ffffff;border-collapse:collapse;">
                    <!-- LOGO -->
                    <tr>
                      <td align="center" style="padding:32px 30px 24px;">
                        <img src="cid:truelip-logo" alt="Truelip Technocrates" width="180" style="display:block;width:180px;max-width:100%;height:auto;" />
                      </td>
                    </tr>
                    <!-- DARK HEADER -->
                    <tr>
                      <td align="center" style="background:#111318;padding:42px 40px;color:#ffffff;">
                        <div style="color:#9da1aa;font-size:11px;letter-spacing:.17em;text-transform:uppercase;margin-bottom:16px;">Enquiry Received</div>
                        <h1 style="margin:0;font-size:34px;line-height:1.15;font-weight:500;">Thank you, ${name}.</h1>
                        <p style="margin:18px auto 0;max-width:500px;color:#c4c7cd;font-size:15px;line-height:1.7;">We’ve received your enquiry and our team will review your requirements carefully.</p>
                      </td>
                    </tr>
                    <!-- BODY -->
                    <tr>
                      <td style="padding:38px 40px;color:#34373c;">
                        <p style="margin:0 0 20px;font-size:16px;line-height:1.75;">Dear ${name},</p>
                        <p style="margin:0 0 24px;font-size:15px;line-height:1.8;color:#565a61;">Thank you for reaching out to <strong>Truelip Technocrates</strong>. Your enquiry regarding <strong>${service}</strong> has been successfully received.</p>
                        <p style="margin:0 0 30px;font-size:15px;line-height:1.8;color:#565a61;">Our team will review the information you shared and connect with you to understand your requirements in greater detail. We typically respond within 24 hours.</p>
                        <!-- SUMMARY -->
                        <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f7f5;border-collapse:collapse;">
                          <tr>
                            <td style="padding:24px 26px;">
                              <div style="color:#8a8e95;font-size:11px;letter-spacing:.12em;text-transform:uppercase;margin-bottom:16px;">Your enquiry</div>
                              <div style="font-size:14px;line-height:1.8;color:#34373c;">
                                <strong>Service</strong><br/>${service}<br/><br/>
                                <strong>Organisation</strong><br/>${organisation || 'Not provided'}
                              </div>
                            </td>
                          </tr>
                        </table>
                        <p style="margin:30px 0 0;color:#565a61;font-size:15px;line-height:1.8;">If you would like to add anything to your enquiry, simply reply to this email and our team will receive your message.</p>
                        <p style="margin:30px 0 0;font-size:15px;line-height:1.7;">Warm regards,<br/><strong>Team Truelip Technocrates</strong><br/><span style="color:#747880;">Software · Automation · Integrated Technology</span></p>
                      </td>
                    </tr>
                    <!-- FOOTER -->
                    <tr>
                      <td align="center" style="background:#0b0c0f;padding:28px 30px;color:#858990;">
                        <div style="color:#ffffff;font-size:13px;margin-bottom:8px;">Truelip Technocrates</div>
                        <div style="font-size:12px;line-height:1.7;">Plot No. 95, Kohka-Junwani Mall Road<br/>Bhilai, Chhattisgarh – India</div>
                        <div style="margin-top:12px;font-size:12px;">+91-788-355-5709&nbsp;·&nbsp;${process.env.MAIL_USER}</div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    })

    return res.status(200).json({
      success: true,
      message: 'Enquiry sent successfully.',
    })

  } catch (error) {
    console.error('EMAIL ERROR:', error)
    return res.status(500).json({
      success: false,
      message: 'Unable to send enquiry.',
    })
  }
})

// FRONTEND ROUTING SETUP
const distPath = path.join(__dirname, '../dist')
app.use(express.static(distPath))

app.use((req, res, next) => {
  if (req.path.startsWith('/api/')) {
    return next()
  }
  if (req.method === 'GET') {
    return res.sendFile(path.join(distPath, 'index.html'))
  }
  next()
})

const PORT = process.env.PORT || 3000

// FIXED SYNTAX: Removed the trailing empty parentheses ()
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Truelip server running on port ${PORT}`)
})
