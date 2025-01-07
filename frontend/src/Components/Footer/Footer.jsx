import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt=""  width={450}/>
                <p>"Enjoy the finest meals delivered straight to your door. Quality, convenience, and satisfaction guaranteed. Your cravings, our priority—delivering deliciousness every time, right when you need it."</p>
                <div className="footer-social-icons">
                    <img src={assets.facebookIcon} alt="" />
                    <img src={assets.twitterIcon} alt="" />
                    <img src={assets.linkedInIcon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+94 782354987</li>
                    <li>contact@quickdish.com</li>
                </ul>
            </div>
            
        </div>
      <hr/>
      <p className="footer-copyright">
        Copyright 2024 © QuickDish.com - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
