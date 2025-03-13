import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Blog = () => {
  return (
    <>
      <Navbar />
      <main className="main">
        <div className="breacrumb-cover">
            <div className="container">
                <ul className="breadcrumbs">
                    <li><a href="#">Home</a></li>
                    <li>Blog</li>
                </ul>
            </div>
        </div>
        <div className="archive-header pt-50 pb-50">
            <div className="container">
                <h3 className="mb-30 text-center w-75 mx-auto">
                    Relevant news and more for you. Welcome to our blog
                </h3>
                <div className="text-center">
                    <div className="sub-categories">
                        <a href="" className="btn btn-tags-sm mb-10 mr-5">Recruitment</a>
                        <a href="" className="btn btn-tags-sm mb-10 mr-5">Branding</a>
                        <a href="" className="btn btn-tags-sm mb-10 mr-5">Workplage</a>
                        <a href="" className="btn btn-tags-sm mb-10 mr-5">Job Tips</a>
                        <a href="" className="btn btn-tags-sm mb-10 mr-5">Contributors</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="post-loop-grid">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-12 mb-30">
                                <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".0s">
                                    <figure className="post-thumb mb-15">
                                        <a href="/Blogdetails">
                                            <img alt="jobhub" src="assets/imgs/blog/blog-thumb-1.png" />
                                        </a>
                                    </figure>
                                    <div className="card-block-info">
                                        <div className="post-meta text-muted d-flex align-items-center mb-15">
                                            <div className="author d-flex align-items-center mr-30">
                                                <img alt="jobhub" src="assets/imgs/avatar/ava_16.png" />
                
                                                <span>Sarah Harding</span>
                                            </div>
                                            <div className="date">
                                                <span><i className="fi-rr-edit mr-5 text-grey-6"></i>06 Sep 2022</span>
                                            </div>
                                        </div>
                                        <h3 className="post-title mb-15"><a href="/Blogdetails">21 Job Interview Tips: How To Make a Great Impression</a></h3>
                                        <p className="post-excerpt text-muted">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ab, dicta minus aspernatur magnam atque excepturi perspiciatis omnis voluptas ullam nam, sunt temporibus fuga vero! Adipisci perspiciatis necessitatibus reprehenderit repellat.
                                        </p>
                                        <div className="card-2-bottom mt-30">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="keep-reading">
                                                    <a href="/Blogdetails" className="btn btn-border btn-brand-hover">Keep reading</a>
                                                </div>
                                                <div className="tags text-lg-end">
                                                    <a href="#" className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                                                    <a href="#" className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                                                    <a href="#" className="mt-10"><img alt="jobhub" src="assets/imgs/theme/icons/bookmark.svg" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-30">
                                <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".0s">
                                    <figure className="post-thumb mb-15">
                                        <a href="/Blogdetails">
                                            <img alt="jobhub" src="assets/imgs/blog/blog-thumb-3.png" />
                                        </a>
                                    </figure>
                                    <div className="card-block-info">
                                        <div className="post-meta text-muted d-flex align-items-center mb-15">
                                            <div className="author d-flex align-items-center mr-30">
                                                <img alt="jobhub" src="assets/imgs/avatar/ava_14.png" />
                                                <span>Sarah Harding</span>
                                            </div>
                                            <div className="date">
                                                <span><i className="fi-rr-edit mr-5 text-grey-6"></i>06 September</span>
                                            </div>
                                        </div>
                                        <h3 className="post-title small mb-15"><a href="/Blogdetails">How To Create a Resume for a Job in Social Media Marketing</a></h3>
                                        <div className="card-2-bottom mt-30">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="keep-reading">
                                                    <a href="/Blogdetails" className="btn btn-border btn-brand-hover">Keep reading</a>
                                                </div>
                                                <div className="tags text-lg-end">
                                                    <a href="#" className="mt-10"><img alt="jobhub" src="assets/imgs/theme/icons/bookmark.svg" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-30">
                                <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                    <figure className="post-thumb mb-15">
                                        <a href="/Blogdetails">
                                            <img alt="jobhub" src="assets/imgs/blog/blog-thumb-4.png" />
                                        </a>
                                    </figure>
                                    <div className="card-block-info">
                                        <div className="post-meta text-muted d-flex align-items-center mb-15">
                                            <div className="author d-flex align-items-center mr-30">
                                                <img alt="jobhub" src="assets/imgs/avatar/ava_13.png" />
                                                <span>Sarah Harding</span>
                                            </div>
                                            <div className="date">
                                                <span><i className="fi-rr-edit mr-5 text-grey-6"></i>06 September</span>
                                            </div>
                                        </div>
                                        <h3 className="post-title small mb-15"><a href="/Blogdetails">10 Ways to Avoid a Referee Disaster Zone</a></h3>
                                        <div className="card-2-bottom mt-30">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="keep-reading">
                                                    <a href="/Blogdetails" className="btn btn-border btn-brand-hover">Keep reading</a>
                                                </div>
                                                <div className="tags text-lg-end">
                                                    <a href="#" className="mt-10"><img alt="jobhub" src="assets/imgs/theme/icons/bookmark.svg" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-30">
                                <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                    <figure className="post-thumb mb-15">
                                        <a href="/Blogdetails">
                                            <img alt="jobhub" src="assets/imgs/blog/blog-thumb-5.png" />
                                        </a>
                                    </figure>
                                    <div className="card-block-info">
                                        <div className="post-meta text-muted d-flex align-items-center mb-15">
                                            <div className="author d-flex align-items-center mr-30">
                                                <img alt="jobhub" src="assets/imgs/avatar/ava_1.png" />
                                                <span>Sarah Harding</span>
                                            </div>
                                            <div className="date">
                                                <span><i className="fi-rr-edit mr-5 text-grey-6"></i>06 September</span>
                                            </div>
                                        </div>
                                        <h3 className="post-title small mb-15"><a href="/Blogdetails">How To Set Work-Life Boundaries From Any Location</a></h3>
                                        <div className="card-2-bottom mt-30">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="keep-reading">
                                                    <a href="/Blogdetails" className="btn btn-border btn-brand-hover">Keep reading</a>
                                                </div>
                                                <div className="tags text-lg-end">
                                                    <a href="#" className="mt-10"><img alt="jobhub" src="assets/imgs/theme/icons/bookmark.svg" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-30">
                                <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".0s">
                                    <figure className="post-thumb mb-15">
                                        <a href="/Blogdetails">
                                            <img alt="jobhub" src="assets/imgs/blog/blog-thumb-6.png" />
                                        </a>
                                    </figure>
                                    <div className="card-block-info">
                                        <div className="post-meta text-muted d-flex align-items-center mb-15">
                                            <div className="author d-flex align-items-center mr-30">
                                                <img alt="jobhub" src="assets/imgs/avatar/ava_3.png" />
                                                <span>Sarah Harding</span>
                                            </div>
                                            <div className="date">
                                                <span><i className="fi-rr-edit mr-5 text-grey-6"></i>06 September</span>
                                            </div>
                                        </div>
                                        <h3 className="post-title small mb-15"><a href="/Blogdetails">How to Land Your Dream Marketing Job</a></h3>
                                        <div className="card-2-bottom mt-30">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="keep-reading">
                                                    <a href="/Blogdetails" className="btn btn-border btn-brand-hover">Keep reading</a>
                                                </div>
                                                <div className="tags text-lg-end">
                                                    <a href="#" className="mt-10"><img alt="jobhub" src="assets/imgs/theme/icons/bookmark.svg" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-30">
                                <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                    <figure className="post-thumb mb-15">
                                        <a href="/Blogdetails">
                                            <img alt="jobhub" src="assets/imgs/blog/blog-thumb-7.png" />
                                        </a>
                                    </figure>
                                    <div className="card-block-info">
                                        <div className="post-meta text-muted d-flex align-items-center mb-15">
                                            <div className="author d-flex align-items-center mr-30">
                                                <img alt="jobhub" src="assets/imgs/avatar/ava_5.png" />
                                                <span>Sarah Harding</span>
                                            </div>
                                            <div className="date">
                                                <span><i className="fi-rr-edit mr-5 text-grey-6"></i>06 September</span>
                                            </div>
                                        </div>
                                        <h3 className="post-title small mb-15"><a href="/Blogdetails">Leveraging Job Rejection as a Catalyst for Growth</a></h3>
                                        <div className="card-2-bottom mt-30">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="keep-reading">
                                                    <a href="/Blogdetails" className="btn btn-border btn-brand-hover">Keep reading</a>
                                                </div>
                                                <div className="tags text-lg-end">
                                                    <a href="#" className="mt-10"><img alt="jobhub" src="assets/imgs/theme/icons/bookmark.svg" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-30">
                                <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                    <figure className="post-thumb mb-15">
                                        <a href="/Blogdetails">
                                            <img alt="jobhub" src="assets/imgs/blog/blog-thumb-8.png" />
                                        </a>
                                    </figure>
                                    <div className="card-block-info">
                                        <div className="post-meta text-muted d-flex align-items-center mb-15">
                                            <div className="author d-flex align-items-center mr-30">
                                                <img alt="jobhub" src="assets/imgs/avatar/ava_6.png" />
                                                <span>Sarah Harding</span>
                                            </div>
                                            <div className="date">
                                                <span><i className="fi-rr-edit mr-5 text-grey-6"></i>06 September</span>
                                            </div>
                                        </div>
                                        <h3 className="post-title small mb-15"><a href="/Blogdetails">Effective Job Search Tools to Get You A Job</a></h3>
                                        <div className="card-2-bottom mt-30">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="keep-reading">
                                                    <a href="/Blogdetails" className="btn btn-border btn-brand-hover">Keep reading</a>
                                                </div>
                                                <div className="tags text-lg-end">
                                                    <a href="#" className="mt-10"><img alt="jobhub" src="assets/imgs/theme/icons/bookmark.svg" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-30">
                                <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".0s">
                                    <figure className="post-thumb mb-15">
                                        <a href="/Blogdetails">
                                            <img alt="jobhub" src="assets/imgs/blog/blog-thumb-9.png" />
                                        </a>
                                    </figure>
                                    <div className="card-block-info">
                                        <div className="post-meta text-muted d-flex align-items-center mb-15">
                                            <div className="author d-flex align-items-center mr-30">
                                                <img alt="jobhub" src="assets/imgs/avatar/ava_7.png" />
                                                <span>Sarah Harding</span>
                                            </div>
                                            <div className="date">
                                                <span><i className="fi-rr-edit mr-5 text-grey-6"></i>06 September</span>
                                            </div>
                                        </div>
                                        <h3 className="post-title small mb-15"><a href="/Blogdetails">Leveraging Job Rejection as a Catalyst for Growth</a></h3>
                                        <div className="card-2-bottom mt-30">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="keep-reading">
                                                    <a href="/Blogdetails" className="btn btn-border btn-brand-hover">Keep reading</a>
                                                </div>
                                                <div className="tags text-lg-end">
                                                    <a href="#" className="mt-10"><img alt="jobhub" src="assets/imgs/theme/icons/bookmark.svg" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-30">
                                <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                    <figure className="post-thumb mb-15">
                                        <a href="/Blogdetails">
                                            <img alt="jobhub" src="assets/imgs/blog/blog-thumb-10.png" />
                                        </a>
                                    </figure>
                                    <div className="card-block-info">
                                        <div className="post-meta text-muted d-flex align-items-center mb-15">
                                            <div className="author d-flex align-items-center mr-30">
                                                <img alt="jobhub" src="assets/imgs/avatar/ava_10.png" />
                                                <span>Sarah Harding</span>
                                            </div>
                                            <div className="date">
                                                <span><i className="fi-rr-edit mr-5 text-grey-6"></i>06 September</span>
                                            </div>
                                        </div>
                                        <h3 className="post-title small mb-15"><a href="/Blogdetails">Tips to Keep Your Resume Relevant to the Position</a></h3>
                                        <div className="card-2-bottom mt-30">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="keep-reading">
                                                    <a href="/Blogdetails" className="btn btn-border btn-brand-hover">Keep reading</a>
                                                </div>
                                                <div className="tags text-lg-end">
                                                    <a href="#" className="mt-10"><img alt="jobhub" src="assets/imgs/theme/icons/bookmark.svg" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12 pl-40 pl-lg-15 mt-lg-30">
                        <div className="widget_search mb-40">
                            <div className="search-form">
                                <form action="#">
                                    <input type="text" placeholder="Search…" />
                                    <button type="submit"><i className="fi-rr-search"></i></button>
                                </form>
                            </div>
                        </div>
                        <div className="sidebar-shadow widget-categories">
                            <h5 className="sidebar-title">Category</h5>
                            <ul>
                                <li className="d-flex justify-content-between align-items-center">
                                    <a href="">Recruitment News</a>
                                    <span className="count">28</span>
                                </li>
                                <li className="d-flex justify-content-between align-items-center">
                                    <a href="">Job Venues</a>
                                    <span className="count">32</span>
                                </li>
                                <li className="d-flex justify-content-between align-items-center">
                                    <a href="">Full Time Job</a>
                                    <span className="count">45</span>
                                </li>
                                <li className="d-flex justify-content-between align-items-center">
                                    <a href="">Work From Home</a>
                                    <span className="count">68</span>
                                </li>
                                <li className="d-flex justify-content-between align-items-center">
                                    <a href="">Job Tips</a>
                                    <span className="count">43</span>
                                </li>
                            </ul>
                        </div>
                        <div className="sidebar-shadow sidebar-news-small">
                            <h5 className="sidebar-title">Latest news</h5>
                            <div className="post-list-small">
                                <div className="post-list-small-item d-flex align-items-center">
                                    <figure className="thumb mr-15">
                                        <img src="assets/imgs/blog/thumb-1.png" alt="" />
                                    </figure>
                                    <div className="content">
                                        <h5>You Should Have This Info Before Job Interview</h5>
                                        <div className="post-meta text-muted d-flex align-items-center mb-15">
                                            <div className="author d-flex align-items-center mr-20">
                                                <img alt="jobhub" src="assets/imgs/avatar/ava_1.png" />
                                                <span>Sarah</span>
                                            </div>
                                            <div className="date">
                                                <span>02 Oct</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-list-small-item d-flex align-items-center">
                                    <figure className="thumb mr-15">
                                        <img src="assets/imgs/blog/thumb-2.png" alt="" />
                                    </figure>
                                    <div className="content">
                                        <h5>How To Create a Resume for a Job in Social</h5>
                                        <div className="post-meta text-muted d-flex align-items-center mb-15">
                                            <div className="author d-flex align-items-center mr-20">
                                                <img alt="jobhub" src="assets/imgs/avatar/ava_3.png" />
                                                <span>Harding</span>
                                            </div>
                                            <div className="date">
                                                <span>17 Sep</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-list-small-item d-flex align-items-center">
                                    <figure className="thumb mr-15">
                                        <img src="assets/imgs/blog/thumb-3.png" alt="" />
                                    </figure>
                                    <div className="content">
                                        <h5>10 Ways to Avoid a Referee Disaster Zone</h5>
                                        <div className="post-meta text-muted d-flex align-items-center mb-15">
                                            <div className="author d-flex align-items-center mr-20">
                                                <img alt="jobhub" src="assets/imgs/avatar/ava_5.png" />
                                                <span>Steven</span>
                                            </div>
                                            <div className="date">
                                                <span>23 Sep</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-list-small-item d-flex align-items-center">
                                    <figure className="thumb mr-15">
                                        <img src="assets/imgs/blog/thumb-4.png" alt="" />
                                    </figure>
                                    <div className="content">
                                        <h5>How To Set Work-Life Boundaries From Any Location</h5>
                                        <div className="post-meta text-muted d-flex align-items-center mb-15">
                                            <div className="author d-flex align-items-center mr-20">
                                                <img alt="jobhub" src="assets/imgs/avatar/ava_6.png" />
                                                <span>Merias</span>
                                            </div>
                                            <div className="date">
                                                <span>14 Sep</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-list-small-item d-flex align-items-center">
                                    <figure className="thumb mr-15">
                                        <img src="assets/imgs/blog/thumb-5.png" alt="" />
                                    </figure>
                                    <div className="content">
                                        <h5>How to Land Your Dream Marketing Job</h5>
                                        <div className="post-meta text-muted d-flex align-items-center mb-15">
                                            <div className="author d-flex align-items-center mr-20">
                                                <img alt="jobhub" src="assets/imgs/avatar/ava_7.png" />
                                                <span>Rosie</span>
                                            </div>
                                            <div className="date">
                                                <span>12 Sep</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-shadow">
                            <h5 className="sidebar-title">Popular Tags</h5>
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

                <div className="paginations wow animate__animated animate__fadeIn">
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

export default Blog
