import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Home = () => {
  return (
    <>
       <Navbar />
       <main class="main">
        <section class="section-box bg-banner-about banner-home-3 pt-100">
            <div class="banner-hero">
                <div class="banner-inner">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="block-banner">
                                <h2 class="heading-banner text-center wow animate__animated animate__fadeInUp">There Are 98.688<br />Opportunities Here For you!</h2>
                                <div class="form-find mw-720 mt-80">
                                    <form class="wow animate__animated animate__fadeInUp">
                                        <input type="text" class="form-input input-keysearch mr-10" placeholder="Job title" />
                                        <select class="form-input mr-10 select-active">
                                            <option value="">Location</option>
                                            <option value="AX">Aland Islands</option>
                                            <option value="AF">Afghanistan</option>
                                            <option value="AL">Albania</option>
                                            <option value="DZ">Algeria</option>
                                            <option value="AD">Andorra</option>
                                            <option value="AO">Angola</option>
                                            <option value="AI">Anguilla</option>
                                            <option value="AQ">Antarctica</option>
                                            <option value="AG">Antigua and Barbuda</option>
                                            <option value="AR">Argentina</option>
                                            <option value="AM">Armenia</option>
                                            <option value="AW">Aruba</option>
                                            <option value="AU">Australia</option>
                                            <option value="AT">Austria</option>
                                            <option value="AZ">Azerbaijan</option>
                                            <option value="BS">Bahamas</option>
                                            <option value="BH">Bahrain</option>
                                            <option value="BD">Bangladesh</option>
                                            <option value="BB">Barbados</option>
                                            <option value="BY">Belarus</option>
                                            <option value="PW">Belau</option>
                                            <option value="BE">Belgium</option>
                                            <option value="BZ">Belize</option>
                                            <option value="BJ">Benin</option>
                                            <option value="BM">Bermuda</option>
                                            <option value="BT">Bhutan</option>
                                            <option value="BO">Bolivia</option>
                                            <option value="BQ">Bonaire, Saint Eustatius and Saba</option>
                                            <option value="BA">Bosnia and Herzegovina</option>
                                            <option value="BW">Botswana</option>
                                            <option value="BV">Bouvet Island</option>
                                            <option value="BR">Brazil</option>
                                            <option value="IO">British Indian Ocean Territory</option>
                                            <option value="VG">British Virgin Islands</option>
                                            <option value="BN">Brunei</option>
                                            <option value="BG">Bulgaria</option>
                                            <option value="BF">Burkina Faso</option>
                                            <option value="BI">Burundi</option>
                                            <option value="KH">Cambodia</option>
                                            <option value="CM">Cameroon</option>
                                            <option value="CA">Canada</option>
                                            <option value="CV">Cape Verde</option>
                                            <option value="KY">Cayman Islands</option>
                                            <option value="CF">Central African Republic</option>
                                            <option value="TD">Chad</option>
                                            <option value="CL">Chile</option>
                                            <option value="CN">China</option>
                                            <option value="CX">Christmas Island</option>
                                            <option value="CC">Cocos (Keeling) Islands</option>
                                            <option value="CO">Colombia</option>
                                            <option value="KM">Comoros</option>
                                            <option value="CG">Congo (Brazzaville)</option>
                                            <option value="CD">Congo (Kinshasa)</option>
                                            <option value="CK">Cook Islands</option>
                                            <option value="CR">Costa Rica</option>
                                            <option value="HR">Croatia</option>
                                            <option value="CU">Cuba</option>
                                            <option value="CW">CuraÇao</option>
                                            <option value="CY">Cyprus</option>
                                            <option value="CZ">Czech Republic</option>
                                            <option value="DK">Denmark</option>
                                            <option value="DJ">Djibouti</option>
                                            <option value="DM">Dominica</option>
                                            <option value="DO">Dominican Republic</option>
                                            <option value="EC">Ecuador</option>
                                            <option value="EG">Egypt</option>
                                            <option value="SV">El Salvador</option>
                                            <option value="GQ">Equatorial Guinea</option>
                                            <option value="ER">Eritrea</option>
                                            <option value="EE">Estonia</option>
                                            <option value="ET">Ethiopia</option>
                                            <option value="FK">Falkland Islands</option>
                                            <option value="FO">Faroe Islands</option>
                                            <option value="FJ">Fiji</option>
                                            <option value="FI">Finland</option>
                                            <option value="FR">France</option>
                                            <option value="GF">French Guiana</option>
                                            <option value="PF">French Polynesia</option>
                                            <option value="TF">French Southern Territories</option>
                                            <option value="GA">Gabon</option>
                                            <option value="GM">Gambia</option>
                                            <option value="GE">Georgia</option>
                                            <option value="DE">Germany</option>
                                            <option value="GH">Ghana</option>
                                            <option value="GI">Gibraltar</option>
                                            <option value="GR">Greece</option>
                                            <option value="GL">Greenland</option>
                                            <option value="GD">Grenada</option>
                                            <option value="GP">Guadeloupe</option>
                                            <option value="GT">Guatemala</option>
                                            <option value="GG">Guernsey</option>
                                            <option value="GN">Guinea</option>
                                            <option value="GW">Guinea-Bissau</option>
                                            <option value="GY">Guyana</option>
                                            <option value="HT">Haiti</option>
                                            <option value="HM">Heard Island and McDonald Islands</option>
                                            <option value="HN">Honduras</option>
                                            <option value="HK">Hong Kong</option>
                                            <option value="HU">Hungary</option>
                                            <option value="IS">Iceland</option>
                                            <option value="IN">India</option>
                                            <option value="ID">Indonesia</option>
                                            <option value="IR">Iran</option>
                                            <option value="IQ">Iraq</option>
                                            <option value="IM">Isle of Man</option>
                                            <option value="IL">Israel</option>
                                            <option value="IT">Italy</option>
                                            <option value="CI">Ivory Coast</option>
                                            <option value="JM">Jamaica</option>
                                            <option value="JP">Japan</option>
                                            <option value="JE">Jersey</option>
                                            <option value="JO">Jordan</option>
                                            <option value="KZ">Kazakhstan</option>
                                            <option value="KE">Kenya</option>
                                            <option value="KI">Kiribati</option>
                                            <option value="KW">Kuwait</option>
                                            <option value="KG">Kyrgyzstan</option>
                                            <option value="LA">Laos</option>
                                            <option value="LV">Latvia</option>
                                            <option value="LB">Lebanon</option>
                                            <option value="LS">Lesotho</option>
                                            <option value="LR">Liberia</option>
                                            <option value="LY">Libya</option>
                                            <option value="LI">Liechtenstein</option>
                                            <option value="LT">Lithuania</option>
                                            <option value="LU">Luxembourg</option>
                                            <option value="MO">Macao S.A.R., China</option>
                                            <option value="MK">Macedonia</option>
                                            <option value="MG">Madagascar</option>
                                            <option value="MW">Malawi</option>
                                            <option value="MY">Malaysia</option>
                                            <option value="MV">Maldives</option>
                                            <option value="ML">Mali</option>
                                            <option value="MT">Malta</option>
                                            <option value="MH">Marshall Islands</option>
                                            <option value="MQ">Martinique</option>
                                            <option value="MR">Mauritania</option>
                                            <option value="MU">Mauritius</option>
                                            <option value="YT">Mayotte</option>
                                            <option value="MX">Mexico</option>
                                            <option value="FM">Micronesia</option>
                                            <option value="MD">Moldova</option>
                                            <option value="MC">Monaco</option>
                                            <option value="MN">Mongolia</option>
                                            <option value="ME">Montenegro</option>
                                            <option value="MS">Montserrat</option>
                                            <option value="MA">Morocco</option>
                                            <option value="MZ">Mozambique</option>
                                            <option value="MM">Myanmar</option>
                                            <option value="NA">Namibia</option>
                                            <option value="NR">Nauru</option>
                                            <option value="NP">Nepal</option>
                                            <option value="NL">Netherlands</option>
                                            <option value="AN">Netherlands Antilles</option>
                                            <option value="NC">New Caledonia</option>
                                            <option value="NZ">New Zealand</option>
                                            <option value="NI">Nicaragua</option>
                                            <option value="NE">Niger</option>
                                            <option value="NG">Nigeria</option>
                                            <option value="NU">Niue</option>
                                            <option value="NF">Norfolk Island</option>
                                            <option value="KP">North Korea</option>
                                            <option value="NO">Norway</option>
                                            <option value="OM">Oman</option>
                                            <option value="PK">Pakistan</option>
                                            <option value="PS">Palestinian Territory</option>
                                            <option value="PA">Panama</option>
                                            <option value="PG">Papua New Guinea</option>
                                            <option value="PY">Paraguay</option>
                                            <option value="PE">Peru</option>
                                            <option value="PH">Philippines</option>
                                            <option value="PN">Pitcairn</option>
                                            <option value="PL">Poland</option>
                                            <option value="PT">Portugal</option>
                                            <option value="QA">Qatar</option>
                                            <option value="IE">Republic of Ireland</option>
                                            <option value="RE">Reunion</option>
                                            <option value="RO">Romania</option>
                                            <option value="RU">Russia</option>
                                            <option value="RW">Rwanda</option>
                                            <option value="ST">São Tomé and Príncipe</option>
                                            <option value="BL">Saint Barthélemy</option>
                                            <option value="SH">Saint Helena</option>
                                            <option value="KN">Saint Kitts and Nevis</option>
                                            <option value="LC">Saint Lucia</option>
                                            <option value="SX">Saint Martin (Dutch part)</option>
                                            <option value="MF">Saint Martin (French part)</option>
                                            <option value="PM">Saint Pierre and Miquelon</option>
                                            <option value="VC">Saint Vincent and the Grenadines</option>
                                            <option value="SM">San Marino</option>
                                            <option value="SA">Saudi Arabia</option>
                                            <option value="SN">Senegal</option>
                                            <option value="RS">Serbia</option>
                                            <option value="SC">Seychelles</option>
                                            <option value="SL">Sierra Leone</option>
                                            <option value="SG">Singapore</option>
                                            <option value="SK">Slovakia</option>
                                            <option value="SI">Slovenia</option>
                                            <option value="SB">Solomon Islands</option>
                                            <option value="SO">Somalia</option>
                                            <option value="ZA">South Africa</option>
                                            <option value="GS">South Georgia/Sandwich Islands</option>
                                            <option value="KR">South Korea</option>
                                            <option value="SS">South Sudan</option>
                                            <option value="ES">Spain</option>
                                            <option value="LK">Sri Lanka</option>
                                            <option value="SD">Sudan</option>
                                            <option value="SR">Suriname</option>
                                            <option value="SJ">Svalbard and Jan Mayen</option>
                                            <option value="SZ">Swaziland</option>
                                            <option value="SE">Sweden</option>
                                            <option value="CH">Switzerland</option>
                                            <option value="SY">Syria</option>
                                            <option value="TW">Taiwan</option>
                                            <option value="TJ">Tajikistan</option>
                                            <option value="TZ">Tanzania</option>
                                            <option value="TH">Thailand</option>
                                            <option value="TL">Timor-Leste</option>
                                            <option value="TG">Togo</option>
                                            <option value="TK">Tokelau</option>
                                            <option value="TO">Tonga</option>
                                            <option value="TT">Trinidad and Tobago</option>
                                            <option value="TN">Tunisia</option>
                                            <option value="TR">Turkey</option>
                                            <option value="TM">Turkmenistan</option>
                                            <option value="TC">Turks and Caicos Islands</option>
                                            <option value="TV">Tuvalu</option>
                                            <option value="UG">Uganda</option>
                                            <option value="UA">Ukraine</option>
                                            <option value="AE">United Arab Emirates</option>
                                            <option value="GB">United Kingdom (UK)</option>
                                            <option value="US">USA (US)</option>
                                            <option value="UY">Uruguay</option>
                                            <option value="UZ">Uzbekistan</option>
                                            <option value="VU">Vanuatu</option>
                                            <option value="VA">Vatican</option>
                                            <option value="VE">Venezuela</option>
                                            <option value="VN">Vietnam</option>
                                            <option value="WF">Wallis and Futuna</option>
                                            <option value="EH">Western Sahara</option>
                                            <option value="WS">Western Samoa</option>
                                            <option value="YE">Yemen</option>
                                            <option value="ZM">Zambia</option>
                                            <option value="ZW">Zimbabwe</option>
                                        </select>
                                        <button class="btn btn-default btn-find wow animate__animated animate__fadeInUp">Find now</button>
                                    </form>
                                </div>
                                <div class="list-tags-banner mt-60 text-center wow animate__animated animate__fadeInUp">
                                    <strong>Popular Searches:</strong>
                                    <a href="#">Designer</a>, <a href="#">Developer</a>, <a href="#">Web</a>, <a href="#">Engineer</a>, <a href="#">Senior</a>,
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-box mt-80">
            <div class="container">
                <h2 class="section-title text-center mb-15 wow animate__animated animate__fadeInUp">Featured Jobs</h2>
                <div class="text-normal text-center mb-60 color-black-5 box-mw-60 wow animate__animated animate__fadeInUp">
                    The #1 Job Board for Hiring Creative Professionals
                </div>
                <div class="list-recent-jobs list-job-2-col">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                            {/* <!-- Item job --> */}
                            <div class="card-job hover-up wow animate__animated animate__fadeInUp">
                                <div class="card-job-top">
                                    <div class="card-job-top--image">
                                        <a href="employers-single.html">
                                            <figure><img alt="jobhub" src="assets/imgs/page/job/digital.png" /></figure>
                                        </a>
                                    </div>
                                    <div class="card-job-top--info">
                                        <h6 class="card-job-top--info-heading"><a href="job-single.html">Digital Marketing Manager</a></h6>
                                        <div class="row">
                                            <div class="col-md-9">
                                                <a href="employers-list.html"><span class="card-job-top--company">AliStudio, Inc</span></a>
                                                <span class="card-job-top--location text-sm"><i class="fi-rr-marker"></i> New York, NY</span>
                                                <span class="card-job-top--type-job text-sm"><i class="fi-rr-briefcase"></i>Full time</span>
                                                <span class="card-job-top--post-time text-sm"><i class="fi-rr-clock"></i> 3 mins ago</span>
                                            </div>
                                            <div class="col-md-3 text-md-end text-start">
                                                <span class="card-job-top--price">₹500<span>/Hour</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-job-description mt-20">
                                    We want someone who has been doing this for a solid 2-3 years. We want someone who can
                                    demonstrate an extremely strong portfolio.
                                </div>
                                <div class="card-job-bottom mt-25">
                                    <div class="row">
                                        <div class="col-lg-9 col-sm-8 col-12">
                                            <a href="job-grid.html" class="btn btn-small background-urgent btn-pink mr-5">Urgent</a>
                                            <a href="job-grid-2.html" class="btn btn-small background-blue-light mr-5">Senior</a>
                                            <a href="job-grid.html" class="btn btn-small background-6 disc-btn">Full time</a>
                                        </div>
                                        <div class="col-lg-3 col-sm-4 col-12 text-end pt-5 pt-sm-15">
                                            <a href="#" class="text-lg color-muted"><i class="fi-rr-shield-check"></i></a>
                                            <a href="#" class="ml-5 text-lg color-muted"><i class="fi-rr-bookmark"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End item job --> */}
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                            {/* <!-- Item job --> */}
                            <div class="card-job hover-up wow animate__animated animate__fadeInUp">
                                <div class="card-job-top">
                                    <div class="card-job-top--image">
                                        <a href="employers-single.html">
                                            <figure><img alt="jobhub" src="assets/imgs/page/job/n-digital.png" /></figure>
                                        </a>
                                    </div>
                                    <div class="card-job-top--info">
                                        <h6 class="card-job-top--info-heading"><a href="job-single.html">Development Team Lead</a></h6>
                                        <div class="row">
                                            <div class="col-md-9">
                                                <a href="employers-list.html"><span class="card-job-top--company">AliStudio, Inc</span></a>
                                                <span class="card-job-top--location text-sm"><i class="fi-rr-marker"></i> New York, NY</span>
                                                <span class="card-job-top--type-job text-sm"><i class="fi-rr-briefcase"></i>Full time</span>
                                                <span class="card-job-top--post-time text-sm"><i class="fi-rr-clock"></i> 3 mins ago</span>
                                            </div>
                                            <div class="col-md-3 text-md-end text-start">
                                                <span class="card-job-top--price">₹500<span>/Hour</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-job-description mt-20">
                                    We want someone who has been doing this for a solid 2-3 years. We want someone who can
                                    demonstrate an extremely strong portfolio.
                                </div>
                                <div class="card-job-bottom mt-25">
                                    <div class="row">
                                        <div class="col-lg-9 col-sm-8 col-12">
                                            <a href="job-grid.html" class="btn btn-small background-urgent btn-pink mr-5">Urgent</a>
                                            <a href="job-grid-2.html" class="btn btn-small background-blue-light mr-5">Senior</a>
                                            <a href="job-grid.html" class="btn btn-small background-6 disc-btn">Full time</a>
                                        </div>
                                        <div class="col-lg-3 col-sm-4 col-12 text-end pt-5 pt-sm-15">
                                            <a href="#" class="text-lg color-muted"><i class="fi-rr-shield-check"></i></a>
                                            <a href="#" class="ml-5 text-lg color-muted"><i class="fi-rr-bookmark"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End item job --> */}
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                            {/* <!-- Item job --> */}
                            <div class="card-job hover-up wow animate__animated animate__fadeInUp">
                                <div class="card-job-top">
                                    <div class="card-job-top--image">
                                        <a href="employers-single.html">
                                            <figure><img alt="jobhub" src="assets/imgs/page/job/n-digital2.png" /></figure>
                                        </a>
                                    </div>
                                    <div class="card-job-top--info">
                                        <h6 class="card-job-top--info-heading"><a href="job-single.html">Hiring Online English Teachers</a>
                                        </h6>
                                        <div class="row">
                                            <div class="col-md-9">
                                                <a href="employers-list.html"><span class="card-job-top--company">AliStudio, Inc</span></a>
                                                <span class="card-job-top--location text-sm"><i class="fi-rr-marker"></i> New York, NY</span>
                                                <span class="card-job-top--type-job text-sm"><i class="fi-rr-briefcase"></i>Full time</span>
                                                <span class="card-job-top--post-time text-sm"><i class="fi-rr-clock"></i> 3 mins ago</span>
                                            </div>
                                            <div class="col-md-3 text-md-end text-start">
                                                <span class="card-job-top--price">₹500<span>/Hour</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-job-description mt-20">
                                    We want someone who has been doing this for a solid 2-3 years. We want someone who can
                                    demonstrate an extremely strong portfolio.
                                </div>
                                <div class="card-job-bottom mt-25">
                                    <div class="row">
                                        <div class="col-lg-9 col-sm-8 col-12">
                                            <a href="job-grid.html" class="btn btn-small background-urgent btn-pink mr-5">Urgent</a>
                                            <a href="job-grid-2.html" class="btn btn-small background-blue-light mr-5">Senior</a>
                                            <a href="job-grid.html" class="btn btn-small background-6 disc-btn">Full time</a>
                                        </div>
                                        <div class="col-lg-3 col-sm-4 col-12 text-end pt-5 pt-sm-15">
                                            <a href="#" class="text-lg color-muted"><i class="fi-rr-shield-check"></i></a>
                                            <a href="#" class="ml-5 text-lg color-muted"><i class="fi-rr-bookmark"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End item job --> */}
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                            {/* <!-- Item job --> */}
                            <div class="card-job hover-u wow animate__animated animate__fadeInUp">
                                <div class="card-job-top">
                                    <div class="card-job-top--image">
                                        <a href="employers-single.html">
                                            <figure><img alt="jobhub" src="assets/imgs/page/job/digital.png" /></figure>
                                        </a>
                                    </div>
                                    <div class="card-job-top--info">
                                        <h6 class="card-job-top--info-heading"><a href="job-single.html">Development Team Lead</a></h6>
                                        <div class="row">
                                            <div class="col-md-9">
                                                <a href="employers-list.html"><span class="card-job-top--company">AliStudio, Inc</span></a>
                                                <span class="card-job-top--location text-sm"><i class="fi-rr-marker"></i> New York, NY</span>
                                                <span class="card-job-top--type-job text-sm"><i class="fi-rr-briefcase"></i>Full time</span>
                                                <span class="card-job-top--post-time text-sm"><i class="fi-rr-clock"></i> 3 mins ago</span>
                                            </div>
                                            <div class="col-md-3 text-md-end text-start">
                                                <span class="card-job-top--price">₹500<span>/Hour</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-job-description mt-20">
                                    We want someone who has been doing this for a solid 2-3 years. We want someone who can
                                    demonstrate an extremely strong portfolio.
                                </div>
                                <div class="card-job-bottom mt-25">
                                    <div class="row">
                                        <div class="col-lg-9 col-sm-8 col-12">
                                            <a href="job-grid.html" class="btn btn-small background-urgent btn-pink mr-5">Urgent</a>
                                            <a href="job-grid-2.html" class="btn btn-small background-blue-light mr-5">Senior</a>
                                            <a href="job-grid.html" class="btn btn-small background-6 disc-btn">Full time</a>
                                        </div>
                                        <div class="col-lg-3 col-sm-4 col-12 text-end pt-5 pt-sm-15">
                                            <a href="#" class="text-lg color-muted"><i class="fi-rr-shield-check"></i></a>
                                            <a href="#" class="ml-5 text-lg color-muted"><i class="fi-rr-bookmark"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End item job --> */}
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                            {/* <!-- Item job --> */}
                            <div class="card-job hover-up wow animate__animated animate__fadeInUp">
                                <div class="card-job-top">
                                    <div class="card-job-top--image">
                                        <a href="employers-single.html">
                                            <figure><img alt="jobhub" src="assets/imgs/page/job/n-digital.png" /></figure>
                                        </a>
                                    </div>
                                    <div class="card-job-top--info">
                                        <h6 class="card-job-top--info-heading"><a href="job-single.html">Hiring Online Chiness Teachers</a>
                                        </h6>
                                        <div class="row">
                                            <div class="col-md-9">
                                                <a href="employers-list.html"><span class="card-job-top--company">AliStudio, Inc</span></a>
                                                <span class="card-job-top--location text-sm"><i class="fi-rr-marker"></i> New York, NY</span>
                                                <span class="card-job-top--type-job text-sm"><i class="fi-rr-briefcase"></i>Full time</span>
                                                <span class="card-job-top--post-time text-sm"><i class="fi-rr-clock"></i> 3 mins ago</span>
                                            </div>
                                            <div class="col-md-3 text-md-end text-start">
                                                <span class="card-job-top--price">₹500<span>/Hour</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-job-description mt-20">
                                    We want someone who has been doing this for a solid 2-3 years. We want someone who can
                                    demonstrate an extremely strong portfolio.
                                </div>
                                <div class="card-job-bottom mt-25">
                                    <div class="row">
                                        <div class="col-lg-9 col-sm-8 col-12">
                                            <a href="job-grid.html" class="btn btn-small background-urgent btn-pink mr-5">Urgent</a>
                                            <a href="job-grid-2.html" class="btn btn-small background-blue-light mr-5">Senior</a>
                                            <a href="job-grid.html" class="btn btn-small background-6 disc-btn">Full time</a>
                                        </div>
                                        <div class="col-lg-3 col-sm-4 col-12 text-end pt-5 pt-sm-15">
                                            <a href="#" class="text-lg color-muted"><i class="fi-rr-shield-check"></i></a>
                                            <a href="#" class="ml-5 text-lg color-muted"><i class="fi-rr-bookmark"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End item job --> */}
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                            {/* <!-- Item job --> */}
                            <div class="card-job hover-up wow animate__animated animate__fadeInUp">
                                <div class="card-job-top">
                                    <div class="card-job-top--image">
                                        <a href="employers-single.html">
                                            <figure><img alt="jobhub" src="assets/imgs/page/job/n-digital2.png" /></figure>
                                        </a>
                                    </div>
                                    <div class="card-job-top--info">
                                        <h6 class="card-job-top--info-heading"><a href="job-single.html">Digital Experience Designer</a>
                                        </h6>
                                        <div class="row">
                                            <div class="col-md-9">
                                                <a href="employers-list.html"><span class="card-job-top--company">AliStudio, Inc</span></a>
                                                <span class="card-job-top--location text-sm"><i class="fi-rr-marker"></i> New York, NY</span>
                                                <span class="card-job-top--type-job text-sm"><i class="fi-rr-briefcase"></i>Full time</span>
                                                <span class="card-job-top--post-time text-sm"><i class="fi-rr-clock"></i> 3 mins ago</span>
                                            </div>
                                            <div class="col-md-3 text-md-end text-start">
                                                <span class="card-job-top--price">₹500<span>/Hour</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-job-description mt-20">
                                    We want someone who has been doing this for a solid 2-3 years. We want someone who can
                                    demonstrate an extremely strong portfolio. Create deliverables for your product
                                </div>
                                <div class="card-job-bottom mt-25">
                                    <div class="row">
                                        <div class="col-lg-9 col-sm-8 col-12">
                                            <a href="job-grid.html" class="btn btn-small background-urgent btn-pink mr-5">Urgent</a>
                                            <a href="job-grid-2.html" class="btn btn-small background-blue-light mr-5">Senior</a>
                                            <a href="job-grid.html" class="btn btn-small background-6 disc-btn">Full time</a>
                                        </div>
                                        <div class="col-lg-3 col-sm-4 col-12 text-end pt-5 pt-sm-15">
                                            <a href="#" class="text-lg color-muted"><i class="fi-rr-shield-check"></i></a>
                                            <a href="#" class="ml-5 text-lg color-muted"><i class="fi-rr-bookmark"></i></a>
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
        <section class="section-box mt-90 mb-80">
            <div class="container">
                <div class="block-job-bg block-job-bg-homepage-2">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 col-sm-12 col-12 d-none d-md-block">
                            <div class="box-image-findjob findjob-homepage-2 ml-0 wow animate__animated animate__fadeIn">
                                <figure><img alt="jobhub" src="assets/imgs/page/about/img-findjob.png" /></figure>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div class="box-info-job pl-90 pt-30 pr-90">
                                <span class="text-blue wow animate__animated animate__fadeInUp">Find jobs</span>
                                <h5 class="heading-36 mb-30 mt-30 wow animate__animated animate__fadeInUp">Create free count and start apply your dream job today</h5>
                                <p class="text-lg wow animate__animated animate__fadeInUp">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is
                                    simply dummy.
                                </p>
                                <div class="box-button-shadow mt-30 wow animate__animated animate__fadeInUp">
                                    <a href="job-grid.html" class="btn btn-default">Explore more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-box mt-50 mt-md-0">
            <div class="container">
                <h2 class="section-title text-center mb-15 wow animate__animated animate__fadeInUp">Our Happy Customer</h2>
                <div class="text-normal text-center color-black-5 box-mw-60 wow animate__animated animate__fadeInUp mt-20">
                    When it comes to choosing the right web hosting provider, we know how easy it is to get overwhelmed with the
                    number.
                </div>
                <div class="row mt-70">
                    <div class="box-swiper">
                        <div class="swiper-container swiper-group-3">
                            <div class="swiper-wrapper pb-70 pt-5">
                                <div class="swiper-slide">
                                    <div class="card-grid-3 hover-up">
                                        <div class="text-center card-grid-3-image card-grid-3-image-circle">
                                            <a href="candidates-single.html">
                                                <figure><img alt="jobhub" src="assets/imgs/page/about/profile.png" /></figure>
                                            </a>
                                        </div>
                                        <div class="card-block-info mt-10">
                                            <p class="text-lg text-center">We are on the hunt for a designer who is exceptional
                                                in both making incredible product interfaces as well as</p>
                                            <div class="text-center mt-20 mb-25">
                                                <div class="rate">
                                                    <input type="radio" id="star5" name="rate" value="5" />
                                                    <label for="star5" title="text" class="checked">5 stars</label>
                                                    <input type="radio" id="star4" name="rate" value="4" />
                                                    <label for="star4" title="text" class="checked">4 stars</label>
                                                    <input type="radio" id="star3" name="rate" value="3" />
                                                    <label for="star3" title="text" class="checked">3 stars</label>
                                                    <input type="radio" id="star2" name="rate" value="2" />
                                                    <label for="star2" title="text" class="checked">2 stars</label>
                                                    <input type="radio" id="star1" name="rate" value="1" />
                                                    <label for="star1" title="text" class="checked">1 star</label>
                                                </div>
                                            </div>
                                            <div class="card-profile text-center">
                                                <strong>Katy Perry</strong>
                                                <span>Visual Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="card-grid-3 hover-up">
                                        <div class="text-center card-grid-3-image card-grid-3-image-circle">
                                            <a href="candidates-single.html">
                                                <figure><img alt="jobhub" src="assets/imgs/page/about/profile2.png" /></figure>
                                            </a>
                                        </div>
                                        <div class="card-block-info mt-10">
                                            <p class="text-lg text-center">We are on the hunt for a designer who is exceptional
                                                in both making incredible product interfaces as well as</p>
                                            <div class="text-center mt-20 mb-25">
                                                <div class="rate">
                                                    <input type="radio" id="star52" name="rate" value="5" />
                                                    <label for="star52" title="text">5 stars</label>
                                                    <input type="radio" id="star42" name="rate" value="4" />
                                                    <label for="star42" title="text" class="checked">4 stars</label>
                                                    <input type="radio" id="star32" name="rate" value="3" />
                                                    <label for="star32" title="text" class="checked">3 stars</label>
                                                    <input type="radio" id="star22" name="rate" value="2" />
                                                    <label for="star22" title="text" class="checked">2 stars</label>
                                                    <input type="radio" id="star12" name="rate" value="1" />
                                                    <label for="star12" title="text" class="checked">1 star</label>
                                                </div>
                                            </div>
                                            <div class="card-profile text-center">
                                                <strong>Chris Brown</strong>
                                                <span>Visual Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="card-grid-3 hover-up">
                                        <div class="text-center card-grid-3-image card-grid-3-image-circle">
                                            <a href="candidates-single.html">
                                                <figure><img alt="jobhub" src="assets/imgs/page/about/profile3.png" /></figure>
                                            </a>
                                        </div>
                                        <div class="card-block-info mt-10">
                                            <p class="text-lg text-center">We are on the hunt for a designer who is exceptional
                                                in both making incredible product interfaces as well as</p>
                                            <div class="text-center mt-20 mb-25">
                                                <div class="rate">
                                                    <input type="radio" id="star53" name="rate" value="5" />
                                                    <label for="star53" title="text" class="checked">5 stars</label>
                                                    <input type="radio" id="star43" name="rate" value="4" />
                                                    <label for="star43" title="text" class="checked">4 stars</label>
                                                    <input type="radio" id="star33" name="rate" value="3" />
                                                    <label for="star33" title="text" class="checked">3 stars</label>
                                                    <input type="radio" id="star23" name="rate" value="2" />
                                                    <label for="star23" title="text" class="checked">2 stars</label>
                                                    <input type="radio" id="star13" name="rate" value="1" />
                                                    <label for="star13" title="text" class="checked">1 star</label>
                                                </div>
                                            </div>
                                            <div class="card-profile text-center">
                                                <strong>Justin Bieber</strong>
                                                <span>Visual Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-pagination swiper-pagination3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="section-box">
            <div class="container">
                <ul class="list-partners">
                    <li class="wow animate__animated animate__fadeInUp hover-up" data-wow-delay="0s">
                        <a href="#">
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/samsung.svg" /></figure>
                        </a>
                    </li>
                    <li class="wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".1s">
                        <a href="#">
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/google.svg" /></figure>
                        </a>
                    </li>
                    <li class="wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".2s">
                        <a href="#">
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/facebook.svg" /></figure>
                        </a>
                    </li>
                    <li class="wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".3s">
                        <a href="#">
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/pinterest.svg" /></figure>
                        </a>
                    </li>
                    <li class="wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".4s">
                        <a href="#">
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/avaya.svg" /></figure>
                        </a>
                    </li>
                    <li class="wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".5s">
                        <a href="#">
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/forbes.svg" /></figure>
                        </a>
                    </li>
                    <li class="wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".1s">
                        <a href="#">
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/avis.svg" /></figure>
                        </a>
                    </li>
                    <li class="wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".2s">
                        <a href="#">
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/nielsen.svg" /></figure>
                        </a>
                    </li>
                    <li class="wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".3s">
                        <a href="#">
                            <figure><img alt="jobhub" src="assets/imgs/jobs/logos/doordash.svg" /></figure>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <section class="section-box mt-50">
            <div class="container">
                <div class="row align-items-end">
                    <div class="col-lg-7 col-md-7">
                        <h2 class="section-title mb-20 wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".1s">
                            From blog</h2>
                        <p class="text-md-lh28 color-black-5 wow animate__animated animate__fadeInUp hover-up" data-wow-delay=".1s">Latest News & Events</p>
                    </div>
                    <div class="col-lg-5 col-md-5 text-lg-end text-start">
                        <a href="blog-grid.html" class="btn btn-border icon-chevron-right wow animate__animated animate__fadeInUp hover-up mt-15" data-wow-delay=".1s">View more</a>
                    </div>
                </div>
                <div class="row mt-70">
                    <div class="box-swiper">
                        <div class="swiper-container swiper-group-3">
                            <div class="swiper-wrapper pb-70 pt-5">
                                <div class="swiper-slide">
                                    <div class="card-grid-3 hover-up">
                                        <div class="text-center card-grid-3-image">
                                            <a href="blog-single.html">
                                                <figure><img alt="jobhub" src="assets/imgs/blog/img-blog-1.png" /></figure>
                                            </a>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-6 col-6 text-start">
                                                    <span>Sarah Harding</span>
                                                </div>
                                                <div class="col-lg-6 col-6 text-end">
                                                    <span>06 September</span>
                                                </div>
                                            </div>
                                            <h5 class="mt-15 heading-md"><a href="blog-single.html">Senior Full Stack, Creator
                                                    Success Full Time</a></h5>
                                            <div class="card-2-bottom mt-50">
                                                <div class="row">
                                                    <div class="col-lg-9 col-8">
                                                        <a href="blog-single.html" class="btn btn-border btn-brand-hover">Keep
                                                            reading</a>
                                                    </div>
                                                    <div class="col-lg-3 text-md-end text-start col-4">
                                                        <a href="#" class="mt-10 display-block mr-20"><img alt="jobhub" src="assets/imgs/theme/icons/bookmark.svg" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="card-grid-3 hover-up">
                                        <div class="text-center card-grid-3-image">
                                            <a href="blog-single.html">
                                                <figure><img alt="jobhub" src="assets/imgs/blog/img-blog-2.png" /></figure>
                                            </a>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-6 col-6 text-start">
                                                    <span>Sarah Harding</span>
                                                </div>
                                                <div class="col-lg-6 col-6 text-end">
                                                    <span>06 September</span>
                                                </div>
                                            </div>
                                            <h5 class="mt-15 heading-md"><a href="blog-single.html">21 Job Tips: How To Make a
                                                    Great Impression</a></h5>
                                            <div class="card-2-bottom mt-50">
                                                <div class="row">
                                                    <div class="col-lg-9 col-8">
                                                        <a href="blog-single.html" class="btn btn-border btn-brand-hover">Keep
                                                            reading</a>
                                                    </div>
                                                    <div class="col-lg-3 text-md-end text-start col-4">
                                                        <a href="#" class="mt-10 display-block mr-20"><img alt="jobhub" src="assets/imgs/theme/icons/bookmark.svg" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="card-grid-3 hover-up">
                                        <div class="text-center card-grid-3-image">
                                            <a href="blog-single.html">
                                                <figure><img alt="jobhub" src="assets/imgs/blog/img-blog-3.png" /></figure>
                                            </a>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-6 col-6 text-start">
                                                    <span>Sarah Harding</span>
                                                </div>
                                                <div class="col-lg-6 col-6 text-end">
                                                    <span>06 September</span>
                                                </div>
                                            </div>
                                            <h5 class="mt-15 heading-md"><a href="blog-single.html">Top SQL Query Interview
                                                    Questions</a></h5>
                                            <div class="card-2-bottom mt-50">
                                                <div class="row">
                                                    <div class="col-lg-9 col-8">
                                                        <a href="blog-single.html" class="btn btn-border btn-brand-hover">Keep
                                                            reading</a>
                                                    </div>
                                                    <div class="col-lg-3 text-md-end text-start col-4">
                                                        <a href="#" class="mt-10 display-block mr-20"><img alt="jobhub" src="assets/imgs/theme/icons/bookmark.svg" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="card-grid-3 hover-up">
                                        <div class="text-center card-grid-3-image">
                                            <a href="blog-single.html">
                                                <figure><img alt="jobhub" src="assets/imgs/blog/img-blog-4.png" /></figure>
                                            </a>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-6 col-6 text-start">
                                                    <span>Sarah Harding</span>
                                                </div>
                                                <div class="col-lg-6 col-6 text-end">
                                                    <span>06 September</span>
                                                </div>
                                            </div>
                                            <h5 class="mt-15 heading-md"><a href="blog-single.html">How To Write an Interview
                                                    Reschedule
                                                    Email</a></h5>
                                            <div class="card-2-bottom mt-50">
                                                <div class="row">
                                                    <div class="col-lg-9 col-8">
                                                        <a href="blog-single.html" class="btn btn-border btn-brand-hover">Keep
                                                            reading</a>
                                                    </div>
                                                    <div class="col-lg-3 text-md-end text-start col-4">
                                                        <a href="#" class="mt-10 display-block mr-20"><img alt="jobhub" src="assets/imgs/theme/icons/bookmark.svg" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="card-grid-3 hover-up">
                                        <div class="text-center card-grid-3-image">
                                            <a href="blog-single.html">
                                                <figure><img alt="jobhub" src="assets/imgs/blog/img-blog-5.png" /></figure>
                                            </a>
                                        </div>
                                        <div class="card-block-info">
                                            <div class="row">
                                                <div class="col-lg-6 col-6 text-start">
                                                    <span>Sarah Harding</span>
                                                </div>
                                                <div class="col-lg-6 col-6 text-end">
                                                    <span>06 September</span>
                                                </div>
                                            </div>
                                            <h5 class="mt-15 heading-md"><a href="blog-single.html">12 Peer Interview Questions
                                                    and Answers</a></h5>
                                            <div class="card-2-bottom mt-50">
                                                <div class="row">
                                                    <div class="col-lg-9 col-8">
                                                        <a href="blog-single.html" class="btn btn-border btn-brand-hover">Keep
                                                            reading</a>
                                                    </div>
                                                    <div class="col-lg-3 text-md-end text-start col-4">
                                                        <a href="#" class="mt-10 display-block mr-20"><img alt="jobhub" src="assets/imgs/theme/icons/bookmark.svg" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-pagination swiper-pagination3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-box mt-50 mb-60">
            <div class="container">
                <div class="box-newsletter">
                    <h5 class="text-md-newsletter">Sign up to get</h5>
                    <h6 class="text-lg-newsletter">the latest jobs</h6>
                    <div class="box-form-newsletter mt-30">
                        <form class="form-newsletter">
                            <input type="text" class="input-newsletter" value="" placeholder="contact.alithemes@gmail.com" />
                            <button class="btn btn-default font-heading icon-send-letter">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div class="box-newsletter-bottom">
                    <div class="newsletter-bottom"></div>
                </div>
            </div>
        </section>
    </main>
       <Footer />
    </>
  )
}

export default Home
