import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaRegBookmark } from "react-icons/fa";
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

const AboutUs = () => {
    const blogs = [
        { image: "assets/imgs/blog/img-blog-1.png", title: "Senior Full Stack, Creator Success Full Time" },
        { image: "assets/imgs/blog/img-blog-2.png", title: "21 Job Tips: How To Make a Great Impression" },
        { image: "assets/imgs/blog/img-blog-3.png", title: "Top SQL Query Interview Questions" },
        { image: "assets/imgs/blog/img-blog-4.png", title: "How To Write an Interview Reschedule Email" },
        { image: "assets/imgs/blog/img-blog-5.png", title: "12 Peer Interview Questions and Answers" }
    ];
  return (
    <>
           <Navbar />
           <main className="main">
        <section className="section-box bg-banner-about">
            <div className="banner-hero banner-about pt-20">
                <div className="banner-inner">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="block-banner">
                                <h1 className="heading-banner heading-lg">The #1 Job Board for Graphic Design Jobs</h1>
                                <div className="banner-description box-mw-70 mt-30">Search and connect with the right candidates faster. This talent seach gives you the opportunity to find candidates who may be a perfect fit for your role</div>
                                <div className="mt-60">
                                    <div className="box-button-shadow mr-10">
                                        <a href="#" className="btn btn-default">Contact us</a>
                                    </div>
                                    <a href="#" className="btn">Support center</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 d-none d-lg-block">
                            <div className="banner-imgs">
                                <img alt="jobhub" src="assets/imgs/page/about/banner-img.png" className="img-responsive main-banner shape-3" />
                                <span className="banner-sm-1"><img alt="jobhub" src="assets/imgs/page/about/banner-sm-1.png" className="img-responsive shape-1" /></span>
                                <span className="banner-sm-2"><img alt="jobhub" src="assets/imgs/page/about/banner-sm-2.png" className="img-responsive shape-1" /></span>
                                <span className="banner-sm-3"><img alt="jobhub" src="assets/imgs/page/about/banner-sm-3.png" className="img-responsive shape-2" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section-box mt-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-11 mx-auto">
                        <div className="row pt-5">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-md-30">
                                <div className="card-grid-4 hover-up">
                                    <div className="image-top-feature">
                                        <figure><img alt="jobhub" src="assets/imgs/page/about/market-research.svg" /></figure>
                                    </div>
                                    <div className="card-grid-4-info">
                                        <h5 className="mt-20">Market Research</h5>
                                        <p className="text-normal mt-15 mb-20">It is a long established fact that a reader will be.</p>
                                        <a href="#" className="btn-readmore icon-arrow">Read more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-md-30">
                                <div className="card-grid-4 hover-up">
                                    <div className="image-top-feature">
                                        <figure><img alt="jobhub" src="assets/imgs/page/about/creative-layout.svg" /></figure>
                                    </div>
                                    <div className="card-grid-4-info">
                                        <h5 className="mt-20">Creative Layout</h5>
                                        <p className="text-normal mt-15 mb-20">It is a long established fact that a reader will be.</p>
                                        <a href="#" className="btn-readmore icon-arrow">Read more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-md-30">
                                <div className="card-grid-4 hover-up">
                                    <div className="image-top-feature">
                                        <figure><img alt="jobhub" src="assets/imgs/page/about/digital-marketing.svg" /></figure>
                                    </div>
                                    <div className="card-grid-4-info">
                                        <h5 className="mt-20">Digital Marketing</h5>
                                        <p className="text-normal mt-15 mb-20">It is a long established fact that a reader will be.</p>
                                        <a href="#" className="btn-readmore icon-arrow">Read more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="card-grid-4 hover-up">
                                    <div className="image-top-feature">
                                        <figure><img alt="jobhub" src="assets/imgs/page/about/seo-backlink.svg" /></figure>
                                    </div>
                                    <div className="card-grid-4-info">
                                        <h5 className="mt-20">SEO & Backlinks</h5>
                                        <p className="text-normal mt-15 mb-20">It is a long established fact that a reader will be.</p>
                                        <a href="#" className="btn-readmore icon-arrow">Read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section-box mt-90 mb-80">
            <div className="container">
                <div className="block-job-bg block-job-bg-homepage-2">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 d-none d-md-block">
                            <div className="box-image-findjob findjob-homepage-2 ml-0 wow animate__animated animate__fadeIn">
                                <figure><img alt="jobhub" src="assets/imgs/page/about/img-findjob.png" /></figure>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="box-info-job pl-90 pt-30 pr-90">
                                <span className="text-blue wow animate__animated animate__fadeInUp">Find jobs</span>
                                <h5 className="heading-36 mb-30 mt-30 wow animate__animated animate__fadeInUp">Create free count and start apply your dream job today</h5>
                                <p className="text-lg wow animate__animated animate__fadeInUp">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is
                                    simply dummy.
                                </p>
                                <div className="mt-30 wow animate__animated animate__fadeInUp">
                                    <a href="/Jobs" className="btn btn-default">Explore more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section-box mt-90 mt-md-0">
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
        <section className="section-box mt-90 mt-md-50">
            <div className="container">
                <h2 className="section-title text-center mb-15 wow animate__animated animate__fadeInUp">Meet our team</h2>
                <div className="text-normal text-center color-black-5 box-mw-60 wow animate__animated animate__fadeInUp">
                    Find the type of work you need, clearly defined and ready to start. Work begins as soon as you purchase and provide requirements.
                </div>
                <div className="row mt-60">
                    <div className="col-lg-3 col-md-6">
                        <div className="card-grid-2  wow animate__animated animate__fadeIn">
                            <div className="text-center card-grid-2-image">
                                <a href="#">
                                    <figure><img src="assets/imgs/page/about/marc.png" alt="jobhub" /></figure>
                                </a>
                            </div>
                            <div className="card-block-info pt-10 text-center">
                                <h5 className="font-bold text-lg mb-5">Elon Musk</h5>
                                <p className="text-small text-muted">Marketing Crew</p>
                                <div className="card-2-bottom mt-15">
                                    <a href="#" className="card-grid-2-socials icon-fb-sym"></a>
                                    <a href="#" className="card-grid-2-socials icon-tw-sym"></a>
                                    <a href="#" className="card-grid-2-socials icon-inst-sym"></a>
                                    <a href="#" className="card-grid-2-socials icon-linkedin-sym"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card-grid-2  wow animate__animated animate__fadeIn">
                            <div className="text-center card-grid-2-image">
                                <a href="#">
                                    <figure><img src="assets/imgs/page/about/marc2.png" alt="jobhub" /></figure>
                                </a>
                            </div>
                            <div className="card-block-info pt-10 text-center">
                                <h5 className="font-bold text-lg mb-5">Bernard Arnault</h5>
                                <p className="text-small text-muted">Marketing Crew</p>
                                <div className="card-2-bottom mt-15">
                                    <a href="#" className="card-grid-2-socials icon-fb-sym"></a>
                                    <a href="#" className="card-grid-2-socials icon-tw-sym"></a>
                                    <a href="#" className="card-grid-2-socials icon-inst-sym"></a>
                                    <a href="#" className="card-grid-2-socials icon-linkedin-sym"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card-grid-2  wow animate__animated animate__fadeIn">
                            <div className="text-center card-grid-2-image">
                                <a href="#">
                                    <figure><img src="assets/imgs/page/about/marc3.png" alt="jobhub" /></figure>
                                </a>
                            </div>
                            <div className="card-block-info pt-10 text-center">
                                <h5 className="font-bold text-lg mb-5">Jeff Bezos</h5>
                                <p className="text-small text-muted">Marketing Crew</p>
                                <div className="card-2-bottom mt-15">
                                    <a href="#" className="card-grid-2-socials icon-fb-sym"></a>
                                    <a href="#" className="card-grid-2-socials icon-tw-sym"></a>
                                    <a href="#" className="card-grid-2-socials icon-inst-sym"></a>
                                    <a href="#" className="card-grid-2-socials icon-linkedin-sym"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card-grid-2  wow animate__animated animate__fadeIn">
                            <div className="text-center card-grid-2-image">
                                <a href="#">
                                    <figure><img src="assets/imgs/page/about/marc4.png" alt="jobhub" /></figure>
                                </a>
                            </div>
                            <div className="card-block-info pt-10 text-center">
                                <h5 className="font-bold text-lg mb-5">Bill Gates</h5>
                                <p className="text-small text-muted">Marketing Crew</p>
                                <div className="card-2-bottom mt-15">
                                    <a href="#" className="card-grid-2-socials icon-fb-sym"></a>
                                    <a href="#" className="card-grid-2-socials icon-tw-sym"></a>
                                    <a href="#" className="card-grid-2-socials icon-inst-sym"></a>
                                    <a href="#" className="card-grid-2-socials icon-linkedin-sym"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card-grid-2  wow animate__animated animate__fadeIn">
                            <div className="text-center card-grid-2-image">
                                <a href="#">
                                    <figure><img src="assets/imgs/page/about/marc5.png" alt="jobhub" /></figure>
                                </a>
                            </div>
                            <div className="card-block-info pt-10 text-center">
                                <h5 className="font-bold text-lg mb-5">Larry Ellison</h5>
                                <p className="text-small text-muted">Marketing Crew</p>
                                <div className="card-2-bottom mt-15">
                                    <a href="#" className="card-grid-2-socials icon-fb-sym"></a>
                                    <a href="#" className="card-grid-2-socials icon-tw-sym"></a>
                                    <a href="#" className="card-grid-2-socials icon-inst-sym"></a>
                                    <a href="#" className="card-grid-2-socials icon-linkedin-sym"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card-grid-2  wow animate__animated animate__fadeIn">
                            <div className="text-center card-grid-2-image">
                                <a href="#">
                                    <figure><img src="assets/imgs/page/about/marc6.png" alt="jobhub" /></figure>
                                </a>
                            </div>
                            <div className="card-block-info pt-10 text-center">
                                <h5 className="font-bold text-lg mb-5">Sergey Brin</h5>
                                <p className="text-small text-muted">Marketing Crew</p>
                                <div className="card-2-bottom mt-15">
                                    <a href="#" className="card-grid-2-socials icon-fb-sym"></a>
                                    <a href="#" className="card-grid-2-socials icon-tw-sym"></a>
                                    <a href="#" className="card-grid-2-socials icon-inst-sym"></a>
                                    <a href="#" className="card-grid-2-socials icon-linkedin-sym"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card-grid-2  wow animate__animated animate__fadeIn">
                            <div className="text-center card-grid-2-image">
                                <a href="#">
                                    <figure><img src="assets/imgs/page/about/marc7.png" alt="jobhub" /></figure>
                                </a>
                            </div>
                            <div className="card-block-info pt-10 text-center">
                                <h5 className="font-bold text-lg mb-5">Mark Zucker</h5>
                                <p className="text-small text-muted">Marketing Crew</p>
                                <div className="card-2-bottom mt-15">
                                    <a href="#" className="card-grid-2-socials icon-fb-sym"></a>
                                    <a href="#" className="card-grid-2-socials icon-tw-sym"></a>
                                    <a href="#" className="card-grid-2-socials icon-inst-sym"></a>
                                    <a href="#" className="card-grid-2-socials icon-linkedin-sym"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card-grid-2  wow animate__animated animate__fadeIn">
                            <div className="text-center card-grid-2-image">
                                <a href="#">
                                    <figure><img src="assets/imgs/page/about/marc8.png" alt="jobhub" /></figure>
                                </a>
                            </div>
                            <div className="card-block-info pt-10 text-center">
                                <h5 className="font-bold text-lg mb-5">Warren Buffett</h5>
                                <p className="text-small text-muted">Marketing Crew</p>
                                <div className="card-2-bottom mt-15">
                                    <a href="#" className="card-grid-2-socials icon-fb-sym"></a>
                                    <a href="#" className="card-grid-2-socials icon-tw-sym"></a>
                                    <a href="#" className="card-grid-2-socials icon-inst-sym"></a>
                                    <a href="#" className="card-grid-2-socials icon-linkedin-sym"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
                           <div className="text-center profile">
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
              <section className="section-box mt-50">
         <div className="container">
           <div className="row align-items-end">
             <div className="col-lg-7 col-md-7">
               <h2 className="section-title mb-20 wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".1s">
                 From blog
               </h2>
               <p className="text-md-lh28 color-black-5 wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".1s">
                 Latest News & Events
               </p>
             </div>
             <div className="col-lg-5 col-md-5 text-lg-end text-start">
               <a href="/Blog" className="btn btn-border icon-chevron-right wow animate__animated animate__fadeInUp hover-up mt-15" data-wow-delay=".1s">
                 View more
               </a>
             </div>
           </div>
       
           <div className="row mt-70">
             <div className="box-swiper">
               <Swiper
                 modules={[Navigation, Pagination, Autoplay]}
                 spaceBetween={20}
                 loop={true}
                 navigation
                 pagination={{ clickable: true, el: ".custom-pagination" }}
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
               >
                 {blogs.map((blog, index) => (
                   <SwiperSlide key={index}>
                     <div
                       className="card-grid-3 hover-up"
                       style={{
                         height: "450px",
                         display: "flex",
                         flexDirection: "column",
                         justifyContent: "space-between",
                         alignItems: "center",
                         position: "relative"
                       }}
                     >
                       <div className="text-center card-grid-3-image" style={{ width: "100%", flexShrink: 0 }}>
                         <a href="/Blogdetails">
                           <figure>
                             <img
                               src={blog.image}
                               alt="blog"
                               style={{
                                 width: "100%",
                                 height: "200px",
                                 objectFit: "cover"
                               }}
                             />
                           </figure>
                         </a>
                       </div>
                       <div
                         className="card-block-info"
                         style={{
                           flexGrow: 1,
                           display: "flex",
                           flexDirection: "column",
                           justifyContent: "space-between",
                           textAlign: "center",
                           width: "100%",
                           padding: "10px 20px",
                           position: "relative"
                         }}
                       >
                         <h5 className="mt-15 heading-md">
                           <a href="/Blogdetails">{blog.title}</a>
                         </h5>
                         <div
                           className="card-2-bottom"
                           style={{
                             marginTop: "auto",
                             paddingBottom: "15px",
                             display: "flex",
                             justifyContent: "space-between",
                             alignItems: "center"
                           }}
                         >
                           <a href="/Blogdetails" className="btn btn-border btn-brand-hover">
                             Keep Reading
                           </a>
                           <FaRegBookmark
                             style={{
                               fontSize: "20px",
                               color: "#666",
                               cursor: "pointer"
                             }}
                           />
                         </div>
                       </div>
                     </div>
                   </SwiperSlide>
                 ))}
               </Swiper>
               <div className="custom-pagination" style={{ marginTop: "20px", textAlign: "center" }}></div>
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

export default AboutUs