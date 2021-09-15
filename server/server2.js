import express from 'express';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});

const app = express();
app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 5000, // $50
    currency: 'usd',
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(3000, () => console.log('Running!'));
