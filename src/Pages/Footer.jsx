import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="footer mt-50">
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <a href="/"><img alt="jobhub" src="assets/imgs/theme/jobhub-logo.svg" /></a>
                    <div className="mt-20 mb-20">Jobhub is the heart of the design community and the best resource to discover and connect with designers and jobs worldwide.</div>
                </div>
                <div className="col-md-2 col-xs-6">
                    <h6>Company</h6>
                    <ul className="menu-footer mt-40">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="col-md-2 col-xs-6">
                    <h6>Product</h6>
                    <ul className="menu-footer mt-40">
                        <li><a href="#">Feature</a></li>
                        <li><a href="/PricingPlan">Pricing</a></li>
                        <li><a href="#">Credit</a></li>
                        <li><a href="/FAQS">FAQ</a></li>
                    </ul>
                </div>
                <div className="col-md-2 col-xs-6">
                    <h6>Download</h6>
                    <ul className="menu-footer mt-40">
                        <li><a href="#">iOS</a></li>
                        <li><a href="#">Android</a></li>
                        <li><a href="#">Microsoft</a></li>
                        <li><a href="#">Desktop</a></li>
                    </ul>
                </div>
                <div className="col-md-2 col-xs-6">
                    <h6>Support</h6>
                    <ul className="menu-footer mt-40">
                        <li><a href="/Privacypolicy">Privacy & Policy</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="/TermsandCondition">Terms & Condition</a></li>
                        <li><a href="/FAQS">FAQ</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom mt-50">
                <div className="row">
                    <div className="col-md-6">
                        Copyright ©2021 <a href="#"><strong>Jobhub</strong></a>. All Rights Reserved
                    </div>
                    <div className="col-md-6 text-md-end text-start">
                        <div className="footer-social">
                            <a href="#" className="icon-socials icon-facebook"></a>
                            <a href="#" className="icon-socials icon-twitter"></a>
                            <a href="#" className="icon-socials icon-instagram"></a>
                            <a href="#" className="icon-socials icon-linkedin"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer