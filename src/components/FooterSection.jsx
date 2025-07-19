import React from "react";
import { Link } from "react-router-dom";

export default function FooterSection() {
  return (
    <footer className="bg-white pt-6 pb-6 px-6 mt-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        {/* Logo and columns */}
        <div className="flex flex-col md:flex-row gap-8 w-full">
          {/* Logo */}
          <div className="mb-6 md:mb-0 md:mr-12 flex-shrink-0">
            <Link to="/">
              <img className="home-nav-logo" src="https://ik.imagekit.io/q46s1ahe0/RotateX-Assets/rotatex-site-logo.png?updatedAt=1752602839893" />
            </Link>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
            <div>
              <div className="font-semibold text-blue-600 mb-2 font-text-styling">Company</div>
              <ul className="space-y-1 text-gray-700 text-sm font-text-styling">
                <li><a href="#">About us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="mailto:contact@rotatex.club">contact@rotatex.club</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-blue-600 mb-2 font-text-styling">Products</div>
              <ul className="space-y-1 text-gray-700 text-sm font-text-styling">
                <li><a href="#">CAP</a></li>
                <li><a href="#">Embark</a></li>
                <li><a href="#">Preppa</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-blue-600 mb-2 font-text-styling">For Employers</div>
              <ul className="space-y-1 text-gray-700 text-sm font-text-styling">
                <li><a href="#">Recruit with us</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-blue-600 mb-2 font-text-styling">Pay It Forward</div>
              <ul className="space-y-1 text-gray-700 text-sm font-text-styling">
                <li><a href="#">Be an interviewer</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-gray-200 my-6"></div>
      {/* Bottom row */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-gray-500 text-sm px-2">
        <div className="flex flex-col md:flex-row md:items-center gap-2 font-text-styling">
          <span >© 2025 rotateX</span>
          <span className="hidden md:inline mx-2">|</span>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <span className="hidden md:inline mx-2">|</span>
          <a href="#" className="hover:underline">Terms and Conditions</a>
        </div>
        {/* Social icons */}
        <div className="flex gap-4 justify-center md:justify-end">
          <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-blue-500">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04A4.28 4.28 0 0016.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.1.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6-.7-.02-1.36-.21-1.94-.53v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 012 19.54a12.13 12.13 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.7 8.7 0 0024 4.59a8.5 8.5 0 01-2.54.7z" /></svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-700">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" /></svg>
          </a>
          <a href="#" aria-label="WhatsApp" className="text-gray-400 hover:text-green-500">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.93 11.93 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.25-1.45l-.38-.23-3.69.97.99-3.59-.25-.37A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.47-7.14c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.77-1.68-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.5-.5-.67-.5-.17 0-.37-.02-.57-.02-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.48 1.08 2.91 1.23 3.11.15.2 2.13 3.25 5.18 4.42.72.25 1.28.4 1.72.51.72.18 1.38.15 1.9.09.58-.07 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" /></svg>
          </a>
        </div>
      </div>
    </footer>
  );
} 