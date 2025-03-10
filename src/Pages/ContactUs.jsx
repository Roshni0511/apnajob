import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const ContactUs = () => {
  return (
    <>
       <Navbar />
       <main className="main">
       <div className="container wide mb-50">
  <div className="border-radius-15 overflow-hidden">
    <iframe
      title="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117927.82644344536!2d72.7807936!3d21.1702408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e5eb6f8c0d3%3A0x9b54c1ef0a6b6ef8!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1709876543210!5m2!1sen!2sin"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

        <div className="container mt-90 mt-md-30">
            <div className="row">
                <div className="col-xl-10 col-lg-12 m-auto">
                    <section className="mb-50">
                        <h5 className="text-blue text-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">Get in Touch</h5>
                        <h3 className="section-title w-75 w-md-100 mb-50 mt-15 text-center mx-auto wow animate__animated animate__fadeInUp" data-wow-delay=".1s">You are always welcome to visit our little studio</h3>
                        <div className="row mb-60">
                            <div className="col-md-4 mb-4 mb-md-0 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                <h5 className="mb-15">Office</h5>
                                205 North Michigan Avenue, Suite 810<br />
                                Chicago, 60601, USA<br />
                                <abbr title="Phone">Phone:</abbr> (123) 456-7890<br />
                                <abbr title="Email">Email: </abbr>contact@jubhub.com<br />
                                <a className="btn btn-default btn-small font-weight-bold text-white mt-20 border-radius-5 btn-shadow-brand hover-up"><i className="fi-rs-marker mr-5"></i>View map</a>
                            </div>
                            <div className="col-md-4 mb-4 mb-md-0 mt-sm-30 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                                <h5 className="mb-15">Studio</h5>
                                205 North Michigan Avenue, Suite 810<br />
                                Chicago, 60601, USA<br />
                                <abbr title="Phone">Phone:</abbr> (123) 456-7890<br />
                                <abbr title="Email">Email: </abbr>contact@jubhub.com<br />
                                <a className="btn btn-default btn-small font-weight-bold text-white mt-20 border-radius-5 btn-shadow-brand hover-up"><i className="fi-rs-marker mr-5"></i>View map</a>
                            </div>
                            <div className="col-md-4 mt-sm-30 wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                                <h5 className="mb-15">Shop</h5>
                                205 North Michigan Avenue, Suite 810<br />
                                Chicago, 60601, USA<br />
                                <abbr title="Phone">Phone:</abbr> (123) 456-7890<br />
                                <abbr title="Email">Email: </abbr>contact@jubhub.com<br />
                                <a className="btn btn-default btn-small font-weight-bold text-white mt-20 border-radius-5 btn-shadow-brand hover-up"><i className="fi-rs-marker mr-5"></i>View map</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-9 col-md-12 mx-auto">
                                <div className="contact-from-area padding-20-row-col">
                                    <h5 className="text-blue text-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">Send Message</h5>
                                    <h2 className="section-title mt-15 mb-10 text-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">Drop Us a Line</h2>
                                    <p className="text-muted mb-30 font-md text-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">Your email address will not be published. Required fields are marked *</p>
                                    <div className="row mt-50">
                                        <div className="col-md-4 text-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                            <img src="assets/imgs/theme/icons/headset-color.svg" alt="" />
                                            <p className="text-muted font-xs mb-10">Phone</p>
                                            <p className="mb-0 font-lg">
                                                + 48 654-430-309 <br />
                                                + 1 6532-430-309
                                            </p>
                                        </div>
                                        <div className="col-md-4 mt-sm-30 text-center wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                                            <img src="assets/imgs/theme/icons/marker-color.svg" alt="" />
                                            <p className="text-muted font-xs mb-10">Email</p>
                                            <p className="mb-0 font-lg">
                                                contact@jobhub.com <br />
                                                sales@jobhub.com
                                            </p>
                                        </div>
                                        <div className="col-md-4 mt-sm-30 text-center wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                                            <img src="assets/imgs/theme/icons/plane-color.svg" alt="" />
                                            <p className="text-muted font-xs mb-10">Address</p>
                                            <p className="mb-0 font-lg">
                                                11567 E Broadview Dr <br />
                                                Colorado(CO), 80117
                                            </p>
                                        </div>
                                    </div>
                                    <form className="contact-form-style mt-80" id="contact-form" action="#" method="post">
                                        <div className="row wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-style mb-20">
                                                    <input name="name" placeholder="First Name" type="text" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-style mb-20">
                                                    <input name="email" placeholder="Your Email" type="email" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-style mb-20">
                                                    <input name="telephone" placeholder="Your Phone" type="tel" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-style mb-20">
                                                    <input name="subject" placeholder="Subject" type="text" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 text-center">
                                                <div className="textarea-style mb-30">
                                                    <textarea name="message" placeholder="Message"></textarea>
                                                </div>
                                                <button className="submit submit-auto-width" type="submit">Send message</button>
                                            </div>
                                        </div>
                                    </form>
                                    <p className="form-messege"></p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <section className="section-box mt-50 mb-60">
            <div className="container">
                <div className="box-newsletter">
                    <h5 className="text-md-newsletter">Sign up to get</h5>
                    <h6 className="text-lg-newsletter">the latest jobs</h6>
                    <div className="box-form-newsletter mt-30">
                        <form className="form-newsletter">
                            <input type="text" className="input-newsletter" value="" placeholder="contact.alithemes@gmail.com" />
                            <button className="btn btn-default font-heading icon-send-letter">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="box-newsletter-bottom">
                    <div className="newsletter-bottom"></div>
                </div>
            </div>
        </section>
    </main>
       <Footer />
    </>
  )
}

export default ContactUs