// components/Footer.js
import Image from "next/image";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn, MdAccessTime } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] flex flex-col justify-center items-center text-white py-12 text-sm">
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo & Tagline */}
        <div className="space-y-4">
          <Image
            src="/images/components/navbar/logo_footer.png"
            alt="Auro Skin"
            width={100}
            height={100}
            className=""
          />
          <p className="text-gray-400">
            Transform How You Feel — Not Just How You Look
          </p>
        </div>

        {/* About Us */}
        <div>
          <h4 className="text-base font-semibold mb-3">About Us</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/about/clinic" className="hover:text-white">
                Skin Clinic
              </a>
            </li>
            <li>
              <a href="/about/dr-kunal" className="hover:text-white">
                Dr. Kunal
              </a>
            </li>
            <li>
              <a href="/about/team" className="hover:text-white">
                Our Team
              </a>
            </li>
            <li>
              <a href="/about/initiatives" className="hover:text-white">
                Social Initiatives
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-base font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/services/skin" className="hover:text-white">
                Skin Treatment
              </a>
            </li>
            <li>
              <a href="/services/hair" className="hover:text-white">
                Hair Treatment
              </a>
            </li>
            <li>
              <a href="/services/nail" className="hover:text-white">
                Nail Treatment
              </a>
            </li>
            <li>
              <a href="/services/diagnostics" className="hover:text-white">
                Diagnostics
              </a>
            </li>
            <li>
              <a href="/services/dermatosurgery" className="hover:text-white">
                Dermatosurgery
              </a>
            </li>
            <li>
              <a href="/services/laser" className="hover:text-white">
                Laser Treatments
              </a>
            </li>
            <li>
              <a href="/services/aesthetics" className="hover:text-white">
                Aesthetics
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-base font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/reviews" className="hover:text-white">
                Patient Reviews
              </a>
            </li>
            <li>
              <a href="/blogs" className="hover:text-white">
                Blogs
              </a>
            </li>
            <li>
              <a href="/appointments" className="hover:text-white">
                Appointments
              </a>
            </li>
            <li>
              <a href="/faqs" className="hover:text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-white">
                Terms of Use
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-base font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <MdPhone className="text-teal-500" />
              <a href="tel:+9108048034415" className="hover:text-white">
                +91 08048034415
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MdEmail className="text-teal-500" />
              <a
                href="mailto:drkunalsayani.professional@gmail.com"
                className="hover:text-white break-words"
              >
                drkunalsayani.professional@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MdLocationOn className="text-teal-500" />
              <a href="" className="text-sm leading-snug">
                TVAMEVA AESTHETICS - 501/502 Sapphire Plaza, Dadabhai Road,
                Swami Vivekananda Rd, Vile Parle West, Mumbai, Maharashtra
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MdAccessTime className="text-teal-500" />
              <span>
                Mon–Sat: 11 AM – 8 PM <br />
                Sunday: Closed
              </span>
            </li>
          </ul>

          {/* Social Media Links */}
          <div className="flex gap-4 mt-5 text-xl text-teal-500">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-white"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <hr className="w-full my-8 border-gray-200 bg-white"/>
      <div className="text-center text-gray-300 text-sm">
        Copyright © {new Date().getFullYear()}{" "}
        <a href="https://www.drkunalsayani.com/" className="text-white">
          drkunalsayani
        </a>
        . All Rights Reserved. Design and developed by{" "}
        <a href="https://pracharkarsolutions.com" className="text-white">
          pracharkarsolutions
        </a>
      </div>
    </footer>
  );
}
