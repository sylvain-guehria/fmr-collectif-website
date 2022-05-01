/* eslint-disable camelcase */
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create({
                line_items: [
                    {
                        price: process.env.ENV === 'production' ? 'price_1KudjQLLXsEpBiGzjXclyy7A' : 'price_1KudewLLXsEpBiGziNC98dlT',
                        quantity: 1
                    }
                ],
                mode: 'payment',
                success_url: `${req.headers.origin}/become-ambassador/?success=true`,
                cancel_url: `${req.headers.origin}/become-ambassador/?canceled=true`
            });
            res.redirect(303, session.url);
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}