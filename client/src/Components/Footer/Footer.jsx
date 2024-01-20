import './footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="top">
                <div className="item">
                    <h1>
                        Categories
                    </h1>
                    <span>Men</span>
                    <span>Women</span>
                    <span>Children</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>
                <div className="item">
                    <h1>
                        Links
                    </h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, fuga dignissimos ad rerum maiores deserunt laboriosam dolorum? Laudantium earum molestias eum! Sapiente omnis non deleniti dolores commodi, ex recusandae maxime?</span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero voluptatem ut ab, explicabo nulla sequi repudiandae culpa asperiores officia saepe repellendus delectus minus quibusdam voluptate ipsa nostrum, atque at velit.</span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">E-Commerce</span>
                    <span className="copyright">© Copyright 2024. All Rights Reserved</span>
                </div>
                <div className="right">
                    <img src="/images/payment.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer