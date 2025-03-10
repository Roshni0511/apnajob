import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "@fortawesome/fontawesome-free/css/all.min.css";

const Employerdetails = () => {
  return (
    <>
       <Navbar />
       <main className="main">
        <section className="section-box">
            <div className="box-head-single box-head-single-candidate">
                <div className="container">
                    <div className="heading-image-rd online">
                        <a href="#">
                            <figure><img alt="jobhub" src="assets/imgs/page/employers/employer-12.png" /></figure>
                        </a>
                    </div>
                    <div className="heading-main-info">
                        <h4>Behance Studio</h4>
                        <div className="head-info-profile">
                            <span className="text-small mr-20"><i className="fi-rr-marker text-mutted"></i> Chicago, US</span>
                            <span className="text-small mr-20"><i className="fi-rr-briefcase text-mutted"></i> Accounting / Finance</span>
                            <span className="text-small"><i className="fi-rr-clock text-mutted"></i> Since 2012</span>
                            <div className="rate-reviews-small">
                                <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                <span className="ml-10 text-muted text-small">(5.0)</span>
                            </div>
                        </div>
                        <div className="row align-items-end">
                            <div className="col-lg-6">
                                <a href="job-grid.html" className="btn btn-tags-sm mb-10 mr-5">12 open jobs</a>
                                <a href="job-list.html" className="btn btn-tags-sm mb-10 mr-5">24 completed jobs</a>
                            </div>
                            <div className="col-lg-3">
                                <a href="#" className="btn btn-default">Apply For Job</a>
                            </div>
                            <div className="col-lg-3 text-lg-end">
                                <ul className="breadcrumbs mt-10">
                                    <li><a href="#">Home</a></li>
                                    <li>Employers Details</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section-box mt-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                        <div className="content-single">
                            <h4 className="mb-20">About Company</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum fuga eveniet. Deleniti asperiores, commodi quae ipsum quas est itaque, ipsa, dolore beatae voluptates nemo blanditiis iste eius officia minus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum fuga eveniet.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum fuga eveniet. Deleniti asperiores, commodi quae ipsum quas est itaque, ipsa, dolore beatae voluptates nemo blanditiis iste eius officia minus. Id nisi, consequuntur sunt impedit quidem, vitae mollitia!
                            </p>
                            <div className="divider"></div>
                            <h4 className="mb-20 mt-25">Branches</h4>
                            <div className="row">
                                <div className="col-md-4 col-sm-6 col-12 mb-60">
                                    <strong className="text-md-bold">Behance Design</strong>
                                    <span className="dis-block text-muted text-md-lh24">
                                        NY, UK<br />
                                        Jan 2021 — Present
                                    </span>
                                </div>
                                <div className="col-md-4 col-sm-6 col-12 mb-60">
                                    <strong className="text-md-bold">Behance Accounting</strong>
                                    <span className="dis-block text-muted text-md-lh24">
                                        pxdraft Ltd, UK<br />
                                        Jan 2018 — Dec 2021
                                    </span>
                                </div>
                                <div className="col-md-4 col-sm-6 col-12 mb-60">
                                    <strong className="text-md-bold">Behance Creative</strong>
                                    <span className="dis-block text-muted text-md-lh24">
                                        AT Studio, UK<br />
                                        Jan 2017 — May 2017
                                    </span>
                                </div>

                                <div className="col-md-4 col-sm-6 col-12 mb-10">
                                    <strong className="text-md-bold">Behance Social</strong>
                                    <span className="dis-block text-muted text-md-lh24">
                                        NY, UK<br />
                                        Jan 2021 — Present
                                    </span>
                                </div>
                                <div className="col-md-4 col-sm-6 col-12 mb-10">
                                    <strong className="text-md-bold">Behance Search</strong>
                                    <span className="dis-block text-muted text-md-lh24">
                                        NY, UK<br />
                                        Jan 2021 — Present
                                    </span>
                                </div>
                                <div className="col-md-4 col-sm-6 col-12 mb-10">
                                    <strong className="text-md-bold">Behance Video</strong>
                                    <span className="dis-block text-muted text-md-lh24">
                                        NY, UK<br />
                                        Jan 2021 — Present
                                    </span>
                                </div>
                            </div>
                            <div className="divider"></div>
                            <h4 className="mt-30 mb-30">Our Office</h4>
                            <img src="assets/imgs/page/employers/img-1.png" alt="jobhub" />
                            <div className="divider"></div>
                            <h4 className="mt-30 mb-30">Vacancies</h4>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li>Digital Designer - 03 person </li>
                                        <li>Digital Marketing - 04 persons</li>
                                        <li>Project Manager - 02 persons</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <p className="text-muted lh-32">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum fuga eveniet. Deleniti asperiores, commodi quae ipsum quas est itaque
                                    </p>
                                </div>
                            </div>
                            <div className="divider"></div>
                            <h4 className="mb-10 mt-30">Required skills</h4>
                            <div className="block-progress-status">
                                <div className="item-progress">
                                    <div className="title-progress"><strong className="text-md-bold">Figma</strong> (8.5/10)</div>
                                    <div className="info-progress">
                                        <div className="progress">
                                            <div style={{width:'90%'}} className="progress-bar"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-progress">
                                    <div className="title-progress"><strong className="text-md-bold">Sketch</strong> (8.5/10)</div>
                                    <div className="info-progress">
                                        <div className="progress">
                                            <div style={{width:'60%'}} className="progress-bar"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-progress">
                                    <div className="title-progress"><strong className="text-md-bold">After Effect</strong> (8.5/10)</div>
                                    <div className="info-progress">
                                        <div className="progress">
                                            <div style={{width:'80%'}}className="progress-bar"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-progress">
                                    <div className="title-progress"><strong className="text-md-bold">Photoshop</strong> (8.5/10)</div>
                                    <div className="info-progress">
                                        <div className="progress">
                                            <div  style={{width:'70%'}} className="progress-bar"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-progress">
                                    <div className="title-progress"><strong className="text-md-bold">HTML & CSS</strong> (8.5/10)</div>
                                    <div className="info-progress">
                                        <div className="progress">
                                            <div  style={{width:'40%'}} className="progress-bar"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="single-apply-jobs">
                            <div className="row align-items-center">
                                <div className="col-md-5">
                                    <a href="#" className="btn btn-default mr-15">Apply For Job</a>
                                    <a href="#" className="btn btn-border">Save Employers</a>
                                </div>
                                <div className="col-md-7 text-lg-end social-share">
                                    <a href="#" className="btn btn-border btn-sm mr-10"><img alt="jobhub" src="assets/imgs/theme/icons/share-fb.svg" /> Share</a>
                                    <a href="#" className="btn btn-border btn-sm mr-10"><img alt="jobhub" src="assets/imgs/theme/icons/share-tw.svg" /> Tweet</a>
                                    <a href="#" className="btn btn-border btn-sm"><img alt="jobhub" src="assets/imgs/theme/icons/share-pinterest.svg" /> Pin</a>
                                </div>
                            </div>
                        </div>

                        <div className="single-recent-jobs">
                            <h4 className="heading-border"><span>Opening Jobs</span></h4>
                            <div className="list-recent-jobs">
                                <div className="card-job hover-up wow animate__animated animate__fadeInUp">
                                    <div className="card-job-top">
                                        <div className="card-job-top--image">
                                            <figure><img alt="jobhub" src="assets/imgs/page/job/digital.png" /></figure>
                                        </div>
                                        <div className="card-job-top--info">
                                            <h6 className="card-job-top--info-heading"><a href="job-single.html">Digital Experience Designer</a></h6>
                                            <div className="row">
                                                <div className="col-lg-7">
                                                    <span className="card-job-top--company">AliStudio, Inc</span>
                                                    <span className="card-job-top--location text-sm"><i className="fi-rr-marker"></i>
                                                        New York, NY</span>
                                                    <span className="card-job-top--type-job text-sm"><i className="fi-rr-briefcase"></i>
                                                        Full time</span>
                                                    <span className="card-job-top--post-time text-sm"><i className="fi-rr-clock"></i> 3
                                                        mins ago</span>
                                                </div>
                                                <div className="col-lg-5 text-lg-end">
                                                    <span className="card-job-top--price">₹500<span>/Hour</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-job-description mt-20">
                                        We want someone who has been doing this for a solid 2-3 years. We want someone
                                        who can
                                        demonstrate an extremely strong portfolio. Create deliverables for your product
                                        area
                                        (for example competitive analyses, user flows.
                                    </div>
                                    <div className="card-job-bottom mt-25">
                                        <div className="row">
                                            <div className="col-lg-9 col-sm-8 col-12">
                                                <a href="job-grid.html" className="btn btn-small background-urgent btn-pink mr-5">Urgent</a>
                                                <a href="job-grid-2.html" className="btn btn-small background-blue-light mr-5">Senior</a>
                                                <a href="job-grid.html" className="btn btn-small background-6 disc-btn">Full time</a>
                                            </div>
                                            <div className="col-lg-3 col-sm-4 col-12 text-end">
                                                <span><img src="assets/imgs/theme/icons/shield-check.svg" alt="jobhub" /></span>
                                                <span className="ml-5"><img src="assets/imgs/theme/icons/bookmark.svg" alt="jobhub" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-job hover-up wow animate__animated animate__fadeInUp">
                                    <div className="card-job-top">
                                        <div className="card-job-top--image">
                                            <figure><img alt="jobhub" src="assets/imgs/page/job/n-digital.png" /></figure>
                                        </div>
                                        <div className="card-job-top--info">
                                            <h6 className="card-job-top--info-heading"><a href="job-single.html">Digital Experience Designer</a></h6>
                                            <div className="row">
                                                <div className="col-lg-7">
                                                    <span className="card-job-top--company">AliStudio, Inc</span>
                                                    <span className="card-job-top--location text-sm"><i className="fi-rr-marker"></i>
                                                        New York, NY</span>
                                                    <span className="card-job-top--type-job text-sm"><i className="fi-rr-briefcase"></i>
                                                        Full time</span>
                                                    <span className="card-job-top--post-time text-sm"><i className="fi-rr-clock"></i> 3
                                                        mins ago</span>
                                                </div>
                                                <div className="col-lg-5  text-lg-end">
                                                    <span className="card-job-top--price">₹500<span>/Hour</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-job-description mt-20">
                                        We want someone who has been doing this for a solid 2-3 years. We want someone
                                        who can
                                        demonstrate an extremely strong portfolio. Create deliverables for your product
                                        area
                                        (for example competitive analyses, user flows.
                                    </div>
                                    <div className="card-job-bottom mt-25">
                                        <div className="row">
                                            <div className="col-lg-9 col-sm-8 col-12">
                                                <a href="job-grid.html" className="btn btn-small background-urgent btn-pink mr-5">Urgent</a>
                                                <a href="job-grid-2.html" className="btn btn-small background-blue-light mr-5">Senior</a>
                                                <a href="job-grid.html" className="btn btn-small background-6 disc-btn">Full time</a>
                                            </div>
                                            <div className="col-lg-3 col-sm-4 col-12 text-end">
                                                <span><img src="assets/imgs/theme/icons/shield-check.svg" alt="jobhub" /></span>
                                                <span className="ml-5"><img src="assets/imgs/theme/icons/bookmark.svg" alt="jobhub" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-job hover-up wow animate__animated animate__fadeInUp">
                                    <div className="card-job-top">
                                        <div className="card-job-top--image">
                                            <figure><img alt="jobhub" src="assets/imgs/page/job/n-digital2.png" /></figure>
                                        </div>
                                        <div className="card-job-top--info">
                                            <h6 className="card-job-top--info-heading"><a href="job-single.html">Digital Experience Designer</a></h6>
                                            <div className="row">
                                                <div className="col-lg-7">
                                                    <span className="card-job-top--company">AliStudio, Inc</span>
                                                    <span className="card-job-top--location text-sm"><i className="fi-rr-marker"></i>
                                                        New York, NY</span>
                                                    <span className="card-job-top--type-job text-sm"><i className="fi-rr-briefcase"></i>
                                                        Full time</span>
                                                    <span className="card-job-top--post-time text-sm"><i className="fi-rr-clock"></i> 3
                                                        mins ago</span>
                                                </div>
                                                <div className="col-lg-5 text-lg-end">
                                                    <span className="card-job-top--price">₹500<span>/Hour</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-job-description mt-20">
                                        We want someone who has been doing this for a solid 2-3 years. We want someone
                                        who can
                                        demonstrate an extremely strong portfolio. Create deliverables for your product
                                        area
                                        (for example competitive analyses, user flows.
                                    </div>
                                    <div className="card-job-bottom mt-25">
                                        <div className="row">
                                            <div className="col-lg-9 col-sm-8 col-12">
                                                <a href="job-grid.html" className="btn btn-small background-urgent btn-pink mr-5">Urgent</a>
                                                <a href="job-grid-2.html" className="btn btn-small background-blue-light mr-5">Senior</a>
                                                <a href="job-grid.html" className="btn btn-small background-6 disc-btn">Full time</a>
                                            </div>
                                            <div className="col-lg-3 col-sm-4 col-12 text-end">
                                                <span><img src="assets/imgs/theme/icons/shield-check.svg" alt="jobhub" /></span>
                                                <span className="ml-5"><img src="assets/imgs/theme/icons/bookmark.svg" alt="jobhub" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-job hover-up wow animate__animated animate__fadeInUp">
                                    <div className="card-job-top">
                                        <div className="card-job-top--image">
                                            <figure><img alt="jobhub" src="assets/imgs/page/job/digital.png" /></figure>
                                        </div>
                                        <div className="card-job-top--info">
                                            <h6 className="card-job-top--info-heading"><a href="job-single.html">Digital Experience Designer</a></h6>
                                            <div className="row">
                                                <div className="col-lg-7">
                                                    <span className="card-job-top--company">AliStudio, Inc</span>
                                                    <span className="card-job-top--location text-sm"><i className="fi-rr-marker"></i>
                                                        New York, NY</span>
                                                    <span className="card-job-top--type-job text-sm"><i className="fi-rr-briefcase"></i>
                                                        Full time</span>
                                                    <span className="card-job-top--post-time text-sm"><i className="fi-rr-clock"></i> 3
                                                        mins ago</span>
                                                </div>
                                                <div className="col-lg-5 text-lg-end">
                                                    <span className="card-job-top--price">₹500<span>/Hour</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-job-description mt-20">
                                        We want someone who has been doing this for a solid 2-3 years. We want someone
                                        who can
                                        demonstrate an extremely strong portfolio. Create deliverables for your product
                                        area
                                        (for example competitive analyses, user flows.
                                    </div>
                                    <div className="card-job-bottom mt-25">
                                        <div className="row">
                                            <div className="col-lg-9 col-sm-8 col-12">
                                                <a href="job-grid.html" className="btn btn-small background-urgent btn-pink mr-5">Urgent</a>
                                                <a href="job-grid-2.html" className="btn btn-small background-blue-light mr-5">Senior</a>
                                                <a href="job-grid.html" className="btn btn-small background-6 disc-btn">Full time</a>
                                            </div>
                                            <div className="col-lg-3 col-sm-4 col-12 text-end">
                                                <span><img src="assets/imgs/theme/icons/shield-check.svg" alt="jobhub" /></span>
                                                <span className="ml-5"><img src="assets/imgs/theme/icons/bookmark.svg" alt="jobhub" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-20">
                                    <a href="job-grid.html" className="btn btn-default">Explore more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12 pl-40 pl-lg-15 mt-lg-30">
                        <div className="sidebar-shadow">
                            <h5 className="font-bold">Overview</h5>
                            <div className="sidebar-list-job mt-10">
                                <ul>
                                    <li>
                                        <div className="sidebar-icon-item"><i className="fi-rr-briefcase"></i></div>
                                        <div className="sidebar-text-info">
                                            <span className="text-description">Company field</span>
                                            <strong className="small-heading">Accounting / Finance</strong>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar-icon-item"><i className="fi-rr-marker"></i></div>
                                        <div className="sidebar-text-info">
                                            <span className="text-description">Location</span>
                                            <strong className="small-heading">Dallas, Texas<br />Remote Friendly</strong>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar-icon-item"><i class="fa-solid fa-indian-rupee-sign"></i></div>
                                        <div className="sidebar-text-info">
                                            <span className="text-description">Salary</span>
                                            <strong className="small-heading">₹35k - ₹45k</strong>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar-icon-item"><i className="fi-rr-clock"></i></div>
                                        <div className="sidebar-text-info">
                                            <span className="text-description">Member since</span>
                                            <strong className="small-heading">Jul 2012</strong>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar-icon-item"><i className="fi-rr-time-fast"></i></div>
                                        <div className="sidebar-text-info">
                                            <span className="text-description">Last Jobs Posted</span>
                                            <strong className="small-heading">4 days</strong>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="sidebar-list-job mt-10">
                                <a href="#" className="btn btn-default mr-10">Contact Us</a>
                                <a href="#" className="btn btn-border">Send message</a>
                            </div>

                            <div className="sidebar-team-member none-bd pt-10">
                                <h6 className="small-heading">Follower</h6>
                                <div className="sidebar-list-member sidebar-list-follower">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <figure><img alt="jobhub" src="assets/imgs/page/job-single/avatar1.png" /></figure>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="online">
                                                <figure><img alt="jobhub" src="assets/imgs/page/job-single/avatar2.png" /></figure>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <figure><img alt="jobhub" src="assets/imgs/page/job-single/avatar3.png" /></figure>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <figure><img alt="jobhub" src="assets/imgs/page/job-single/avatar4.png" /></figure>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <figure><img alt="jobhub" src="assets/imgs/page/job-single/avatar5.png" /></figure>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <figure><img alt="jobhub" src="assets/imgs/page/job-single/avatar6.png" /></figure>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <figure><img alt="jobhub" src="assets/imgs/page/job-single/avatar7.png" /></figure>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <figure><img alt="jobhub" src="assets/imgs/page/job-single/avatar8.png" /></figure>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="sidebar-shadow">
                            <div className="block-tags">
                                <a href="#" className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                                <a href="#" className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                                <a href="#" className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                                <a href="#" className="btn btn-tags-sm mb-10 mr-5">HTML 5</a>
                                <a href="#" className="btn btn-tags-sm mb-10 mr-5">Css 3</a>
                                <a href="#" className="btn btn-tags-sm mb-10 mr-5">Javascript</a>
                                <a href="#" className="btn btn-tags-sm mb-10 mr-5">Jquery</a>
                                <a href="#" className="btn btn-tags-sm mb-10 mr-5">NodeJS</a>
                                <a href="#" className="btn btn-tags-sm mb-10 mr-5">MongoDb</a>
                                <a href="#" className="btn btn-tags-sm mb-10 mr-5">SEO expert</a>
                                <a href="#" className="btn btn-tags-sm mb-10 mr-5">Gimp</a>
                                <a href="#" className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                                <a href="#" className="btn btn-tags-sm mb-10 mr-5">Photo editing</a>
                                <a href="#" className="btn btn-tags-sm mb-10 mr-5">Sketch</a>
                                <a href="#" className="btn btn-tags-sm mb-10 mr-5">jam</a>
                            </div>
                        </div>
                        <div className="sidebar-normal">
                            <div>
                                <h6 className="small-heading">Are you also hiring?</h6>
                                <ul className="ul-lists">
                                    <li><a href="#">Writing & Translation</a></li>
                                    <li><a href="#">Video & Animation</a></li>
                                    <li><a href="#">Music & Audio</a></li>
                                    <li><a href="#">Digital Marketing</a></li>
                                    <li><a href="#">Business</a></li>
                                    <li><a href="#">Programming & Tech</a></li>
                                </ul>
                            </div>
                        </div>
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

export default Employerdetails
