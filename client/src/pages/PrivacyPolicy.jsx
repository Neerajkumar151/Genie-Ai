import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-[#0B1120] to-[#1E293B] pt-24 pb-16 px-4 text-white">
        <div className="max-w-4xl mx-auto bg-white text-gray-900 rounded-3xl shadow-xl p-10 md:p-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-6">Privacy Policy</h1>
          <p className="text-lg text-center mb-10">
            Your privacy is important to us. This policy explains what information we collect and how we use it.
          </p>

          {/* Section 1 */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-primary">1. Information We Collect</h2>
            <p className="text-base leading-relaxed">
              We may collect personal information including your name, email address, and usage data when you use GenieAi. This helps us improve our services and provide a personalized experience.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-primary">2. How We Use Your Information</h2>
            <p className="text-base leading-relaxed">
              Your information is used to operate, maintain, and improve our platform, respond to inquiries, and provide tailored AI services. We do not sell or share your data with third parties for advertising.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-primary">3. Cookies & Tracking</h2>
            <p className="text-base leading-relaxed">
              GenieAi may use cookies or similar technologies to enhance user experience, analyze usage, and track user interaction. You can control these through your browser settings.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-primary">4. Data Security</h2>
            <p className="text-base leading-relaxed">
              We implement security measures to protect your data. However, no method of transmission over the internet is 100% secure.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-primary">5. Third-Party Services</h2>
            <p className="text-base leading-relaxed">
              Our platform may integrate with third-party services such as OpenAI, Firebase, or Clerk for authentication. Please refer to their privacy policies for more details.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-primary">6. Your Rights</h2>
            <p className="text-base leading-relaxed">
              You have the right to access, update, or delete your personal data. Contact us at support@genieai.io to request data changes.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-primary">7. Changes to This Policy</h2>
            <p className="text-base leading-relaxed">
              We may update this privacy policy periodically. We encourage users to check this page regularly for any changes.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center text-base mt-10">
            <p>For any questions regarding this policy, contact us at:</p>
            <p className="font-medium">thakurneerajkumar17@gmail.com</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
