import { useState } from 'react'
import './product.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Product = () => {
    const [image, setImage] = useState(0)
    const [quantity, setQuantity] = useState(1)

    const images = [
        "/images/product_03.jpg",
        "/images/product_08.jpg",
        "/images/product_07.jpg",
    ]
    return (
        <div className='product'>
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt="1" className="one" onClick={e => setImage(0)} />
                    <img src={images[1]} alt="2" className="two" onClick={e => setImage(1)} />
                </div>
                <div className="mainImg">
                    <img src={images[image]} alt="3" />
                </div>
            </div>
            <div className="right">
                <h2 className='title'>Long Sleeves Shirt</h2>
                <span className='price'>$45</span>
                <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam inventore, praesentium suscipit libero est molestias quos. Quo ipsa laborum aliquid, quidem ducimus adipisci rem autem fugit, consequuntur voluptatum totam! Facere!</p>
                <div className="quantity">
                    <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                </div>
                <button className='addToCart'>
                    <AddShoppingCartIcon />ADD TO CART
                </button>

                <div className="links">
                    <div className="item">
                        <FavoriteBorderIcon /> ADD TO FAVORITE
                    </div>
                    <div className="item">
                        <AccountBalanceWalletIcon /> ADD TO COMPARE
                    </div>
                </div>
                <div className="info">
                    <span>Vendor: name</span>
                    <span>Product type: name</span>
                    <span>Tags: name</span>
                </div>
                <hr />
                <div className="details">
                    <span>Description</span>
                    <hr />
                    <span>Additional information</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    )
}

export default Product