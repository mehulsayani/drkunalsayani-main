// components/Footer.js
import Image from "next/image";
import {
  FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaPinterest
} from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn, MdAccessTime } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-[#ffffff] px-8 py-10 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and About */}
        <div>
          <Image src="/components/navbar/logo.png" alt="Auro Skin" width={100} height={100} className="w-20 mb-4" />
          <p className="mb-4">
            Auro Skin Clinic is a comprehensive <strong>skin care clinic</strong> in Vile Parle, Mumbai.
          </p>
          {/* <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">
            READ MORE
          </button> */}
        </div>

        {/* About Us */}
        <div>
          <h4 className="font-semibold mb-2">About Us</h4>
          <ul className="space-y-1">
            <li>Auro Skin Clinic</li>
            <li>Dr. Avina</li>
            <li>Our Team</li>
            <li>Social Initiatives</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-2">Services</h4>
          <ul className="space-y-1">
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
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
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
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2"><MdPhone /> +91 23465 45644</li>
            <li className="flex items-center gap-2"><MdEmail /> info@example.in</li>
            <li className="flex items-start gap-2"><MdLocationOn />
              <span> Mumbai</span>
            </li>
            <li className="flex items-center gap-2"><MdAccessTime /> Mon–Sat: 10 AM to 6 PM<br />Wed: 10 AM to 8 PM</li>
          </ul>
          <div className="flex gap-3 mt-4 text-xl text-teal-700">
            <FaInstagram /><FaFacebook /><FaTwitter /><FaLinkedin /><FaYoutube /><FaPinterest />
          </div>
        </div>
      </div>
    </footer>
  );
}
