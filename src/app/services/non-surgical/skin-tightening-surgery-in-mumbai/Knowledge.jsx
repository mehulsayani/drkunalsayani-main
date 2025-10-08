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
        <div className="flex w-full max-lg:flex-col-reverse gap-6 max-lg:justify-center max-lg-items-center">
          <div>
            <div>
              <h1 className="text-3xl font-bold mb-4 text-[#10217D] font-noto-sans">
                Procedure Details
              </h1>
              <p className="mb-4">
                Your journey to firmer skin is a comfortable and sophisticated experience at our Andheri clinic. Dr. Kunal Sayani personally oversees each treatment plan to ensure optimal results and patient safety.
              </p>

              <h2 className="text-2xl font-semibold mt-6">
                Your Personalized Consultation
              </h2>
              <p className="mb-4">
                Every successful treatment begins with a thorough consultation with Dr. Kunal Sayani. At his Andheri, Mumbai clinic, he will:
              </p>
              <ul className="list-disc ml-6 space-y-2 mb-4">
                <li><strong>Conduct a Detailed Skin Analysis:</strong> He will carefully examine your skin's elasticity, texture, thickness, and the degree of laxity to understand your specific concerns.</li>
                <li><strong>Discuss Your Aesthetic Goals:</strong> You will have an open conversation about the areas you wish to improve and the results you hope to achieve.</li>
                <li><strong>Recommend the Best Technology for You:</strong> Based on your unique skin condition and goals, Dr. Sayani will recommend the most suitable technology—be it HIFU, RF, or RF Microneedling. He will explain why a particular treatment is best for you and what you can realistically expect.</li>
                <li><strong>Develop Your Custom Treatment Plan:</strong> He will outline the number of sessions required, the treatment intervals, and provide a clear overview of the entire process.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-6">
                The Treatment Session: What to Expect
              </h2>
              <p className="mb-4">
                While each technology is different, the overall process for a skin tightening session is designed for your comfort.
              </p>
              <ol className="list-decimal ml-6 space-y-2 mb-4">
                <li><strong>Preparation:</strong> The target area will be thoroughly cleansed. For some treatments like RF Microneedling, a topical numbing cream will be applied about 45-60 minutes prior to the session to ensure optimal comfort. For treatments like HIFU and standard RF, a numbing cream is typically not required.</li>
                <li><strong>The Procedure:</strong>
                  <ul className="list-disc ml-6 space-y-1">
                    <li><strong>For HIFU:</strong> A handheld device is placed on the skin, delivering focused ultrasound energy to precise depths. You may feel brief moments of heat and a tingling sensation as the energy is delivered.</li>
                    <li><strong>For Radiofrequency (RF):</strong> A special gel is applied to the skin, and a different handheld device is moved continuously over the treatment area. Patients typically describe this as a warm, comfortable, massage-like sensation.</li>
                    <li><strong>For RF Microneedling:</strong> The specialized device is gently pressed against the skin, allowing the fine, insulated needles to penetrate to a controlled depth while delivering a pulse of radiofrequency energy. The process is repeated methodically across the entire treatment area.</li>
                  </ul>
                </li>
                <li><strong>Duration:</strong> A typical session can last anywhere from 30 to 90 minutes, depending on the technology used and the size of the area being treated.</li>
                <li><strong>Completion:</strong> After the treatment is complete, a soothing serum or mask may be applied to the skin, along with sunscreen.</li>
              </ol>

              <h2
                id="recovery"
                className="text-3xl font-bold mt-6 text-[#10217D] font-noto-sans"
              >
                Recovery & Aftercare (Post-Op Instructions)
              </h2>
              <p className="mb-4">
                A major advantage of non-surgical skin tightening is the minimal to no downtime. You can typically return to your daily activities immediately after your session.
              </p>

              <h3 className="font-semibold mt-4">
                Immediately After Your Session
              </h3>
              <ul className="list-disc ml-6 space-y-1 mb-4">
                <li><strong>Appearance:</strong> It is normal to experience some mild redness and slight swelling in the treated area, similar to a mild sunburn. This usually subsides within a few hours. With RF Microneedling, the redness may persist for 24-48 hours.</li>
                <li><strong>Skin Sensation:</strong> The skin may feel warm and slightly tender to the touch.</li>
              </ul>

              <h3 className="font-semibold mt-4">
                The First 24-48 Hours
              </h3>
              <ul className="list-disc ml-6 space-y-1 mb-4">
                <li><strong>Gentle Skincare:</strong> Cleanse your skin with a gentle, non-abrasive cleanser and lukewarm water. Avoid hot water, saunas, and steam rooms.</li>
                <li><strong>Hydration:</strong> Keep your skin well-hydrated with a simple, soothing moisturizer recommended by Dr. Kunal Sayani.</li>
                <li><strong>Sun Protection:</strong> Your skin will be more sensitive. Apply a broad-spectrum SPF 30+ sunscreen daily and avoid direct sun exposure.</li>
                <li><strong>Avoid Irritants:</strong> Do not use any harsh skincare products containing retinoids, alpha/beta-hydroxy acids, or exfoliants for several days, as advised by your doctor.</li>
                <li><strong>Makeup:</strong> You can typically apply makeup the next day, though it’s best to wait 24 hours if possible, especially after RF Microneedling.</li>
              </ul>

              <h3 className="font-semibold mt-4">
                Long-Term Care
              </h3>
              <ul className="list-disc ml-6 space-y-1 mb-4">
                <li><strong>Be Patient:</strong> While some initial tightening may be visible, the true results appear gradually over 2-6 months as your body produces new collagen.</li>
                <li><strong>Healthy Lifestyle:</strong> Maintain a healthy lifestyle and a good skincare regimen to support and prolong your results.</li>
                <li><strong>Follow-Up Sessions:</strong> Attend any scheduled follow-up sessions as part of your treatment plan to achieve the best possible outcome.</li>
              </ul>

              <h2
                id="risks-safety"
                className="text-3xl font-bold mt-6 text-[#10217D] font-noto-sans"
              >
                Risks & Safety
              </h2>
              <p className="mb-4">
                Non-surgical skin tightening procedures have an excellent safety profile, especially when performed by a qualified and experienced doctor like Dr. Kunal Sayani. The risks are minimal and typically temporary. They include:
              </p>
              <ul className="list-disc ml-6 space-y-1 mb-4">
                <li><strong>Temporary Redness and Swelling:</strong> The most common side effect, which resolves quickly.</li>
                <li><strong>Tenderness or Tingling:</strong> A temporary sensation in the treated area.</li>
                <li><strong>Bruising or Welts:</strong> Uncommon, but can occur in some individuals and usually fades within a few days.</li>
                <li><strong>Changes in Pigmentation:</strong> A very rare risk, which can be minimized by strict adherence to sun protection protocols, especially in individuals with darker skin tones.</li>
              </ul>
              <p>
                During your consultation, Dr. Sayani will discuss all potential risks and ensure the procedure is safe and appropriate for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;