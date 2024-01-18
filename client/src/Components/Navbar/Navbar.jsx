import './navbar.scss';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="left">
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
                    <div className="item">
                        Home
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
                    <div className="item">
                        <SearchIcon className='icon' />
                    </div>
                    <div className="item">
                        <PersonOutlineOutlinedIcon className='icon' />
                    </div>
                    <div className="item">
                        <FavoriteBorderOutlinedIcon className='icon' />
                    </div>
                    <div className="item">
                        <div className="cartIcon">
                            <ShoppingCartOutlinedIcon className='icon' />
                            <span className='counter'>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar