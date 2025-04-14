import React, { useState } from 'react'
    
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  return (
    <>
       <header className="header sticky-bar">
        <div className="container">
            <div className="main-header">
                <div className="header-left">
                    <div className="header-logo">
                        <a href="/" className="d-flex"><img alt="jobhub" src="assets/imgs/theme/jobhub-logo.svg" /></a>
                    </div>
                    <div className="header-nav">
                        <nav className="nav-main-menu d-none d-xl-block">
                            <ul className="main-menu">
                                <li >
                                    <a className="active" href="/">Home</a>
                                   
                                </li>
                                <li >
                                    <a href="/Jobs"> Jobs</a>                                  
                                </li>
                                <li >
                                    <a href="/Employer">Employers</a>
                                   
                                </li>
                                <li >
                                    <a href="/Candidate">Candidates</a>
                                </li>
                                <li >
                                    <a href="/Blog">Blog</a>
                                    
                                </li>
                                <li className="has-children">
                                    <a href="/AboutUs">About Us</a>
                                    <ul className="sub-menu">
                                      
                                        <li><a href="/OurServices">Our Services</a></li>
                                        <li><a href="/PricingPlan">Pricing Plan</a></li>
                                        <li><a href="/FAQS">FAQs</a></li>
                                       
                                    </ul>
                                </li>
                                <li >
                                    <a href="/ContactUs">Contact Us</a>                                 
                                </li>
                            </ul>
                        </nav>
                        <div 
        className="burger-icon burger-icon-white" 
        onClick={() => setIsSidebarVisible(!isSidebarVisible)}
        style={{ cursor: "pointer" }} // Ensures it's clickable
      >
        <span className="burger-icon-top"></span>
        <span className="burger-icon-mid"></span>
        <span className="burger-icon-bottom"></span>
      </div>
                    </div>
                </div>
                {/*        */}
            </div>
        </div>
    </header>
    <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${
          isSidebarVisible ? "sidebar-visible" : ""
        }`}
        style={{width:'300px'}}
      >
     
        <div className="mobile-header-wrapper-inner ">
            <div className="mobile-header-top">
                <div className="user-account">
                    <img src="assets/imgs/avatar/ava_1.png" alt="jobhub" />
                    <div className="content">
                        <h6 className="user-name">Howdy, <span className="text-brand">AliThemes</span></h6>
                        <p className="font-xs text-muted">You have 2 new messages</p>
                    </div>
                </div>
                <div
        className={`burger-icon burger-icon-white ${
          isSidebarVisible ? "burger-close" : ""
        }`}
        onClick={() => setIsSidebarVisible(!isSidebarVisible)}
        style={{ cursor: "pointer" }}
      >
        <span className="burger-icon-top"></span>
        <span className="burger-icon-mid"></span>
        <span className="burger-icon-bottom"></span>
      </div>
            </div>
            <div className="mobile-header-content-area">
                <div className="perfect-scroll">
                    <div className="mobile-search mobile-header-border mb-30">
                        <form action="" style={{width:'245px'}}>
                            <input type="text" placeholder="Search for items…" />
                            <i className="fi-rr-search"></i>
                        </form>
                    </div>
                    <div className="mobile-menu-wrap mobile-header-border">
                        {/* <!-- mobile menu start --> */}
                        <nav>
                            <ul className="mobile-menu font-heading">
                                <li className="has-children">
                                    <a className="active" href="/">Home</a>
                                   
                                </li>
                                <li className="has-children">
                                    <a href="/Jobs"> Jobs</a>
                                  
                                </li>
                                <li className="has-children">
                                    <a href="/Employer">Employers</a>
                                   
                                </li>
                                <li className="has-children">
                                    <a href="/Candidate">Candidates</a>
                                    
                                </li>
                                <li className="has-children">
                                    <a href="/Blog">Blog</a>
                                   
                                </li>
                                <li className={`has-children ${isOpen ? "open" : ""}`}>
      <span className="menu-expand" onClick={() => setIsOpen(!isOpen)} style={{position:'absolute' , right:'60px'}}>
        <i className="fi-rr-angle-small-down"></i>
      </span>
      <a href="/AboutUs">About Us</a>
      <ul
        className="sub-menu"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <li><a href="/OurServices">Our Services</a></li>
        <li><a href="/PricingPlan">Pricing Plan</a></li>
        <li><a href="/FAQS">FAQs</a></li>
      </ul>
    </li>
    <li className="has-children">
                                    <a href="/ContactUs">Contact us</a>
                                   
                                </li>
                            </ul>
                        </nav>
                        {/* <!-- mobile menu end --> */}
                    </div>
                    <div className="mobile-account">
                        <h6 className="mb-10">Your Account</h6>
                        <ul className="mobile-menu font-heading">
                            <li><a href="">Profile</a></li>
                            <li><a href="">Work Preferences</a></li>
                            <li><a href="">My Boosted Shots</a></li>
                            <li><a href="">My Collections</a></li>
                            <li><a href="">Account Settings</a></li>
                            <li><a href="">Go Pro</a></li>
                            <li><a href="">Sign Out</a></li>
                        </ul>
                    </div>
                    <div className="mobile-social-icon mb-50">
                        <h6 className="mb-25">Follow Us</h6>
                        <a href=""><img src="assets/imgs/theme/icons/icon-facebook.svg" alt="jobhub" /></a>
                        <a href=""><img src="assets/imgs/theme/icons/icon-twitter.svg" alt="jobhub" /></a>
                        <a href=""><img src="assets/imgs/theme/icons/icon-instagram.svg" alt="jobhub" /></a>
                        <a href=""><img src="assets/imgs/theme/icons/icon-pinterest.svg" alt="jobhub" /></a>
                        <a href=""><img src="assets/imgs/theme/icons/icon-youtube.svg" alt="jobhub" /></a>
                    </div>
                    <div className="site-copyright">Copyright 2022 © JobHub. <br />Designed by AliThemes.</div>
                </div>
            </div>
            <div class="ps__rail-x" style={{left:'0px' , bottom:'0px'}}><div class="ps__thumb-x" tabindex="0" style={{left: "0px", width:"0px"}}></div></div>
            <div class="ps__rail-y" style={{top:" 0px", height:" 641px", right:" 0px"}}><div class="ps__thumb-y" tabindex="0" style={{top: "0px" , height: "326px"}}></div></div>
        </div>
    </div>
    </>
  )
}

export default Navbar
