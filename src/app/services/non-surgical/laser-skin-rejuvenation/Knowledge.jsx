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
      <div className="w-full flex flex-col items-center justify-center py-8">
        <div className="flex w-full max-lg:flex-col-reverse gap-10 max-w-[1300px] max-lg:justify-center max-lg:items-center">
          <div>
            <div>
              <h1 className="text-3xl font-bold mb-4 text-[#10217D] font-notoSans">
                Procedure Details
              </h1>
              <p>
                Undergoing Laser Skin Rejuvenation at our clinic is a meticulously planned process to ensure 
                your comfort, safety, and optimal results. Here’s a detailed breakdown of what you can expect: 
              </p>

              <h2 className="text-2xl font-semibold mt-4">
                The Initial Consultation with Dr. Kunal Sayani
              </h2>
              <p>
                Your journey begins with a comprehensive one-on-one consultation with Dr. Kunal Sayani. 
                During this crucial first step, you will have the opportunity to discuss your aesthetic concerns, 
                goals, and expectations. Dr. Sayani will:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Conduct a Thorough Skin Analysis: Your skin type, tone, and the specific issues you wish 
                  to address will be carefully evaluated.</li>
                <li>Review Your Medical History: To ensure your suitability for the procedure, Dr. Sayani will 
                  discuss your past and present health conditions, medications, and any previous cosmetic 
                  treatments.</li>
                <li>Explain the Different Laser Options: There are various types of lasers, each suited for 
                  different concerns. Dr. Kunal Sayani will explain the benefits of ablative lasers (like CO2 
                  and Erbium), which remove the outer layers of skin for dramatic results, versus non
                  ablative lasers (like IPL and Pulsed-Dye), which work beneath the skin's surface with 
                  minimal downtime. He will also discuss fractional lasers, which treat the skin in a 
                  pixelated pattern for faster healing.</li>
                <li>Develop a Personalized Treatment Plan: Based on your unique needs, a customized plan 
                  will be created, outlining the most appropriate laser technology, the number of sessions 
                  required, and the expected outcomes.</li>
                <li>Answer All Your Questions: We encourage you to ask any questions you may have to 
                  feel fully informed and confident in your decision.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-4">
                Preparing for Your Procedure
              </h2>
              <p>
                Once your treatment plan is established, you will receive detailed pre-procedure instructions, 
                which may include:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Avoiding Sun Exposure: You will be advised to avoid direct sunlight and tanning beds for 
                  at least four weeks before your treatment.</li>
                <li>Discontinuing Certain Medications and Products: You may need to stop using products 
                  containing retinoids or certain medications that can increase photosensitivity.</li>
                <li>Following a Specific Skincare Regimen: Dr. Sayani may recommend a particular skincare 
                  routine to prepare your skin for the laser treatment.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-4">
                The Day of the Procedure
              </h2>
              <p>
                On the day of your Laser Skin Rejuvenation treatment:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Cleansing the Skin: The treatment area will be thoroughly cleansed to remove any oils, 
                  makeup, or impurities.</li>
                <li>Anesthesia: Depending on the type and intensity of the laser being used a topical 
                  numbing cream may be applied to ensure your comfort. For more intensive treatments, 
                  a local anesthetic might be administered by Dr. Kunal Sayani.</li>
                <li>Protective Eyewear: You will be provided with special eyewear to protect your skin from the laser light.</li>
                <li>The Laser Treatment: Dr. Sayani will then expertly guide the laser handpiece over the 
                targeted areas of your skin. You may feel a sensation of warmth or a light snapping 
                feeling, which is generally well-tolerated. The duration of the procedure can range from 
                30 minutes to over an hour, depending on the size of the area being treated.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-4">
                Immediately After the Procedure
              </h2>
              <p>
                Following the treatment:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Cooling and Soothing: A cooling gel or compress may be applied to soothe the skin.</li>
                <li>Post-Treatment Care Instructions: You will receive detailed instructions on how to care 
                for your skin as it heals.</li>
              </ul>

              <h2
                id="recovery"
                className="text-3xl font-semibold mt-4 text-[#10217D] font-notoSans"
              >
                Recovery & Aftercare (Post-Op Instructions)
              </h2>
              <p>
                The recovery process varies depending on the type and intensity of the laser treatment 
                you receive. Adhering to Dr. Kunal Sayani's post-operative instructions is crucial for 
                achieving the best possible results and minimizing any potential complications.
              </p>

              <h3 className="font-semibold mt-4">
                What to Expect Immediately After
              </h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>Redness and Swelling: It is normal for the treated skin to appear red and feel swollen, 
                  similar to a sunburn. This typically subsides within a few hours to a few days.</li>
                <li>Sensation: You may experience a mild stinging or itching sensation for the first 12 to 
                  72 hours.</li>
              </ul>

              <h3 className="font-semibold mt-4">
                The First 24-48 Hours
              </h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>Keep the Area Clean: Gently cleanse the treated area as instructed by Dr. Sayani, 
                  using a mild, non-abrasive cleanser.</li>
                <li>Moisturize: Apply a recommended moisturizer or ointment to keep the skin hydrated 
                  and promote healing.</li>
                <li>Cool Compresses: Use cool compresses to help reduce swelling and discomfort.</li>
                <li>Avoid Sun Exposure: It is imperative to protect your skin from the sun.</li>
              </ul>

              <h3 className="font-semibold mt-4">
                The First Week
              </h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>Peeling and Flaking: Your skin may start to peel or flake as the old, damaged layers 
                  give way to new, healthy skin. Do not pick or scrub at your skin; allow it to shed 
                  naturally.</li>
                <li>Continue with Gentle Skincare: Stick to the recommended gentle skincare routine. 
                  Avoid using any harsh products, exfoliants, or retinoids until your skin has fully 
                  healed.</li>
                <li>Sun Protection is Key: Continue to be diligent with sun protection. Wear a broad
                  spectrum sunscreen with an SPF of 30 or higher, even on cloudy days.</li>
              </ul>

              <h3 className="font-semibold mt-4">
                Long-Term Care
              </h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>Sunscreen, Sunscreen, Sunscreen: Your new skin will be more sensitive to the sun. 
                  Make daily sunscreen application a non-negotiable part of your routine to protect 
                  your investment and prevent future sun damage.</li>
                <li>Follow-Up Appointments: Attend all scheduled follow-up appointments with Dr. Kunal 
                  Sayani to monitor your healing progress and results.</li>
                <li>Healthy Lifestyle: A healthy diet, adequate hydration, and a good skincare regimen 
                  will help to prolong the results of your laser skin rejuvenation.</li>
              </ul>

              <h2
                id="risks-safety"
                className="text-3xl font-semibold mt-4 text-[#10217D] font-notoSans"
              >
                Risks & Safety
              </h2>
              <p>
                Laser Skin Rejuvenation is a safe and effective procedure when performed by a qualified 
                and experienced professional like Dr. Kunal Sayani. However, as with any medical 
                procedure, there are potential risks and side effects to be aware of.
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Temporary Redness, Swelling, and Discomfort: These are the most common side 
                  effects and typically resolve within a few days.</li>
                <li>Changes in Skin Pigmentation: In some cases, the treated skin may become 
                  temporarily lighter (hypopigmentation) or darker (hyperpigmentation). This is more 
                  common in individuals with darker skin tones and can often be mitigated by 
                  to strict sun protection protocols.</li>
                <li>Infection: Although rare, there is a small risk of bacterial or viral infection. 
                  Following the post-op care instructions carefully will minimize this risk.</li>
                <li>Scarring: Scarring is a very rare complication, particularly when the treatment is 
                  performed by an experienced surgeon.</li>
                <li>Blistering or Crusting: These may occur with more intensive ablative laser treatments 
                  and are a normal part of the healing process. It is crucial not to pick at these to 
                  prevent scarring.</li>
              </ul>

              <p>
                During your consultation, Dr. Kunal Sayani will thoroughly discuss all potential risks 
                and safety considerations with you to ensure you can make an informed decision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;