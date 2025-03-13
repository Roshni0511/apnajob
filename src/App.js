import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Employer from "./Pages/Employer";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import FAQS from "./Pages/FAQS";
import PricingPlan from "./Pages/PricingPlan";
import OurServices from "./Pages/OurServices";
import Jobs from "./Pages/Jobs";
import Jobdetails from "./Pages/Jobdetails";
import Blog from "./Pages/Blog";
import Blogdetails from "./Pages/Blogdetails";
import Candidate from "./Pages/Candidate";
import Candidatedetails from "./Pages/Candidatedetails";
import Employerdetails from "./Pages/Employerdetails";
import Privacypolicy from "./Pages/Privacypolicy";
import TermsandCondition from "./Pages/TermsandCondition";
import Demo from "./Pages/Demo";


function App() {
  return (
    <>
  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Employer" element={<Employer/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/FAQS" element={<FAQS/>}/>
        <Route path="/PricingPlan" element={<PricingPlan />}/>
        <Route path="/OurServices" element={<OurServices />}/>
        <Route path="/Jobs" element={<Jobs />}/>
        <Route path="/Jobdetails" element={<Jobdetails />}/>
        <Route path="/Blog" element={<Blog />}/>
        <Route path="/Blogdetails" element={<Blogdetails />}/>
        <Route path="/Candidate" element={<Candidate />}/>
        <Route path="/Candidatedetails" element={<Candidatedetails />}/>
        <Route path="/Employerdetails" element={<Employerdetails />}/>
        <Route path="/Privacypolicy" element={<Privacypolicy />}/>
        <Route path="/TermsandCondition" element={<TermsandCondition />}/>
        <Route path="/Demo" element={<Demo />}/>

      

       














      </Routes>
    </>
  );
}

export default App;
