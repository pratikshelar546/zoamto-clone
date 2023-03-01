import React from 'react'
import logo from "../../images/logo.png"
import appleLogo from "../../images/appleStore.png"
import androidLogo from "../../images/playStore.png"
import {AiOutlineGlobal,AiOutlineLinkedin,AiOutlineInstagram,AiOutlineTwitter,AiOutlineYoutube,AiOutlineFacebook} from "react-icons/ai"

const Footer = () => {
  return (
    <>
      <footer className="footer container">
    <div className="footer_section">

      <img src={logo} alt="Zomato" className='w-56'/>
      <div className="button_container">
        <button><img src="https://flagcdn.com/w40/in.png" className='w-6' alt="indian logo" />INDIA
        </button>
        <button><AiOutlineGlobal/>English</button>

      </div>
    </div>
    <div className="navigation_container">
      <div className="link_container">
        <h5>ABOUT ZOMATO</h5>
        <a className="footer_link" href="/">Who We Are</a>href="/"
        <a className="footer_link" href="/">Blog</a>
        <a className="footer_link" href="/">Work With Us</a>
        <a className="footer_link" href="/">Investor Relation</a>
        <a className="footer_link" href="/">Report Fraud</a>
        <a className="footer_link" href="/">Contact Us</a>
      </div>
      <div className="link_container">
        <h5>ZOMAVERSE</h5>
        <a className="footer_link" href="/">Zoamto</a>
        <a className="footer_link" href="/">Blinit</a>
        <a className="footer_link" href="/">Feeding India</a>
        <a className="footer_link" href="/">Hyperpure</a>
        <a className="footer_link" href="/">Zomaland</a>
      </div>
      <div className="link_container">
        <h5>FOR restaurants</h5>
        <a className="footer_link" href="/">Partner With Us</a>
        <a className="footer_link" href="/">Apps For You</a>
        <br/>
        <h5>FOR ENTERPRISES</h5>
        <a className="footer_link" href="/">Work with us</a>
        <a className="footer_link" href="/">Zomato for work</a> 
        
      </div>
      <div className="link_container">
        <h5>Learn More</h5>
        <a className="footer_link" href="/">Privacy</a> 
        <a className="footer_link" href="/">Security</a>   
        <a className="footer_link" href="/">Terms</a>  
        <a className="footer_link" href="/">Sitemap</a>  
      </div>
      <div className="link_container">
        <h5>Social Links</h5>
        <div className='flex gap-2'>
          <button ><AiOutlineLinkedin size={'2em'}/></button>
          <button><AiOutlineInstagram  size={'2em'}/></button>
          <button><AiOutlineTwitter size={'2em'}/></button>
          <button><AiOutlineYoutube size={'2em'} /></button>
          <button><AiOutlineFacebook size={'2em'}/></button>
        </div>
        <br/>
        <img src={appleLogo} alt="footer logos" className="footer_section_logos"/>
        <img src={androidLogo} alt="footer logos" className="footer_section_logos"/>
      </div>
    </div>
    <div className="disclamer"> By continuing past this page, you agree to our Terms of Service,
      Cookie Policy, Privacy Policy and Content Policies. All trademarks
      are properties of their respective owners. 2008-2022 © Zomato™ Ltd.
      All rights reserved.
    </div>
  </footer>
    </>
  )
}

export default Footer