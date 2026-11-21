import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

interface ConsultationPayload {
  type?: 'consultation' | 'career'
  name: string
  phone?: string
  email?: string
  office?: string
  service?: string
  date?: string
  brief?: string
  ref?: string
  // Career fields
  role?: string
  city?: string
  statement?: string
}

function escapeHtml(str: string = ''): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' })
  }

  try {
    const data: ConsultationPayload = req.body || {}
    const {
      type = 'consultation',
      name,
      phone = 'Not provided',
      email = '',
      office = 'Swat & Islamabad Chambers',
      service = 'Legal / Tax / Corporate Advisory',
      date = 'Flexible',
      brief = '',
      ref = 'AZ-' + Math.floor(100000 + Math.random() * 900000),
      role = '',
      city = '',
      statement = ''
    } = data

    if (!name || name.trim().length === 0) {
      return res.status(400).json({ error: 'Applicant/Client name is required.' })
    }

    const gmailUser = process.env.GMAIL_USER || process.env.GMAIL_EMAIL
    const gmailPass = process.env.GMAIL_PASS || process.env.GMAIL_APP_PASSWORD
    const chambersEmail = process.env.NOTIFICATION_RECEIVER || 'tax@azazassociatesllp.com'

    // If Gmail credentials are not yet added to Vercel environment variables,
    // log to function console and return a graceful success response.
    if (!gmailUser || !gmailPass) {
      console.warn(
        '[Chambers Mailer] GMAIL_USER or GMAIL_PASS environment variable is missing on Vercel. Simulating delivery.'
      )
      return res.status(200).json({
        success: true,
        simulated: true,
        ref,
        message:
          'Consultation inquiry logged successfully. (Notice: Add GMAIL_USER and GMAIL_PASS in Vercel Project Settings > Environment Variables for real Gmail delivery).'
      })
    }

    // Configure Nodemailer with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass
      }
    })

    const isCareer = type === 'career'
    const subject = isCareer
      ? `[Career Application] ${name} — ${role || 'Legal Associate'} (${ref})`
      : `[Chambers Consultation Request] ${ref} — ${name} (${service})`

    const htmlContent = isCareer
      ? `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; background: #0A0B0E; color: #FAF8F4; border: 1px solid #B89146; padding: 28px;">
        <div style="border-bottom: 2px solid #B89146; padding-bottom: 16px; margin-bottom: 20px;">
          <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #D4B062; font-weight: 600;">Azaz &amp; Associates LLP &bull; Careers Desk</div>
          <h2 style="margin: 8px 0 4px 0; font-size: 22px; color: #FFFFFF; font-weight: 500;">New Candidate Application</h2>
          <div style="font-size: 12px; color: #A0A5B0;">Reference ID: <strong style="color: #D4B062;">${escapeHtml(ref)}</strong></div>
        </div>

        <table style="width: 100%; border-collapse: collapse; font-size: 13px; line-height: 1.6; margin-bottom: 24px;">
          <tr>
            <td style="padding: 8px 0; color: #A0A5B0; width: 140px; border-bottom: 1px solid #1E232C;">Applicant Name:</td>
            <td style="padding: 8px 0; color: #FAF8F4; font-weight: 600; border-bottom: 1px solid #1E232C;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #A0A5B0; border-bottom: 1px solid #1E232C;">Role Applied:</td>
            <td style="padding: 8px 0; color: #D4B062; font-weight: 600; border-bottom: 1px solid #1E232C;">${escapeHtml(role || 'Not specified')}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #A0A5B0; border-bottom: 1px solid #1E232C;">Email:</td>
            <td style="padding: 8px 0; color: #FAF8F4; border-bottom: 1px solid #1E232C;"><a href="mailto:${escapeHtml(email)}" style="color: #D4B062; text-decoration: none;">${escapeHtml(email)}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #A0A5B0; border-bottom: 1px solid #1E232C;">Preferred Office:</td>
            <td style="padding: 8px 0; color: #FAF8F4; border-bottom: 1px solid #1E232C;">${escapeHtml(city || 'Swat / Islamabad')}</td>
          </tr>
        </table>

        ${
          statement
            ? `
          <div style="background: #14171F; border: 1px solid rgba(184, 145, 70, 0.3); padding: 16px; margin-bottom: 24px;">
            <div style="font-size: 11px; text-transform: uppercase; color: #D4B062; font-weight: 600; margin-bottom: 6px;">Statement / Experience Summary:</div>
            <p style="margin: 0; font-size: 13px; color: #ECE6DA; white-space: pre-line;">${escapeHtml(statement)}</p>
          </div>
        `
            : ''
        }

        <div style="font-size: 11px; color: #7B8290; border-top: 1px solid #1E232C; padding-top: 14px; text-align: center;">
          Sent securely via Azaz &amp; Associates LLP Web Concierge &bull; Swat &amp; Islamabad, Pakistan
        </div>
      </div>
    `
      : `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; background: #0A0B0E; color: #FAF8F4; border: 1px solid #B89146; padding: 28px;">
        <div style="border-bottom: 2px solid #B89146; padding-bottom: 16px; margin-bottom: 20px;">
          <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #D4B062; font-weight: 600;">Azaz &amp; Associates LLP &bull; Consultation Desk</div>
          <h2 style="margin: 8px 0 4px 0; font-size: 22px; color: #FFFFFF; font-weight: 500;">New Consultation Request</h2>
          <div style="font-size: 12px; color: #A0A5B0;">Reference ID: <strong style="color: #D4B062;">${escapeHtml(ref)}</strong></div>
        </div>

        <table style="width: 100%; border-collapse: collapse; font-size: 13px; line-height: 1.6; margin-bottom: 24px;">
          <tr>
            <td style="padding: 8px 0; color: #A0A5B0; width: 140px; border-bottom: 1px solid #1E232C;">Client Name:</td>
            <td style="padding: 8px 0; color: #FAF8F4; font-weight: 600; border-bottom: 1px solid #1E232C;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #A0A5B0; border-bottom: 1px solid #1E232C;">Phone / WhatsApp:</td>
            <td style="padding: 8px 0; color: #D4B062; font-weight: 600; border-bottom: 1px solid #1E232C;">
              <a href="tel:${escapeHtml(phone)}" style="color: #D4B062; text-decoration: none;">${escapeHtml(phone)}</a>
              &nbsp;|&nbsp;
              <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" style="color: #4ADE80; text-decoration: none;">WhatsApp Chat &rarr;</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #A0A5B0; border-bottom: 1px solid #1E232C;">Email:</td>
            <td style="padding: 8px 0; color: #FAF8F4; border-bottom: 1px solid #1E232C;">
              ${email ? `<a href="mailto:${escapeHtml(email)}" style="color: #D4B062; text-decoration: none;">${escapeHtml(email)}</a>` : 'Not provided'}
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #A0A5B0; border-bottom: 1px solid #1E232C;">Service Requested:</td>
            <td style="padding: 8px 0; color: #FAF8F4; font-weight: 600; border-bottom: 1px solid #1E232C;">${escapeHtml(service)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #A0A5B0; border-bottom: 1px solid #1E232C;">Preferred Office:</td>
            <td style="padding: 8px 0; color: #FAF8F4; border-bottom: 1px solid #1E232C;">${escapeHtml(office)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #A0A5B0; border-bottom: 1px solid #1E232C;">Target Date:</td>
            <td style="padding: 8px 0; color: #FAF8F4; border-bottom: 1px solid #1E232C;">${escapeHtml(date)}</td>
          </tr>
        </table>

        <div style="background: #14171F; border: 1px solid rgba(184, 145, 70, 0.3); padding: 16px; margin-bottom: 24px;">
          <div style="font-size: 11px; text-transform: uppercase; color: #D4B062; font-weight: 600; margin-bottom: 6px;">Case Overview / Matter Brief:</div>
          <p style="margin: 0; font-size: 13px; color: #ECE6DA; white-space: pre-line;">${escapeHtml(brief || 'No preliminary notes provided.')}</p>
        </div>

        <div style="margin-bottom: 20px; text-align: center;">
          <a href="mailto:${email || chambersEmail}?subject=Re:%20Consultation%20Request%20${escapeHtml(ref)}" style="display: inline-block; padding: 10px 24px; background: #B89146; color: #0A0B0E; text-decoration: none; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
            Reply to Client
          </a>
        </div>

        <div style="font-size: 11px; color: #7B8290; border-top: 1px solid #1E232C; padding-top: 14px; text-align: center;">
          Sent securely via Azaz &amp; Associates LLP Web Concierge &bull; Swat &amp; Islamabad, Pakistan
        </div>
      </div>
    `

    // 1. Send notification to Chambers
    await transporter.sendMail({
      from: `"Azaz & Associates Concierge" <${gmailUser}>`,
      to: chambersEmail,
      replyTo: email || chambersEmail,
      subject,
      html: htmlContent
    })

    // 2. If client provided an email address, send them an instant confirmation receipt
    if (email && email.includes('@')) {
      const clientConfirmationHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0A0B0E; color: #FAF8F4; border: 1px solid #B89146; padding: 28px;">
          <div style="border-bottom: 2px solid #B89146; padding-bottom: 16px; margin-bottom: 20px;">
            <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #D4B062; font-weight: 600;">Azaz &amp; Associates LLP &bull; Legal, Tax &amp; Corporate Consultants</div>
            <h2 style="margin: 8px 0 4px 0; font-size: 22px; color: #FFFFFF; font-weight: 500;">Consultation Request Received</h2>
            <div style="font-size: 12px; color: #A0A5B0;">Reference: <strong style="color: #D4B062;">${escapeHtml(ref)}</strong></div>
          </div>

          <p style="font-size: 14px; line-height: 1.6; color: #ECE6DA;">
            Dear <strong>${escapeHtml(name)}</strong>,
          </p>
          <p style="font-size: 13px; line-height: 1.6; color: #ECE6DA;">
            Thank you for reaching out to <strong>Azaz &amp; Associates LLP</strong>. We have received your preliminary consultation request regarding <strong>${escapeHtml(service)}</strong> at our <strong>${escapeHtml(office)}</strong>.
          </p>
          <p style="font-size: 13px; line-height: 1.6; color: #ECE6DA;">
            Our legal and tax advisory team is reviewing your requirements and will reach out to you via phone or WhatsApp at <strong>${escapeHtml(phone)}</strong> shortly.
          </p>

          <div style="background: #14171F; border: 1px solid rgba(184, 145, 70, 0.3); padding: 14px; margin: 20px 0; font-size: 12px; color: #D4B062;">
            Need immediate assistance? You can reach our chambers directly on WhatsApp:
            <br />
            <a href="https://wa.me/923349343675" style="color: #4ADE80; font-weight: 600; text-decoration: none;">+92 334 9343675</a>
            &bull;
            <a href="https://wa.me/923125113675" style="color: #4ADE80; font-weight: 600; text-decoration: none;">+92 312 5113675</a>
          </div>

          <div style="font-size: 11px; color: #7B8290; border-top: 1px solid #1E232C; padding-top: 14px; text-align: center;">
            &copy; ${new Date().getFullYear()} Azaz &amp; Associates LLP. Swat &amp; Islamabad, Pakistan.
          </div>
        </div>
      `

      try {
        await transporter.sendMail({
          from: `"Azaz & Associates LLP" <${gmailUser}>`,
          to: email,
          subject: `Consultation Request Received [${ref}] — Azaz & Associates LLP`,
          html: clientConfirmationHtml
        })
      } catch (clientMailErr) {
        console.warn('[Chambers Mailer] Client auto-reply delivery failed:', clientMailErr)
      }
    }

    return res.status(200).json({
      success: true,
      ref,
      message: 'Consultation request sent successfully to chambers.'
    })
  } catch (err: unknown) {
    console.error('[Chambers Mailer Error]', err)
    const errorMsg = err instanceof Error ? err.message : 'Unknown email transmission error'
    return res.status(500).json({
      error: 'Failed to dispatch email.',
      details: errorMsg
    })
  }
}
