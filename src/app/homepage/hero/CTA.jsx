"use client";
import React from "react";
import { FaWhatsapp, FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";

export default function CTA() {
  const shareUrl = encodeURIComponent(
    typeof window !== "undefined" ? window.location.href : ""
  );

  return (
    <div>
      <div className="fixed rounded-tl-lg bg-[#1AAEBC] top-60 right-0 z-50 flex flex-col items-center space-y-1">
        {/* WhatsApp Appointment Button */}
        <a
          href="https://wa.me/919136095925"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] rounded-tl-lg text-white p-3 shadow-md hover:bg-[#1ebe5d] transition duration-200 flex items-center justify-center"
          aria-label="Book appointment via WhatsApp"
        >
          <FaWhatsapp size={22} />
        </a>

        {/* Hover-based Share Button */}
        <div className="relative group">
          <div
            className=" text-white p-3 rounded-full transition duration-200 flex items-center justify-center"
            aria-label="Share this page"
          >
            <IoMdShare size={20} />
          </div>

          {/* Share Options on Hover */}
          <div className="absolute right-0 top-[44px] rounded-bl-lg hidden group-hover:flex flex-col items-center space-y-2 bg-white shadow-md p-3 -z-10">
            
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1877F2] hover:scale-110 transition"
              aria-label="Share on Facebook"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1DA1F2] hover:scale-110 transition"
              aria-label="Share on Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077B5] hover:scale-110 transition"
              aria-label="Share on LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E1306C] hover:scale-110 transition"
              aria-label="Share on Instagram"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
