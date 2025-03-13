import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Privacypolicy = () => {
  return (
    <>
       <Navbar />
       <main className="main">
        <div className="breacrumb-cover">
            <div className="container">
                <ul className="breadcrumbs">
                    <li><a href="#">Home</a></li>
                    <li>Privacy & Policy</li>
                </ul>
            </div>
        </div>
        <div style={{padding:'100px 0px'}}> 
        <div className="container mx-auto p-6">
      <h3 className="text-3xl font-bold mb-30">Privacy Policy</h3>
      <p className=" mb-4" style={{fontSize:'16px'}}>
        JobHub App is a commercial application developed by JobHubtime Tech Private
        Limited ("JobHub"). This Privacy Policy informs users about how we
        collect, use, and disclose personal information when they use the JobHub
        App and website ("JobHub Platform").
      </p>
      <p className=" mb-4" style={{fontSize:'16px'}}>
        By using the JobHub Platform, you agree to the terms outlined in this
        Privacy Policy along with our Terms of Service. We encourage you to
        periodically review this Privacy Policy to stay updated on any changes.
      </p>

      <h4 className="text-2xl font-semibold mt-6 mb-4">1. Personal Identification Information</h4>
      <p className=" mb-4" style={{fontSize:'16px'}}>
        When you use our services, we collect personal identification
        information to enhance and provide better services. This information
        includes your name, location, gender, profile picture, education, and
        professional details. This information forms your Public Profile,
        accessible via JobHub.co/username.
      </p>
      <p className=" mb-4" style={{fontSize:'16px'}}>
        Your Public Profile may be searchable on the internet and used to
        connect you with job opportunities. Additionally, we may collect
        publicly available personal information from sources such as Truecaller,
        Facebook, LinkedIn, Twitter, and Google.
      </p>

      <h4 className="text-2xl font-semibold mt-6 mb-4">2. Non-Personal Identification Information</h4>
      <p className=" mb-4" style={{fontSize:'16px'}}> 
        We may collect non-personal data whenever you interact with our
        platform. This includes:
      </p>
      <ul className="list-disc list-inside  mb-4">
        <li style={{fontSize:'16px'}}>Device details: Type of mobile phone, operating system, and service providers.</li>
        <li style={{fontSize:'16px'}}>Technical details: IP address, browser type, referral sources, and browsing patterns.</li>
      </ul>

      <h4 className="text-2xl font-semibold mt-6 mb-4">3. Information We Collect</h4>
      <p className=" mb-4" style={{fontSize:'16px'}}>
        To enhance user experience, we collect the following types of data:
      </p>
      <ul className="list-disc list-inside  mb-4" style={{lineHeight:'32px'}}>
        <li style={{fontSize:'16px'}}><strong>Identity Information:</strong> Name, date of birth, gender, username.</li>
        <li style={{fontSize:'16px'}}><strong>Contact Information:</strong> Mobile number, postal address, email, and telephone number.</li>
        <li style={{fontSize:'16px'}}><strong>Professional Information:</strong> Education, work experience, skills, salary, city, area, and resume details.</li>
        <li style={{fontSize:'16px'}}><strong>Feedback & Correspondence:</strong> Survey responses, customer support queries, and feedback.</li>
        <li style={{fontSize:'16px'}}><strong>Usage & Marketing Information:</strong> Interactions with our services, preferences, and engagement with marketing communications.</li>
      </ul>

      <h4 className="text-2xl font-semibold mt-6 mb-4">4. How We Use Your Information</h4>
      <p className=" mb-4" style={{fontSize:'16px'}}> 
        We collect and process user data for the following purposes:
      </p>
      <ul className="list-disc list-inside  mb-4" style={{lineHeight:'32px'}}>
        <li style={{fontSize:'16px'}}>Contacts List: To suggest connections and expand your professional network.</li>
        <li style={{fontSize:'16px'}}>Location Information: To provide location-based job search services.</li>
        <li style={{fontSize:'16px'}}>Storage Access: To allow users to upload profile pictures from their device gallery.</li>
        <li style={{fontSize:'16px'}}>Camera Access: To enable users to capture and upload profile photos.</li>
        <li style={{fontSize:'16px'}}>Microphone Access: To facilitate audio messages within the app.</li>
        <li style={{fontSize:'16px'}}>Call Access: To enable users to contact recruiters via the Call HR feature.</li>
        <li style={{fontSize:'16px'}}>Marketing & Communication: To send job alerts and updates based on user preferences.</li>
      </ul>
      
      <h4 className="text-2xl font-semibold mt-6 mb-4">5. Data Protection & Security</h4>
      <p className=" mb-4" style={{fontSize:'16px'}}>
        We take necessary precautions to protect your personal information from
        unauthorized access, disclosure, or misuse. Our data is securely stored
        on <a href="https://JobHub.co" className="text-blue-500">https://JobHub.co</a> & <a href="https://metrics.JobHub.co" className="text-blue-500">https://metrics.JobHub.co</a>.
      </p>
      <p className=" mb-4" style={{fontSize:'16px'}}>
        However, while we strive for security, no online data transmission is
        100% secure. Users are advised to exercise caution when sharing
        sensitive information.
      </p>

      <h4 className="text-2xl font-semibold mt-6 mb-4">6. Sharing Your Information</h4>
      <p className=" mb-4" style={{fontSize:'16px'}}>
        We do not sell or trade personal information. However, we may share
        data with affiliates, employers, recruiters, legal authorities, and
        third-party service providers as needed.
      </p>

      <h4 className="text-2xl font-semibold mt-6 mb-4">7. Cookies & Log Data</h4>
      <p className=" mb-4" style={{fontSize:'16px'}}>
        Our platform may use cookies and similar tracking technologies to
        improve user experience.
      </p>

      <h4 className="text-2xl font-semibold mt-6 mb-4">8. Contact Information</h4>
      <p className=" mb-4" style={{fontSize:'16px'}}>
        For any questions regarding this Privacy Policy, reach out to:
      </p>
      <p className=" font-semibold" style={{fontSize:'16px',marginBottom:'5px'}}>JobHubtime Tech Private Limited</p>
      <p className="" style={{fontSize:'16px',marginBottom:'5px'}}>3rd Floor, 23, Plot No. 232, 1-Kangra Bhuvan,</p>
      <p className="" style={{fontSize:'16px',marginBottom:'5px'}}>Dr. Annie Besant Road, Worli, Mumbai, Maharashtra, 400030</p>
      <p className="" style={{fontSize:'16px',marginBottom:'5px'}}>Email: <a href="mailto:JobHub-playstore@JobHub.co" className="text-blue-500">JobHub-playstore@JobHub.co</a></p>
    </div>
        </div>
        </main>
       <Footer />
    </>
  )
}

export default Privacypolicy
