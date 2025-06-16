// components/ConsultationSection.jsx
import Image from "next/image";

export default function ConsultationSection() {
  const submenus = [
  {
    title: "Hair",
    items: [
      "Hair Transplant",
      "Hair Restoration PRP GFC Exosomes",
      "Nano fat injection (SVC) for Hair Growth",
    ],
  },
  {
    title: "Face",
    items: [
      "Rhinoplasty (Nose job)",
      "Eyelid Surgery (Blepharoplasty)",
      "Prominent Ear Surgery (Otoplasty)",
      "Facelift",
      "Thread Lift Treatment",
      "Chin Augmentation",
      "Jawline Contouring",
      "Lip Lift (Lip job)",
      "Lipoma-Cysts-Scars",
    ],
  },
  {
    title: "Breast",
    items: [
      "Breast Augmentation",
      "Breast Lift (mastopexy) with Shaping",
      "Breast Reduction & Axillary Breasts Excision",
    ],
  },
  {
    title: "Body",
    items: [
      "Tummy Tuck (Abdominoplasty)",
      "Liposuction",
      "Buttock Augmentation (BBL)",
      "Fat Grafting",
    ],
  },
  {
    title: "Mommy Makeover",
    items: [
      "Post-Pregnancy Tummy Tuck (moms)",
      "Breast Lift & Augmentation after Pregnancy",
      "Genital Cosmetic Surgeries",
      "Mommy Makeover Package (custom combination of procedures)",
    ],
  },
  {
    title: "Non Surgical",
    items: [
      "Botox (wrinkles-anti-ageing)",
      "Dermal Fillers",
      "Laser Skin Rejuvenation",
      "Microneedling & PRP for Skin Rejuvenation",
      "Skin Tightening",
    ],
  },
  {
    title: "Men",
    items: [
      "Gynaecomastia",
      "Liposuction",
      "Hair Loss Treatment",
      "Hair Transplant",
      "Rhinoplasty (Nose job)",
      "Eyelid Surgery (Blepharoplasty)",
      "Prominent Ear Surgery (Otoplasty)",
      "Facelift",
      "Thread Lift Treatment",
      "Chin Augmentation",
      "Jawline Contouring",
      "Lip Lift (Lip job)",
      "Lipoma Cysts Scars",
    ],
  },
];

  return (
    <section className="py-16 px-4 w-full md:px-6 bg-[#1AAEBC] text-gray-800 flex justify-center items-center">
      <div className="max-w-[1200px] w-full flex flex-col max-lg:flex-col-reverse lg:flex-row gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-5xl mb-4 text-white font-bold">
            Ready to Begin Your Transformation?
          </h2>
          <p className="text-base md:text-lg mb-6 text-white">
            At Tvameva, we tailor every consultation to your unique goals—offering expert care with honesty and compassion. Let’s take the first step together.
          </p>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 p-3 rounded-lg w-full bg-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 p-3 rounded-lg w-full bg-white"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border border-gray-300 p-3 rounded-lg w-full bg-white"
              />
              
 <select className="border border-gray-300 p-3 rounded-lg w-full bg-white">
  <option>Choose an Option</option>
  {submenus.map((menu, idx) => (
    <optgroup key={idx} label={menu.title}>
      {menu.items.map((item, itemIdx) => (
        <option key={itemIdx} value={item}>
          {item}
        </option>
      ))}
    </optgroup>
  ))}
</select>
            </div>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="border border-gray-300 p-3 rounded w-full bg-white"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-300 w-full text-black px-6 py-3 rounded-lg hover:bg-yellow-500 transition"
            >
              Book Consultation
            </button>
          </form>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <Image
            src="/images/services/body/tummytuck/consultation2.jpg"
            alt="Satisfied client"
            width={400}
            height={400}
            className="rounded-2xl w-full max-w-[500px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}

