import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors({});
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.message) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    alert("✅ Message sent successfully!");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-[#e0c3fc] via-[#8ec5fc] to-[#8c4abb] pt-24 pb-10 px-4 text-white">
        <div className="max-w-4xl mx-auto bg-white text-gray-900 rounded-3xl shadow-xl p-10 md:p-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-6">Contact Us</h1>
          <p className="text-lg text-center max-w-2xl mx-auto mb-10">
            Have a question, feedback, or partnership idea? We'd love to hear from you.
          </p>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-opacity-90 transition duration-300 font-semibold"
            >
              Send Message
            </button>

            {submitted && (
              <p className="text-green-600 font-medium text-center">✅ Message sent successfully!</p>
            )}
          </form>

          {/* Contact Info */}
          <div className="mt-12 text-center text-base md:text-lg space-y-4">
            <p><strong>Email:</strong> thakurneerajkumar17@gmail.com</p>
            <p><strong>Phone:</strong> +91 8448275790</p>
            <p><strong>Address:</strong> Maa Bhagwati Homes-3, near Bal Bharti School, Nathuram Colony, Sector-49, Noida</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="https://github.com/Neerajkumar151" target="_blank" className="hover:text-primary font-semibold transition">GitHub</a>
              <a href="https://www.linkedin.com/in/neerajkumar1517/" target="_blank" className="hover:text-primary font-semibold transition">LinkedIn</a>
              <a href="https://x.com/neerajkumar1715" target="_blank" className="hover:text-primary font-semibold transition">Twitter</a>
            </div>
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="mt-16">


  <div className="w-full max-w-4xl mx-auto h-[450px] rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219.02264973127632!2d77.37436295126327!3d28.55887860597294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f76bbea3b9%3A0xbe170bd852d7f8b8!2sNew%20bal%20bharti%20public%20school!5e0!3m2!1sen!2sin!4v1754323702027!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
