import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "@fortawesome/fontawesome-free/css/all.min.css";


const Jobs = () => {
  return (
    <>
       <Navbar />
       <main className="main">
        <section className="section-box-2">
            <div className="box-head-single none-bg">
                <div className="container">
                    <h4>There Are 65.866 Jobs<br />Here For you!</h4>
                    <div className="row mt-15 mb-40">
                        <div className="col-lg-7 col-md-9">
                            <span className="text-mutted">Discover your next career move, freelance gig, or
                                internship</span>
                        </div>
                        <div className="col-lg-5 col-md-3 text-lg-end text-start">
                            <ul className="breadcrumbs mt-sm-15">
                                <li><a href="#">Home</a></li>
                                <li>Jobs listing</li>
                            </ul>
                        </div>
                    </div>
                    <div className="box-shadow-bdrd-15 box-filters">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="box-search-job">
                                    <form className="form-search-job">
                                        <input type="text" className="input-search-job" placeholder="UI Designer" />
                                    </form>
                                </div>
                                <div className="list-tags-job">
                                    <a href="#" className="text-normal job-tag">UI/UX designing <span className="remove-tags-job"></span></a>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="d-flex job-fillter">
                                    <div className="d-block d-lg-flex">
                                        <div className="dropdown job-type">
                                            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true" data-bs-display="static"><i className="fi-rr-briefcase"></i>
                                                <span>Full time</span> <i className="fi-rr-angle-small-down"></i></button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item active" href="#">Full time</a></li>
                                                <li><a className="dropdown-item" href="#">Part time</a></li>
                                                <li><a className="dropdown-item" href="#">Freelancer</a></li>
                                                <li><a className="dropdown-item" href="#">Online work</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <button className="btn dropdown-toggle" type="button" id="dropdownLocation" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static"><i className="fi-rr-marker"></i> <span>New
                                                    York, USA</span> <i className="fi-rr-angle-small-down"></i></button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownLocation">
                                                <li><a className="dropdown-item active" href="#">New York, USA</a></li>
                                                <li><a className="dropdown-item" href="#">Dallas, USA</a></li>
                                                <li><a className="dropdown-item" href="#">Chicago, USA</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <button className="btn dropdown-toggle" type="button" id="dropdownLocation2" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static"><i class="fa-solid fa-indian-rupee-sign"></i><span>Salary
                                                    Range</span> <i className="fi-rr-angle-small-down"></i></button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownLocation2">
                                                <li><a className="dropdown-item active" href="#">₹100 -  ₹500</a></li>
                                                <li><a className="dropdown-item" href="#">₹500 - ₹1000</a></li>
                                                <li><a className="dropdown-item" href="#">₹1000 - ₹1500</a></li>
                                                <li><a className="dropdown-item" href="#">₹1500 - ₹2000</a></li>
                                                <li><a className="dropdown-item" href="#">Over ₹2000</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="box-button-find">
                                        <button className="btn btn-default float-right">Find Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section-box mt-80">
            <div className="container">
                <div className="row flex-row-reverse">
                    <div className="col-lg-9 col-md-12 col-sm-12 col-12 float-right">
                        <div className="content-page">
                            <div className="box-filters-job mt-15 mb-10">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <span className="text-small">Showing <strong>41-60 </strong>of <strong>944
                                            </strong>jobs</span>
                                    </div>
                                    <div className="col-lg-5 text-lg-end mt-sm-15">
                                        <div className="display-flex2">
                                            <span className="text-sortby">Sort by:</span>
                                            <div className="dropdown dropdown-sort">
                                                <button className="btn dropdown-toggle" type="button" id="dropdownSort" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static"><span>Newest Post</span> <i className="fi-rr-angle-small-down"></i></button>
                                                <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort">
                                                    <li><a className="dropdown-item active" href="#">Newest Post</a></li>
                                                    <li><a className="dropdown-item" href="#">Oldest Post</a></li>
                                                    <li><a className="dropdown-item" href="#">Rating Post</a></li>
                                                </ul>
                                            </div>
                                            <div className="box-view-type">
                                                <a href="job-grid.html" className="view-type"><img src="assets/imgs/theme/icons/icon-list.svg" alt="jobhub" /></a>
                                                <a href="job-list.html" className="view-type"><img src="assets/imgs/theme/icons/icon-grid.svg" alt="jobhub" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row job-listing-grid-2">
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".s">
                                        <div className="card-block-info">
                                            <div className="row">
                                                <div className="col-lg-12 col-12">
                                                    <a href="/Jobdetails" className="card-2-img-text card-grid-2-img-medium">
                                                        <span className="card-grid-2-img-small"><img alt="jobhub" src="assets/imgs/page/job/ui-ux.svg" /></span> <span>Supervisor, Strategy Partime</span>
                                                    </a>
                                                    <div className="dropdowm menu-dropdown-abs">
                                                        <button className="btn btn-dots btn-dots-abs-right dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                                        <ul className="dropdown-menu dropdown-menu-light">
                                                            <li><a className="dropdown-item" href="#">View</a></li>
                                                            <li><a className="dropdown-item" href="#">Bookmark</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-15">
                                                <span className="text-sm text-mutted-2 mr-20"><i className="fi-rr-marker"></i> Wisconsin</span>
                                                <span className="text-sm text-mutted-2"><i className="fi-rr-briefcase"></i> Full time</span>
                                            </div>

                                            <div className="text-small mt-15">
                                                It is a long established fact that a reader will be distracted by the readable content of a page
                                                when looking at its layout.
                                            </div>

                                            <div className="card-2-bottom mt-30">
                                                <div className="row">
                                                    <div className="col-lg-6 col-8">
                                                        <a href="employers-single-2.html"><span className="text-brand-10 text-icon-first">Amanda</span></a>
                                                    </div>
                                                    <div className="col-lg-6 col-4 text-end">
                                                        <span className="card-text-price"> ₹500<span>/Hour</span> </span>
                                                    </div>
                                                </div>
                                                <div className="row mt-20">
                                                    <div className="col-lg-8 col-8">
                                                        <a href="job-grid.html" className="btn btn-grey-small">Adobe XD</a>
                                                        <a href="job-list.html" className="btn btn-grey-small">Figma</a>
                                                    </div>
                                                    <div className="col-lg-4 col-4 text-end pt-5">
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-shield-check"></i></span>
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-bookmark"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".s">
                                        <div className="card-block-info">
                                            <div className="row">
                                                <div className="col-lg-12 col-12">
                                                    <a href="/Jobdetails" className="card-2-img-text card-grid-2-img-medium">
                                                        <span className="card-grid-2-img-small"><img alt="jobhub" src="assets/imgs/page/job/ui-ux2.svg" /></span> <span>Copywriter - Fallon MN</span>
                                                    </a>
                                                    <div className="dropdowm menu-dropdown-abs">
                                                        <button className="btn btn-dots btn-dots-abs-right dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                                        <ul className="dropdown-menu dropdown-menu-light">
                                                            <li><a className="dropdown-item" href="#">View</a></li>
                                                            <li><a className="dropdown-item" href="#">Bookmark</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-15">
                                                <span className="text-sm text-mutted-2 mr-20"><i className="fi-rr-marker"></i> Virginia</span>
                                                <span className="text-sm text-mutted-2"><i className="fi-rr-briefcase"></i> Full time</span>
                                            </div>

                                            <div className="text-small mt-15">
                                                It is a long established fact that a reader will be distracted by the readable content of a page
                                                when looking at its layout.
                                            </div>

                                            <div className="card-2-bottom mt-30">
                                                <div className="row">
                                                    <div className="col-lg-6 col-8">
                                                        <a href="employers-single-2.html"><span className="text-brand-10 text-icon-first">AliStudio, Inc</span></a>
                                                    </div>
                                                    <div className="col-lg-6 col-4 text-end">
                                                        <span className="card-text-price"> ₹500<span>/Hour</span> </span>
                                                    </div>
                                                </div>
                                                <div className="row mt-20">
                                                    <div className="col-lg-8 col-8">
                                                        <a href="job-grid.html" className="btn btn-grey-small">Adobe XD</a>
                                                        <a href="job-list.html" className="btn btn-grey-small">Figma</a>
                                                    </div>
                                                    <div className="col-lg-4 col-4 text-end pt-5">
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-shield-check"></i></span>
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-bookmark"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".s">
                                        <div className="card-block-info">
                                            <div className="row">
                                                <div className="col-lg-12 col-12">
                                                    <a href="/Jobdetails" className="card-2-img-text card-grid-2-img-medium">
                                                        <span className="card-grid-2-img-small"><img alt="jobhub" src="assets/imgs/page/job/ui-ux3.svg" /></span> <span>UI / UX Designerfulltime</span>
                                                    </a>
                                                    <div className="dropdowm menu-dropdown-abs">
                                                        <button className="btn btn-dots btn-dots-abs-right dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                                        <ul className="dropdown-menu dropdown-menu-light">
                                                            <li><a className="dropdown-item" href="#">View</a></li>
                                                            <li><a className="dropdown-item" href="#">Bookmark</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-15">
                                                <span className="text-sm text-mutted-2 mr-20"><i className="fi-rr-marker"></i> New York City</span>
                                                <span className="text-sm text-mutted-2"><i className="fi-rr-briefcase"></i> Full time</span>
                                            </div>

                                            <div className="text-small mt-15">
                                                It is a long established fact that a reader will be distracted by the readable content of a page
                                                when looking at its layout.
                                            </div>

                                            <div className="card-2-bottom mt-30">
                                                <div className="row">
                                                    <div className="col-lg-6 col-8">
                                                        <a href="employers-single-2.html"><span className="text-brand-10 text-icon-first">AliStudio, Inc</span></a>
                                                    </div>
                                                    <div className="col-lg-6 col-4 text-end">
                                                        <span className="card-text-price"> ₹500<span>/Hour</span> </span>
                                                    </div>
                                                </div>
                                                <div className="row mt-20">
                                                    <div className="col-lg-8 col-8">
                                                        <a href="job-grid.html" className="btn btn-grey-small">Adobe XD</a>
                                                        <a href="job-list.html" className="btn btn-grey-small">Figma</a>
                                                    </div>
                                                    <div className="col-lg-4 col-4 text-end pt-5">
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-shield-check"></i></span>
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-bookmark"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".s">
                                        <div className="card-block-info">
                                            <div className="row">
                                                <div className="col-lg-12 col-12">
                                                    <a href="/Jobdetails" className="card-2-img-text card-grid-2-img-medium">
                                                        <span className="card-grid-2-img-small"><img alt="jobhub" src="assets/imgs/page/job/ui-ux4.svg" /></span> <span>Associate Director Experience Design</span>
                                                    </a>
                                                    <div className="dropdowm menu-dropdown-abs">
                                                        <button className="btn btn-dots btn-dots-abs-right dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                                        <ul className="dropdown-menu dropdown-menu-light">
                                                            <li><a className="dropdown-item" href="#">View</a></li>
                                                            <li><a className="dropdown-item" href="#">Bookmark</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-15">
                                                <span className="text-sm text-mutted-2 mr-20"><i className="fi-rr-marker"></i> New York City</span>
                                                <span className="text-sm text-mutted-2"><i className="fi-rr-briefcase"></i> Full time</span>
                                            </div>

                                            <div className="text-small mt-15">
                                                It is a long established fact that a reader will be distracted by the readable content of a page
                                                when looking at its layout.
                                            </div>

                                            <div className="card-2-bottom mt-30">
                                                <div className="row">
                                                    <div className="col-lg-6 col-8">
                                                        <a href="employers-single-2.html"><span className="text-brand-10 text-icon-first">AliStudio, Inc</span></a>
                                                    </div>
                                                    <div className="col-lg-6 col-4 text-end">
                                                        <span className="card-text-price"> ₹500<span>/Hour</span> </span>
                                                    </div>
                                                </div>
                                                <div className="row mt-20">
                                                    <div className="col-lg-8 col-8">
                                                        <a href="job-grid.html" className="btn btn-grey-small">Adobe XD</a>
                                                        <a href="job-list.html" className="btn btn-grey-small">Figma</a>
                                                    </div>
                                                    <div className="col-lg-4 col-4 text-end pt-5">
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-shield-check"></i></span>
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-bookmark"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".s">
                                        <div className="card-block-info">
                                            <div className="row">
                                                <div className="col-lg-12 col-12">
                                                    <a href="/Jobdetails" className="card-2-img-text card-grid-2-img-medium">
                                                        <span className="card-grid-2-img-small"><img alt="jobhub" src="assets/imgs/page/job/ui-ux5.svg" /></span> <span>Freelance Associate Director</span>
                                                    </a>
                                                    <div className="dropdowm menu-dropdown-abs">
                                                        <button className="btn btn-dots btn-dots-abs-right dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                                        <ul className="dropdown-menu dropdown-menu-light">
                                                            <li><a className="dropdown-item" href="#">View</a></li>
                                                            <li><a className="dropdown-item" href="#">Bookmark</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-15">
                                                <span className="text-sm text-mutted-2 mr-20"><i className="fi-rr-marker"></i> New York City</span>
                                                <span className="text-sm text-mutted-2"><i className="fi-rr-briefcase"></i> Full time</span>
                                            </div>

                                            <div className="text-small mt-15">
                                                It is a long established fact that a reader will be distracted by the readable content of a page
                                                when looking at its layout.
                                            </div>

                                            <div className="card-2-bottom mt-30">
                                                <div className="row">
                                                    <div className="col-lg-6 col-8">
                                                        <a href="employers-single-2.html"><span className="text-brand-10 text-icon-first">AliStudio, Inc</span></a>
                                                    </div>
                                                    <div className="col-lg-6 col-4 text-end">
                                                        <span className="card-text-price"> ₹500<span>/Hour</span> </span>
                                                    </div>
                                                </div>
                                                <div className="row mt-20">
                                                    <div className="col-lg-8 col-8">
                                                        <a href="job-grid.html" className="btn btn-grey-small">Adobe XD</a>
                                                        <a href="job-list.html" className="btn btn-grey-small">Figma</a>
                                                    </div>
                                                    <div className="col-lg-4 col-4 text-end pt-5">
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-shield-check"></i></span>
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-bookmark"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".s">
                                        <div className="card-block-info">
                                            <div className="row">
                                                <div className="col-lg-12 col-12">
                                                    <a href="/Jobdetails" className="card-2-img-text card-grid-2-img-medium">
                                                        <span className="card-grid-2-img-small"><img alt="jobhub" src="assets/imgs/page/job/ui-ux6.svg" /></span> <span>Data Architecture Manager</span>
                                                    </a>
                                                    <div className="dropdowm menu-dropdown-abs">
                                                        <button className="btn btn-dots btn-dots-abs-right dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                                        <ul className="dropdown-menu dropdown-menu-light">
                                                            <li><a className="dropdown-item" href="#">View</a></li>
                                                            <li><a className="dropdown-item" href="#">Bookmark</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-15">
                                                <span className="text-sm text-mutted-2 mr-20"><i className="fi-rr-marker"></i> New York City</span>
                                                <span className="text-sm text-mutted-2"><i className="fi-rr-briefcase"></i> Full time</span>
                                            </div>

                                            <div className="text-small mt-15">
                                                It is a long established fact that a reader will be distracted by the readable content of a page
                                                when looking at its layout.
                                            </div>

                                            <div className="card-2-bottom mt-30">
                                                <div className="row">
                                                    <div className="col-lg-6 col-8">
                                                        <a href="employers-single-2.html"><span className="text-brand-10 text-icon-first">AliStudio, Inc</span></a>
                                                    </div>
                                                    <div className="col-lg-6 col-4 text-end">
                                                        <span className="card-text-price"> ₹500<span>/Hour</span> </span>
                                                    </div>
                                                </div>
                                                <div className="row mt-20">
                                                    <div className="col-lg-8 col-8">
                                                        <a href="job-grid.html" className="btn btn-grey-small">Adobe XD</a>
                                                        <a href="job-list.html" className="btn btn-grey-small">Figma</a>
                                                    </div>
                                                    <div className="col-lg-4 col-4 text-end pt-5">
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-shield-check"></i></span>
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-bookmark"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".s">
                                        <div className="card-block-info">
                                            <div className="row">
                                                <div className="col-lg-12 col-12">
                                                    <a href="/Jobdetails" className="card-2-img-text card-grid-2-img-medium">
                                                        <span className="card-grid-2-img-small"><img alt="jobhub" src="assets/imgs/page/job/ui-ux7.svg" /></span> <span>Marketing Sciences (Analytics, Research)</span>
                                                    </a>
                                                    <div className="dropdowm menu-dropdown-abs">
                                                        <button className="btn btn-dots btn-dots-abs-right dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                                        <ul className="dropdown-menu dropdown-menu-light">
                                                            <li><a className="dropdown-item" href="#">View</a></li>
                                                            <li><a className="dropdown-item" href="#">Bookmark</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-15">
                                                <span className="text-sm text-mutted-2 mr-20"><i className="fi-rr-marker"></i> New York City</span>
                                                <span className="text-sm text-mutted-2"><i className="fi-rr-briefcase"></i> Full time</span>
                                            </div>

                                            <div className="text-small mt-15">
                                                It is a long established fact that a reader will be distracted by the readable content of a page
                                                when looking at its layout.
                                            </div>

                                            <div className="card-2-bottom mt-30">
                                                <div className="row">
                                                    <div className="col-lg-6 col-8">
                                                        <a href="employers-single-2.html"><span className="text-brand-10 text-icon-first">AliStudio, Inc</span></a>
                                                    </div>
                                                    <div className="col-lg-6 col-4 text-end">
                                                        <span className="card-text-price"> ₹500<span>/Hour</span> </span>
                                                    </div>
                                                </div>
                                                <div className="row mt-20">
                                                    <div className="col-lg-8 col-8">
                                                        <a href="job-grid.html" className="btn btn-grey-small">Adobe XD</a>
                                                        <a href="job-list.html" className="btn btn-grey-small">Figma</a>
                                                    </div>
                                                    <div className="col-lg-4 col-4 text-end pt-5">
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-shield-check"></i></span>
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-bookmark"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".s">
                                        <div className="card-block-info">
                                            <div className="row">
                                                <div className="col-lg-12 col-12">
                                                    <a href="/Jobdetails" className="card-2-img-text card-grid-2-img-medium">
                                                        <span className="card-grid-2-img-small"><img alt="jobhub" src="assets/imgs/page/job/ui-ux2.svg" /></span> <span>UX Designer (Gigs)</span>
                                                    </a>
                                                    <div className="dropdowm menu-dropdown-abs">
                                                        <button className="btn btn-dots btn-dots-abs-right dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                                        <ul className="dropdown-menu dropdown-menu-light">
                                                            <li><a className="dropdown-item" href="#">View</a></li>
                                                            <li><a className="dropdown-item" href="#">Bookmark</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-15">
                                                <span className="text-sm text-mutted-2 mr-20"><i className="fi-rr-marker"></i> New York City</span>
                                                <span className="text-sm text-mutted-2"><i className="fi-rr-briefcase"></i> Full time</span>
                                            </div>

                                            <div className="text-small mt-15">
                                                It is a long established fact that a reader will be distracted by the readable content of a page
                                                when looking at its layout.
                                            </div>

                                            <div className="card-2-bottom mt-30">
                                                <div className="row">
                                                    <div className="col-lg-6 col-8">
                                                        <a href="employers-single-2.html"><span className="text-brand-10 text-icon-first">AliStudio, Inc</span></a>
                                                    </div>
                                                    <div className="col-lg-6 col-4 text-end">
                                                        <span className="card-text-price"> ₹500<span>/Hour</span> </span>
                                                    </div>
                                                </div>
                                                <div className="row mt-20">
                                                    <div className="col-lg-8 col-8">
                                                        <a href="job-grid.html" className="btn btn-grey-small">Adobe XD</a>
                                                        <a href="job-list.html" className="btn btn-grey-small">Figma</a>
                                                    </div>
                                                    <div className="col-lg-4 col-4 text-end pt-5">
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-shield-check"></i></span>
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-bookmark"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".s">
                                        <div className="card-block-info">
                                            <div className="row">
                                                <div className="col-lg-12 col-12">
                                                    <a href="/Jobdetails" className="card-2-img-text card-grid-2-img-medium">
                                                        <span className="card-grid-2-img-small"><img alt="jobhub" src="assets/imgs/page/job/ui-ux3.svg" /></span> <span>GIG: Creative Director Copywriter-</span>
                                                    </a>
                                                    <div className="dropdowm menu-dropdown-abs">
                                                        <button className="btn btn-dots btn-dots-abs-right dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                                        <ul className="dropdown-menu dropdown-menu-light">
                                                            <li><a className="dropdown-item" href="#">View</a></li>
                                                            <li><a className="dropdown-item" href="#">Bookmark</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-15">
                                                <span className="text-sm text-mutted-2 mr-20"><i className="fi-rr-marker"></i> New York City</span>
                                                <span className="text-sm text-mutted-2"><i className="fi-rr-briefcase"></i> Full time</span>
                                            </div>

                                            <div className="text-small mt-15">
                                                It is a long established fact that a reader will be distracted by the readable content of a page
                                                when looking at its layout.
                                            </div>

                                            <div className="card-2-bottom mt-30">
                                                <div className="row">
                                                    <div className="col-lg-6 col-8">
                                                        <a href="employers-single-2.html"><span className="text-brand-10 text-icon-first">AliStudio, Inc</span></a>
                                                    </div>
                                                    <div className="col-lg-6 col-4 text-end">
                                                        <span className="card-text-price"> ₹500<span>/Hour</span> </span>
                                                    </div>
                                                </div>
                                                <div className="row mt-20">
                                                    <div className="col-lg-8 col-8">
                                                        <a href="job-grid.html" className="btn btn-grey-small">Adobe XD</a>
                                                        <a href="job-list.html" className="btn btn-grey-small">Figma</a>
                                                    </div>
                                                    <div className="col-lg-4 col-4 text-end pt-5">
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-shield-check"></i></span>
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-bookmark"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".s">
                                        <div className="card-block-info">
                                            <div className="row">
                                                <div className="col-lg-12 col-12">
                                                    <a href="/Jobdetails" className="card-2-img-text card-grid-2-img-medium">
                                                        <span className="card-grid-2-img-small"><img alt="jobhub" src="assets/imgs/page/job/ui-ux4.svg" /></span> <span>Techical Support Specialist</span>
                                                    </a>
                                                    <div className="dropdowm menu-dropdown-abs">
                                                        <button className="btn btn-dots btn-dots-abs-right dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                                        <ul className="dropdown-menu dropdown-menu-light">
                                                            <li><a className="dropdown-item" href="#">View</a></li>
                                                            <li><a className="dropdown-item" href="#">Bookmark</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-15">
                                                <span className="text-sm text-mutted-2 mr-20"><i className="fi-rr-marker"></i> New York City</span>
                                                <span className="text-sm text-mutted-2"><i className="fi-rr-briefcase"></i> Full time</span>
                                            </div>

                                            <div className="text-small mt-15">
                                                It is a long established fact that a reader will be distracted by the readable content of a page
                                                when looking at its layout.
                                            </div>

                                            <div className="card-2-bottom mt-30">
                                                <div className="row">
                                                    <div className="col-lg-6 col-8">
                                                        <a href="employers-single-2.html"><span className="text-brand-10 text-icon-first">AliStudio, Inc</span></a>
                                                    </div>
                                                    <div className="col-lg-6 col-4 text-end">
                                                        <span className="card-text-price"> ₹500<span>/Hour</span> </span>
                                                    </div>
                                                </div>
                                                <div className="row mt-20">
                                                    <div className="col-lg-8 col-8">
                                                        <a href="job-grid.html" className="btn btn-grey-small">Adobe XD</a>
                                                        <a href="job-list.html" className="btn btn-grey-small">Figma</a>
                                                    </div>
                                                    <div className="col-lg-4 col-4 text-end pt-5">
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-shield-check"></i></span>
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-bookmark"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".s">
                                        <div className="card-block-info">
                                            <div className="row">
                                                <div className="col-lg-12 col-12">
                                                    <a href="/Jobdetails" className="card-2-img-text card-grid-2-img-medium">
                                                        <span className="card-grid-2-img-small"><img alt="jobhub" src="assets/imgs/page/job/ui-ux5.svg" /></span> <span>Marketing Officer</span>
                                                    </a>
                                                    <div className="dropdowm menu-dropdown-abs">
                                                        <button className="btn btn-dots btn-dots-abs-right dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                                        <ul className="dropdown-menu dropdown-menu-light">
                                                            <li><a className="dropdown-item" href="#">View</a></li>
                                                            <li><a className="dropdown-item" href="#">Bookmark</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-15">
                                                <span className="text-sm text-mutted-2 mr-20"><i className="fi-rr-marker"></i> New York City</span>
                                                <span className="text-sm text-mutted-2"><i className="fi-rr-briefcase"></i> Full time</span>
                                            </div>

                                            <div className="text-small mt-15">
                                                It is a long established fact that a reader will be distracted by the readable content of a page
                                                when looking at its layout.
                                            </div>

                                            <div className="card-2-bottom mt-30">
                                                <div className="row">
                                                    <div className="col-lg-6 col-8">
                                                        <a href="employers-single-2.html"><span className="text-brand-10 text-icon-first">AliStudio, Inc</span></a>
                                                    </div>
                                                    <div className="col-lg-6 col-4 text-end">
                                                        <span className="card-text-price"> ₹500<span>/Hour</span> </span>
                                                    </div>
                                                </div>
                                                <div className="row mt-20">
                                                    <div className="col-lg-8 col-8">
                                                        <a href="job-grid.html" className="btn btn-grey-small">Adobe XD</a>
                                                        <a href="job-list.html" className="btn btn-grey-small">Figma</a>
                                                    </div>
                                                    <div className="col-lg-4 col-4 text-end pt-5">
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-shield-check"></i></span>
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-bookmark"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".s">
                                        <div className="card-block-info">
                                            <div className="row">
                                                <div className="col-lg-12 col-12">
                                                    <a href="/Jobdetails" className="card-2-img-text card-grid-2-img-medium">
                                                        <span className="card-grid-2-img-small"><img alt="jobhub" src="assets/imgs/page/job/ui-ux6.svg" /></span> <span>Junior Graphic Designer</span>
                                                    </a>
                                                    <div className="dropdowm menu-dropdown-abs">
                                                        <button className="btn btn-dots btn-dots-abs-right dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                                        <ul className="dropdown-menu dropdown-menu-light">
                                                            <li><a className="dropdown-item" href="#">View</a></li>
                                                            <li><a className="dropdown-item" href="#">Bookmark</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-15">
                                                <span className="text-sm text-mutted-2 mr-20"><i className="fi-rr-marker"></i> New York City</span>
                                                <span className="text-sm text-mutted-2"><i className="fi-rr-briefcase"></i> Full time</span>
                                            </div>

                                            <div className="text-small mt-15">
                                                It is a long established fact that a reader will be distracted by the readable content of a page
                                                when looking at its layout.
                                            </div>

                                            <div className="card-2-bottom mt-30">
                                                <div className="row">
                                                    <div className="col-lg-6 col-8">
                                                        <a href="employers-single-2.html"><span className="text-brand-10 text-icon-first">AliStudio, Inc</span></a>
                                                    </div>
                                                    <div className="col-lg-6 col-4 text-end">
                                                        <span className="card-text-price"> ₹500<span>/Hour</span> </span>
                                                    </div>
                                                </div>
                                                <div className="row mt-20">
                                                    <div className="col-lg-8 col-8">
                                                        <a href="job-grid.html" className="btn btn-grey-small">Adobe XD</a>
                                                        <a href="job-list.html" className="btn btn-grey-small">Figma</a>
                                                    </div>
                                                    <div className="col-lg-4 col-4 text-end pt-5">
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-shield-check"></i></span>
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-bookmark"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".s">
                                        <div className="card-block-info">
                                            <div className="row">
                                                <div className="col-lg-12 col-12">
                                                    <a href="/Jobdetails" className="card-2-img-text card-grid-2-img-medium">
                                                        <span className="card-grid-2-img-small"><img alt="jobhub" src="assets/imgs/page/job/ui-ux7.svg" /></span> <span>Front End Developer</span>
                                                    </a>
                                                    <div className="dropdowm menu-dropdown-abs">
                                                        <button className="btn btn-dots btn-dots-abs-right dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                                        <ul className="dropdown-menu dropdown-menu-light">
                                                            <li><a className="dropdown-item" href="#">View</a></li>
                                                            <li><a className="dropdown-item" href="#">Bookmark</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-15">
                                                <span className="text-sm text-mutted-2 mr-20"><i className="fi-rr-marker"></i> New York City</span>
                                                <span className="text-sm text-mutted-2"><i className="fi-rr-briefcase"></i> Full time</span>
                                            </div>

                                            <div className="text-small mt-15">
                                                It is a long established fact that a reader will be distracted by the readable content of a page
                                                when looking at its layout.
                                            </div>

                                            <div className="card-2-bottom mt-30">
                                                <div className="row">
                                                    <div className="col-lg-6 col-8">
                                                        <a href="employers-single-2.html"><span className="text-brand-10 text-icon-first">AliStudio, Inc</span></a>
                                                    </div>
                                                    <div className="col-lg-6 col-4 text-end">
                                                        <span className="card-text-price"> ₹500<span>/Hour</span> </span>
                                                    </div>
                                                </div>
                                                <div className="row mt-20">
                                                    <div className="col-lg-8 col-8">
                                                        <a href="job-grid.html" className="btn btn-grey-small">Adobe XD</a>
                                                        <a href="job-list.html" className="btn btn-grey-small">Figma</a>
                                                    </div>
                                                    <div className="col-lg-4 col-4 text-end pt-5">
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-shield-check"></i></span>
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-bookmark"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".s">
                                        <div className="card-block-info">
                                            <div className="row">
                                                <div className="col-lg-12 col-12">
                                                    <a href="/Jobdetails" className="card-2-img-text card-grid-2-img-medium">
                                                        <span className="card-grid-2-img-small"><img alt="jobhub" src="assets/imgs/page/job/ui-ux.svg" /></span> <span>Interaction Designer</span>
                                                    </a>
                                                    <div className="dropdowm menu-dropdown-abs">
                                                        <button className="btn btn-dots btn-dots-abs-right dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                                        <ul className="dropdown-menu dropdown-menu-light">
                                                            <li><a className="dropdown-item" href="#">View</a></li>
                                                            <li><a className="dropdown-item" href="#">Bookmark</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-15">
                                                <span className="text-sm text-mutted-2 mr-20"><i className="fi-rr-marker"></i> New York City</span>
                                                <span className="text-sm text-mutted-2"><i className="fi-rr-briefcase"></i> Full time</span>
                                            </div>

                                            <div className="text-small mt-15">
                                                It is a long established fact that a reader will be distracted by the readable content of a page
                                                when looking at its layout.
                                            </div>

                                            <div className="card-2-bottom mt-30">
                                                <div className="row">
                                                    <div className="col-lg-6 col-8">
                                                        <a href="employers-single-2.html"><span className="text-brand-10 text-icon-first">AliStudio, Inc</span></a>
                                                    </div>
                                                    <div className="col-lg-6 col-4 text-end">
                                                        <span className="card-text-price"> ₹500<span>/Hour</span> </span>
                                                    </div>
                                                </div>
                                                <div className="row mt-20">
                                                    <div className="col-lg-8 col-8">
                                                        <a href="job-grid.html" className="btn btn-grey-small">Adobe XD</a>
                                                        <a href="job-list.html" className="btn btn-grey-small">Figma</a>
                                                    </div>
                                                    <div className="col-lg-4 col-4 text-end pt-5">
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-shield-check"></i></span>
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-bookmark"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".s">
                                        <div className="card-block-info">
                                            <div className="row">
                                                <div className="col-lg-12 col-12">
                                                    <a href="/Jobdetails" className="card-2-img-text card-grid-2-img-medium">
                                                        <span className="card-grid-2-img-small"><img alt="jobhub" src="assets/imgs/page/job/ui-ux2.svg" /></span> <span>Techical Support Specialist</span>
                                                    </a>
                                                    <div className="dropdowm menu-dropdown-abs">
                                                        <button className="btn btn-dots btn-dots-abs-right dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                                        <ul className="dropdown-menu dropdown-menu-light">
                                                            <li><a className="dropdown-item" href="#">View</a></li>
                                                            <li><a className="dropdown-item" href="#">Bookmark</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-15">
                                                <span className="text-sm text-mutted-2 mr-20"><i className="fi-rr-marker"></i> New York City</span>
                                                <span className="text-sm text-mutted-2"><i className="fi-rr-briefcase"></i> Full time</span>
                                            </div>

                                            <div className="text-small mt-15">
                                                It is a long established fact that a reader will be distracted by the readable content of a page
                                                when looking at its layout.
                                            </div>

                                            <div className="card-2-bottom mt-30">
                                                <div className="row">
                                                    <div className="col-lg-6 col-8">
                                                        <a href="employers-single-2.html"><span className="text-brand-10 text-icon-first">AliStudio, Inc</span></a>
                                                    </div>
                                                    <div className="col-lg-6 col-4 text-end">
                                                        <span className="card-text-price"> ₹500<span>/Hour</span> </span>
                                                    </div>
                                                </div>
                                                <div className="row mt-20">
                                                    <div className="col-lg-8 col-8">
                                                        <a href="job-grid.html" className="btn btn-grey-small">Adobe XD</a>
                                                        <a href="job-list.html" className="btn btn-grey-small">Figma</a>
                                                    </div>
                                                    <div className="col-lg-4 col-4 text-end pt-5">
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-shield-check"></i></span>
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-bookmark"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".s">
                                        <div className="card-block-info">
                                            <div className="row">
                                                <div className="col-lg-12 col-12">
                                                    <a href="/Jobdetails" className="card-2-img-text card-grid-2-img-medium">
                                                        <span className="card-grid-2-img-small"><img alt="jobhub" src="assets/imgs/page/job/ui-ux3.svg" /></span> <span>UI / UX Designerfulltime</span>
                                                    </a>
                                                    <div className="dropdowm menu-dropdown-abs">
                                                        <button className="btn btn-dots btn-dots-abs-right dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                                        <ul className="dropdown-menu dropdown-menu-light">
                                                            <li><a className="dropdown-item" href="#">View</a></li>
                                                            <li><a className="dropdown-item" href="#">Bookmark</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-15">
                                                <span className="text-sm text-mutted-2 mr-20"><i className="fi-rr-marker"></i> New York City</span>
                                                <span className="text-sm text-mutted-2"><i className="fi-rr-briefcase"></i> Full time</span>
                                            </div>

                                            <div className="text-small mt-15">
                                                It is a long established fact that a reader will be distracted by the readable content of a page
                                                when looking at its layout.
                                            </div>

                                            <div className="card-2-bottom mt-30">
                                                <div className="row">
                                                    <div className="col-lg-6 col-8">
                                                        <a href="employers-single-2.html"><span className="text-brand-10 text-icon-first">AliStudio, Inc</span></a>
                                                    </div>
                                                    <div className="col-lg-6 col-4 text-end">
                                                        <span className="card-text-price"> ₹500<span>/Hour</span> </span>
                                                    </div>
                                                </div>
                                                <div className="row mt-20">
                                                    <div className="col-lg-8 col-8">
                                                        <a href="job-grid.html" className="btn btn-grey-small">Adobe XD</a>
                                                        <a href="job-list.html" className="btn btn-grey-small">Figma</a>
                                                    </div>
                                                    <div className="col-lg-4 col-4 text-end pt-5">
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-shield-check"></i></span>
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-bookmark"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".s">
                                        <div className="card-block-info">
                                            <div className="row">
                                                <div className="col-lg-12 col-12">
                                                    <a href="/Jobdetails" className="card-2-img-text card-grid-2-img-medium">
                                                        <span className="card-grid-2-img-small"><img alt="jobhub" src="assets/imgs/page/job/ui-ux4.svg" /></span> <span>UI / UX Designerfulltime</span>
                                                    </a>
                                                    <div className="dropdowm menu-dropdown-abs">
                                                        <button className="btn btn-dots btn-dots-abs-right dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                                        <ul className="dropdown-menu dropdown-menu-light">
                                                            <li><a className="dropdown-item" href="#">View</a></li>
                                                            <li><a className="dropdown-item" href="#">Bookmark</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-15">
                                                <span className="text-sm text-mutted-2 mr-20"><i className="fi-rr-marker"></i> New York City</span>
                                                <span className="text-sm text-mutted-2"><i className="fi-rr-briefcase"></i> Full time</span>
                                            </div>

                                            <div className="text-small mt-15">
                                                It is a long established fact that a reader will be distracted by the readable content of a page
                                                when looking at its layout.
                                            </div>

                                            <div className="card-2-bottom mt-30">
                                                <div className="row">
                                                    <div className="col-lg-6 col-8">
                                                        <a href="employers-single-2.html"><span className="text-brand-10 text-icon-first">AliStudio, Inc</span></a>
                                                    </div>
                                                    <div className="col-lg-6 col-4 text-end">
                                                        <span className="card-text-price"> ₹500<span>/Hour</span> </span>
                                                    </div>
                                                </div>
                                                <div className="row mt-20">
                                                    <div className="col-lg-8 col-8">
                                                        <a href="job-grid.html" className="btn btn-grey-small">Adobe XD</a>
                                                        <a href="job-list.html" className="btn btn-grey-small">Figma</a>
                                                    </div>
                                                    <div className="col-lg-4 col-4 text-end pt-5">
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-shield-check"></i></span>
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-bookmark"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".s">
                                        <div className="card-block-info">
                                            <div className="row">
                                                <div className="col-lg-12 col-12">
                                                    <a href="/Jobdetails" className="card-2-img-text card-grid-2-img-medium">
                                                        <span className="card-grid-2-img-small"><img alt="jobhub" src="assets/imgs/page/job/ui-ux5.svg" /></span> <span>UI / UX Designerfulltime</span>
                                                    </a>
                                                    <div className="dropdowm menu-dropdown-abs">
                                                        <button className="btn btn-dots btn-dots-abs-right dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                                        <ul className="dropdown-menu dropdown-menu-light">
                                                            <li><a className="dropdown-item" href="#">View</a></li>
                                                            <li><a className="dropdown-item" href="#">Bookmark</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-15">
                                                <span className="text-sm text-mutted-2 mr-20"><i className="fi-rr-marker"></i> New York City</span>
                                                <span className="text-sm text-mutted-2"><i className="fi-rr-briefcase"></i> Full time</span>
                                            </div>

                                            <div className="text-small mt-15">
                                                It is a long established fact that a reader will be distracted by the readable content of a page
                                                when looking at its layout.
                                            </div>

                                            <div className="card-2-bottom mt-30">
                                                <div className="row">
                                                    <div className="col-lg-6 col-8">
                                                        <a href="employers-single-2.html"><span className="text-brand-10 text-icon-first">AliStudio, Inc</span></a>
                                                    </div>
                                                    <div className="col-lg-6 col-4 text-end">
                                                        <span className="card-text-price"> ₹500<span>/Hour</span> </span>
                                                    </div>
                                                </div>
                                                <div className="row mt-20">
                                                    <div className="col-lg-8 col-8">
                                                        <a href="job-grid.html" className="btn btn-grey-small">Adobe XD</a>
                                                        <a href="job-list.html" className="btn btn-grey-small">Figma</a>
                                                    </div>
                                                    <div className="col-lg-4 col-4 text-end pt-5">
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-shield-check"></i></span>
                                                        <span className="text-gray-100 text-md"><i className="fi-rr-bookmark"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="paginations">
                                <ul className="pager">
                                    <li><a href="#" className="pager-prev"></a></li>
                                    <li><a href="#" className="pager-number">1</a></li>
                                    <li><a href="#" className="pager-number">2</a></li>
                                    <li><a href="#" className="pager-number">3</a></li>
                                    <li><a href="#" className="pager-number">4</a></li>
                                    <li><a href="#" className="pager-number">5</a></li>
                                    <li><a href="#" className="pager-number active">6</a></li>
                                    <li><a href="#" className="pager-number">7</a></li>
                                    <li><a href="#" className="pager-next"></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                        <div className="sidebar-with-bg">
                            <h5 className="font-semibold mb-10">Set job reminder</h5>
                            <p className="text-body-999">Enter you email address and get job notification.</p>
                            <div className="box-email-reminder">
                                <form>
                                    <div className="form-group mt-15">
                                        <input type="text" className="form-control input-bg-white form-icons" placeholder="Enter email address" />
                                        <i className="fi-rr-envelope"></i>
                                    </div>
                                    <div className="form-group mt-25 mb-5">
                                        <button className="btn btn-default btn-md">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="sidebar-shadow none-shadow mb-30">
                            <div className="sidebar-filters">
                                <div className="filter-block mb-30">
                                    <h5 className="medium-heading mb-15">Location</h5>
                                    <div className="form-group">
                                        <input type="text" className="form-control form-icons" placeholder="Location" />
                                        <i className="fi-rr-marker"></i>
                                    </div>
                                </div>
                                <div className="filter-block mb-30">
                                    <h5 className="medium-heading mb-15">Categoy</h5>
                                    <div className="form-group select-style select-style-icon">
                                        <select className="form-control form-icons select-active">
                                            <option>Ui/UX design</option>
                                            <option>Ui/UX design 1</option>
                                            <option>Ui/UX design 2</option>
                                            <option>Ui/UX design 3</option>
                                        </select>
                                        <i className="fi-rr-briefcase"></i>
                                    </div>
                                </div>
                                <div className="filter-block mb-30">
                                    <h5 className="medium-heading mb-15">Job type</h5>
                                    <div className="form-group">
                                        <ul className="list-checkbox">
                                            <li>
                                                <label className="cb-container">
                                                    <input type="checkbox" /> <span className="text-small" >Full Time
                                                        Jobs</span>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <span className="number-item">235</span>
                                            </li>
                                            <li>
                                                <label className="cb-container">
                                                    <input type="checkbox" checked="checked " /> <span className="text-small">Part Time
                                                        Jobs</span>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <span className="number-item">28</span>
                                            </li>
                                            <li>
                                                <label className="cb-container">
                                                    <input type="checkbox" checked="checked" /> <span className="text-small">Remote
                                                        Jobs</span>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <span className="number-item">67</span>
                                            </li>
                                            <li>
                                                <label className="cb-container">
                                                    <input type="checkbox" /> <span className="text-small">Freelance</span>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <span className="number-item">92</span>
                                            </li>
                                            <li>
                                                <label className="cb-container">
                                                    <input type="checkbox" /> <span className="text-small">Temporary</span>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <span className="number-item">14</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="filter-block mb-30">
                                    <h5 className="medium-heading mb-10">Experience Level</h5>
                                    <div className="form-group">
                                        <ul className="list-checkbox">
                                            <li>
                                                <label className="cb-container">
                                                    <input type="checkbox" /> <span className="text-small">Expert</span>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <span className="number-item">76</span>
                                            </li>
                                            <li>
                                                <label className="cb-container">
                                                    <input type="checkbox" /> <span className="text-small">Senior</span>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <span className="number-item">89</span>
                                            </li>
                                            <li>
                                                <label className="cb-container">
                                                    <input type="checkbox" checked="checked" /> <span className="text-small">Junior</span>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <span className="number-item">54</span>
                                            </li>
                                            <li>
                                                <label className="cb-container">
                                                    <input type="checkbox" checked="checked" /> <span className="text-small">Regular</span>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <span className="number-item">23</span>
                                            </li>
                                            <li>
                                                <label className="cb-container">
                                                    <input type="checkbox" /> <span className="text-small">Internship</span>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <span className="number-item">22</span>
                                            </li>
                                            <li>
                                                <label className="cb-container">
                                                    <input type="checkbox" /> <span className="text-small">Associate</span>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <span className="number-item">14</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="filter-block mb-40">
                                    <h5 className="medium-heading mb-25">Salary Range</h5>
                                    <div className="">
                                        <div className="row mb-20">
                                            <div className="col-sm-12">
                                                <div id="slider-range"></div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <label className="lb-slider">From</label>
                                                <div className="form-group minus-input">
                                                    <input type="text" name="min-value-money" className="input-disabled form-control min-value-money" disabled="disabled" value="" />
                                                    <input type="hidden" name="min-value" className="form-control min-value" value="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <label className="lb-slider">To</label>
                                                <div className="form-group">
                                                    <input type="text" name="max-value-money" className="input-disabled form-control max-value-money" disabled="disabled" value="" />
                                                    <input type="hidden" name="max-value" className="form-control max-value" value="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="buttons-filter">
                                    <button className="btn btn-default">Apply filter</button>
                                    <button className="btn">Reset filter</button>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-with-bg background-primary bg-sidebar pb-80">
                            <h5 className="medium-heading text-white mb-20 mt-20">Recruiting?</h5>
                            <p className="text-body-999 text-white mb-30">Advertise your jobs to millions of monthly users
                                and
                                search 16.8 million CVs in our database.</p>
                            <a href="#" className="btn btn-border icon-chevron-right btn-white-sm">Post a Job</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="section-box">
            <div className="container">
                <ul className="list-partners">
                    <li className="wow animate__animated animate__fadeInUp hover-up" data-wow-delay="0s">
                        <a href="#">
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/samsung.svg" /></figure>
                        </a>
                    </li>
                    <li className="wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".1s">
                        <a href="#">
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/google.svg" /></figure>
                        </a>
                    </li>
                    <li className="wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".2s">
                        <a href="#">
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/facebook.svg" /></figure>
                        </a>
                    </li>
                    <li className="wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".3s">
                        <a href="#">
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/pinterest.svg" /></figure>
                        </a>
                    </li>
                    <li className="wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".4s">
                        <a href="#">
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/avaya.svg" /></figure>
                        </a>
                    </li>
                    <li className="wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".5s">
                        <a href="#">
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/forbes.svg" /></figure>
                        </a>
                    </li>
                    <li className="wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".1s">
                        <a href="#">
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/avis.svg" /></figure>
                        </a>
                    </li>
                    <li className="wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".2s">
                        <a href="#">
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/nielsen.svg" /></figure>
                        </a>
                    </li>
                    <li className="wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".3s">
                        <a href="#">
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/doordash.svg" /></figure>
                        </a>
                    </li>
                </ul>
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

export default Jobs
