/* eslint-disable camelcase */
import { NextApiRequest, NextApiResponse } from 'next';

import { formatAmountForStripe } from '../../../../stripe/stripe-helpers';

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2020-08-27' });

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === 'POST') {
    const { amount, userId }: { amount: number; userId: string } = req.body;
    console.log('amount', formatAmountForStripe(amount, 'eur'));
    try {
      const params: Stripe.PaymentIntentCreateParams = {
        payment_method_types: ['card'],
        confirm: false, //can be set to false,
        // customer: userId,
        amount: formatAmountForStripe(amount, 'eur'),
        currency: 'eur',
      };
      console.log('params', params);

      const payment_intent: Stripe.PaymentIntent = await stripe.paymentIntents.create(params);

      console.log('yes');
      res.status(200).json(payment_intent);
    } catch (err) {
      console.log('no 1');
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
