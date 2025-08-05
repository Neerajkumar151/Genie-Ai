import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-[#e0c3fc] via-[#8ec5fc] to-[#c2e9fb] pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto bg-[#FDFDFE] backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl p-8 md:p-16 text-gray-600">
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-slate-800">
            About <span className="text-purple-500">GenieAi</span> ✨
          </h1>

          {/* Introduction */}
          <p className="text-lg md:text-xl text-center mb-12 leading-relaxed max-w-3xl mx-auto">
            GenieAi is an intelligent AI productivity suite designed to enhance creativity, automate repetitive tasks, and streamline professional workflows using state-of-the-art technologies.
          </p>

          {/* Mission */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-purple-500">🚀 Our Mission</h2>
            <p className="text-lg leading-relaxed">
              To empower creators, students, and professionals with intuitive AI tools that simplify work and amplify output — blending simplicity, speed, and sophistication.
            </p>
          </section>

          {/* Core Values */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-purple-500">💡 Core Values</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li><strong>Innovation:</strong> We stay ahead by integrating the latest AI advancements.</li>
              <li><strong>User-centric Design:</strong> Built with ease-of-use and accessibility in mind.</li>
              <li><strong>Performance:</strong> Fast, secure, and reliable cloud-based solutions.</li>
              <li><strong>Transparency:</strong> Openly communicate how GenieAi works and evolves.</li>
            </ul>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-purple-500">🧩 Key Features</h2>
            <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside text-lg">
              <li>AI-powered Blog & Content Generator</li>
              <li>One-click Background/Object Remover for Images</li>
              <li>Smart Resume Analysis with ATS optimization tips</li>
              <li>Instant Blog Title/Outline Suggestions</li>
              <li>AI Chat with Memory and Community Learning</li>
              <li>Integrated Productivity Dashboards</li>
            </ul>
          </section>

          {/* Tech Stack */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-purple-500">🛠️ Technologies Used</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-base text-gray-600">
              <span className="bg-white/10 border border-white/20 px-3 py-2 rounded-lg">⚛️ React + Vite</span>
              <span className="bg-white/10 border border-white/20 px-3 py-2 rounded-lg">🎨 Tailwind CSS</span>
              <span className="bg-white/10 border border-white/20 px-3 py-2 rounded-lg">🔐 Clerk Auth</span>
              <span className="bg-white/10 border border-white/20 px-3 py-2 rounded-lg">🧠 OpenAI APIs</span>
              <span className="bg-white/10 border border-white/20 px-3 py-2 rounded-lg">🌐 Neon Postgres DB</span>
              <span className="bg-white/10 border border-white/20 px-3 py-2 rounded-lg">☁️ SaaS Cloud Architecture</span>
            </div>
          </section>

          {/* Team / Creator */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-purple-500">👨‍💻 About the Creator</h2>
            <p className="text-lg leading-relaxed">
              <strong className="text-purple-600">Neeraj Kumar</strong> is a B.Tech Final Year student at GL Bajaj Institute of Technology and Management. With a passion for AI and full-stack development, he created GenieAi to solve real-world problems with elegant, tech-powered solutions.
            </p>
          </section>

          {/* Roadmap / Future */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-purple-500">🛣️ Roadmap & Future Plans</h2>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>🧠 Conversational AI with Memory & Context</li>
              <li>📈 Personalized AI Dashboards & Analytics</li>
              <li>📱 GenieAi Native Mobile App (React Native)</li>
              <li>🎓 Integrated Learning Hub (Tech + AI)</li>
              <li>🌍 Multilingual Support & Accessibility Enhancements</li>
            </ul>
          </section>

          {/* Community */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-purple-500">🌐 Join Our Community</h2>
            <p className="text-lg leading-relaxed">
              GenieAi is growing fast! Whether you're a developer, designer, marketer, or student — we welcome your feedback and contributions. Help shape the future of GenieAi!
            </p>
          </section>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
