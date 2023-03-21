const nodemailer = require('nodemailer');
// const transport = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'fivertanmoy@gmail.com',
//     pass: 'TRISHan123',
//   },
// });

const transport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER_EMAIL,
    pass: process.env.SMTP_USER_PASSWORD,
  },
});

module.exports = transport;
