import Stripe from "stripe";
const stripe = Stripe(process.env.STRIPE_KEY)

export const paymentHandler = async (req, res, next) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    price: "price_1OiwbHEc1DlORO9kmEBm9SdM",
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${req.protocol}://${req.get('host')}?success=true`,
            cancel_url: `${req.protocol}://${req.get('host')}?canceled=true`,
        })
    
        res.status(200).send({
            status: "success",
            data: session
        })
    } catch (error) {
        next(error)
    }
};