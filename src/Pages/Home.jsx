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




const Home = () => {
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
        <section className="section-box bg-banner-about banner-home-3 pt-100">
            <div className="banner-hero">
                <div className="banner-inner">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="block-banner">
                                <h2 className="heading-banner text-center wow animate__animated animate__fadeInUp">There Are 98.688<br />Opportunities Here For you!</h2>
                                <div className="form-find mw-720 mt-80">
                                    <form className="wow animate__animated animate__fadeInUp">
                                        <input type="text" className="form-input input-keysearch mr-10" placeholder="Job title" />
                                        <select className="form-input mr-10 select-active">
                                            <option value="">Location</option>
                                            <option value="AX">Aland Islands</option>
                                            <option value="AF">Afghanistan</option>
                                            <option value="AL">Albania</option>
                                            <option value="DZ">Algeria</option>
                                            <option value="AD">Andorra</option>
                                            =
                                  
                                     
                                        </select>
                                        <button className="btn btn-default btn-find wow animate__animated animate__fadeInUp">Find now</button>
                                    </form>
                                </div>
                                <div className="list-tags-banner mt-60 text-center wow animate__animated animate__fadeInUp">
                                    <strong>Popular Searches:</strong>
                                    <a href="">Designer</a>, <a href="">Developer</a>, <a href="">Web</a>, <a href="">Engineer</a>, <a href="">Senior</a>,
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section-box mt-80">
            <div className="container">
                <h2 className="section-title text-center mb-15 wow animate__animated animate__fadeInUp">Featured Jobs</h2>
                <div className="text-normal text-center mb-60 color-black-5 box-mw-60 wow animate__animated animate__fadeInUp">
                    The #1 Job Board for Hiring Creative Professionals
                </div>
                <div className="list-recent-jobs list-job-2-col">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            {/* <!-- Item job --> */}
                            <div className="card-job hover-up wow animate__animated animate__fadeInUp">
                                <div className="card-job-top">
                                    <div className="card-job-top--image">
                                        <a href="/Employerdetails">
                                            <figure><img alt="jobhub" src="assets/imgs/page/job/digital.png" /></figure>
                                        </a>
                                    </div>
                                    <div className="card-job-top--info">
                                        <h6 className="card-job-top--info-heading"><a href="/Jobdetails">Digital Marketing Manager</a></h6>
                                        <div className="row">
                                            <div className="col-md-9">
                                                <a href="/Employer"><span className="card-job-top--company">AliStudio, Inc</span></a>
                                                <span className="card-job-top--location text-sm"><i className="fi-rr-marker"></i> New York, NY</span>
                                                <span className="card-job-top--type-job text-sm"><i className="fi-rr-briefcase"></i>Full time</span>
                                                <span className="card-job-top--post-time text-sm"><i className="fi-rr-clock"></i> 3 mins ago</span>
                                            </div>
                                            <div className="col-md-3 text-md-end text-start">
                                                <span className="card-job-top--price">₹500<span>/Hour</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-job-description mt-20">
                                    We want someone who has been doing this for a solid 2-3 years. We want someone who can
                                    demonstrate an extremely strong portfolio.
                                </div>
                                <div className="card-job-bottom mt-25">
                                    <div className="row">
                                        <div className="col-lg-9 col-sm-8 col-12">
                                            <a href="/Jobs" className="btn btn-small background-urgent btn-pink mr-5">Urgent</a>
                                            <a href="/Jobs" className="btn btn-small background-blue-light mr-5">Senior</a>
                                            <a href="/Jobs" className="btn btn-small background-6 disc-btn">Full time</a>
                                        </div>
                                        <div className="col-lg-3 col-sm-4 col-12 text-end pt-5 pt-sm-15">
                                            <a href="" className="text-lg color-muted"><i className="fi-rr-shield-check"></i></a>
                                            <a href="" className="ml-5 text-lg color-muted"><i className="fi-rr-bookmark"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End item job --> */}
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            {/* <!-- Item job --> */}
                            <div className="card-job hover-up wow animate__animated animate__fadeInUp">
                                <div className="card-job-top">
                                    <div className="card-job-top--image">
                                        <a href="/Employerdetails">
                                            <figure><img alt="jobhub" src="assets/imgs/page/job/n-digital.png" /></figure>
                                        </a>
                                    </div>
                                    <div className="card-job-top--info">
                                        <h6 className="card-job-top--info-heading"><a href="/Jobdetails">Development Team Lead</a></h6>
                                        <div className="row">
                                            <div className="col-md-9">
                                                <a href="/Employer"><span className="card-job-top--company">AliStudio, Inc</span></a>
                                                <span className="card-job-top--location text-sm"><i className="fi-rr-marker"></i> New York, NY</span>
                                                <span className="card-job-top--type-job text-sm"><i className="fi-rr-briefcase"></i>Full time</span>
                                                <span className="card-job-top--post-time text-sm"><i className="fi-rr-clock"></i> 3 mins ago</span>
                                            </div>
                                            <div className="col-md-3 text-md-end text-start">
                                                <span className="card-job-top--price">₹500<span>/Hour</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-job-description mt-20">
                                    We want someone who has been doing this for a solid 2-3 years. We want someone who can
                                    demonstrate an extremely strong portfolio.
                                </div>
                                <div className="card-job-bottom mt-25">
                                    <div className="row">
                                        <div className="col-lg-9 col-sm-8 col-12">
                                            <a href="/Jobs" className="btn btn-small background-urgent btn-pink mr-5">Urgent</a>
                                            <a href="/Jobs" className="btn btn-small background-blue-light mr-5">Senior</a>
                                            <a href="/Jobs" className="btn btn-small background-6 disc-btn">Full time</a>
                                        </div>
                                        <div className="col-lg-3 col-sm-4 col-12 text-end pt-5 pt-sm-15">
                                            <a href="" className="text-lg color-muted"><i className="fi-rr-shield-check"></i></a>
                                            <a href="" className="ml-5 text-lg color-muted"><i className="fi-rr-bookmark"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End item job --> */}
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            {/* <!-- Item job --> */}
                            <div className="card-job hover-up wow animate__animated animate__fadeInUp">
                                <div className="card-job-top">
                                    <div className="card-job-top--image">
                                        <a href="/Employerdetails">
                                            <figure><img alt="jobhub" src="assets/imgs/page/job/n-digital2.png" /></figure>
                                        </a>
                                    </div>
                                    <div className="card-job-top--info">
                                        <h6 className="card-job-top--info-heading"><a href="/Jobdetails">Hiring Online English Teachers</a>
                                        </h6>
                                        <div className="row">
                                            <div className="col-md-9">
                                                <a href="/Employer"><span className="card-job-top--company">AliStudio, Inc</span></a>
                                                <span className="card-job-top--location text-sm"><i className="fi-rr-marker"></i> New York, NY</span>
                                                <span className="card-job-top--type-job text-sm"><i className="fi-rr-briefcase"></i>Full time</span>
                                                <span className="card-job-top--post-time text-sm"><i className="fi-rr-clock"></i> 3 mins ago</span>
                                            </div>
                                            <div className="col-md-3 text-md-end text-start">
                                                <span className="card-job-top--price">₹500<span>/Hour</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-job-description mt-20">
                                    We want someone who has been doing this for a solid 2-3 years. We want someone who can
                                    demonstrate an extremely strong portfolio.
                                </div>
                                <div className="card-job-bottom mt-25">
                                    <div className="row">
                                        <div className="col-lg-9 col-sm-8 col-12">
                                            <a href="/Jobs" className="btn btn-small background-urgent btn-pink mr-5">Urgent</a>
                                            <a href="/Jobs" className="btn btn-small background-blue-light mr-5">Senior</a>
                                            <a href="/Jobs" className="btn btn-small background-6 disc-btn">Full time</a>
                                        </div>
                                        <div className="col-lg-3 col-sm-4 col-12 text-end pt-5 pt-sm-15">
                                            <a href="" className="text-lg color-muted"><i className="fi-rr-shield-check"></i></a>
                                            <a href="" className="ml-5 text-lg color-muted"><i className="fi-rr-bookmark"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End item job --> */}
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            {/* <!-- Item job --> */}
                            <div className="card-job hover-u wow animate__animated animate__fadeInUp">
                                <div className="card-job-top">
                                    <div className="card-job-top--image">
                                        <a href="/Employerdetails">
                                            <figure><img alt="jobhub" src="assets/imgs/page/job/digital.png" /></figure>
                                        </a>
                                    </div>
                                    <div className="card-job-top--info">
                                        <h6 className="card-job-top--info-heading"><a href="/Jobdetails">Development Team Lead</a></h6>
                                        <div className="row">
                                            <div className="col-md-9">
                                                <a href="/Employer"><span className="card-job-top--company">AliStudio, Inc</span></a>
                                                <span className="card-job-top--location text-sm"><i className="fi-rr-marker"></i> New York, NY</span>
                                                <span className="card-job-top--type-job text-sm"><i className="fi-rr-briefcase"></i>Full time</span>
                                                <span className="card-job-top--post-time text-sm"><i className="fi-rr-clock"></i> 3 mins ago</span>
                                            </div>
                                            <div className="col-md-3 text-md-end text-start">
                                                <span className="card-job-top--price">₹500<span>/Hour</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-job-description mt-20">
                                    We want someone who has been doing this for a solid 2-3 years. We want someone who can
                                    demonstrate an extremely strong portfolio.
                                </div>
                                <div className="card-job-bottom mt-25">
                                    <div className="row">
                                        <div className="col-lg-9 col-sm-8 col-12">
                                            <a href="/Jobs" className="btn btn-small background-urgent btn-pink mr-5">Urgent</a>
                                            <a href="/Jobs" className="btn btn-small background-blue-light mr-5">Senior</a>
                                            <a href="/Jobs" className="btn btn-small background-6 disc-btn">Full time</a>
                                        </div>
                                        <div className="col-lg-3 col-sm-4 col-12 text-end pt-5 pt-sm-15">
                                            <a href="" className="text-lg color-muted"><i className="fi-rr-shield-check"></i></a>
                                            <a href="" className="ml-5 text-lg color-muted"><i className="fi-rr-bookmark"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End item job --> */}
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            {/* <!-- Item job --> */}
                            <div className="card-job hover-up wow animate__animated animate__fadeInUp">
                                <div className="card-job-top">
                                    <div className="card-job-top--image">
                                        <a href="/Employerdetails">
                                            <figure><img alt="jobhub" src="assets/imgs/page/job/n-digital.png" /></figure>
                                        </a>
                                    </div>
                                    <div className="card-job-top--info">
                                        <h6 className="card-job-top--info-heading"><a href="/Jobdetails">Hiring Online Chiness Teachers</a>
                                        </h6>
                                        <div className="row">
                                            <div className="col-md-9">
                                                <a href="/Employer"><span className="card-job-top--company">AliStudio, Inc</span></a>
                                                <span className="card-job-top--location text-sm"><i className="fi-rr-marker"></i> New York, NY</span>
                                                <span className="card-job-top--type-job text-sm"><i className="fi-rr-briefcase"></i>Full time</span>
                                                <span className="card-job-top--post-time text-sm"><i className="fi-rr-clock"></i> 3 mins ago</span>
                                            </div>
                                            <div className="col-md-3 text-md-end text-start">
                                                <span className="card-job-top--price">₹500<span>/Hour</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-job-description mt-20">
                                    We want someone who has been doing this for a solid 2-3 years. We want someone who can
                                    demonstrate an extremely strong portfolio.
                                </div>
                                <div className="card-job-bottom mt-25">
                                    <div className="row">
                                        <div className="col-lg-9 col-sm-8 col-12">
                                            <a href="/Jobs" className="btn btn-small background-urgent btn-pink mr-5">Urgent</a>
                                            <a href="/Jobs" className="btn btn-small background-blue-light mr-5">Senior</a>
                                            <a href="/Jobs" className="btn btn-small background-6 disc-btn">Full time</a>
                                        </div>
                                        <div className="col-lg-3 col-sm-4 col-12 text-end pt-5 pt-sm-15">
                                            <a href="" className="text-lg color-muted"><i className="fi-rr-shield-check"></i></a>
                                            <a href="" className="ml-5 text-lg color-muted"><i className="fi-rr-bookmark"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End item job --> */}
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            {/* <!-- Item job --> */}
                            <div className="card-job hover-up wow animate__animated animate__fadeInUp">
                                <div className="card-job-top">
                                    <div className="card-job-top--image">
                                        <a href="/Employerdetails">
                                            <figure><img alt="jobhub" src="assets/imgs/page/job/n-digital2.png" /></figure>
                                        </a>
                                    </div>
                                    <div className="card-job-top--info">
                                        <h6 className="card-job-top--info-heading"><a href="/Jobdetails">Digital Experience Designer</a>
                                        </h6>
                                        <div className="row">
                                            <div className="col-md-9">
                                                <a href="/Employer"><span className="card-job-top--company">AliStudio, Inc</span></a>
                                                <span className="card-job-top--location text-sm"><i className="fi-rr-marker"></i> New York, NY</span>
                                                <span className="card-job-top--type-job text-sm"><i className="fi-rr-briefcase"></i>Full time</span>
                                                <span className="card-job-top--post-time text-sm"><i className="fi-rr-clock"></i> 3 mins ago</span>
                                            </div>
                                            <div className="col-md-3 text-md-end text-start">
                                                <span className="card-job-top--price">₹500<span>/Hour</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-job-description mt-20">
                                    We want someone who has been doing this for a solid 2-3 years. We want someone who can
                                    demonstrate an extremely strong portfolio. Create deliverables for your product
                                </div>
                                <div className="card-job-bottom mt-25">
                                    <div className="row">
                                        <div className="col-lg-9 col-sm-8 col-12">
                                            <a href="/Jobs" className="btn btn-small background-urgent btn-pink mr-5">Urgent</a>
                                            <a href="/Jobs" className="btn btn-small background-blue-light mr-5">Senior</a>
                                            <a href="/Jobs" className="btn btn-small background-6 disc-btn">Full time</a>
                                        </div>
                                        <div className="col-lg-3 col-sm-4 col-12 text-end pt-5 pt-sm-15">
                                            <a href="" className="text-lg color-muted"><i className="fi-rr-shield-check"></i></a>
                                            <a href="" className="ml-5 text-lg color-muted"><i className="fi-rr-bookmark"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End item job --> */}
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
                                <div className="box-button-shadow mt-30 wow animate__animated animate__fadeInUp">
                                    <a href="/Jobs" className="btn btn-default">Explore more</a>
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

        <div className="section-box">
            <div className="container">
                <ul className="list-partners">
                <li
  className="wow animate__animated animate__fadeInUp hover-up"
  data-wow-delay="0s"
>
  <a href="">
    <figure
      style={{
        transition: "transform 0.4s ease, opacity 0.4s ease"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.opacity = "0.95";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.opacity = "1";
      }}
    >
      <img alt="jobhub" src="assets/imgs/jobs/logos/samsung.svg" />
    </figure>
  </a>
</li>
<li
  className="wow animate__animated animate__fadeInUp hover-up"
  data-wow-delay="0s"
>
  <a href="">
    <figure
      style={{
        transition: "transform 0.4s ease, opacity 0.4s ease"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.opacity = "0.95";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.opacity = "1";
      }}
    >
    <img alt="jobhub" src="assets/imgs/jobs/logos/google.svg" />
    </figure>
  </a>
</li>
<li
  className="wow animate__animated animate__fadeInUp hover-up"
  data-wow-delay="0s"
>
  <a href="">
    <figure
      style={{
        transition: "transform 0.4s ease, opacity 0.4s ease"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.opacity = "0.95";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.opacity = "1";
      }}
    >
    <img alt="jobhub" src="assets/imgs/jobs/logos/facebook.svg" />
    </figure>
  </a>
</li>
<li
  className="wow animate__animated animate__fadeInUp hover-up"
  data-wow-delay="0s"
>
  <a href="">
    <figure
      style={{
        transition: "transform 0.4s ease, opacity 0.4s ease"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.opacity = "0.95";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.opacity = "1";
      }}
    >
    <img alt="jobhub" src="assets/imgs/jobs/logos/pinterest.svg" />
    </figure>
  </a>
</li>       
<li
  className="wow animate__animated animate__fadeInUp hover-up"
  data-wow-delay="0s"
>
  <a href="">
    <figure
      style={{
        transition: "transform 0.4s ease, opacity 0.4s ease"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.opacity = "0.95";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.opacity = "1";
      }}
    >
    <img alt="jobhub" src="assets/imgs/jobs/logos/avaya.svg" />
    </figure>
  </a>
</li>       
<li
  className="wow animate__animated animate__fadeInUp hover-up"
  data-wow-delay="0s"
>
  <a href="">
    <figure
      style={{
        transition: "transform 0.4s ease, opacity 0.4s ease"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.opacity = "0.95";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.opacity = "1";
      }}
    >
    <img alt="jobhub" src="assets/imgs/jobs/logos/forbes.svg" />
    </figure>
  </a>
</li>   
<li
  className="wow animate__animated animate__fadeInUp hover-up"
  data-wow-delay="0s"
>
  <a href="">
    <figure
      style={{
        transition: "transform 0.4s ease, opacity 0.4s ease"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.opacity = "0.95";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.opacity = "1";
      }}
    >
   <img alt="jobhub" src="assets/imgs/jobs/logos/avis.svg" />
    </figure>
  </a>
</li>  
<li
  className="wow animate__animated animate__fadeInUp hover-up"
  data-wow-delay="0s"
>
  <a href="">
    <figure
      style={{
        transition: "transform 0.4s ease, opacity 0.4s ease"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.opacity = "0.95";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.opacity = "1";
      }}
    >
   <img alt="jobhub" src="assets/imgs/jobs/logos/nielsen.svg" />
    </figure>
  </a>
</li>  
<li
  className="wow animate__animated animate__fadeInUp hover-up"
  data-wow-delay="0s"
>
  <a href="">
    <figure
      style={{
        transition: "transform 0.4s ease, opacity 0.4s ease"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.opacity = "0.95";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.opacity = "1";
      }}
    >
   <img alt="jobhub" src="assets/imgs/jobs/logos/doordash.svg" />
    </figure>
  </a>
</li>              
                 
                </ul>
            </div>
        </div>
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

export default Home
