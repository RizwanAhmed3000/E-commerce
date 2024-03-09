import './navbar.scss';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import BasicMenu from '../Menu/Menu';

const Navbar = () => {

    const [openCart, setOpenCart] = useState(false);
    const user = false;

    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="left">
                    <div className="drawer">
                        <BasicMenu side='Categories' />
                    </div>
                    <div className="item">
                        <img src="/images/flag.png" alt="" />
                        <KeyboardArrowDownOutlinedIcon />
                    </div>
                    <div className="item">
                        USD
                        <KeyboardArrowDownOutlinedIcon />
                    </div>
                    <div className="item">
                        <Link className='link' to='/products/men'>
                            Men
                        </Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/products/women'>
                            Women
                        </Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/products/children'>
                            Children
                        </Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/products/accessories'>
                            Accessories
                        </Link>
                    </div>
                </div>
                <div className="center">
                    <h2 className='logo'>
                        <Link className='link' to='/'>
                            E-commerce
                        </Link>
                    </h2>
                </div>
                <div className="right">
                    <div className="drawer">
                        <BasicMenu side='Menu' />
                    </div>
                    <div className="item">
                        <Link className='link' to='/'>
                            Home
                        </Link>
                    </div>
                    <div className="item">
                        About
                    </div>
                    <div className="item">
                        Contact
                    </div>
                    <div className="item">
                        Stores
                    </div>
                    <div className="icons">
                        <div className="item none">
                            <SearchIcon className='icon' />
                        </div>
                        <div className="item none">
                            {
                                user ? "username" : (
                                    <Link className='link' to='/login'>
                                        <PersonOutlineOutlinedIcon className='icon' />
                                    </Link>
                                )
                            }
                        </div>
                        <div className="item none">
                            <FavoriteBorderOutlinedIcon className='icon' />
                        </div>
                        <div className="item">
                            <div className="cartIcon" onClick={() => setOpenCart(!openCart)}>
                                <ShoppingCartOutlinedIcon className='icon' />
                                <span className='counter'>0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {openCart && <Cart />}
        </div>
    )
}

export default Navbar