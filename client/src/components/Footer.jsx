import { assets } from "../assets/assets";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleComingSoon = () => {
    alert("🚀 Functionality Coming Soon...");
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert("✅ Subscribed Successfully!");
      setEmail(""); // Clear input after submission
    } else {
      alert("Please enter a valid email.");
    }
  };

  return (
    <footer className="bg-black px-6 pt-8 md:px-16 lg:px-36 w-full text-gray-300">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
        <div className="md:max-w-96">
          <img
            alt="Logo"
            className="h-11 cursor-pointer"
            src={assets.logo}
            onClick={() => navigate('/')}
          />
          <p className="mt-6 text-sm">
            GenieAi — Your AI companion to automate tasks, generate insights, and build faster.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/googlePlayBtnBlack.svg"
              alt="google play"
              className="h-10 w-auto border border-white rounded cursor-pointer"
              onClick={handleComingSoon}
            />
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/appleStoreBtnBlack.svg"
              alt="app store"
              className="h-10 w-auto border border-white rounded cursor-pointer"
              onClick={handleComingSoon}
            />
          </div>
        </div>

        <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
          <div>
            <h2 className="font-semibold mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li className="cursor-pointer" onClick={() => navigate('/')}>Home</li>
              <li>
                <Link to="/about-us" className="hover:underline text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline text-gray-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:underline text-gray-300">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+91 8448275790</p>

              <form
                onSubmit={handleSubscribe}
                className="flex items-center border gap-2 bg-white border-gray-500/30 h-12 max-w-md w-full rounded-full overflow-hidden"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-full pl-6 outline-none text-sm bg-transparent placeholder-gray-500 text-black"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-indigo-500 active:scale-95 transition w-56 h-10 rounded-full text-sm text-white cursor-pointer mr-1"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <p className="pt-4 text-center text-sm pb-5">
        © {new Date().getFullYear()} <a href="#">GenieAi</a>. All Rights Reserved by <span className="text-primary text-base font-bold">Neeraj Kumar</span>.
      </p>
    </footer>
  );
};

export default Footer;
