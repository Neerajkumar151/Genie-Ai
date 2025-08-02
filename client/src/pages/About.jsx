import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-[#0B1120] to-[#1E293B] pt-24 pb-16 px-4 text-gray-100">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10 md:p-16 text-gray-900">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-primary">About GenieAi</h1>
          <p className="mb-6 text-lg leading-relaxed text-center max-w-3xl mx-auto">
            GenieAi is your AI-powered digital assistant that helps automate repetitive tasks, spark creativity, and elevate productivity — all in one smart platform.
          </p>

          {/* Vision Section */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">🌟 Our Vision</h2>
            <p className="text-lg leading-relaxed">
              We envision a future where students, developers, and creators can harness the power of AI to accelerate their work, learn faster, and produce impactful results with less effort.
            </p>
          </div>

          {/* Features */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">🧩 What GenieAi Offers</h2>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>AI Article & Blog Generator</li>
              <li>Background/Object Remover for images</li>
              <li>Resume Analyzer & Improvement Tips</li>
              <li>Instant Blog Title Suggestions</li>
              <li>AI Chat and Community</li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">💻 Built With</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-base">
              <span>⚛️ React + Vite</span>
              <span>🎨 Tailwind CSS</span>
              <span>🔐 Clerk Authentication</span>
              <span>🧠 OpenAI APIs</span>
              <span>🌐 Neon (Backend)</span>
              <span>☁️ SaaS-ready architecture</span>
            </div>
          </div>

          {/* Creator Info */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">👨‍💻 About the Creator</h2>
            <p className="text-lg leading-relaxed">
              This project is built by <span className="font-bold text-primary">Neeraj Kumar</span>, a B.Tech final-year student from GL Bajaj Institute of Technology and Management. It showcases full-stack development skills with AI integration, cloud deployment, and modern UI/UX practices.
            </p>
          </div>

          {/* Roadmap */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">🛣️ Roadmap</h2>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>🔄 Real-time chat & collaboration</li>
              <li>📈 Personalized dashboards</li>
              <li>📱 Mobile app integration</li>
              <li>🎓 AI tutorials & learning tools</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
