import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Description */}
        <div>
          <Link href="/">
            <Image
              src="/images/logo-white.png" // Replace with your white logo
              alt="Logo"
              width={150}
              height={40}
              className="mb-4"
            />
          </Link>
          <p className="text-gray-400 text-sm">
            Tvameva – Personalized aesthetic care with advanced technology & a holistic approach to beauty. Your journey starts here.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/services/hair-transplant" className="hover:text-white">Hair Transplant</Link></li>
            <li><Link href="/services/gynecomastia" className="hover:text-white">Gynecomastia Surgery</Link></li>
            <li><Link href="/services/aesthetic-surgery" className="hover:text-white">Aesthetic Surgery</Link></li>
            <li><Link href="/services/facial-rejuvenation" className="hover:text-white">Facial Rejuvenation</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>📍 123 Aesthetic Ave, Mumbai, India</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ support@tvameva.com</li>
            <li className="flex space-x-3 mt-3">
              <a href="#" className="hover:text-white">🌐</a>
              <a href="#" className="hover:text-white">📘</a>
              <a href="#" className="hover:text-white">📸</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Tvameva. All rights reserved.
      </div>
    </footer>
  );
}
