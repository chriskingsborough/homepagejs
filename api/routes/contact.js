const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
// const creds = require('./config');

const transport = {
    host: 'smtp.example.com', // Don’t forget to replace with the SMTP host of your provider
    port: 587,
    auth: {
        // TODO: MAKE SURE YOU REMOVE THESE HARDCODES
        // user: creds.USER,
        // pass: creds.PASS
        user: '',
        pass: ''
  }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  const name = req.body.name
  const email = req.body.email
  const message = req.body.message
  const content = `name: ${name} \n email: ${email} \n message: ${message} `

  const mail = {
    from: name,
    to: 'chrisdkingsborough@gmail.com',  // Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})

module.exports = router;