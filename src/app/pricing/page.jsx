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
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-8">
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
    </div>
  );
}
