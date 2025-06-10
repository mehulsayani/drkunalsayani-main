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
    <section
      className="w-full flex justify-center mt-[1.3rem] max-lg:mt-[3rem] max-lg:h-[87vh] pt-[4rem] items-center 
      bg-gradient-to-r from-[#10217D] via-[#267196BF] to-[#2B849CB0] text-white"
    >
      <div
        className="w-6xl flex flex-col lg:flex-row justify-between gap-12 items-center px-6"
      >
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl sm:text-4xl lg:text-6xl mb-6">
            Services we offer
          </h2>
          <ul className="space-y-4 text-base sm:text-lg">
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
          src="/images/homepage/hero/slideimg3.png"
          alt="Aesthetic Model"
          width={500}
          height={600}
          className=" -scale-x-100 w-[36rem] max-lg:relative max-lg:bottom-[2.89rem]"
        />
      </div>
    </section>
  );
}
