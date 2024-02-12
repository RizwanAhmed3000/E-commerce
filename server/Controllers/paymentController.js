import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_KEY)

export const paymentHandler = async (req, res, next) => {
    const session = await stripe.checkout.sessions.create({

    })
}