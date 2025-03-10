import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "@fortawesome/fontawesome-free/css/all.min.css";

const Candidate = () => {
  return (
    <>
       <Navbar />
       <main className="main">
        <section className="section-box-2">
            <div className="box-head-single none-bg">
                <div className="container">
                    <h4>There Are 968 Candidates<br />Here For You!</h4>
                    <div className="row mt-15 mb-40">
                        <div className="col-lg-7 col-md-9">
                            <span className="text-mutted">Discover your next career move, freelance gig, or
                                internship</span>
                        </div>
                        <div className="col-lg-5 col-md-3 text-lg-end text-start">
                            <ul className="breadcrumbs mt-sm-15">
                                <li><a href="#">Home</a></li>
                                <li>Candidates listing</li>
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
                                            <button className="btn dropdown-toggle" type="button" id="dropdownLocation2" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static"><i class="fa-solid fa-indian-rupee-sign"></i><span>Salary Range</span> <i className="fi-rr-angle-small-down"></i></button>
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
        <div className="section-box mt-80">
            <div className="container">
                <div className="content-page">
                    <div className="box-filters-job mt-15 mb-10">
                        <div className="row">
                            <div className="col-lg-7">
                                <span className="text-small">Showing <strong>41-60 </strong>of <strong>944 </strong>Candidates</span>
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
                                        <a href="candidates-list.html" className="view-type"><img src="assets/imgs/theme/icons/icon-list.svg" alt="jobhub" /></a>
                                        <a href="candidates-grid.html" className="view-type"><img src="assets/imgs/theme/icons/icon-grid.svg" alt="jobhub" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-link">
                                    <a href="#"><i className="fi-rr-shield-check"></i></a>
                                    <a href="#"><i className="fi-rr-bookmark"></i></a>
                                </div>
                                <div className="text-center card-grid-2-image-rd online">
                                    <a href="/Candidatedetails">
                                        <figure><img alt="jobhub" src="assets/imgs/page/candidates/img-candidate.png" /></figure>
                                    </a>
                                </div>
                                <div className="card-block-info">
                                    <div className="card-profile">
                                        <a href="/Candidatedetails"><strong>Esther Howard</strong></a>
                                        <span className="text-sm">UI/UX Designer</span>
                                        <div className="rate-reviews-small">
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span className="ml-10 text-muted text-small">(5.0)</span>
                                        </div>
                                    </div>
                                    <div className="employers-info d-flex align-items-center justify-content-center mt-15">
                                        <span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0"></i> Chicago, US</span>
                                        <span className="d-flex align-items-center ml-25"><i className="fi-rr-briefcase mr-5"></i>Software</span>
                                    </div>
                                    <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                        <div className="text-center">
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">App</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                                        </div>
                                        <div className="text-center mt-25 mb-5">
                                            <a href="/Candidatedetails" className="btn btn-border btn-brand-hover">View profile</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-link">
                                    <a href="#"><i className="fi-rr-shield-check"></i></a>
                                    <a href="#"><i className="fi-rr-bookmark"></i></a>
                                </div>
                                <div className="text-center card-grid-2-image-rd">
                                    <a href="/Candidatedetails">
                                        <figure><img alt="jobhub" src="assets/imgs/page/candidates/img-candidate2.png" /></figure>
                                    </a>
                                </div>
                                <div className="card-block-info">
                                    <div className="card-profile">
                                        <a href="/Candidatedetails"><strong>Esther Howard</strong></a>
                                        <span className="text-sm">UI/UX Designer</span>
                                        <div className="rate-reviews-small">
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span className="ml-10 text-muted text-small">(5.0)</span>
                                        </div>
                                    </div>
                                    <div className="employers-info d-flex align-items-center justify-content-center mt-15">
                                        <span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0"></i> Chicago, US</span>
                                        <span className="d-flex align-items-center ml-25"><i className="fi-rr-briefcase mr-5"></i>Software</span>
                                    </div>
                                    <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                        <div className="text-center">
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">App</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                                        </div>
                                        <div className="text-center mt-25 mb-5">
                                            <a href="/Candidatedetails" className="btn btn-border btn-brand-hover">View profile</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-link">
                                    <a href="#"><i className="fi-rr-shield-check"></i></a>
                                    <a href="#"><i className="fi-rr-bookmark"></i></a>
                                </div>
                                <div className="text-center card-grid-2-image-rd">
                                    <a href="/Candidatedetails">
                                        <figure><img alt="jobhub" src="assets/imgs/page/candidates/img-candidate3.png" /></figure>
                                    </a>
                                </div>
                                <div className="card-block-info">
                                    <div className="card-profile">
                                        <a href="/Candidatedetails"><strong>Esther Howard</strong></a>
                                        <span className="text-sm">UI/UX Designer</span>
                                        <div className="rate-reviews-small">
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span className="ml-10 text-muted text-small">(5.0)</span>
                                        </div>
                                    </div>
                                    <div className="employers-info d-flex align-items-center justify-content-center mt-15">
                                        <span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0"></i> Chicago, US</span>
                                        <span className="d-flex align-items-center ml-25"><i className="fi-rr-briefcase mr-5"></i>Software</span>
                                    </div>
                                    <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                        <div className="text-center">
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">App</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                                        </div>
                                        <div className="text-center mt-25 mb-5">
                                            <a href="/Candidatedetails" className="btn btn-border btn-brand-hover">View profile</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-link">
                                    <a href="#"><i className="fi-rr-shield-check"></i></a>
                                    <a href="#"><i className="fi-rr-bookmark"></i></a>
                                </div>
                                <div className="text-center card-grid-2-image-rd online">
                                    <a href="/Candidatedetails">
                                        <figure><img alt="jobhub" src="assets/imgs/page/candidates/img-candidate4.png" /></figure>
                                    </a>
                                </div>
                                <div className="card-block-info">
                                    <div className="card-profile">
                                        <a href="/Candidatedetails"><strong>Esther Howard</strong></a>
                                        <span className="text-sm">UI/UX Designer</span>
                                        <div className="rate-reviews-small">
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span className="ml-10 text-muted text-small">(5.0)</span>
                                        </div>
                                    </div>
                                    <div className="employers-info d-flex align-items-center justify-content-center mt-15">
                                        <span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0"></i> Chicago, US</span>
                                        <span className="d-flex align-items-center ml-25"><i className="fi-rr-briefcase mr-5"></i>Software</span>
                                    </div>
                                    <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                        <div className="text-center">
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">App</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                                        </div>
                                        <div className="text-center mt-25 mb-5">
                                            <a href="/Candidatedetails" className="btn btn-border btn-brand-hover">View profile</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-link">
                                    <a href="#"><i className="fi-rr-shield-check"></i></a>
                                    <a href="#"><i className="fi-rr-bookmark"></i></a>
                                </div>
                                <div className="text-center card-grid-2-image-rd">
                                    <a href="/Candidatedetails">
                                        <figure><img alt="jobhub" src="assets/imgs/page/candidates/img-candidate5.png" /></figure>
                                    </a>
                                </div>
                                <div className="card-block-info">
                                    <div className="card-profile">
                                        <a href="/Candidatedetails"><strong>Esther Howard</strong></a>
                                        <span className="text-sm">UI/UX Designer</span>
                                        <div className="rate-reviews-small">
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span className="ml-10 text-muted text-small">(5.0)</span>
                                        </div>
                                    </div>
                                    <div className="employers-info d-flex align-items-center justify-content-center mt-15">
                                        <span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0"></i> Chicago, US</span>
                                        <span className="d-flex align-items-center ml-25"><i className="fi-rr-briefcase mr-5"></i>Software</span>
                                    </div>
                                    <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                        <div className="text-center">
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">App</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                                        </div>
                                        <div className="text-center mt-25 mb-5">
                                            <a href="/Candidatedetails" className="btn btn-border btn-brand-hover">View profile</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-link">
                                    <a href="#"><i className="fi-rr-shield-check"></i></a>
                                    <a href="#"><i className="fi-rr-bookmark"></i></a>
                                </div>
                                <div className="text-center card-grid-2-image-rd">
                                    <a href="/Candidatedetails">
                                        <figure><img alt="jobhub" src="assets/imgs/page/candidates/img-candidate6.png" /></figure>
                                    </a>
                                </div>
                                <div className="card-block-info">
                                    <div className="card-profile">
                                        <a href="/Candidatedetails"><strong>Esther Howard</strong></a>
                                        <span className="text-sm">UI/UX Designer</span>
                                        <div className="rate-reviews-small">
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span className="ml-10 text-muted text-small">(5.0)</span>
                                        </div>
                                    </div>
                                    <div className="employers-info d-flex align-items-center justify-content-center mt-15">
                                        <span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0"></i> Chicago, US</span>
                                        <span className="d-flex align-items-center ml-25"><i className="fi-rr-briefcase mr-5"></i>Software</span>
                                    </div>
                                    <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                        <div className="text-center">
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">App</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                                        </div>
                                        <div className="text-center mt-25 mb-5">
                                            <a href="/Candidatedetails" className="btn btn-border btn-brand-hover">View profile</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-link">
                                    <a href="#"><i className="fi-rr-shield-check"></i></a>
                                    <a href="#"><i className="fi-rr-bookmark"></i></a>
                                </div>
                                <div className="text-center card-grid-2-image-rd online">
                                    <a href="/Candidatedetails">
                                        <figure><img alt="jobhub" src="assets/imgs/page/candidates/img-candidate7.png" /></figure>
                                    </a>
                                </div>
                                <div className="card-block-info">
                                    <div className="card-profile">
                                        <a href="/Candidatedetails"><strong>Esther Howard</strong></a>
                                        <span className="text-sm">UI/UX Designer</span>
                                        <div className="rate-reviews-small">
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span className="ml-10 text-muted text-small">(5.0)</span>
                                        </div>
                                    </div>
                                    <div className="employers-info d-flex align-items-center justify-content-center mt-15">
                                        <span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0"></i> Chicago, US</span>
                                        <span className="d-flex align-items-center ml-25"><i className="fi-rr-briefcase mr-5"></i>Software</span>
                                    </div>
                                    <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                        <div className="text-center">
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">App</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                                        </div>
                                        <div className="text-center mt-25 mb-5">
                                            <a href="/Candidatedetails" className="btn btn-border btn-brand-hover">View profile</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-link">
                                    <a href="#"><i className="fi-rr-shield-check"></i></a>
                                    <a href="#"><i className="fi-rr-bookmark"></i></a>
                                </div>
                                <div className="text-center card-grid-2-image-rd">
                                    <a href="/Candidatedetails">
                                        <figure><img alt="jobhub" src="assets/imgs/page/candidates/img-candidate8.png" /></figure>
                                    </a>
                                </div>
                                <div className="card-block-info">
                                    <div className="card-profile">
                                        <a href="/Candidatedetails"><strong>Esther Howard</strong></a>
                                        <span className="text-sm">UI/UX Designer</span>
                                        <div className="rate-reviews-small">
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span className="ml-10 text-muted text-small">(5.0)</span>
                                        </div>
                                    </div>
                                    <div className="employers-info d-flex align-items-center justify-content-center mt-15">
                                        <span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0"></i> Chicago, US</span>
                                        <span className="d-flex align-items-center ml-25"><i className="fi-rr-briefcase mr-5"></i>Software</span>
                                    </div>
                                    <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                        <div className="text-center">
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">App</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                                        </div>
                                        <div className="text-center mt-25 mb-5">
                                            <a href="/Candidatedetails" className="btn btn-border btn-brand-hover">View profile</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-link">
                                    <a href="#"><i className="fi-rr-shield-check"></i></a>
                                    <a href="#"><i className="fi-rr-bookmark"></i></a>
                                </div>
                                <div className="text-center card-grid-2-image-rd">
                                    <a href="/Candidatedetails">
                                        <figure><img alt="jobhub" src="assets/imgs/page/candidates/img-candidate9.png" /></figure>
                                    </a>
                                </div>
                                <div className="card-block-info">
                                    <div className="card-profile">
                                        <a href="/Candidatedetails"><strong>Esther Howard</strong></a>
                                        <span className="text-sm">UI/UX Designer</span>
                                        <div className="rate-reviews-small">
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span className="ml-10 text-muted text-small">(5.0)</span>
                                        </div>
                                    </div>
                                    <div className="employers-info d-flex align-items-center justify-content-center mt-15">
                                        <span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0"></i> Chicago, US</span>
                                        <span className="d-flex align-items-center ml-25"><i className="fi-rr-briefcase mr-5"></i>Software</span>
                                    </div>
                                    <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                        <div className="text-center">
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">App</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                                        </div>
                                        <div className="text-center mt-25 mb-5">
                                            <a href="/Candidatedetails" className="btn btn-border btn-brand-hover">View profile</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-link">
                                    <a href="#"><i className="fi-rr-shield-check"></i></a>
                                    <a href="#"><i className="fi-rr-bookmark"></i></a>
                                </div>
                                <div className="text-center card-grid-2-image-rd online">
                                    <a href="/Candidatedetails">
                                        <figure><img alt="jobhub" src="assets/imgs/page/candidates/img-candidate7.png" /></figure>
                                    </a>
                                </div>
                                <div className="card-block-info">
                                    <div className="card-profile">
                                        <a href="/Candidatedetails"><strong>Esther Howard</strong></a>
                                        <span className="text-sm">UI/UX Designer</span>
                                        <div className="rate-reviews-small">
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span className="ml-10 text-muted text-small">(5.0)</span>
                                        </div>
                                    </div>
                                    <div className="employers-info d-flex align-items-center justify-content-center mt-15">
                                        <span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0"></i> Chicago, US</span>
                                        <span className="d-flex align-items-center ml-25"><i className="fi-rr-briefcase mr-5"></i>Software</span>
                                    </div>
                                    <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                        <div className="text-center">
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">App</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                                        </div>
                                        <div className="text-center mt-25 mb-5">
                                            <a href="/Candidatedetails" className="btn btn-border btn-brand-hover">View profile</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-link">
                                    <a href="#"><i className="fi-rr-shield-check"></i></a>
                                    <a href="#"><i className="fi-rr-bookmark"></i></a>
                                </div>
                                <div className="text-center card-grid-2-image-rd">
                                    <a href="/Candidatedetails">
                                        <figure><img alt="jobhub" src="assets/imgs/page/candidates/img-candidate8.png" /></figure>
                                    </a>
                                </div>
                                <div className="card-block-info">
                                    <div className="card-profile">
                                        <a href="/Candidatedetails"><strong>Esther Howard</strong></a>
                                        <span className="text-sm">UI/UX Designer</span>
                                        <div className="rate-reviews-small">
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span className="ml-10 text-muted text-small">(5.0)</span>
                                        </div>
                                    </div>
                                    <div className="employers-info d-flex align-items-center justify-content-center mt-15">
                                        <span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0"></i> Chicago, US</span>
                                        <span className="d-flex align-items-center ml-25"><i className="fi-rr-briefcase mr-5"></i>Software</span>
                                    </div>
                                    <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                        <div className="text-center">
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">App</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                                        </div>
                                        <div className="text-center mt-25 mb-5">
                                            <a href="/Candidatedetails" className="btn btn-border btn-brand-hover">View profile</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-link">
                                    <a href="#"><i className="fi-rr-shield-check"></i></a>
                                    <a href="#"><i className="fi-rr-bookmark"></i></a>
                                </div>
                                <div className="text-center card-grid-2-image-rd">
                                    <a href="/Candidatedetails">
                                        <figure><img alt="jobhub" src="assets/imgs/page/candidates/img-candidate9.png" /></figure>
                                    </a>
                                </div>
                                <div className="card-block-info">
                                    <div className="card-profile">
                                        <a href="/Candidatedetails"><strong>Esther Howard</strong></a>
                                        <span className="text-sm">UI/UX Designer</span>
                                        <div className="rate-reviews-small">
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span><img src="assets/imgs/theme/icons/star.svg" alt="jobhub" /></span>
                                            <span className="ml-10 text-muted text-small">(5.0)</span>
                                        </div>
                                    </div>
                                    <div className="employers-info d-flex align-items-center justify-content-center mt-15">
                                        <span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0"></i> Chicago, US</span>
                                        <span className="d-flex align-items-center ml-25"><i className="fi-rr-briefcase mr-5"></i>Software</span>
                                    </div>
                                    <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                        <div className="text-center">
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">App</a>
                                            <a href="#" className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                                        </div>
                                        <div className="text-center mt-25 mb-5">
                                            <a href="/Candidatedetails" className="btn btn-border btn-brand-hover">View profile</a>
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
        </div>
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

export default Candidate
