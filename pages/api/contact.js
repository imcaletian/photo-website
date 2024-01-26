import formData from 'form-data'
import Mailgun from 'mailgun.js'

const API_KEY = process.env.MAILGUN_API_KEY || '';
const DOMAIN = process.env.MAILGUN_DOMAIN || '';


export default async function handler(req, res){
console.log(req.body)
const mailgun = new Mailgun(formData)
const client = mailgun.client({username: 'api', key: API_KEY})

const { name, email, message } = req.body

const messageData = {
  from: 'Contact Form Update<contact@sandbox42fbbb562472456cb39c59b5ca9b76cb.mailgun.org>',
  to: 'cale@caletian.com',
  subject: `New Contact Form from ${name}!`,
  text: `
  Hello,

  You have a new form entry from: ${name} ${email}.

  ${message}
  `
};

try {
    const emailRes = await client.messages.create(DOMAIN, messageData)
} catch (err) {
    console.error(`${err}, Error sending email`)
}

 res.status(200).json({ submitted: true })

}