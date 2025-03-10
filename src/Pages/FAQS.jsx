import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const FAQS = () => {
  return (
    <>
        <Navbar />
        <main className="main">
        <section className="section-box">
            <div className="container pt-50">
                <div className="w-50 w-md-100 mx-auto text-center">
                    <h1 className="section-title-large mb-30 wow animate__animated animate__fadeInUp">FAQs</h1>
                    <p className="mb-30 text-muted wow animate__animated animate__fadeInUp font-md">This is part of our help center where frequently asked questions are collected. Do a search here before sending a message or contacting us, here are the most common problems you will encounter when using our system.</p>
                </div>
            </div>
        </section>

        <div className="faqs-imgs">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div className="row">
                            <div className="col-lg-7">
                                <img className="faqs-1 wow animate__animated animate__fadeIn" data-wow-delay=".1s" src="assets/imgs/page/faqs/img-1.png" alt="" />
                            </div>
                            <div className="col-lg-5">
                                <img className="faqs-2 mb-15 wow animate__animated animate__fadeIn" data-wow-delay=".3s" src="assets/imgs/page/faqs/img-2.png" alt="" />
                                <img className="faqs-3 wow animate__animated animate__fadeIn" data-wow-delay=".5s" src="assets/imgs/page/faqs/img-3.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="mt-80">
            <div className="container">
                <div className="row align-items-end mb-50">
                    <div className="col-lg-5">
                        <span className="text-blue wow animate__animated animate__fadeInUp">Questions</span>
                        <h3 className="mt-20 wow animate__animated animate__fadeInUp">Frequently Ask Questions</h3>
                    </div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-5">
                        <p className="text-lg text-muted wow animate__animated animate__fadeInUp">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is
                            simply dummy.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        How To Contact Your Finance Office?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <p className="mb-15">
                                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                                        </p>
                                        <p>
                                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Change Tax Account on Envato?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Reset Password With Phone Number?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                        Create Account On Finansi App?
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="accordion accordion-flush" id="accordionFlushExample2">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne2">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne2" aria-expanded="false" aria-controls="flush-collapseOne2">
                                        What Makes Your Business Plans So Special?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne2" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample2">
                                    <div className="accordion-body">
                                        <p className="mb-15">
                                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                                        </p>
                                        <p>
                                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo2">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo2" aria-expanded="false" aria-controls="flush-collapseTwo2">
                                        Where Can I Find Market Research Reports?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo2" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo2" data-bs-parent="#accordionFlushExample2">
                                    <div className="accordion-body">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree2">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree2" aria-expanded="false" aria-controls="flush-collapseThree2">
                                        What Type of Company?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree2" className="accordion-collapse collapse" aria-labelledby="flush-headingThree2" data-bs-parent="#accordionFlushExample2">
                                    <div className="accordion-body">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFour2">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour2" aria-expanded="false" aria-controls="flush-collapseFour2">
                                        Change Tax Account?
                                    </button>
                                </h2>
                                <div id="flush-collapseFour2" className="accordion-collapse collapse show" aria-labelledby="flush-headingFour2" data-bs-parent="#accordionFlushExample2">
                                    <div className="accordion-body">
                                        <p className="mb-15">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                        <p><a href="#">Read more</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section-box mt-90 mt-md-30">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                        <span className="text-lg text-brand wow animate__animated animate__fadeInUp">Online Marketing</span>
                        <h3 className="mt-20 mb-30 wow animate__animated animate__fadeInUp">Committed to top quality and results</h3>
                        <p className="mb-20 wow animate__animated animate__fadeInUp">Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus. </p>
                        <p className="mb-30 wow animate__animated animate__fadeInUp">Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus. </p>
                        <div className="mt-10 wow animate__animated animate__fadeInUp">
                            <a href="#" className="btn btn-default">Learn more</a>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-sm-12 col-12 pl-200 d-none d-lg-block">
                        <div className="banner-imgs banner-imgs-about">
                            <img alt="jobhub" src="assets/imgs/page/about/banner-online-marketing.png" className="img-responsive main-banner shape-3" />
                            <span className="banner-sm-4"><img alt="jobhub" src="assets/imgs/banner/congratulation.svg" className="img-responsive shape-2" /></span>
                            <span className="banner-sm-5"><img alt="jobhub" src="assets/imgs/banner/web-dev.svg" className="img-responsive shape-1" /></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section-box bg-blue-full mt-90 mb-50">
            <div className="container">
                <h3 className="mb-20">Want to talk about ideas? <br />Let's get started right now.</h3>
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

export default FAQS
