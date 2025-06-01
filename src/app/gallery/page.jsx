'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  {
    src: '/images/gallery1.jpg',
    alt: 'Clinic Exterior',
    caption: 'Our State-of-the-Art Clinic Building',
  },
  {
    src: '/images/gallery2.jpg',
    alt: 'Reception Area',
    caption: 'Modern Reception Area',
  },
  {
    src: '/images/gallery3.jpg',
    alt: 'Hallway with Certificates',
    caption: 'Awards & Certifications Display',
  },
  {
    src: '/images/plastic1.jpg',
    alt: 'Consultation Room',
    caption: 'Private Consultation Room',
  },
  {
    src: '/images/plastic2.jpg',
    alt: 'Surgery Suite',
    caption: 'Advanced Surgery Suite',
  },
  {
    src: '/images/plastic3.jpg',
    alt: 'Recovery Area',
    caption: 'Comfortable Recovery Zone',
  },
];

export default function page() {
  return (
    <section className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-teal-700 mb-2">CLINIC GALLERY</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Browse our gallery to explore the remarkable transformations and advanced facilities at our cosmetic surgery clinic.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden rounded-xl shadow hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="absolute bottom-0 bg-black/60 text-white text-sm p-2 w-full text-center">
                {img.caption}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
