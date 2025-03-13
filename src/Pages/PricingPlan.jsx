import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const PricingPlan = () => {
    const [isYearly, setIsYearly] = useState(false);

    const toggleBilling = () => {
        setIsYearly((prev) => !prev);
    };
  return (
    <>
       <Navbar />
       <main className="main">
        <section className="section-box mt-90 mb-50">
            <div className="container">
                <div className="w-50 w-md-100 mx-auto text-center">
                    <h3 className="mb-30 wow animate__animated animate__fadeInUp">Start saving time today and choose your best plan</h3>
                </div>
                <div className="mw-650 text-center wow animate__animated animate__fadeInUp">
                    <p className="mb-35 text-md-lh24 color-black-5">Best for freelance developers who need to save their time</p>
                </div>
                <div className="text-center mt-20">
                        <span className="text-lg text-billed">Billed Yearly</span>
                        <label className="switch ml-20 mr-20">
                            <input type="checkbox" checked={isYearly} onChange={toggleBilling} />
                            <span className="slider round"></span>
                        </label>
                        <span className="text-lg text-billed">Billed Monthly</span>
                    </div>
                    <div className="block-pricing mt-125 mt-md-50">
                        <div className="row">
                            {[
                                { name: "Intro", monthly: 20, yearly: 240 },
                                { name: "Base", monthly: 50, yearly: 600 },
                                { name: "Pro", monthly: 100, yearly: 1200, popular: true },
                                { name: "Enterprise", monthly: 200, yearly: 2400 }
                            ].map((plan, index) => (
                                <div key={index} className={`col-lg-3 col-md-6 wow animate__animated animate__fadeInUp`} data-wow-delay={`.${index + 1}s`}>
                                    <div className={`box-pricing-item ${plan.popular ? "most-popular" : ""}`}>
                                        {plan.popular && (
                                            <div className="text-end mb-10">
                                                <a href="#" className="btn btn-white-sm">Most popular</a>
                                            </div>
                                        )}
                                        <div className="box-info-price">
                                            <span className="text-price">${isYearly ? plan.yearly : plan.monthly}</span>
                                            <span className="text-month">/ {isYearly ? "year" : "month"}</span>
                                        </div>
                                        <div>
                                            <h4 className="mb-15">{plan.name}</h4>
                                            <p className="text-desc-package mb-30">
                                                For most businesses that want to optimize web queries
                                            </p>
                                        </div>
                                        <ul className="list-package-feature">
                                            <li>All limited links</li>
                                            <li>Own analytics platform</li>
                                            <li>Chat support</li>
                                            <li>Optimize hashtags</li>
                                            <li>Unlimited users</li>
                                        </ul>
                                        <div>
                                            <a href="" className="btn btn-border">Choose plan</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
            </div>
        </section>
        <section className="section-box mt-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="box-image-findjob box-image-about ml-0">
                            <figure><img alt="jobhub" src="assets/imgs/page/about/banner-price.png" /></figure>
                            <a href="https://www.youtube.com/watch?v=ea-I4sqgVGY" className="btn-play-video popup-youtube"></a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="box-info-job box-info-about pl-90">
                            <span className="text-blue text-uppercase wow animate__animated animate__fadeInUp">About us</span>
                            <h5 className="heading-36 mb-30 mt-10 wow animate__animated animate__fadeInUp">Post your job and find the people you need</h5>
                            <p className="text-md mb-10 wow animate__animated animate__fadeInUp">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                            </p>
                            <h5 className="heading-md-regular mt-30 mb-10 wow animate__animated animate__fadeInUp">Find fulltime & internship job</h5>
                            <p className="text-md wow animate__animated animate__fadeInUp">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                            </p>
                            <h5 className="heading-md-regular mt-30 mb-10 wow animate__animated animate__fadeInUp">Find fulltime & internship job</h5>
                            <p className="text-md wow animate__animated animate__fadeInUp">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                            </p>
                            <div className="mt-50 wow animate__animated animate__fadeInUp">
                                <a href="/Jobs" className="mt-sm-15 mt-lg-30 btn btn-border icon-chevron-right">Browse all</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section-box bg-blue-full mt-90 mb-50">
            <div className="container">
                <h3 className="mb-20">Want to talk about ideas? <br  />Let's get started right now.</h3>
                <div className="row">
                    <div className="col-lg-6">
                        <p className="text-gray-200">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                    </div>
                    <div className="col-lg-6 pl-100 pl-md-15 mt-md-50">
                        <div className="box-button-shadow mr-20">
                            <a href="#" className="btn btn-default">Contact us</a>
                        </div>
                        <a href="#" className="btn btn-border icon-chevron-right">Learn more</a>
                    </div>
                </div>
            </div>
        </section>

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

export default PricingPlan




