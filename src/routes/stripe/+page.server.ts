import Stripe from 'stripe';
import { STRIPE_SECRET_KEY } from '$env/static/private';
import type { Actions } from "./$types";

export const stripe = new Stripe(STRIPE_SECRET_KEY, {
    apiVersion: '2022-08-01'
});

export const actions: Actions = {
    default: async ({request, url}) => {
        const req = await request.formData();

        const priceId = req.get('priceId');

        if (typeof priceId !== 'string') {
            return {
                status: 400,
                body: JSON.stringify({
                    error: {
                        message: 'priceId is required'
                    }
                })
            };
        }

        try {
            const session = await stripe.checkout.sessions.create({
                mode: 'payment',
                line_items: [{
                    price: priceId,
                    quantity: 1
                }],
                // TODO create proper endpoints
                success_url: `http://${url.host}/`,
                cancel_url: `http://${url.host}/`
            });

            return {
                status: 200,
                headers: {},
                body: JSON.stringify({
                    sessionId: session.id 
                })
            };
        } catch (error) {
            return {
                status: 500,
                headers: {},
                body: JSON.stringify({
                    error: error
                })
            };
        }
    }
}