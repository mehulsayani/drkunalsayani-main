import Image from "next/image";

export default function ServicesSection() {
  const services = [
    "Breast Augmentation",
    "Breast Reduction",
    "Gynecomastia",
    "Liposuction",
    "Tummy Tuck",
    "Face Lift",
    "Botox / Derma Fillers",
    "Hair Transplant",
  ];

  return (
    <section className="w-full flex justify-center items-center bg-gradient-to-r from-[#10217D] via-[#267196BF] to-[#2B849CB0] text-white">
      <div className="w-5xl flex justify-between gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-6xl font-bold mb-3">Services we offer</h2>
          <ul className="space-y-4 text-lg">
            {services.map((service, index) => (
              <li
                key={index}
                className={`pl-4 border-l-4 ${
                  index === 0
                    ? "border-yellow-400 text-yellow-300"
                    : "border-white/20"
                } hover:text-blue-200 transition-colors duration-300`}
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}

        <Image
          src="/images/homepage/hero/servicegirl.png"
          alt="Aesthetic Model"
          width={500}
          height={600}
          className="object-cover h-auto -scale-x-100 w-[20rem]"
        />
      </div>
    </section>
  );
}
