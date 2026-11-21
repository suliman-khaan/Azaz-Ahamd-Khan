import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import nodemailer from 'nodemailer'

function emailDevServerPlugin(): Plugin {
  return {
    name: 'email-dev-server',
    configureServer(server) {
      server.middlewares.use('/api/send-email', (req, res) => {
        if (req.method === 'OPTIONS') {
          res.setHeader('Access-Control-Allow-Origin', '*')
          res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
          res.statusCode = 200
          res.end()
          return
        }

        if (req.method !== 'POST') {
          res.statusCode = 405
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Method not allowed. Use POST.' }))
          return
        }

        let body = ''
        req.on('data', (chunk) => {
          body += chunk
        })

        req.on('end', async () => {
          try {
            const data = JSON.parse(body || '{}')
            const gmailUser = process.env.GMAIL_USER || process.env.GMAIL_EMAIL
            const gmailPass = process.env.GMAIL_PASS || process.env.GMAIL_APP_PASSWORD
            const chambersEmail = process.env.NOTIFICATION_RECEIVER || 'tax@azazassociatesllp.com'
            const ref = data.ref || 'AZ-' + Math.floor(100000 + Math.random() * 900000)

            console.log(`[Vite Dev Email] Processing ${data.type || 'consultation'} request for:`, data.name)

            if (gmailUser && gmailPass) {
              const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: { user: gmailUser, pass: gmailPass }
              })
              await transporter.sendMail({
                from: `"Azaz & Associates Concierge" <${gmailUser}>`,
                to: chambersEmail,
                subject: `[Chambers Consultation Request] ${ref} — ${data.name || 'Client'} (${data.service || 'Advisory'})`,
                html: `
                  <div style="font-family: sans-serif; padding: 20px; background: #0A0B0E; color: #FFF; border: 1px solid #B89146;">
                    <h2 style="color: #D4B062;">New Consultation Request: ${ref}</h2>
                    <p><strong>Client:</strong> ${data.name}</p>
                    <p><strong>Phone:</strong> ${data.phone}</p>
                    <p><strong>Email:</strong> ${data.email || 'None'}</p>
                    <p><strong>Service:</strong> ${data.service}</p>
                    <p><strong>Office:</strong> ${data.office}</p>
                    <p><strong>Date:</strong> ${data.date}</p>
                    <p><strong>Brief:</strong> ${data.brief}</p>
                  </div>
                `
              })
              console.log('[Vite Dev Email] Dispatched to Gmail inbox!')
            } else {
              console.log(
                '[Vite Dev Email] Live delivery ready. Set GMAIL_USER and GMAIL_PASS in Vercel to transmit live emails.'
              )
            }

            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(
              JSON.stringify({
                success: true,
                ref,
                message:
                  gmailUser && gmailPass
                    ? 'Consultation request emailed to chambers inbox.'
                    : 'Inquiry received. Live Gmail dispatch will activate when GMAIL_USER and GMAIL_PASS are configured on Vercel.'
              })
            )
          } catch (err: unknown) {
            console.error('[Vite Dev Email Error]', err)
            const errorMsg = err instanceof Error ? err.message : 'Error processing email'
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: errorMsg }))
          }
        })
      })
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    emailDevServerPlugin()
  ],
})
