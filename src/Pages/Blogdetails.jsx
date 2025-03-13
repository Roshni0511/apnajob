import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Blogdetails = () => {
  return (
    <>
       <Navbar />
       <main className="main">
        <div className="breacrumb-cover">
            <div className="container">
                <ul className="breadcrumbs">
                    <li><a href="">Home</a></li>
                    <li>Blog</li>
                </ul>
            </div>
        </div>
        <div className="archive-header pt-50 pb-50 text-center">
            <div className="container">
                <h3 className="mb-30 text-center w-75 mx-auto">
                    11 Companies That Hire for Remote Seasonal and Holiday Jobs
                </h3>
                <div className="post-meta text-muted d-flex align-items-center mx-auto justify-content-center">
                    <div className="author d-flex align-items-center mr-30">
                        <img alt="jobhub" src="assets/imgs/avatar/ava_16.png" />
                        <span>Sarah Harding</span>
                    </div>
                    <div className="date mr-30">
                        <span><i className="fi-rr-edit mr-5 text-grey-6"></i>06 Sep 2022</span>
                    </div>
                    <div className="icons">
                        <a href=""><i className="fi fi-rr-bookmark mr-5 text-muted"></i></a>
                        <a href=""><i className="fi fi-rr-heart text-muted"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="post-loop-grid">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="single-body">
                            <figure className="mb-30">
                                <img src="assets/imgs/blog/img-blog-3.png" alt="" />
                            </figure>
                            <div className="excerpt mb-30">
                                <p>Helping everyone live happier, healthier lives at home through their kitchen. Kitchn is a daily food magazine on the Web celebrating life in the kitchen through home cooking and kitchen intelligence.</p>
                            </div>
                            <div className="single-content">
                                <p>This is a site for people who like to get their hands dirty while they cook. It is for those who care about the quality of their food, and how it affects the health of themselves and the planet. It is for cooks who care about</p>
                                <p>create a beautiful kitchen. It’s a place to dive in deep, and embrace the joy of one of our basic needs: Food, cooked at home, nourishing ourselves and our households.</p>
                                <h4>Get Yourself a Getaway Weekend</h4>
                                <p>Tortor, lobortis semper viverra ac, molestie tortor laoreet amet euismod et diam quis aliquam consequat porttitor integer a nisl, in faucibm eros est amet turpis nunc in turpis massa et eget facilisis ante molestie penatibus dolor volutpat, porta pellentesque scelerisque at ornare dui tincidunt cras feugiat tempor lectus</p>
                                <div className="row mb-15">
                                    <div className="col-md-6">
                                        <img src="assets/imgs/blog/img-blog-1.png" alt="" />
                                    </div>
                                    <div className="col-md-6">
                                        <img src="assets/imgs/blog/img-blog-2.png" alt="" />
                                    </div>
                                </div>
                                <p>Sit quis semper sit sapien. Massa bibendum scelerisque metus phasellus semper sed. Enim, lacus faucibus aliquam id vitae a et pellentesque amet. Felis quam lacinia elementum arcu. Tempor ullamcorper donec sit arcu varius diam luctus ultrices..</p>
                                <blockquote>
                                    <p>
                                        Integer eu faucibus Ut venenatis tincidunt diam elementum imperdiet. Etiam accumsan semper nisl eu congue. Sed aliquam magna erat, ac eleifend lacus rhoncus in.
                                    </p>
                                </blockquote>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet id enim, libero sit. Est donec lobortis cursus amet, cras elementum libero convallis feugiat. Nucilisi tincidunt a arcu, sem donec sed sed. Tincidunt morbi scelerisque lectus non. At leo mauris, vel augue. Facilisi diam consequat amet, commodo lorem nisl, odio malecras. Tempus lectus sed libero viverra ut. Facilisi rhoncus elit sit sit.</p>
                            </div>
                            <div className="author-bio p-30 mt-50 border-radius-15 bg-white">
                                <div className="author-image mb-15">
                                    <a href=""><img src="assets/imgs/avatar/ava_14.png" alt="" className="avatar" /></a>
                                    <div className="author-infor">
                                        <h5 className="mb-5">Steven Job</h5>
                                        <p className="mb-0 text-muted font-xs">
                                            <span className="mr-10">306 posts</span>
                                            <span className="has-dot">Since 2012</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="author-des">
                                    <p>Hi, I'm a recruiter with over 25 years of experience. I have worked in many multinational companies and corporations. With my experiences, I hope my articles will bring you knowledge and inspiration.</p>
                                </div>
                            </div>

                            <div className="related-posts mt-50">
                                <h4 className="mb-30">Related Posts</h4>
                                <div className="box-swiper">
                                    <div className="swiper-container swiper-group-3">
                                        <div className="swiper-wrapper pb-30 pt-5">
                                            <div className="swiper-slide">
                                                <div className="card-grid-3 hover-up p-15">
                                                    <a href="/Blogdetails">
                                                        <figure><img alt="jobhub" src="assets/imgs/blog/img-blog-1.png" /></figure>
                                                    </a>
                                                    <h6 className="heading-md mt-15 mb-0"><a href="/Blogdetails">Senior Full Stack, Creator Success Full Time</a></h6>
                                                </div>
                                            </div>

                                            <div className="swiper-slide">
                                                <div className="card-grid-3 hover-up p-15">
                                                    <a href="/Blogdetails">
                                                        <figure><img alt="jobhub" src="assets/imgs/blog/img-blog-2.png" /></figure>
                                                    </a>
                                                    <h6 className="heading-md mt-15 mb-0"><a href="/Blogdetails">21 Job Tips: Make a Great Impression For You</a></h6>
                                                </div>
                                            </div>

                                            <div className="swiper-slide">
                                                <div className="card-grid-3 hover-up p-15">
                                                    <a href="/Blogdetails">
                                                        <figure><img alt="jobhub" src="assets/imgs/blog/img-blog-3.png" /></figure>
                                                    </a>
                                                    <h6 className="heading-md mt-15 mb-0"><a href="/Blogdetails">How To Break Up Your Day In Morning</a></h6>
                                                </div>
                                            </div>

                                            <div className="swiper-slide">
                                                <div className="card-grid-3 hover-up p-15">
                                                    <a href="/Blogdetails">
                                                        <figure><img alt="jobhub" src="assets/imgs/blog/img-blog-4.png" /></figure>
                                                    </a>
                                                    <h6 className="heading-md mt-15 mb-0"><a href="/Blogdetails">How To Create a Resume for a Job In France</a></h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-pagination swiper-pagination3"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12 pl-40 pl-lg-15 mt-lg-30">
                        <div className="widget_search mb-40">
                            <div className="search-form">
                                <form action="">
                                    <input type="text" placeholder="Search…" />
                                    <button type="submit"><i className="fi-rr-search"></i></button>
                                </form>
                            </div>
                        </div>
                        <div className="sidebar-shadow widget-categories">
                            <h5 className="sidebar-title">Category</h5>
                            <ul>
                                <li className="d-flex justify-content-between align-items-center">
                                    <a href="/Blog">Recruitment News</a>
                                    <span className="count">28</span>
                                </li>
                                <li className="d-flex justify-content-between align-items-center">
                                    <a href="/Blog">Job Venues</a>
                                    <span className="count">32</span>
                                </li>
                                <li className="d-flex justify-content-between align-items-center">
                                    <a href="/Blog">Full Time Job</a>
                                    <span className="count">45</span>
                                </li>
                                <li className="d-flex justify-content-between align-items-center">
                                    <a href="/Blog">Work From Home</a>
                                    <span className="count">68</span>
                                </li>
                                <li className="d-flex justify-content-between align-items-center">
                                    <a href="/Blog">Job Tips</a>
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
                                <a href="" className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                                <a href="" className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                                <a href="" className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                                <a href="" className="btn btn-tags-sm mb-10 mr-5">HTML 5</a>
                                <a href="" className="btn btn-tags-sm mb-10 mr-5">Css 3</a>
                                <a href="" className="btn btn-tags-sm mb-10 mr-5">Javascript</a>
                                <a href="" className="btn btn-tags-sm mb-10 mr-5">Jquery</a>
                                <a href="" className="btn btn-tags-sm mb-10 mr-5">NodeJS</a>
                                <a href="" className="btn btn-tags-sm mb-10 mr-5">MongoDb</a>
                                <a href="" className="btn btn-tags-sm mb-10 mr-5">SEO expert</a>
                                <a href="" className="btn btn-tags-sm mb-10 mr-5">Gimp</a>
                                <a href="" className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                                <a href="" className="btn btn-tags-sm mb-10 mr-5">Photo editing</a>
                                <a href="" className="btn btn-tags-sm mb-10 mr-5">Sketch</a>
                                <a href="" className="btn btn-tags-sm mb-10 mr-5">jam</a>
                            </div>
                        </div>
                        <div className="sidebar-normal">
                            <div>
                                <h6 className="small-heading">Are you also hiring?</h6>
                                <ul className="ul-lists">
                                    <li><a href="">Writing & Translation</a></li>
                                    <li><a href="">Video & Animation</a></li>
                                    <li><a href="">Music & Audio</a></li>
                                    <li><a href="">Digital Marketing</a></li>
                                    <li><a href="">Business</a></li>
                                    <li><a href="">Programming & Tech</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
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

export default Blogdetails
