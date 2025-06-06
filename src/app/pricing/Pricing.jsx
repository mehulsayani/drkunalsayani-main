export default function page() {
  const services = [
    {
      title: "Face Cosmetology",
      items: [
        { name: "Face cleaning", price: "$100" },
        { name: "Face lifting", price: "$950" },
        { name: "Skin relief alignment", price: "$200" },
        { name: "Laser skin rejuvenation", price: "$320" },
        { name: "Depigmentation therapy", price: "$320" },
        { name: "Regenerative therapy", price: "$320" },
        { name: "Acne therapy", price: "$200" },
        { name: "Post-acne therapy", price: "$200" },
      ],
    },
    {
      title: "Injections",
      items: [
        { name: "Contour plastic lips", price: "$250-350" },
        { name: "Complex face modeling", price: "$600-800" },
        { name: "Biorevitalization", price: "$150-300" },
        { name: "Mesotherapy for the eye area", price: "$150" },
        { name: "Lipolitics (fat cell dissolution)", price: "$350" },
        { name: "Venus Rings (complex neck rejuvenation)", price: "$300" },
        { name: "Mesotherapy", price: "$150" },
      ],
    },
    {
      title: "Botulinum Therapy (Botox / Dysport)",
      items: [
        { name: "Forehead area correction", price: "$200" },
        { name: "Correction of the brow area", price: "$150" },
        { name: "Eye area correction", price: "$200" },
        { name: "Correction of the nose zone", price: "$100" },
        { name: "Chin area correction", price: "$70" },
      ],
      showMore: true,
    },
     {
      title: "Face Cosmetology",
      items: [
        { name: "Face cleaning", price: "$100" },
        { name: "Face lifting", price: "$950" },
        { name: "Skin relief alignment", price: "$200" },
        { name: "Laser skin rejuvenation", price: "$320" },
        { name: "Depigmentation therapy", price: "$320" },
        { name: "Regenerative therapy", price: "$320" },
        { name: "Acne therapy", price: "$200" },
        { name: "Post-acne therapy", price: "$200" },
      ],
    },
    {
      title: "Injections",
      items: [
        { name: "Contour plastic lips", price: "$250-350" },
        { name: "Complex face modeling", price: "$600-800" },
        { name: "Biorevitalization", price: "$150-300" },
        { name: "Mesotherapy for the eye area", price: "$150" },
        { name: "Lipolitics (fat cell dissolution)", price: "$350" },
        { name: "Venus Rings (complex neck rejuvenation)", price: "$300" },
        { name: "Mesotherapy", price: "$150" },
      ],
    },
    {
      title: "Botulinum Therapy (Botox / Dysport)",
      items: [
        { name: "Forehead area correction", price: "$200" },
        { name: "Correction of the brow area", price: "$150" },
        { name: "Eye area correction", price: "$200" },
        { name: "Correction of the nose zone", price: "$100" },
        { name: "Chin area correction", price: "$70" },
      ],
      showMore: true,
    },
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-8">
        <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Treatment & Procedure Pricing</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We understand that cost is an important deciding factor for you. At our clinic, we endeavor to keep the price range towards the lower side, but rates for each surgery vary as per the requirement & condition of the patients. Our pricing is very transparent and is the same for every patient across the globe.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((section, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md p-6 border border-gray-100"
          >
            <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-6">
              {section.title}
            </h2>
            <ul className="space-y-4">
              {section.items.map((item, i) => (
                <li key={i} className="flex justify-between text-gray-700">
                  <span className="flex items-center gap-2">
                    <span className="text-pink-500">✔</span> {item.name}
                  </span>
                  <span className="font-medium">{item.price}</span>
                </li>
              ))}
            </ul>
            {section.showMore && (
              <div className="mt-6 text-pink-600 hover:underline cursor-pointer text-sm">
                VIEW MORE →
              </div>
            )}
          </div>
        ))}
      </div>
       <div className="mt-12 text-gray-600 max-w-3xl mx-auto text-sm">
        <p className="mb-4">
          The cost includes all charges like hospital admissions, OT charges, surgeon’s fee, medicines during the stay, implants required for the treatment, and post-operation consultations till the sutures are removed. There will be an additional cost associated with compression garments & postoperative investigation once the sutures are removed.
        </p>
        <p className="mb-4">
          The hospital accepts only Indian currency payable via cheque or major international debit & credit cards, including American Express.
        </p>
        <p>
          For international patients, we request you to book your surgical date by paying an advance of USD 400.
        </p>
      </div>

      <div className="mt-8 text-center">
        <a
          href="/contact"
          className="inline-block bg-sky-500 text-white px-6 py-3 rounded-md hover:bg-sky-600 transition"
        >
          Book Your Surgery
        </a>
      </div>
    </div>
  );
}
