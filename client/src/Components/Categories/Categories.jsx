import { Link } from 'react-router-dom'
import './categories.scss'

const Categories = () => {
    return (
        <div className='categories'>
            <div className="col">
                <div className="row">
                    <img src="/images/Accessories.jpg" alt="" />
                    <Link className='link' to='/products/1'>
                        Sale
                    </Link>
                </div>
                <div className="row">
                    <img src="/images/Women.jpg" alt="" />
                    <Link className='link' to='/products/2'>
                        Women
                    </Link>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img src="/images/NewArrivals.jpg" alt="" />
                    <Link className='link' to='/products/3'>
                        New Arrivals
                    </Link>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="/images/Mens.jpg" alt="" />
                            <Link className='link' to='/products/4'>
                                Mens
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="/images/Shoes.jpg" alt="" />
                            <Link className='link' to='/products/5'>
                                Shoes
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src="/images/bags.jpg" alt="" />
                    <Link className='link' to='/products/6'>
                        Bags
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Categories