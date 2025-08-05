import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-[#e0c3fc] via-[#8ec5fc] to-[#8c4abb] pt-24 pb-16 px-4 text-white">
        <div className="max-w-4xl mx-auto bg-white text-gray-900 rounded-3xl shadow-xl p-10 md:p-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-6">Privacy Policy</h1>
          <p className="text-lg text-center mb-10">
            This Privacy Policy describes how GenieAi ("we", "us", or "our") collects, uses, and protects your personal data when you access our platform.
          </p>

          {/* Section 1 */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-primary">1. Information We Collect</h2>
            <ul className="list-disc ml-6 space-y-2 text-base leading-relaxed">
              <li><strong>Personal Information:</strong> Name, email, and account details provided during sign-up or login.</li>
              <li><strong>Usage Data:</strong> Pages visited, actions taken, preferences selected, etc.</li>
              <li><strong>Device & Log Info:</strong> IP address, browser type, operating system, and timestamps.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-primary">2. How We Use Your Information</h2>
            <ol className="list-decimal ml-6 space-y-2 text-base leading-relaxed">
              <li>To provide, personalize, and improve our services.</li>
              <li>To communicate updates, promotions, or important information.</li>
              <li>To ensure security and prevent fraud or misuse.</li>
              <li>To comply with legal obligations or resolve disputes.</li>
            </ol>
          </div>

          {/* Section 3 */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-primary">3. Cookies & Tracking Technologies</h2>
            <p className="text-base leading-relaxed mb-2">
              We use cookies and similar tools to enhance your experience. These help us:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-base leading-relaxed">
              <li>Understand how users interact with our platform.</li>
              <li>Remember your preferences and login status.</li>
              <li>Improve performance and personalize content.</li>
            </ul>
            <p className="mt-2 text-base">
              You can manage cookie settings in your browser.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-primary">4. Data Security</h2>
            <p className="text-base leading-relaxed">
              We take data protection seriously and implement technical and administrative safeguards to secure your data. While no method is 100% secure, we continually improve our systems to protect your privacy.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-primary">5. Third-Party Services</h2>
            <p className="text-base leading-relaxed mb-2">
              GenieAi uses trusted services to provide core functionality:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-base leading-relaxed">
              <li><strong>Clerk:</strong> For secure authentication and user management.</li>
              <li><strong>Firebase:</strong> For real-time database and cloud storage.</li>
              <li><strong>OpenAI API:</strong> For AI-generated content and interaction.</li>
            </ul>
            <p className="mt-2">
              Please review their respective privacy policies for more details.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-primary">6. Your Rights</h2>
            <ul className="list-disc ml-6 space-y-2 text-base leading-relaxed">
              <li><strong>Access:</strong> Request to view the data we hold about you.</li>
              <li><strong>Correction:</strong> Update or fix incorrect personal information.</li>
              <li><strong>Deletion:</strong> Ask us to delete your data, subject to legal limitations.</li>
              <li><strong>Consent Withdrawal:</strong> Opt-out of data usage where applicable.</li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-primary">7. Policy Updates</h2>
            <p className="text-base leading-relaxed">
              We may revise this Privacy Policy from time to time. The latest version will always be posted on this page with a "last updated" date. We encourage users to review it periodically.
            </p>
          </div>

          {/* Section 8 */}
          <div className="text-center text-base mt-10">
            <p>For questions, concerns, or requests, contact us:</p>
            <p className="font-medium">📧 thakurneerajkumar17@gmail.com</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
