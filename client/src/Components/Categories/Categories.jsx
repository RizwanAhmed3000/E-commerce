import { Link } from 'react-router-dom'
import './categories.scss'

const Categories = () => {
    return (
        <div className='categories'>
            <div className="col">
                <div className="row">
                    <img src="/images/Accessories.jpg" alt="" />
                    <button>
                        <Link className='link' to='/products/1'>
                            Sale
                        </Link>
                    </button>
                </div>
                <div className="row">
                    <img src="/images/Women.jpg" alt="" />
                    <button>
                        <Link className='link' to='/products/2'>
                            Women
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img src="/images/NewArrivals.jpg" alt="" />
                    <button>
                        <Link className='link' to='/products/3'>
                            New Arrivals
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="/images/Mens.jpg" alt="" />
                            <button>
                                <Link className='link' to='/products/4'>
                                    Mens
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="/images/Shoes.jpg" alt="" />
                            <button>
                                <Link className='link' to='/products/5'>
                                    Shoes
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src="/images/bags.jpg" alt="" />
                    <button>
                        <Link className='link' to='/products/6'>
                            Bags
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categories