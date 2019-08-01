const express = require('express');
const webpush = require('web-push');

const publicVapidKey = 'BIQiDoTRUri_-ErZgGZuu2lvieBikhWhMhU0zFBrCsZ_mCB_AwPZRzDMQWo-83rdQoyX3cNmRPLADQ-ExxO0IB0';
const privateVapidKey = '9hsR0b8gU4Cc0T_OXbohGvFumHBAnsaAVjuoEvHmhl4';

// Replace with your email
webpush.setVapidDetails('mailto:ktpm489@gmail.com', publicVapidKey, privateVapidKey);

const app = express();

app.use(require('body-parser').json());

app.post('/subscribe', (req, res) => {
  const subscription = req.body;
  res.status(201).json({});
  const payload = JSON.stringify({ title: 'test' });

  console.log('subscription',subscription);

  webpush.sendNotification(subscription, payload).catch(error => {
    console.error(error.stack);
  });
});

app.use(require('express-static')('./'));

app.listen(3002);
