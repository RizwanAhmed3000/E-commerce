import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
// import { MuiThemeProvider, createTheme } from '@mui/material/styles';

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function BasicMenu({ side }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ color: "black", fontWeight: "600", padding: "0" }}
            >
                {side}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>
                    {side === "Categories" ? (<div className="item">
                        USD
                    </div>) : (
                        <div className="item">
                            <Link className='link' to='/' style={{ textDecoration: "none", color: "inherit" }}>
                                Home
                            </Link>
                        </div>
                    )}
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    {side === "Categories" ? (<div className="item">
                        <Link className='link' style={{ textDecoration: "none", color: "inherit" }} to='/products/men'>
                            Men
                        </Link>
                    </div>) : (
                        <div className="item">
                            About
                        </div>
                    )}
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    {side === "Categories" ? (<div className="item">
                        <Link className='link' style={{ textDecoration: "none", color: "inherit" }} to='/products/women'>
                            Women
                        </Link>
                    </div>) : (
                        <div className="item">
                            Contact
                        </div>
                    )}
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    {side === "Categories" ? (<div className="item">
                        <Link className='link' style={{ textDecoration: "none", color: "inherit" }} to='/products/children'>
                            Children
                        </Link>
                    </div>) : (
                        <div className="item">
                            Stores
                        </div>
                    )}
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    {side === "Categories" ? (<div className="item">
                        <Link className='link' style={{ textDecoration: "none", color: "inherit" }} to='/products/accessories'>
                            Accessories
                        </Link>
                    </div>) : (
                        <div>
                            <Link className='link' to='/login' style={{ textDecoration: "none", color: "inherit" }}>
                                <PersonOutlineOutlinedIcon className='icon' />
                            </Link>
                        </div>
                    )}
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    {side === "Categories" ? (<div className="item">
                        <img src="/images/flag.png" alt="" />
                    </div>) : (
                        <div>
                            <FavoriteBorderOutlinedIcon className='icon' />
                        </div>
                    )}
                </MenuItem>
            </Menu>
        </div>
    );
}