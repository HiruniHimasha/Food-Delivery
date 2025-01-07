import React, { useState } from 'react';
import './NavBar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';


const NavBar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();
  
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }

  return (
    <div>
      <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="QuickDish Logo" className="logo" /></Link>
        <ul className="navbar-menu">
          <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
          <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
          <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
          <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
        </ul>
        <div className="navbar-right">
          <img src={assets.searchIcon} alt="Search Icon" width="60px" />
          <div className="navbar-basket-icon">
            <Link to='/cart'><img src={assets.basketIcon} alt="Basket Icon" width="60px" /></Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </div>
          {!token ? <button onClick={() => setShowLogin(true)} className="sign-in-button">Sign In</button>
            : <div className='navbar-profile'>
              <img src={assets.profileIcon} alt="" width={50} />
              <ul className="nav-profile-dropdown">
                <li onClick={()=>navigate('/myorders')}><img src={assets.bagIcon} alt="" width={20} /><p>Orders</p></li>
                <hr />
                <li onClick={logout}><img src={assets.logoutIcon} alt="" width={20} /><p>Logout</p></li>
              </ul>
            </div>
          }

        </div>
      </div>
    </div>
  )
}

export default NavBar;
