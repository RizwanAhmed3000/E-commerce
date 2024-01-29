import { Link } from 'react-router-dom'
import './categories.scss'

const Categories = () => {
    return (
        <div className='categories'>
            <div className="col">
                <div className="row">
                    <img src="/images/Accessories.jpg" alt="" />
                    <Link className='link' to='/products/1'>
                        <button>
                            Sale
                        </button>
                    </Link>
                </div>
                <div className="row">
                    <img src="/images/Women.jpg" alt="" />
                    <Link className='link' to='/products/2'>
                        <button>
                            Women
                        </button>
                    </Link>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img src="/images/NewArrivals.jpg" alt="" />
                    <Link className='link' to='/products/3'>
                        <button>
                            New Arrivals
                        </button>
                    </Link>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="/images/Mens.jpg" alt="" />
                            <Link className='link' to='/products/4'>
                                <button>
                                    Mens
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="/images/Shoes.jpg" alt="" />
                            <Link className='link' to='/products/5'>
                                <button>
                                    Shoes
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src="/images/bags.jpg" alt="" />
                    <Link className='link' to='/products/6'>
                        <button>
                            Bags
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Categories