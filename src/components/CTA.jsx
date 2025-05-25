"use client";
import React, { useEffect, useState } from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";


export default function CTA() {
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    // This runs only on the client
    setShareUrl(encodeURIComponent(window.location.href));
  }, []);

  return (
    <div>
      <div className="fixed rounded-tl-lg bg-[#0084ff] rounded-bl-lg top-50 right-0 z-50 flex flex-col">
        <a
          href="tel://919136095925"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 rounded-tl-lg text-white p-3 shadow-md hover:bg-gray-700 transition duration-200 flex items-center justify-center"
          aria-label="Book appointment via WhatsApp"
        >
          <FiPhoneCall size={22} />
        </a>
        {/* WhatsApp Appointment Button */}
        <a
          href="https://wa.me/919136095925"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-3 shadow-md hover:bg-[#1ebe5d] transition duration-200 flex items-center justify-center"
          aria-label="Book appointment via WhatsApp"
        >
          <FaWhatsapp size={22} />
        </a>
        <a
          href="mailto:live@contact.com"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-white bg-[#1AAEBC] hover:bg-[#5fc1ca] p-3 shadow-md transition duration-200 flex items-center justify-center"
          aria-label="Book appointment via email"
        >
          <MdOutlineMailOutline size={22} />
        </a>

        {/* Hover-based Share Button */}
        <div className="relative group z-0 ">
          <div
            className=" text-white rounded-lg p-3 flex items-center justify-center"
            aria-label="Share this page"
          >
            <IoMdShare size={20} />
          </div>

          {/* Share Options on Hover */}
          <div className="bg-white  group-hover:shadow-[0px_0px_3px_gray] transition-all duration-500 flex flex-col items-center justify-center gap-2 py-0 overflow-hidden h-0 group-hover:h-30 group-hover:py-2 rounded-bl-lg ">
            {shareUrl && (
              <>
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
              </>
            )}
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
