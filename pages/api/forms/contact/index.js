import nextConnect from 'next-connect';
import nodemailer from 'nodemailer';
import middleware from '../../../../utils/middleware';

const {
  WEB_EMAIL, WEB_PASSWORD, ELEVATE_EMAIL, URL,
} = process.env;

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req, res) => {
  const {
    fullName: senderName,
    emailAddress: senderEmail,
    messageSubject: senderSubject,
    phoneNumber: senderPhone,
    message: senderMessage,
  } = req.body;

  const htmlMessage = `
      <h1>Contact message from ${URL}<h1>
      <h3>Sender name</h3>
      <p>${senderName}</p>
      <h3>Sender phone number</h3>
      <p>${senderPhone || 'not provided'}</p>
      <h3>Sender email</h3>
      <p>${senderEmail}</p>
      <h3>Message</h3>
      <p>${senderMessage}</p>
      `;
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: WEB_EMAIL,
        pass: WEB_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      to: `Elevate Steps Web <${ELEVATE_EMAIL}>`,
      replyTo: senderEmail,
      subject: `[ContactForm] ${senderSubject}`,
      html: htmlMessage,
    });

    console.log('Message sent!');
    console.log(info);
    res.status(200).json({ status: 'Success' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'failed' });
  }
});

export default handler;
