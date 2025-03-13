import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const TermsandCondition = () => {
  return (
    <>
       <Navbar />
       <main className="main">
        <div className="breacrumb-cover">
            <div className="container">
                <ul className="breadcrumbs">
                    <li><a href="#">Home</a></li>
                    <li>Terms & Condition</li>
                </ul>
            </div>
        </div>
        <div style={{padding:'100px 0px'}}>
        <div className="container max-w-4xl mx-auto p-6 text-lg text-gray-800">
      <h3 className="text-3xl font-bold mb-40">Terms and Conditions</h3>
      
      <h5 className="text-2xl font-semibold mt-5" style={{marginBottom:'22px'}}>1. Usage of JobHub</h5>
      <p className="mt-2" style={{fontSize:'16px'}}>
        The JobHub platform, including mobile applications and web services, is intended to connect users with job opportunities and professional networks. By accessing the platform, users agree to abide by all applicable laws and regulations. JobHub reserves the right to modify its Terms of Service at any time without prior notice. Users are responsible for reviewing these terms periodically to stay updated. Misuse of the platform, including but not limited to spamming, providing false information, or engaging in fraudulent activities, may result in suspension or termination of accounts. 
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li style={{fontSize:'16px'}}>Users must ensure all information provided is accurate and truthful.</li>
        <li style={{fontSize:'16px'}}>Unauthorized access or misuse of JobHub’s services is strictly prohibited.</li>
        <li style={{fontSize:'16px'}}>Violation of these terms may lead to legal actions or permanent suspension.</li>
      </ul>
      
      <h5 className="text-2xl font-semibold mt-50" style={{marginBottom:'22px'}}>2. Participation</h5>
      <p className="mt-2" style={{fontSize:'16px'}}>
        Users may participate in various activities, including job applications, networking, and skill-building.
        It is the user's responsibility to ensure that interactions are professional and respectful. Any form of
        spam, harassment, or abuse will lead to immediate account suspension or permanent removal. JobHub reserves
        the right to moderate or remove any content deemed inappropriate.
      </p>

      <h5 className="text-2xl font-semibold mt-50" style={{marginBottom:'22px'}}>3. Intellectual Property</h5>
      <p className="mt-2" style={{fontSize:'16px'}}>
        All content, trademarks, logos, and materials displayed on the JobHub platform are the intellectual property
        of JobHubtime Tech Private Limited. Users are strictly prohibited from reproducing, distributing, modifying,
        or using any content without prior written consent. Violation of intellectual property rights may result in
        legal action and account termination.
      </p>

      <h5 className="text-2xl font-semibold mt-50" style={{marginBottom:'22px'}}>4. Third-Party Sites, Services, and Products</h5>
      <p className="mt-2" style={{fontSize:'16px'}}>
        JobHub may contain links to third-party websites, applications, or services. We do not endorse or assume
        responsibility for any content, privacy policies, or practices of such third parties. Users are advised
        to review the terms and conditions of external platforms before engaging with them.
      </p>

      <h5 className="text-2xl font-semibold mt-50" style={{marginBottom:'22px'}}>5. Privacy Policy</h5>
      <p className="mt-2" style={{fontSize:'16px'}}>
        JobHub values user privacy and ensures that data is collected, stored, and processed as per our Privacy Policy.
        By using the platform, users consent to data collection practices, which may include storing cookies,
        analytics, and location-based services to enhance user experience.
      </p>

      <h5 className="text-2xl font-semibold mt-50" style={{marginBottom:'22px'}}>6. User Conduct</h5>
      <p className="mt-2" style={{fontSize:'16px'}}>
        Users must maintain a respectful and professional demeanor while engaging with others on the platform.
        Hate speech, threats, fraud, or any form of unethical conduct will not be tolerated. Any reports of
        misconduct may result in account suspension, content removal, or legal action.
      </p>

      <h5 className="text-2xl font-semibold mt-50" style={{marginBottom:'22px'}}>7. Eligibility</h5>
      <p className="mt-2" style={{fontSize:'16px'}}>
        Users must be at least 18 years old or have parental consent to use the JobHub platform. Employers and
        recruiters must comply with all relevant employment laws when posting job listings. Any misrepresentation
        or falsification of identity will result in account termination.
      </p>

      <h5 className="text-2xl font-semibold mt-50" style={{marginBottom:'22px'}}>8. Dispute and Dispute Resolution</h5>
      <p className="mt-2" style={{fontSize:'16px'}}>
        Any disputes arising from the use of the JobHub platform shall be resolved through arbitration or legal
        proceedings as per the governing laws of the jurisdiction in which JobHub operates. Users are encouraged
        to attempt amicable resolution before pursuing legal action.
      </p>

      <h5 className="text-2xl font-semibold mt-50" style={{marginBottom:'22px'}}>9. Release and Limitations of Liability</h5>
      <p className="mt-2" style={{fontSize:'16px'}}>
        JobHub shall not be held liable for any direct, indirect, incidental, or consequential damages resulting
        from platform use. Users acknowledge that they engage with the platform at their own risk. JobHub does
        not guarantee job placements, financial gains, or uninterrupted service.
      </p>

      <h5 className="text-2xl font-semibold mt-50" style={{marginBottom:'22px'}}>10. Disclaimers</h5>
      <p className="mt-2" style={{fontSize:'16px'}}>
        The JobHub platform is provided on an "as-is" basis without any express or implied warranties. JobHub does
        not warrant the accuracy, reliability, or completeness of any information provided by users or third parties.
      </p>

      <h5 className="text-2xl font-semibold mt-50" style={{marginBottom:'22px'}}>11. Grievance Redressal Mechanism</h5>
      <p className="mt-2" style={{fontSize:'16px'}}>
        Users who encounter issues or have grievances may contact JobHub’s support team for assistance. For serious
        complaints, users can escalate their concerns through our formal grievance redressal system. JobHub is
        committed to ensuring fair and timely resolution of disputes.
      </p>
    
    </div>
    </div>
        </main>
       <Footer />
    </>
  )
}

export default TermsandCondition
