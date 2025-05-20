// components/Footer.js
import Image from "next/image";
import {
  FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaPinterest,
} from "react-icons/fa";
import {
  MdPhone, MdEmail, MdLocationOn, MdAccessTime,
} from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-white px-6 py-8 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo & About */}
        <div className="space-y-4">
          <Image
            src="/components/navbar/logo.png"
            alt="Auro Skin"
            width={100}
            height={100}
            className="w-20"
          />
          <p>
            Dr. Kunal Sayani is a Plastic & Aesthetic Surgeon in Andheri, Mumbai
            with over 7 years of experience in the field.
          </p>
        </div>

        {/* About Us */}
        <div>
          <h4 className="text-base font-semibold mb-3">About Us</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Skin Clinic</li>
            <li>Dr. Kunal</li>
            <li>Our Team</li>
            <li>Social Initiatives</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-base font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Skin Treatment</li>
            <li>Hair Treatment</li>
            <li>Nail Treatment</li>
            <li>Diagnostics</li>
            <li>Dermatosurgery</li>
            <li>Laser Treatments</li>
            <li>Aesthetics</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-base font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Patient Reviews</li>
            <li>Blogs</li>
            <li>Appointments</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-base font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <MdPhone className="text-teal-500" />
              +91 23465 45644
            </li>
            <li className="flex items-start gap-2">
              <MdEmail className="text-teal-500" />
              info@example.in
            </li>
            <li className="flex items-start gap-2">
              <MdLocationOn className="text-teal-500" />
              Mumbai
            </li>
            <li className="flex items-start gap-2">
              <MdAccessTime className="text-teal-500" />
              <span>
                Mon–Sat: 10 AM – 6 PM <br />
                Wed: 10 AM – 8 PM
              </span>
            </li>
          </ul>

          <div className="flex gap-4 mt-5 text-xl text-teal-500">
            <a href="#" aria-label="Instagram" className="hover:text-white"><FaInstagram /></a>
            <a href="#" aria-label="Facebook" className="hover:text-white"><FaFacebook /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white"><FaLinkedin /></a>
            <a href="#" aria-label="YouTube" className="hover:text-white"><FaYoutube /></a>
            <a href="#" aria-label="Pinterest" className="hover:text-white"><FaPinterest /></a>
          </div>
        </div>
      </div>


<hr className="my-8 border-gray-700" />
<div className="text-center text-gray-400 text-xs">
  © {new Date().getFullYear()} drkunalsayani. All rights reserved.
</div>

    </footer>
  );
}
