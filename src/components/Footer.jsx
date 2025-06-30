// components/Footer.js
import Image from "next/image";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdPhone, MdEmail, MdLocationOn, MdAccessTime } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#3E3E43] text-white py-12 max-lg:pb-24 px-4 text-sm">
      <div className="max-w-[1100px] relative right-14 max-lg:right-0 mx-auto grid gap-10 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {/* Logo & Tagline */}
        <div className="space-y-4 col-span-1">
          <Image
            src="/images/components/navbar/logo_footer.png"
            alt="Auro Skin"
            width={100}
            height={100}
            className="object-contain"
          />
          <p className="text-white">
            Transform How You Feel <br /> Not Just How You Look
          </p>
        </div>

        {/* About Us */}
        <div>
          <h4 className="text-base font-semibold max-lg:font-bold mb-3">
            About Us
          </h4>
          <ul className="space-y-2 ">
            <li>
              <a href="/about-dr-kunal-sayani" className="hover:text-white">
                About Dr. Kunal Sayani
              </a>
            </li>
            <li>
              <a href="/about-clinic" className="hover:text-white">
                About Tvameva Clinic
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-base font-semibold max-lg:font-bold mb-3">
            Services
          </h4>
          <ul className="space-y-2 ">
            <li>
              <a
                href="/services/body/tummy-tuck-abdominoplasty"
                className="hover:text-white"
              >
                Tummy Tuck Abdominoplasty
              </a>
            </li>
            <li>
              <a
                href="/services/breast/breast-augmentation"
                className="hover:text-white"
              >
                Breast Augmentation
              </a>
            </li>
            <li>
              <a
                href="/services/hair/hair-transplant"
                className="hover:text-white"
              >
                Hair Transplant
              </a>
            </li>
            <li>
              <a
                href="/services/body/buttock-augmentation-bbl"
                className="hover:text-white"
              >
                Buttock Augmentation
              </a>
            </li>
            <li>
              <a
                href="/services/non-surgical/botox-wrinkles-anti-ageing"
                className="hover:text-white"
              >
                Botox
              </a>
            </li>
            <li>
              <a href="/services/body/liposuction" className="hover:text-white">
                Liposuction
              </a>
            </li>
            <li>
              <a
                href="/services/mommy-makeover/mommy-makeover-package-custom-combination-of-procedures"
                className="hover:text-white"
              >
                Mommy Makeover
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-base font-semibold max-lg:font-bold mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 ">
            <li>
              <a href="/reviews" className="hover:text-white">
                Patient Reviews
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="/book-appointment" className="hover:text-white">
                Appointments
              </a>
            </li>

            <li>
              <a href="/privacy-and-policy" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            {/* <li>
              <a href="/terms" className="hover:text-white">
                Terms and Condition
              </a>
            </li> */}
          </ul>
        </div>

        {/* Contact Us */}
        <div className="w-66 max-lg:w-72 max-xl:w-52">
          <h4 className="text-base font-semibold max-lg:font-bold mb-3">
            Contact Us
          </h4>
          <ul className="space-y-3 ">
            <li className="flex items-start gap-2">
              <MdPhone className="text-teal-500" />
              <a
                href="tel:+919967267567"
                className="hover:text-white hover:underline"
              >
                +91-9967267567,
              </a>
              <a
                href="tel:+9102246056767"
                className="hover:text-white hover:underline"
              >
                02246056767
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MdEmail className="text-teal-500" />
              <a
                href="mailto:drkunalsayani.professional@gmail.com"
                className="hover:text-white break-all hover:underline"
              >
                drkunalsayani.professional@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <FaLocationDot className="text-teal-500 w-10 pt-1" />
              <span className="leading-snug">
                <a href="https://www.google.com/maps/dir//TVAMEVA+AESTHETICS+-+501%2F502+Sapphire+Plaza+Dadabhai+road,+Swami+Vivekananda+Rd,+Vile+Parle+West,+Mumbai,+Maharashtra+400056/@19.1059122,72.7589144,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3be7b70ae5b76aef:0xbc36ee7fd47dd276!2m2!1d72.8413161!2d19.1059305?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D">
                  TVAMEVA AESTHETICS - 501/502 Sapphire Plaza, Dadabhai Road,
                  Swami Vivekananda Rd, Vile Parle West, Mumbai, Maharashtra
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <MdAccessTime className="text-teal-500 mt-1" />
              <span>
                Mon–Sat: 10 AM – 8 PM <br />
                Sunday: Closed
              </span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5 text-xl text-teal-500">
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaFacebook />
            </a>

            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://youtube.com"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="w-full my-8 border-gray-600" />

      {/* Copyright */}
      <div className="text-center text-gray-300 text-base max-lg:text-xs px-4">
        © {new Date().getFullYear()}{" "}
        <a
          href="https://www.drkunalsayani.com/"
          className="text-white hover:underline"
        >
          drkunalsayani
        </a>
        . All rights reserved. Designed & Developed by{" "}
        <a
          href="https://pracharkarsolutions.com"
          className="text-white hover:underline"
        >
          pracharkarsolutions
        </a>
        {/* Disclaimer Section */}
        <section className="max-w-5xl text-base max-lg:text-xs mx-auto pt-5 text-white">
          <p className="mb-2 max-md:mb-8">
            <span className="text-yellow-400"> Disclaimer:</span> The
            information in the Web Site is provided for informational purposes
            only and is not meant to substitute the advice provided by your
            doctor or other health care professional. You should not use the
            information available on or through the Web Site for diagnosing or
            treating a health problem or disease, or prescribing any medication.
            All images used on this website are for illustrative purposes only,
            actual results and process may vary.
          </p>
        </section>
      </div>
    </footer>
  );
}
