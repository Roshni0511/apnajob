import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Employer = () => {
  return (
    <>
    <Navbar />
    
    <main className="main">
        <section className="section-box-2">
            <div className="box-head-single none-bg">
                <div className="container">
                    <h4>There Are 968 Companies<br />Here For you!</h4>
                    <div className="row mt-15 mb-40">
                        <div className="col-lg-7 col-md-9">
                            <span className="text-mutted">Discover your next career move, freelance gig, or
                                internship</span>
                        </div>
                        <div className="col-lg-5 col-md-3 text-lg-end text-start">
                            <ul className="breadcrumbs mt-sm-15">
                                <li><a href="#">Home</a></li>
                                <li>Companies listing</li>
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
                                            <button className="btn dropdown-toggle" type="button" id="dropdownJobType" data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true" data-bs-display="static"><i className="fi-rr-briefcase"></i>
                                                <span>Full time</span> <i className="fi-rr-angle-small-down"></i></button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownJobType">
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
                                            <button className="btn dropdown-toggle" type="button" id="dropdownLocation2" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static"><i class="fa-solid fa-indian-rupee-sign"></i> <span>Salary Range</span> <i className="fi-rr-angle-small-down"></i></button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownLocation2">
                                                <li><a className="dropdown-item active" href="#">₹100 - ₹500</a></li>
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
                <div className="content-page">
                    <div className="box-filters-job mt-15 mb-10">
                        <div className="row">
                            <div className="col-lg-7">
                                <span className="text-small">Showing <strong>41-60 </strong>of <strong>944 </strong>Companies</span>
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
                                        <div className="box-view-type">
                                            <a href="/Employerdetails" className="view-type"><img src="assets/imgs/theme/icons/icon-list.svg" alt="jobhub" /></a>
                                            <a href="/Employer" className="view-type"><img src="assets/imgs/theme/icons/icon-grid.svg" alt="jobhub" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="card-grid-2 card-employers hover-up wow animate__animated animate__fadeIn">
                                <div className="card-grid-2-link">
                                    <a href="#"><i className="fi-rr-shield-check"></i></a>
                                    <a href="#"><i className="fi-rr-bookmark"></i></a>
                                </div>
                                <div className="text-center card-grid-2-image-rd online">
                                    <a href="/Employerdetails">
                                        <figure><img alt="jobhub" src="assets/imgs/page/employers/employer-1.png" /></figure>
                                    </a>
                                </div>
                                <div className="card-block-info">
                                    <div className="card-profile">
                                        <h5><a href="/Employerdetails"><strong>Invision</strong></a></h5>
                                        <span className="text-sm">UI/UX Designer</span>
                                        <div className="d-flex justify-content-center align-items-center mt-5">
                                            <div className="rate small pr-0">
                                                <input type="radio" id="star5" name="rate" value="5" />
                                                <label for="star5" title="text" className="">5 stars</label>
                                                <input type="radio" id="star4" name="rate" value="4" />
                                                <label for="star4" title="text" className="checked">4 stars</label>
                                                <input type="radio" id="star3" name="rate" value="3" />
                                                <label for="star3" title="text" className="checked">3 stars</label>
                                                <input type="radio" id="star2" name="rate" value="2" />
                                                <label for="star2" title="text" className="checked">2 stars</label>
                                                <input type="radio" id="star1" name="rate" value="1" />
                                                <label for="star1" title="text" className="checked">1 star</label>
                                            </div>
                                            <span className="text-muted text-small">360 rates (5.0)</span>
                                        </div>
                                    </div>
                                    <div className="mt-15">
                                        <div className="row">
                                            <div className="col-sm-6 text-center d-flex align-items-center">
                                                <i className="fi-rr-marker mr-5"></i> Chicago, US
                                            </div>
                                            <div className="col-sm-6 text-center d-flex align-items-center">
                                                <i className="fi-rr-briefcase mr-5"></i>Software
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                        <div className="text-center mt-25 mb-5">
                                            <a href="/Jobs" className="btn btn-border btn-brand-hover">12 Open Jobs</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card-grid-2 card-employers hover-up wow animate__animated animate__fadeIn">
                                <div className="card-grid-2-link">
                                    <a href="#"><i className="fi-rr-shield-check"></i></a>
                                    <a href="#"><i className="fi-rr-bookmark"></i></a>
                                </div>
                                <div className="text-center card-grid-2-image-rd">
                                    <a href="/Employerdetails">
                                        <figure><img alt="jobhub" src="assets/imgs/page/employers/employer-2.png" /></figure>
                                    </a>
                                </div>
                                <div className="card-block-info">
                                    <div className="card-profile">
                                        <h5><a href="/Employerdetails"><strong>Bing Search</strong></a></h5>
                                        <span className="text-sm">Startup Team</span>
                                        <div className="d-flex justify-content-center align-items-center mt-5">
                                            <div className="rate small pr-0">
                                                <input type="radio" id="star5" name="rate" value="5" />
                                                <label for="star5" title="text" className="">5 stars</label>
                                                <input type="radio" id="star4" name="rate" value="4" />
                                                <label for="star4" title="text" className="checked">4 stars</label>
                                                <input type="radio" id="star3" name="rate" value="3" />
                                                <label for="star3" title="text" className="checked">3 stars</label>
                                                <input type="radio" id="star2" name="rate" value="2" />
                                                <label for="star2" title="text" className="checked">2 stars</label>
                                                <input type="radio" id="star1" name="rate" value="1" />
                                                <label for="star1" title="text" className="checked">1 star</label>
                                            </div>
                                            <span className="text-muted text-small">360 rates (5.0)</span>
                                        </div>
                                    </div>
                                    <div className="mt-15">
                                        <div className="row">
                                            <div className="col-sm-6 text-center d-flex align-items-center">
                                                <i className="fi-rr-marker mr-5"></i> New York, US
                                            </div>
                                            <div className="col-sm-6 text-center d-flex align-items-center">
                                                <i className="fi-rr-briefcase mr-5"></i>Software
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                        <div className="text-center mt-25 mb-5">
                                            <a href="/Jobs" className="btn btn-border btn-brand-hover">10 Open Jobs</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card-grid-2 card-employers hover-up wow animate__animated animate__fadeIn">
                                <div className="card-grid-2-link">
                                    <a href="#"><i className="fi-rr-shield-check"></i></a>
                                    <a href="#"><i className="fi-rr-bookmark"></i></a>
                                </div>
                                <div className="text-center card-grid-2-image-rd">
                                    <a href="/Employerdetails">
                                        <figure><img alt="jobhub" src="assets/imgs/page/employers/employer-3.png" /></figure>
                                    </a>
                                </div>
                                <div className="card-block-info">
                                    <div className="card-profile">
                                        <h5><a href="/Employerdetails"><strong>Dailymotion</strong></a></h5>
                                        <span className="text-sm">Startup Team</span>
                                        <div className="d-flex justify-content-center align-items-center mt-5">
                                            <div className="rate small pr-0">
                                                <input type="radio" id="star5" name="rate" value="5" />
                                                <label for="star5" title="text" className="">5 stars</label>
                                                <input type="radio" id="star4" name="rate" value="4" />
                                                <label for="star4" title="text" className="checked">4 stars</label>
                                                <input type="radio" id="star3" name="rate" value="3" />
                                                <label for="star3" title="text" className="checked">3 stars</label>
                                                <input type="radio" id="star2" name="rate" value="2" />
                                                <label for="star2" title="text" className="checked">2 stars</label>
                                                <input type="radio" id="star1" name="rate" value="1" />
                                                <label for="star1" title="text" className="checked">1 star</label>
                                            </div>
                                            <span className="text-muted text-small">360 rates (5.0)</span>
                                        </div>
                                    </div>
                                    <div className="mt-15">
                                        <div className="row">
                                            <div className="col-sm-6 text-center d-flex align-items-center">
                                                <i className="fi-rr-marker mr-5"></i> Iowa, US
                                            </div>
                                            <div className="col-sm-6 text-center d-flex align-items-center">
                                                <i className="fi-rr-briefcase mr-5"></i>Designer
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                        <div className="text-center mt-25 mb-5">
                                            <a href="/Jobs" className="btn btn-border btn-brand-hover">16 Open Jobs</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card-grid-2 card-employers hover-up wow animate__animated animate__fadeIn">
                                <div className="card-grid-2-link">
                                    <a href="#"><i className="fi-rr-shield-check"></i></a>
                                    <a href="#"><i className="fi-rr-bookmark"></i></a>
                                </div>
                                <div className="text-center card-grid-2-image-rd online">
                                    <a href="/Employerdetails">
                                        <figure><img alt="jobhub" src="assets/imgs/page/employers/employer-4.png" /></figure>
                                    </a>
                                </div>
                                <div className="card-block-info">
                                    <div className="card-profile">
                                        <h5><a href="/Employerdetails"><strong>LinkedIN</strong></a></h5>
                                        <span className="text-sm">UI/UX Designer</span>
                                        <div className="d-flex justify-content-center align-items-center mt-5">
                                            <div className="rate small pr-0">
                                                <input type="radio" id="star5" name="rate" value="5" />
                                                <label for="star5" title="text" className="">5 stars</label>
                                                <input type="radio" id="star4" name="rate" value="4" />
                                                <label for="star4" title="text" className="checked">4 stars</label>
                                                <input type="radio" id="star3" name="rate" value="3" />
                                                <label for="star3" title="text" className="checked">3 stars</label>
                                                <input type="radio" id="star2" name="rate" value="2" />
                                                <label for="star2" title="text" className="checked">2 stars</label>
                                                <input type="radio" id="star1" name="rate" value="1" />
                                                <label for="star1" title="text" className="checked">1 star</label>
                                            </div>
                                            <span className="text-muted text-small">360 rates (5.0)</span>
                                        </div>
                                    </div>
                                    <div className="mt-15">
                                        <div className="row">
                                            <div className="col-sm-6 text-center d-flex align-items-center">
                                                <i className="fi-rr-marker mr-5"></i> Chicago, US
                                            </div>
                                            <div className="col-sm-6 text-center d-flex align-items-center">
                                                <i className="fi-rr-briefcase mr-5"></i>Software
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                        <div className="text-center mt-25 mb-5">
                                            <a href="/Jobs" className="btn btn-border btn-brand-hover">122 Open Jobs</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card-grid-2 card-employers hover-up wow animate__animated animate__fadeIn">
                                <div className="card-grid-2-link">
                                    <a href="#"><i className="fi-rr-shield-check"></i></a>
                                    <a href="#"><i className="fi-rr-bookmark"></i></a>
                                </div>
                                <div className="text-center card-grid-2-image-rd">
                                    <a href="/Employerdetails">
                                        <figure><img alt="jobhub" src="assets/imgs/page/employers/employer-5.png" /></figure>
                                    </a>
                                </div>
                                <div className="card-block-info">
                                    <div className="card-profile">
                                        <h5><a href="/Employerdetails"><strong>Adobe Illustrator</strong></a></h5>
                                        <span className="text-sm">UI/UX Designer</span>
                                        <div className="d-flex justify-content-center align-items-center mt-5">
                                            <div className="rate small pr-0">
                                                <input type="radio" id="star5" name="rate" value="5" />
                                                <label for="star5" title="text" className="">5 stars</label>
                                                <input type="radio" id="star4" name="rate" value="4" />
                                                <label for="star4" title="text" className="checked">4 stars</label>
                                                <input type="radio" id="star3" name="rate" value="3" />
                                                <label for="star3" title="text" className="checked">3 stars</label>
                                                <input type="radio" id="star2" name="rate" value="2" />
                                                <label for="star2" title="text" className="checked">2 stars</label>
                                                <input type="radio" id="star1" name="rate" value="1" />
                                                <label for="star1" title="text" className="checked">1 star</label>
                                            </div>
                                            <span className="text-muted text-small">360 rates (5.0)</span>
                                        </div>
                                    </div>
                                    <div className="mt-15">
                                        <div className="row">
                                            <div className="col-sm-6 text-center d-flex align-items-center">
                                                <i className="fi-rr-marker mr-5"></i> Chicago, US
                                            </div>
                                            <div className="col-sm-6 text-center d-flex align-items-center">
                                                <i className="fi-rr-briefcase mr-5"></i>Software
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                        <div className="text-center mt-25 mb-5">
                                            <a href="/Jobs" className="btn btn-border btn-brand-hover">23 Open Jobs</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card-grid-2 card-employers hover-up wow animate__animated animate__fadeIn">
                                <div className="card-grid-2-link">
                                    <a href="#"><i className="fi-rr-shield-check"></i></a>
                                    <a href="#"><i className="fi-rr-bookmark"></i></a>
                                </div>
                                <div className="text-center card-grid-2-image-rd">
                                    <a href="/Employerdetails">
                                        <figure><img alt="jobhub" src="assets/imgs/page/employers/employer-6.png" /></figure>
                                    </a>
                                </div>
                                <div className="card-block-info">
                                    <div className="card-profile">
                                        <h5><a href="/Employerdetails"><strong>StumbleUpon</strong></a></h5>
                                        <span className="text-sm">UI/UX Designer</span>
                                        <div className="d-flex justify-content-center align-items-center mt-5">
                                            <div className="rate small pr-0">
                                                <input type="radio" id="star5" name="rate" value="5" />
                                                <label for="star5" title="text" className="">5 stars</label>
                                                <input type="radio" id="star4" name="rate" value="4" />
                                                <label for="star4" title="text" className="checked">4 stars</label>
                                                <input type="radio" id="star3" name="rate" value="3" />
                                                <label for="star3" title="text" className="checked">3 stars</label>
                                                <input type="radio" id="star2" name="rate" value="2" />
                                                <label for="star2" title="text" className="checked">2 stars</label>
                                                <input type="radio" id="star1" name="rate" value="1" />
                                                <label for="star1" title="text" className="checked">1 star</label>
                                            </div>
                                            <span className="text-muted text-small">360 rates (5.0)</span>
                                        </div>
                                    </div>
                                    <div className="mt-15">
                                        <div className="row">
                                            <div className="col-sm-6 text-center d-flex align-items-center">
                                                <i className="fi-rr-marker mr-5"></i> Chicago, US
                                            </div>
                                            <div className="col-sm-6 text-center d-flex align-items-center">
                                                <i className="fi-rr-briefcase mr-5"></i>Software
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                        <div className="text-center mt-25 mb-5">
                                            <a href="/Jobs" className="btn btn-border btn-brand-hover">24 Open Jobs</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card-grid-2 card-employers hover-up wow animate__animated animate__fadeIn">
                                <div className="card-grid-2-link">
                                    <a href="#"><i className="fi-rr-shield-check"></i></a>
                                    <a href="#"><i className="fi-rr-bookmark"></i></a>
                                </div>
                                <div className="text-center card-grid-2-image-rd online">
                                    <a href="/Employerdetails">
                                        <figure><img alt="jobhub" src="assets/imgs/page/employers/employer-7.png" /></figure>
                                    </a>
                                </div>
                                <div className="card-block-info">
                                    <div className="card-profile">
                                        <h5><a href="/Employerdetails"><strong>Quora JSC</strong></a></h5>
                                        <span className="text-sm">UI/UX Designer</span>
                                        <div className="d-flex justify-content-center align-items-center mt-5">
                                            <div className="rate small pr-0">
                                                <input type="radio" id="star5" name="rate" value="5" />
                                                <label for="star5" title="text" className="">5 stars</label>
                                                <input type="radio" id="star4" name="rate" value="4" />
                                                <label for="star4" title="text" className="checked">4 stars</label>
                                                <input type="radio" id="star3" name="rate" value="3" />
                                                <label for="star3" title="text" className="checked">3 stars</label>
                                                <input type="radio" id="star2" name="rate" value="2" />
                                                <label for="star2" title="text" className="checked">2 stars</label>
                                                <input type="radio" id="star1" name="rate" value="1" />
                                                <label for="star1" title="text" className="checked">1 star</label>
                                            </div>
                                            <span className="text-muted text-small">360 rates (5.0)</span>
                                        </div>
                                    </div>
                                    <div className="mt-15">
                                        <div className="row">
                                            <div className="col-sm-6 text-center d-flex align-items-center">
                                                <i className="fi-rr-marker mr-5"></i> Chicago, US
                                            </div>
                                            <div className="col-sm-6 text-center d-flex align-items-center">
                                                <i className="fi-rr-briefcase mr-5"></i>Software
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                        <div className="text-center mt-25 mb-5">
                                            <a href="/Jobs" className="btn btn-border btn-brand-hover">12 Open Jobs</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card-grid-2 card-employers hover-up wow animate__animated animate__fadeIn">
                                <div className="card-grid-2-link">
                                    <a href="#"><i className="fi-rr-shield-check"></i></a>
                                    <a href="#"><i className="fi-rr-bookmark"></i></a>
                                </div>
                                <div className="text-center card-grid-2-image-rd">
                                    <a href="/Employerdetails">
                                        <figure><img alt="jobhub" src="assets/imgs/page/employers/employer-8.png" /></figure>
                                    </a>
                                </div>
                                <div className="card-block-info">
                                    <div className="card-profile">
                                        <h5><a href="/Employerdetails"><strong>Nintendo</strong></a></h5>
                                        <span className="text-sm">UI/UX Designer</span>
                                        <div className="d-flex justify-content-center align-items-center mt-5">
                                            <div className="rate small pr-0">
                                                <input type="radio" id="star5" name="rate" value="5" />
                                                <label for="star5" title="text" className="">5 stars</label>
                                                <input type="radio" id="star4" name="rate" value="4" />
                                                <label for="star4" title="text" className="checked">4 stars</label>
                                                <input type="radio" id="star3" name="rate" value="3" />
                                                <label for="star3" title="text" className="checked">3 stars</label>
                                                <input type="radio" id="star2" name="rate" value="2" />
                                                <label for="star2" title="text" className="checked">2 stars</label>
                                                <input type="radio" id="star1" name="rate" value="1" />
                                                <label for="star1" title="text" className="checked">1 star</label>
                                            </div>
                                            <span className="text-muted text-small">360 rates (5.0)</span>
                                        </div>
                                    </div>
                                    <div className="mt-15">
                                        <div className="row">
                                            <div className="col-sm-6 text-center d-flex align-items-center">
                                                <i className="fi-rr-marker mr-5"></i> Chicago, US
                                            </div>
                                            <div className="col-sm-6 text-center d-flex align-items-center">
                                                <i className="fi-rr-briefcase mr-5"></i>Software
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                        <div className="text-center mt-25 mb-5">
                                            <a href="/Jobs" className="btn btn-border btn-brand-hover">12 Open Jobs</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card-grid-2 card-employers hover-up wow animate__animated animate__fadeIn">
                                <div className="card-grid-2-link">
                                    <a href="#"><i className="fi-rr-shield-check"></i></a>
                                    <a href="#"><i className="fi-rr-bookmark"></i></a>
                                </div>
                                <div className="text-center card-grid-2-image-rd">
                                    <a href="/Employerdetails">
                                        <figure><img alt="jobhub" src="assets/imgs/page/employers/employer-9.png" /></figure>
                                    </a>
                                </div>
                                <div className="card-block-info">
                                    <div className="card-profile">
                                        <h5><a href="/Employerdetails"><strong>Periscope</strong></a></h5>
                                        <span className="text-sm">UI/UX Designer</span>
                                        <div className="d-flex justify-content-center align-items-center mt-5">
                                            <div className="rate small pr-0">
                                                <input type="radio" id="star5" name="rate" value="5" />
                                                <label for="star5" title="text" className="">5 stars</label>
                                                <input type="radio" id="star4" name="rate" value="4" />
                                                <label for="star4" title="text" className="checked">4 stars</label>
                                                <input type="radio" id="star3" name="rate" value="3" />
                                                <label for="star3" title="text" className="checked">3 stars</label>
                                                <input type="radio" id="star2" name="rate" value="2" />
                                                <label for="star2" title="text" className="checked">2 stars</label>
                                                <input type="radio" id="star1" name="rate" value="1" />
                                                <label for="star1" title="text" className="checked">1 star</label>
                                            </div>
                                            <span className="text-muted text-small">360 rates (5.0)</span>
                                        </div>
                                    </div>
                                    <div className="mt-15">
                                        <div className="row">
                                            <div className="col-sm-6 text-center d-flex align-items-center">
                                                <i className="fi-rr-marker mr-5"></i> Chicago, US
                                            </div>
                                            <div className="col-sm-6 text-center d-flex align-items-center">
                                                <i className="fi-rr-briefcase mr-5"></i>Software
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                        <div className="text-center mt-25 mb-5">
                                            <a href="/Jobs" className="btn btn-border btn-brand-hover">12 Open Jobs</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card-grid-2 card-employers hover-up wow animate__animated animate__fadeIn">
                                <div className="card-grid-2-link">
                                    <a href="#"><i className="fi-rr-shield-check"></i></a>
                                    <a href="#"><i className="fi-rr-bookmark"></i></a>
                                </div>
                                <div className="text-center card-grid-2-image-rd online">
                                    <a href="/Employerdetails">
                                        <figure><img alt="jobhub" src="assets/imgs/page/employers/employer-10.png" /></figure>
                                    </a>
                                </div>
                                <div className="card-block-info">
                                    <div className="card-profile">
                                        <h5><a href="/Employerdetails"><strong>Dribbble</strong></a></h5>
                                        <span className="text-sm">UI/UX Designer</span>
                                        <div className="d-flex justify-content-center align-items-center mt-5">
                                            <div className="rate small pr-0">
                                                <input type="radio" id="star5" name="rate" value="5" />
                                                <label for="star5" title="text" className="">5 stars</label>
                                                <input type="radio" id="star4" name="rate" value="4" />
                                                <label for="star4" title="text" className="checked">4 stars</label>
                                                <input type="radio" id="star3" name="rate" value="3" />
                                                <label for="star3" title="text" className="checked">3 stars</label>
                                                <input type="radio" id="star2" name="rate" value="2" />
                                                <label for="star2" title="text" className="checked">2 stars</label>
                                                <input type="radio" id="star1" name="rate" value="1" />
                                                <label for="star1" title="text" className="checked">1 star</label>
                                            </div>
                                            <span className="text-muted text-small">360 rates (5.0)</span>
                                        </div>
                                    </div>
                                    <div className="mt-15">
                                        <div className="row">
                                            <div className="col-sm-6 text-center d-flex align-items-center">
                                                <i className="fi-rr-marker mr-5"></i> Chicago, US
                                            </div>
                                            <div className="col-sm-6 text-center d-flex align-items-center">
                                                <i className="fi-rr-briefcase mr-5"></i>Software
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                        <div className="text-center mt-25 mb-5">
                                            <a href="/Jobs" className="btn btn-border btn-brand-hover">12 Open Jobs</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card-grid-2 card-employers hover-up wow animate__animated animate__fadeIn">
                                <div className="card-grid-2-link">
                                    <a href="#"><i className="fi-rr-shield-check"></i></a>
                                    <a href="#"><i className="fi-rr-bookmark"></i></a>
                                </div>
                                <div className="text-center card-grid-2-image-rd">
                                    <a href="/Employerdetails">
                                        <figure><img alt="jobhub" src="assets/imgs/page/employers/employer-11.png" /></figure>
                                    </a>
                                </div>
                                <div className="card-block-info">
                                    <div className="card-profile">
                                        <h5><a href="/Employerdetails"><strong>Intercom</strong></a></h5>
                                        <span className="text-sm">UI/UX Designer</span>
                                        <div className="d-flex justify-content-center align-items-center mt-5">
                                            <div className="rate small pr-0">
                                                <input type="radio" id="star5" name="rate" value="5" />
                                                <label for="star5" title="text" className="">5 stars</label>
                                                <input type="radio" id="star4" name="rate" value="4" />
                                                <label for="star4" title="text" className="checked">4 stars</label>
                                                <input type="radio" id="star3" name="rate" value="3" />
                                                <label for="star3" title="text" className="checked">3 stars</label>
                                                <input type="radio" id="star2" name="rate" value="2" />
                                                <label for="star2" title="text" className="checked">2 stars</label>
                                                <input type="radio" id="star1" name="rate" value="1" />
                                                <label for="star1" title="text" className="checked">1 star</label>
                                            </div>
                                            <span className="text-muted text-small">360 rates (5.0)</span>
                                        </div>
                                    </div>
                                    <div className="mt-15">
                                        <div className="row">
                                            <div className="col-sm-6 text-center d-flex align-items-center">
                                                <i className="fi-rr-marker mr-5"></i> Chicago, US
                                            </div>
                                            <div className="col-sm-6 text-center d-flex align-items-center">
                                                <i className="fi-rr-briefcase mr-5"></i>Software
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                        <div className="text-center mt-25 mb-5">
                                            <a href="/Jobs" className="btn btn-border btn-brand-hover">12 Open Jobs</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card-grid-2 card-employers hover-up wow animate__animated animate__fadeIn">
                                <div className="card-grid-2-link">
                                    <a href="#"><i className="fi-rr-shield-check"></i></a>
                                    <a href="#"><i className="fi-rr-bookmark"></i></a>
                                </div>
                                <div className="text-center card-grid-2-image-rd">
                                    <a href="/Employerdetails">
                                        <figure><img alt="jobhub" src="assets/imgs/page/employers/employer-12.png" /></figure>
                                    </a>
                                </div>
                                <div className="card-block-info">
                                    <div className="card-profile">
                                        <h5><a href="/Employerdetails"><strong>Bing Search</strong></a></h5>
                                        <span className="text-sm">UI/UX Designer</span>
                                        <div className="d-flex justify-content-center align-items-center mt-5">
                                            <div className="rate small pr-0">
                                                <input type="radio" id="star5" name="rate" value="5" />
                                                <label for="star5" title="text" className="">5 stars</label>
                                                <input type="radio" id="star4" name="rate" value="4" />
                                                <label for="star4" title="text" className="checked">4 stars</label>
                                                <input type="radio" id="star3" name="rate" value="3" />
                                                <label for="star3" title="text" className="checked">3 stars</label>
                                                <input type="radio" id="star2" name="rate" value="2" />
                                                <label for="star2" title="text" className="checked">2 stars</label>
                                                <input type="radio" id="star1" name="rate" value="1" />
                                                <label for="star1" title="text" className="checked">1 star</label>
                                            </div>
                                            <span className="text-muted text-small">360 rates (5.0)</span>
                                        </div>
                                    </div>
                                    <div className="mt-15">
                                        <div className="row">
                                            <div className="col-sm-6 text-center d-flex align-items-center">
                                                <i className="fi-rr-marker mr-5"></i> Chicago, US
                                            </div>
                                            <div className="col-sm-6 text-center d-flex align-items-center">
                                                <i className="fi-rr-briefcase mr-5"></i>Software
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                        <div className="text-center mt-25 mb-5">
                                            <a href="/Jobs" className="btn btn-border btn-brand-hover">12 Open Jobs</a>
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

export default Employer