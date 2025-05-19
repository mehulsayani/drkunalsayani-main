"use client";
import React, { useState } from "react";
import { FaWhatsapp, FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";

export default function CTA() {
  const [showShare, setShowShare] = useState(false);
  const toggleShare = () => setShowShare(!showShare);

  const shareUrl = encodeURIComponent(typeof window !== "undefined" ? window.location.href : "");

  return (
    <div>
      <div className="fixed bg-[#1AAEBC] top-40 right-0 z-50 flex flex-col items-center space-y-1">
        {/* WhatsApp Appointment Button */}
        <a
          href="https://wa.me/919136095925"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-3 shadow-md rounded-full hover:bg-[#1ebe5d] transition duration-200 flex items-center justify-center"
          aria-label="Book appointment via WhatsApp"
        >
          <FaWhatsapp size={20} />
        </a>

        {/* Share Button */}
        <button
          onClick={toggleShare}
          className="bg-[#1AAEBC] text-white p-3 rounded-full hover:bg-[#1597a4] transition duration-200 flex items-center justify-center"
          aria-label="Share this page"
        >
          <IoMdShare size={20} />
        </button>

        {/* Icon-Only Share Options */}
        {showShare && (
          <div className="bg-white w-full shadow-md p-2 flex flex-col items-center space-y-2">
            <a
              href={`https://wa.me/?text=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:scale-110 transition"
              aria-label="Share on WhatsApp"
            >
              <FaWhatsapp size={20} />
            </a>
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
        )}
      </div>
    </div>
  );
}
