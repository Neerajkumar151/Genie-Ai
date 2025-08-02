import { assets } from "../assets/assets";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleComingSoon = () => {
    alert("🚀 Feature Coming Soon...");
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
              onClick={handleComingSoon}
              className="h-10 w-auto border border-white rounded cursor-pointer"
            />
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/appleStoreBtnBlack.svg"
              alt="app store"
              onClick={handleComingSoon}
              className="h-10 w-auto border border-white rounded cursor-pointer"
            />
          </div>
        </div>

        <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
          <div>
            <h2 className="font-semibold mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li className="cursor-pointer" onClick={() => navigate('/')}>Home</li>
              <li>
                <Link to="/ai/about-us" className="hover:underline text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/ai/contact" className="hover:underline text-gray-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/ai/privacy-policy" className="hover:underline text-gray-300">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+91 8448275790</p>
              <a
                href="mailto:thakurneerajkumar17@gmail.com"
                className="text-blue-400 hover:underline"
              >
                thakurneerajkumar17@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className="pt-4 text-center text-sm pb-5">
        © {new Date().getFullYear()} <a href="#">GenieAi</a>. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
