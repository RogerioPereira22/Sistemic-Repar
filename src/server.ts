import express from 'express';
import payload from 'payload';
import nodemailerSendgrid from 'nodemailer-sendgrid';

require('dotenv').config();
const app = express();

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

const sendGridAPIKey = process.env.SENDGRID_API_KEY;

const sendgridConfig = {
  transportOptions: nodemailerSendgrid({
    apiKey: sendGridAPIKey,
  }),
};

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express: app,
    email: {
      fromName: 'Reparo sistemico',
      fromAddress: 'rogeriojr2116@gmail.com',
      ...sendgridConfig,
    },
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here
 const port = process.env.PORT
 const port2 = process.env.PORT2
  app.listen(port || port2, async () => {
    payload.logger.info(`Server listening on port ${process.env.PORT}`);
  });
}

start();
