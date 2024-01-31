import './cart.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart = () => {
    const data = [
        {
            id: 1,
            img: "/images/product_04.jpg",
            img2: "/images/product_04b.jpg",
            isNew: true,
            title: "hoddie",
            oldPrice: 75,
            newPrice: 60,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ullam praesentium unde, sint commodi laudantium quidem nisi? Distinctio sed quibusdam doloribus eligendi labore, mollitia ut quas maxime ipsa quod? Quo!"
        },
        {
            id: 2,
            img: "/images/product_07.jpg",
            img2: "/images/product_07b.jpg",
            isNew: true,
            title: "Pull over",
            oldPrice: 100,
            newPrice: 85,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ullam praesentium unde, sint commodi laudantium quidem nisi? Distinctio sed quibusdam doloribus eligendi labore, mollitia ut quas maxime ipsa quod? Quo!"
        },
    ]
    return (
        <div className='cart'>
            <h1>Products in your cart</h1>
            {data?.map(item => (
                <div className="item" key={item?.id}>
                    <img src={item?.img} alt="" />
                    <div className="details">
                        <h2>{item?.title}</h2>
                        <p>{item?.desc.substring(0, 100)}</p>
                        <div className="price">1 x ${item?.newPrice}</div>
                    </div>
                    <DeleteOutlineIcon className='delete' />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>$1234</span>
            </div>
            <button>CHECKOUT</button>
            <span className='reset'>Reset Cart</span>
        </div>
    )
}

export default Cart