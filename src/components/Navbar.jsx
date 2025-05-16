import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { TbPhoneCall } from "react-icons/tb";
import { FaHeartbeat, FaMicroscope, FaBrain, FaStethoscope, FaBone, FaTint } from 'react-icons/fa';
import { FaUserMd } from 'react-icons/fa';


const navLinks = [
  { label: "About Dr Kunal Sayani", href: "/about-doctor" },
  { label: "About Tvameva Clinic", href: "/about-clinic" },
  {
  label: (
    <div className="group relative inline-block text-left w-full">
      {/* Trigger */}
      <div className="cursor-pointer text-gray-700 rounded hover:bg-gray-100">
        Men/Women
      </div>

      {/* Dropdown */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-[80vw] rounded-lg hidden group-hover:flex z-20  p-4 justify-between">
        
        <div className="absolute left-1/2 transform -translate-x-1/2  w-[80vw] bg-white rounded-lg shadow-[0px_0px_20px_#e6e6e6] hidden group-hover:flex z-20  p-4 justify-between">
          {/* Men */}
        <div className="w-1/2 pr-6 border-r border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Men</h3>
          <ul className="grid grid-cols-1 gap-4">
            <li className="flex border-b border-gray-300  pb-3 items-center gap-2 cursor-pointer hover:text-blue-600">
              <FaHeartbeat className="text-[#1AAEBC]" />
              <span>Hair</span>
            </li>
            <li className="flex border-b border-gray-300 pb-3 items-center gap-2 cursor-pointer hover:text-blue-600">
              <FaBrain className="text-[#1AAEBC]" />
              <span>Skin</span>
            </li>
            <li className="flex border-b border-gray-300 pb-3 items-center gap-2 cursor-pointer hover:text-blue-600">
              <FaMicroscope className="text-[#1AAEBC]" />
              <span>Body</span>
            </li>
            <li className="flex pb-3 items-center gap-2 cursor-pointer hover:text-blue-600">
              <FaTint className="text-[#1AAEBC]" />
              <span>Face</span>
            </li>
          </ul>
        </div>

        {/* Women */}
        <div className="w-1/2 pl-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Women</h3>
          <ul className="grid grid-cols-1 gap-4">
            <li className="flex border-b border-gray-300  pb-3 items-center gap-2 cursor-pointer hover:text-blue-600">
              <FaHeartbeat className="text-[#1AAEBC]" />
              <span>Hair</span>
            </li>
            <li className="flex border-b border-gray-300 pb-3 items-center gap-2 cursor-pointer hover:text-blue-600">
              <FaBrain className="text-[#1AAEBC]" />
              <span>Skin</span>
            </li>
            <li className="flex border-b border-gray-300 pb-3 items-center gap-2 cursor-pointer hover:text-blue-600">
              <FaMicroscope className="text-[#1AAEBC]" />
              <span>Body</span>
            </li>
            <li className="flex pb-3 items-center gap-2 cursor-pointer hover:text-blue-600">
              <FaTint className="text-[#1AAEBC]" />
              <span>Face</span>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  ),
  href: "#",
},

  { label: "Reviews", href: "/reviews" },
  { label: "Gallery", href: "/gallery" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

const genderSections = [
  { label: "Men", href: "/men" },
  { label: "Women", href: "/women" },
];

const secondLevelLinks = {
  Men: ["Hair", "Skin", "Body", "Face"],
  Women: ["Hair", "Skin", "Body", "Face", "Mommy Makeover"],
};

export default function Navbar() {
  const pathname = usePathname();
  const [selectedGender, setSelectedGender] = useState(
    pathname.includes("/men") ? "Men" : "Women"
  );

  const toggleGender = () => {
    setSelectedGender((prev) => (prev === "Men" ? "Women" : "Men"));
  };

  return (
    <header className="w-full bg-white shadow sticky top-0 z-50">
      <div className="max-w-[1200px] w-full mx-auto px-4 py-1 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-black">
          <Image
            src="/components/navbar/logo.png" // ✅ put this image inside /public/homepage/hero/
            alt="Gynecomastia"
            width={75}
            height={75}
          />
        </Link>

        {/* Top Navigation */}
        <nav className="space-x-6 hidden md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Appointment Button */}
        <Link
          href="/book-appointment"
          className="bg-[#1AAEBC] text-white px-4 py-2 rounded-md"
        >
          Book Appointment
        </Link>
        {/* Gender Toggle */}
        {/* <div className="ml-4 hidden md:flex gap-2">
          {genderSections.map((section) => (
            <Link
              key={section.label}
              href={section.href}
              className={`px-3 py-1 rounded-full text-sm font-medium border ${
                selectedGender === section.label ? 'bg-blue-600 text-white border-blue-600' : 'text-gray-700 border-gray-300'
              }`}
              onClick={() => setSelectedGender(section.label)}
            >
              {section.label}
            </Link>
          ))}
        </div> */}
      </div>

      {/* Second Level Navigation with Toggle */}
      {/* <div className="bg-gray-100 border-t">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex space-x-4 overflow-x-auto text-base">
            {secondLevelLinks[selectedGender].map((category) => (
              <Link
                key={category}
                href={`/${selectedGender.toLowerCase()}/${category
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="text-gray-600 hover:text-black whitespace-nowrap"
              >
                {category}
              </Link>
            ))}
          </div>
          <button
            onClick={toggleGender}
            className="ml-4 px-3 py-1 bg-[#1AAEBC] text-white text-sm rounded-md"
          >
            Switch to {selectedGender === "Men" ? "Women" : "Men"}
          </button>
        </div>
      </div> */}
    </header>
  );
}
