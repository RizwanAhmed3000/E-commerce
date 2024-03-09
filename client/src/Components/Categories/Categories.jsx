import { Link } from 'react-router-dom'
import './categories.scss'

const Categories = () => {
    return (
        <div className='categories'>
            <div className="col">
                <div className="row">
                    <img src="/images/Accessories.jpg" alt="" />
                    <Link className='link' to='/products/sale'>
                        Sale
                    </Link>
                </div>
                <div className="row">
                    <img src="/images/Women.jpg" alt="" />
                    <Link className='link' to='/products/women'>
                        Women
                    </Link>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img src="/images/NewArrivals.jpg" alt="" />
                    <Link className='link' to='/products/newarrivals'>
                        New Arrivals
                    </Link>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="/images/Mens.jpg" alt="" />
                            <Link className='link' to='/products/mens'>
                                Mens
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="/images/Shoes.jpg" alt="" />
                            <Link className='link' to='/products/shoes'>
                                Shoes
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src="/images/bags.jpg" alt="" />
                    <Link className='link' to='/products/bags'>
                        Bags
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Categories