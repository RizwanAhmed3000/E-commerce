import Stripe from "stripe";
const stripe = Stripe(process.env.STRIPE_KEY)

export const paymentHandler = async (req, res, next) => {
    const products = [
        {
            _id: "asgt1235fasghaj2632",
            amount: 500,
            name: "PS4",
            quantity: 1
        },
        {
            _id: "12376asdj73ehda",
            amount: 200,
            name: "PS3",
            quantity: 2
        }
    ]
    const line_items = products.map((product) => (
        {
            price_data: {
                currency: "usd",
                product_data: {
                    name: product.name,
                },
                unit_amount: Math.round(product.amount * 100),
            },
            quantity: product.quantity
        }
    ))
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items,
            mode: 'payment',
            success_url: `${req.protocol}://${req.get('host')}?success=true`,
            cancel_url: `${req.protocol}://${req.get('host')}?canceled=true`,
        })

        res.status(200).send({
            status: "success",
            data: session,
            id: session._id
        })
    } catch (error) {
        next(error)
    }
};