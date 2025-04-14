import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
    {
      name: "Chris Brown",
      role: "Visual Designer",
      image: "/assets/imgs/page/about/profile2.png",
      rating: 4,
    },
    {
      name: "Justin Bieber",
      role: "Visual Designer",
      image: "/assets/imgs/page/about/profile3.png",
      rating: 5,
    },
    {
      name: "Katy Perry",
      role: "Visual Designer",
      image: "/assets/imgs/page/about/profile.png",
      rating: 5,
    },
    {
      name: "Michael Jordan",
      role: "Graphic Designer",
      image: "/assets/imgs/page/about/profile2.png",
      rating: 4,
    },
    {
      name: "Emma Watson",
      role: "UI/UX Designer",
      image: "/assets/imgs/page/about/profile3.png",
      rating: 5,
    },
  ];
const OurServices = () => {
       const [isYearly, setIsYearly] = useState(false);
    
        const toggleBilling = () => {
            setIsYearly((prev) => !prev);
        };
  return (
    <>
       <Navbar />
       <main className="main">
        <section className="section-box">
            <div className="container pt-50">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 text-center">
                        <h1 className="section-title-large mb-30 wow animate__animated animate__fadeInUp">Our services</h1>
                        <h5 className="mb-30 text-muted wow animate__animated animate__fadeInUp">Tellus praesent vulputate placerat enim donec eget fermentum diam nunc erat commodo ornare eget lorem pharetra sit pharetra</h5>
                    </div>
                </div>
                <div className="box-banner-services mt-40">
                    <div className="box-banner-services--inner wow animate__animated animate__fadeInUp">
                        <figure><img alt="jobhub" src="assets/imgs/page/services/banner-our-services.png" /></figure>
                        <a href="https://www.youtube.com/watch?v=ea-I4sqgVGY" className="popup-youtube btn-play-2"></a>
                    </div>
                </div>
            </div>
        </section>
        <section className="section-box mt-90 mb-50 mb-md-0">
            <div className="container">
                <div className="mw-650">
                    <h4 className="text-center wow animate__animated animate__fadeInUp">Rapidly provision one to thousands of Droplets in seconds </h4>
                </div>
                <div className="row mt-60">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-md-30">
                        <div className="card-none-bd hover-up wow animate__animated animate__fadeInUp" data-wow-delay=".0s">
                            <div className="block-image">
                                <figure><img alt="jobhub" src="assets/imgs/page/services/ready-project.svg" /></figure>
                            </div>
                            <div className="card-info-bottom">
                                <h3><span className="count">15</span>00+</h3>
                                <strong>Ready perfect jobs</strong>
                                <p className="text-mutted">A place to think and track ideas</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-md-30">
                        <div className="card-none-bd hover-up wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                            <div className="block-image">
                                <figure><img alt="jobhub" src="assets/imgs/page/services/candidate-call.svg" /></figure>
                            </div>
                            <div className="card-info-bottom">
                                <h3><span className="count">8</span>00K</h3>
                                <strong>Candidate calls</strong>
                                <p className="text-mutted">A place to think and track ideas</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-md-30">
                        <div className="card-none-bd hover-up wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                            <div className="block-image">
                                <figure><img alt="jobhub" src="assets/imgs/page/services/job-posted.svg" /></figure>
                            </div>
                            <div className="card-info-bottom">
                                <h3><span className="count">12</span>00</h3>
                                <strong>Jobs posted</strong>
                                <p className="text-mutted">A place to think and track ideas</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="card-none-bd hover-up wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                            <div className="block-image">
                                <figure><img alt="jobhub" src="assets/imgs/page/services/complete-jobs.svg" /></figure>
                            </div>
                            <div className="card-info-bottom">
                                <h3><span className="count">6</span>00K</h3>
                                <strong>Complete Jobs</strong>
                                <p className="text-mutted">A place to think and track ideas</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-100">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="card-grid-news hover-up wow animate__animated animate__fadeIn" data-wow-delay=".0s">
                            <div className="block-image-rd">
                                <figure><img src="assets/imgs/page/services/img-news1.png" alt="jobhub" /></figure>
                            </div>
                            <div className="card-info-bottom">
                                <a href="#"><strong>Jobs finder platform</strong></a>
                                <p className="text-gray-200">
                                    usce ex quam, ultrices id congue non, varius non libero. Cras ut venenatis lectus, vitae eleifend mi. Morbi venenatis leo et turpis lobortis malesuada. Pellentesque tempus est et nibh porttito
                                </p>
                                <ul>
                                    <li><a href="#">Market research</a></li>
                                    <li><a href="#">Strategic Consulting</a></li>
                                    <li><a href="#">Effective Planning</a></li>
                                    <li><a href="#">Effective Planning</a></li>
                                    <li><a href="#">Effective Planning</a></li>
                                    <li><a href="#">Effective Planning</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="card-grid-news hover-up wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                            <div className="block-image-rd">
                                <figure><img src="assets/imgs/page/services/img-news2.png" alt="jobhub" /></figure>
                            </div>
                            <div className="card-info-bottom">
                                <a href="#"><strong>Jobs finder platform</strong></a>
                                <p className="text-gray-200">
                                    usce ex quam, ultrices id congue non, varius non libero. Cras ut venenatis lectus, vitae eleifend mi. Morbi venenatis leo et turpis lobortis malesuada. Pellentesque tempus est et nibh porttito
                                </p>
                                <ul>
                                    <li><a href="#">Market research</a></li>
                                    <li><a href="#">Strategic Consulting</a></li>
                                    <li><a href="#">Effective Planning</a></li>
                                    <li><a href="#">Effective Planning</a></li>
                                    <li><a href="#">Effective Planning</a></li>
                                    <li><a href="#">Effective Planning</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="card-grid-news hover-up wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                            <div className="block-image-rd">
                                <figure><img src="assets/imgs/page/services/img-news4.png" alt="jobhub" /></figure>
                            </div>
                            <div className="card-info-bottom">
                                <a href="#"><strong>Jobs finder platform</strong></a>
                                <p className="text-gray-200">
                                    usce ex quam, ultrices id congue non, varius non libero. Cras ut venenatis lectus, vitae eleifend mi. Morbi venenatis leo et turpis lobortis malesuada. Pellentesque tempus est et nibh porttito
                                </p>
                                <ul>
                                    <li><a href="#">Market research</a></li>
                                    <li><a href="#">Strategic Consulting</a></li>
                                    <li><a href="#">Effective Planning</a></li>
                                    <li><a href="#">Effective Planning</a></li>
                                    <li><a href="#">Effective Planning</a></li>
                                    <li><a href="#">Effective Planning</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="card-grid-news hover-up wow animate__animated animate__fadeIn" data-wow-delay=".0s">
                            <div className="block-image-rd">
                                <figure><img src="assets/imgs/page/services/img-news5.png" alt="jobhub" /></figure>
                            </div>
                            <div className="card-info-bottom">
                                <a href="#"><strong>Jobs finder platform</strong></a>
                                <p className="text-gray-200">
                                    usce ex quam, ultrices id congue non, varius non libero. Cras ut venenatis lectus, vitae eleifend mi. Morbi venenatis leo et turpis lobortis malesuada. Pellentesque tempus est et nibh porttito
                                </p>
                                <ul>
                                    <li><a href="#">Market research</a></li>
                                    <li><a href="#">Strategic Consulting</a></li>
                                    <li><a href="#">Effective Planning</a></li>
                                    <li><a href="#">Effective Planning</a></li>
                                    <li><a href="#">Effective Planning</a></li>
                                    <li><a href="#">Effective Planning</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="card-grid-news hover-up wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                            <div className="block-image-rd">
                                <figure><img src="assets/imgs/page/services/img-news2.png" alt="jobhub" /></figure>
                            </div>
                            <div className="card-info-bottom">
                                <a href="#"><strong>Jobs finder platform</strong></a>
                                <p className="text-gray-200">
                                    usce ex quam, ultrices id congue non, varius non libero. Cras ut venenatis lectus, vitae eleifend mi. Morbi venenatis leo et turpis lobortis malesuada. Pellentesque tempus est et nibh porttito
                                </p>
                                <ul>
                                    <li><a href="#">Market research</a></li>
                                    <li><a href="#">Strategic Consulting</a></li>
                                    <li><a href="#">Effective Planning</a></li>
                                    <li><a href="#">Effective Planning</a></li>
                                    <li><a href="#">Effective Planning</a></li>
                                    <li><a href="#">Effective Planning</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="card-grid-news hover-up wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                            <div className="block-image-rd">
                                <figure><img src="assets/imgs/page/services/img-news6.png" alt="jobhub" /></figure>
                            </div>
                            <div className="card-info-bottom">
                                <a href="#"><strong>Jobs finder platform</strong></a>
                                <p className="text-gray-200">
                                    usce ex quam, ultrices id congue non, varius non libero. Cras ut venenatis lectus, vitae eleifend mi. Morbi venenatis leo et turpis lobortis malesuada. Pellentesque tempus est et nibh porttito
                                </p>
                                <ul>
                                    <li><a href="#">Market research</a></li>
                                    <li><a href="#">Strategic Consulting</a></li>
                                    <li><a href="#">Effective Planning</a></li>
                                    <li><a href="#">Effective Planning</a></li>
                                    <li><a href="#">Effective Planning</a></li>
                                    <li><a href="#">Effective Planning</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section-box mt-5 mt-md-0">
  <div className="container">
    <h2 className="section-title mb-3 wow animate__animated animate__fadeInUp">
      Our Happy Customers
    </h2>
    <div className="row">
      <div className="col-lg-7">
        <div className="text-md-lh24 color-black-5 wow animate__animated animate__fadeInUp">
          When it comes to choosing the right web hosting provider, we know how easy it is to get overwhelmed by the number of options available.
        </div>
      </div>
    </div>

    <section className="section-box mt-50 mt-md-0">
  <div className="container">
    <h2 className="section-title text-center mb-15 wow animate__animated animate__fadeInUp">Our Happy Customer</h2>
    <div className="text-normal text-center color-black-5 box-mw-60 wow animate__animated animate__fadeInUp mt-20">
      When it comes to choosing the right web hosting provider, we know how easy it is to get overwhelmed with the number.
    </div>

    <div className="row mt-70">
      <div className="box-swiper">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          loop={true}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 3000 }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="swiper-container"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-slide">
                <div className="card-grid hover-up top-card">
                  <div className="text-center card-image">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                    />
                  </div>
                  <div className="card-info">
                    <p className="text-center">
                      We are on the hunt for a designer who is exceptional in both
                      making incredible product interfaces as well as
                    </p>
                    <div className="text-center rating">
                      {"⭐".repeat(testimonial.rating)}
                    </div>
                    <div className="text-center profile" >
                      <strong>{testimonial.name}</strong>
                      <span>{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </div>
</section>

  </div>
</section>
     
        <section className="section-box mt-90 mb-50">
            <div className="container">
                <div className="mw-450 text-center">
                    <h3 className="mb-30 wow animate__animated animate__fadeInUp ">Choose The Offer That Suits You</h3>
                </div>
                <div className="mw-650 text-center wow animate__animated animate__fadeInUp"
                
                >
                    <p className="mb-35 text-md-lh24 color-black-5">When it comes to choosing the right web hosting provider, we
                        know how easy it is to get overwhelmed with the number.</p>
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
                                            <a href="#" className="btn btn-border">Choose plan</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
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

export default OurServices
