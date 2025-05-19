import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Dropdown from "./Dropdown";
import { FiPhoneCall } from "react-icons/fi";


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
            src="/components/navbar/logo.png"
            alt="Gynecomastia"
            width={75}
            height={75}
          />
        </Link>

        {/* Top Navigation */}
        <nav className="space-x-6 hidden md:flex">
          <Link href="/about-doctor" className="text-gray-700 hover:text-black">
            About Dr Kunal Sayani
          </Link>
          <Link href="/about-clinic" className="text-gray-700 hover:text-black">
            About Tvameva Clinic
          </Link>
          <div className="inline-block align-middle">
            <Dropdown />
          </div>
          <Link href="/reviews" className="text-gray-700 hover:text-black">
            Reviews
          </Link>
          <Link href="/gallery" className="text-gray-700 hover:text-black">
            Gallery
          </Link>
          <Link href="/pricing" className="text-gray-700 hover:text-black">
            Pricing
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-black">
            Blog
          </Link>
        </nav>
        <div className="flex gap-4">
          <Link
          href="/call"
          className="text-[#1AAEBC] border border-[#1AAEBC] px-4 py-2 rounded-md flex justify-center items-center"
        >
          <FiPhoneCall/>
        </Link>
        {/* Appointment Button */}
        <Link
          href="/book-appointment"
          className="bg-[#1AAEBC] text-white px-4 py-2 rounded-md"
        >
          Book Appointment
        </Link>
        </div>
      </div>
    </header>
  );
}
