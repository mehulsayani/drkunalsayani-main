import { ArrowUpRight } from "lucide-react";
import React, { useEffect, useState } from "react";

const Knowledge = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [readMore, setReadClose] = useState(true);
  const toggleReadMore = () => {
    setReadClose(!readMore);
  };

  return (
    <section>
      <div className="w-full flex flex-col items-center justify-center py-6">
        <div className="flex w-full max-lg:flex-col-reverse gap-6 max-lg-items-center">
          <div>
            <div>
              <h1 className="text-3xl font-bold mb-4 text-[#102842] font-noto-sans">
                Procedure Details: Your Guide to Advanced Hair Restoration
              </h1>
              <p className="mb-4">
                We pride ourselves on technical excellence and patient-centric care. Here is a detailed look at the transformative procedures we offer:
              </p>

              <h2 className="text-2xl font-semibold mt-6">
                Surgical Hair Restoration
              </h2>

              <h3 className="font-semibold mt-4">
                1. Follicular Unit Extraction (FUE)
              </h3>
              <p className="mb-4">
                FUE is a state-of-the-art, minimally invasive technique that involves extracting individual hair follicular units (each containing 1-4 hairs) from the donor area (typically the back and sides of the head) and transplanting them to the balding areas.
              </p>
              <ul className="list-disc ml-6 space-y-2 mb-4">
                <li><strong>The FUE Process:</strong>
                  <ol className="list-decimal ml-6 space-y-1">
                    <li><strong>Artistic Hairline Design:</strong> Dr. Kunal Sayani meticulously designs a natural, age-appropriate hairline that complements your facial features.</li>
                    <li><strong>Donor Area Preparation:</strong> The donor area is trimmed, and local anesthesia is administered for a completely comfortable experience.</li>
                    <li><strong>Graft Extraction:</strong> Using a high-precision, motorized micro-punch, individual follicular units are expertly extracted, leaving behind tiny dot-like marks that are virtually invisible after healing.</li>
                    <li><strong>Implantation:</strong> The grafts are carefully implanted into the recipient sites at the correct angle, depth, and direction to mimic natural hair growth, ensuring a seamless and undetectable result.</li>
                  </ol>
                </li>
              </ul>

              <h3 className="font-semibold mt-4">
                2. Follicular Unit Transplantation (FUT / Strip Method)
              </h3>
              <p className="mb-4">
                FUT is a highly effective method for covering large areas of baldness with significant skin laxity. It involves surgically removing a portion of skin with hair from the donor area.
              </p>
              <ul className="list-disc ml-6 space-y-2 mb-4">
                <li><strong>The FUT Process:</strong>
                  <ol className="list-decimal ml-6 space-y-1">
                    <li><strong>Strip Excision:</strong> After anesthesia, a strip of scalp tissue is removed from the donor area.</li>
                    <li><strong>Trichophytic Closure:</strong> Dr. Sayani uses an advanced suturing technique called Trichophytic Closure, which allows hair to grow through the fine linear scar, making it exceptionally well-concealed by the surrounding hair.</li>
                    <li><strong>Graft Dissection:</strong> The strip is passed to a highly skilled team who dissect it under stereoscopic microscopes into thousands of individual follicular units.</li>
                    <li><strong>Implantation:</strong> The grafts are then implanted into the balding areas, just as in the FUE procedure.</li>
                  </ol>
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-6">
                Regenerative Therapies
              </h2>

              <h3 className="font-semibold mt-4">
                1. Nanofat SVC (Stromal Vascular Fraction) Therapy
              </h3>
              <p className="mb-4">
                This is one of the most exciting advancements in regenerative medicine for hair loss. It harnesses the power of your body's own regenerative cells and growth factors derived from adipose (fat) tissue.
              </p>
              <ul className="list-disc ml-6 space-y-2 mb-4">
                <li><strong>The Nanofat SVC Process:</strong>
                  <ol className="list-decimal ml-6 space-y-1">
                    <li><strong>Fat Harvesting:</strong> A small amount of fat (typically 20-30ml) is harvested from an area like the abdomen or thighs using a micro-liposuction procedure under local anesthesia.</li>
                    <li><strong>Processing & Filtration:</strong> The harvested fat is then put through a specialized, multi-step filtration process. This breaks down the fat cells and isolates the Stromal Vascular Fraction (SVF) - a potent cocktail rich in adipose-derived regenerative cells and growth factors. The final product is a liquid suspension called "Nanofat."</li>
                    <li><strong>Scalp Injections:</strong> The powerful Nanofat solution is then meticulously injected into the scalp in the areas of thinning to rejuvenate dormant hair follicles, improve scalp health, and stimulate new, robust hair growth.</li>
                  </ol>
                </li>
              </ul>

              <h3 className="font-semibold mt-4">
                2. GFC (Growth Factor Concentrate) & Exosome Treatments
              </h3>
              <p className="mb-4">
                This represents the evolution of traditional regenerative therapy, offering a higher concentration of pure growth factors and advanced cellular messengers.
              </p>
              <ul className="list-disc ml-6 space-y-2 mb-4">
                <li><strong>GFC:</strong> A small sample of your blood is collected and processed to extract a high concentration of various growth factors (like PDGF, TGF-β, VEGF). Unlike PRP, this process eliminates other blood components, resulting in a pure, potent growth factor solution that is injected into the scalp to reduce hair loss and boost growth.</li>
                <li><strong>Exosomes:</strong> Exosomes are nanoscale vesicles derived from regenerative cells that act as powerful messengers, carrying proteins and genetic information to other cells. In hair restoration, lab-purified exosomes are applied to the scalp. They instruct the hair follicle cells to regenerate, repair damaged tissue, and promote active growth phases, offering a powerful tool against hair loss at a cellular level.</li>
              </ul>

              <h3 className="font-semibold mt-4">
                3. Platelet-Rich Plasma (PRP) Therapy
              </h3>
              <p className="ml-4">
                A well-established and effective treatment, PRP therapy utilizes the healing and regenerative properties present in your own blood to stimulate hair follicles.
              </p>
              <ul className="list-disc ml-6 space-y-2 mb-4">
                <li><strong>The PRP Process:</strong>
                  <ol className="list-decimal ml-6 space-y-1">
                    <li>A small amount of your blood is drawn.</li>
                    <li>The blood is then processed in a centrifuge to separate the platelet-rich plasma.</li>
                    <li>This concentrated plasma, rich in growth factors, is then injected into the scalp in the areas of hair thinning.</li>
                  </ol>
                </li>
                <li><strong>Benefits of PRP:</strong>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Promotes the growth of existing hair.</li>
                    <li>Increases hair thickness and density.</li>
                    <li>Can be used as a standalone treatment or in conjunction with a hair transplant.</li>
                  </ul>
                </li>
              </ul>

              <h2
                id="recovery"
                className="text-3xl font-bold mt-6 text-[#102842] font-noto-sans"
              >
                Recovery & Aftercare (Post-Op Instructions)
              </h2>
              <p className="mb-4">
                Your commitment to aftercare is crucial for achieving optimal results. Dr. Kunal Sayani and his team will provide detailed, personalized instructions.
              </p>

              <h3 className="font-semibold mt-4">
                For Surgical Procedures (FUE/FUT):
              </h3>
              <ul className="list-disc ml-6 space-y-1 mb-4">
                <li><strong>First 48 Hours:</strong> Rest is paramount. Sleep with your head elevated to minimize swelling. Take prescribed medications to manage any mild discomfort and prevent infection.</li>
                <li><strong>First Week:</strong> A special head wash will be demonstrated at the clinic. You will be taught how to gently wash the scalp without dislodging the new grafts. Scabs will form and fall off naturally within 7-14 days; do not pick them.</li>
                <li><strong>2-4 Weeks:</strong> Avoid strenuous exercise, swimming, saunas, and direct, harsh sun exposure. A temporary "shock loss" of the transplanted hairs is normal; this makes way for new, permanent growth to begin.</li>
                <li><strong>3-12 Months:</strong> New hair will begin to sprout around the 3-4 month mark. The results will become progressively more visible over the following months, with the final, full result apparent at 12-18 months.</li>
              </ul>

              <h3 className="font-semibold mt-4">
                For Injection-Based Therapies (Nanofat, GFC, PRP):
              </h3>
              <ul className="list-disc ml-6 space-y-1 mb-4">
                <li><strong>Immediate Post-Procedure:</strong> The scalp may feel tender with mild redness or swelling, which typically subsides within a few hours to a day.</li>
                <li><strong>First 24-48 Hours:</strong> Avoid washing your hair, strenuous activity, and excessive sweating.</li>
                <li><strong>Aftercare:</strong> You can typically resume normal activities the next day. A series of sessions may be recommended for GFC and PRP, usually spaced 4-6 weeks apart, to achieve the best results.</li>
              </ul>

              <h2
                id="risks-safety"
                className="text-3xl font-bold mt-6 text-[#102842] font-noto-sans"
              >
                Risks & Safety
              </h2>
              <p className="mb-4">
                Your safety is our utmost priority. All procedures performed by Dr. Kunal Sayani in our Andheri, Mumbai facility adhere to the highest standards of medical safety and sterilization.
              </p>
              <ul className="list-disc ml-6 space-y-1 mb-4">
                <li><strong>Surgical Risks:</strong> As with any surgery, risks are minimal but can include infection, bleeding, swelling, and temporary numbness. The risk of visible scarring is significantly minimized by Dr. Sayani’s advanced surgical techniques (micro-incisions in FUE and Trichophytic closure in FUT).</li>
                <li><strong>Regenerative Therapy Risks:</strong> Because treatments like Nanofat, GFC, and PRP use your body's own cells/tissue, the risk of allergic reaction or rejection is virtually eliminated. The primary risks are minor and related to the injection process, such as temporary pain, pinpoint bleeding, swelling, or bruising at the injection sites.</li>
                <li><strong>Choosing the Right Surgeon:</strong> The most significant factor in ensuring both safety and a natural-looking outcome is the skill and experience of your surgeon. Dr. Kunal Sayani's extensive training and artistic eye are your best assurance of a safe and successful procedure.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-6">
                FAQs: Your Questions Answered
              </h2>
              <p className="mb-4">
                We believe in empowering our patients with knowledge. Here are answers to some common questions.
              </p>
              <h3 className="font-semibold mt-4">
                General & Surgical FAQs
              </h3>
              <ul className="list-disc ml-6 space-y-1 mb-4">
                <li><strong>Am I a good candidate for a hair transplant?</strong> The best candidates are men with a stabilized pattern of hair loss and sufficient healthy donor hair. A thorough consultation with Dr. Kunal Sayani will determine your suitability.</li>
                <li><strong>How long until I see the final results?</strong> While new hair starts growing in 3-4 months, it takes 12-18 months to see the full, mature results of a hair transplant. Regenerative therapies can show improvements in hair texture and density within 3-6 months.</li>
                <li><strong>Will the results look natural?</strong> Absolutely. Dr. Kunal Sayani specializes in creating hairlines and density patterns that are indistinguishable from natural hair growth. The key is in the artistic and strategic placement of each individual graft.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;