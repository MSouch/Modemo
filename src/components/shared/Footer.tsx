import { Link } from "react-router-dom";
import ModemoLogo from "../../Assets/Modemo.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src={ModemoLogo} 
                alt="MODEMO Logo" 
                className="h-8 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-4">
              The workforce mobilization platform purpose-built for industrial events.
            </p>
            <p className="text-gray-400 text-sm">
              © 2025 MODEMO®. All rights reserved.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-bold mb-4">Explore</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/solutions" className="hover:text-white transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/key-benefits" className="hover:text-white transition-colors">
                  Key Benefits
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">
                  Inquire
                </Link>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-bold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/how-it-works" className="hover:text-white transition-colors">
                  GatePass
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-white transition-colors">
                  CrewSpec
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-white transition-colors">
                  RTW
                </Link>
              </li>
              <li>
                <Link to="/key-benefits" className="hover:text-white transition-colors">
                  ExitList
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="mailto:atovar@ap-vantage.com,jcrager@ap-vantage.com?subject=MODEMO Inquiry" className="hover:text-white transition-colors">
                  Email Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
          <div className="mt-4 md:mt-0 text-gray-400 text-sm">
            Mobilization & Demobilization platform for industrial events
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
