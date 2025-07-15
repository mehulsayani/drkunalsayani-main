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
                Your journey to restoring your figure is a partnership between you and your surgeon. Dr. Kunal Sayani and his team in Mumbai are committed to ensuring you are informed, comfortable, and confident every step of the way.
              </p>

              <h2 className="text-2xl font-semibold mt-4">
                Your In-Depth Consultation in Andheri
              </h2>
              <p>
                The process begins with a comprehensive, private consultation with Dr. Kunal Sayani. This is the most critical step, where your specific needs and aesthetic goals are discussed in detail. During this session:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>A Compassionate Discussion: You will have the opportunity to share your story and explain the specific changes in your breasts that you are unhappy with.</li>
                <li>Thorough Examination: Dr. Sayani will conduct a careful physical examination, assessing your breast anatomy, the degree of volume loss, the extent of skin sagging, your skin elasticity, and the current position of your nipples.</li>
                <li>Implant Selection (The Augmentation): A significant part of the consultation is dedicated to choosing the right implants. You will be guided through:
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Implant Type: Discussing the pros and cons of Silicone and Saline implants.</li>
                    <li>Implant Size: Using sizers and 3D imaging technology (if available) to help you visualize different volumes and choose a size that complements your frame.</li>
                    <li>Implant Shape & Profile: Understanding the difference between round implants for upper pole fullness and teardrop-shaped implants for a more natural slope, as well as the various projection levels (profiles).</li>
                  </ul>
                </li>
                <li>The Lift Plan (The Mastopexy): Dr. Sayani will explain the incision pattern required for your lift, which depends on the degree of sagging. This could be a peri-areolar (donut), vertical (lollipop), or inverted-T (anchor) incision. He will explain his choice and what it means for your final scars.</li>
                <li>Creating Your Bespoke Surgical Plan: By combining your goals with his expert analysis, Dr. Kunal Sayani will create a fully customized surgical plan that details the precise techniques for both the lift and augmentation to achieve a beautiful, integrated result.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-4">
                Preparing for Your Procedure
              </h2>
              <p>
                Once your surgery is scheduled, our team in Mumbai will provide clear pre-operative instructions, including:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Getting pre-operative lab tests and a baseline mammogram.</li>
                <li>Stopping smoking at least 4-6 weeks prior to surgery to ensure optimal healing.</li>
                <li>Avoiding medications and supplements that can increase bleeding, like aspirin, anti-inflammatories, and certain herbal remedies.</li>
                <li>Arranging for a responsible adult to drive you home and, crucially, assist you with childcare and household duties for the first several days post-surgery.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-4">
                The Day of Your Surgery
              </h2>
              <p>
                Your procedure will be performed at a fully accredited surgical facility in Mumbai.
              </p>
              <ol className="list-decimal ml-6 space-y-2">
                <li>Anesthesia: You will be placed under general anesthesia by a qualified anesthetist, ensuring you are completely comfortable and asleep for the entire procedure.</li>
                <li>The Procedure: Dr. Kunal Sayani will first perform the breast lift, making the planned incisions, removing the excess skin, and reshaping the internal breast tissue to create a new, uplifted foundation. The nipple and areola are then repositioned to a more youthful height.</li>
                <li>Implant Placement: A pocket is then created either above or below the pectoral muscle, and the selected breast implant is carefully inserted.</li>
                <li>Incision Closure: The incisions are meticulously closed in layers to minimize tension and promote the best possible scar healing. The final result is a breast that is not only lifted but also beautifully full and well-proportioned.</li>
              </ol>
              <p>
                The combined surgery typically takes 3 to 5 hours.
              </p>

              <h2
                id="recovery"
                className="text-3xl font-semibold mt-4 text-[#10217D] font-notoSans"
              >
                Recovery & Aftercare (Post-Op Instructions)
              </h2>
              <p>
                Recovery after a combined lift and augmentation requires patience and adherence to instructions. As a mother, planning for this period is key to a smooth and successful outcome.
              </p>

              <h3 className="font-semibold mt-4">
                Immediately After Surgery
              </h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>You will be monitored in a recovery room as the anesthesia wears off. Your breasts will be covered with dressings and a supportive surgical bra.</li>
                <li>Discomfort, tightness, and swelling are expected. This will be managed with prescribed pain medication.</li>
                <li>You will be discharged into the care of your pre-arranged helper once you are stable.</li>
              </ul>

              <h3 className="font-semibold mt-4">
                The First Week: Your Rest & Recovery Period
              </h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>REST is Your Priority: This is non-negotiable. You must have help with children and all household chores.</li>
                <li>No Lifting: You are strictly forbidden from lifting anything over a few kilograms – this includes your children. You must arrange for others to lift and carry them for you.</li>
                <li>Medication: Take all medications prescribed by Dr. Kunal Sayani on schedule to manage pain and prevent infection.</li>
                <li>Support Bra: Wear your surgical bra 24/7. It is essential for supporting your healing breasts, controlling swelling, and shaping your results.</li>
                <li>Sleeping: Sleep on your back in an elevated position to help minimize swelling.</li>
              </ul>

              <h3 className="font-semibold mt-4">
                Weeks 2 to 6: Gradual Return to Normalcy
              </h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>Follow-Up: You will have follow-up appointments at our Andheri, Mumbai clinic to check your healing progress.</li>
                <li>Light Activity: You can gradually resume light activities. Most women can return to a non-strenuous job within 2 weeks.</li>
                <li>Driving: You can resume driving once you are off all prescription pain medication and can perform emergency maneuvers comfortably.</li>
                <li>Continued Restrictions: Continue to avoid strenuous exercise, heavy lifting, and any activity that puts strain on your chest. You may be able to resume carrying older toddlers at the end of this period, as advised by Dr. Sayani.</li>
              </ul>

              <h3 className="font-semibold mt-4">
                6 Weeks and Beyond
              </h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>You will typically be cleared to resume most forms of exercise.</li>
                <li>Swelling will have significantly subsided, and you will begin to see your beautiful new shape. However, the final results will continue to refine over the next 6-12 months as the implants settle and scars mature.</li>
                <li>Dr. Sayani will guide you on scar care protocols to help your incisions fade as much as possible.</li>
              </ul>

              <h2
                id="risks-safety"
                className="text-3xl font-semibold mt-4 text-[#10217D] font-notoSans"
              >
                Risks & Safety
              </h2>
              <p>
                A Breast Lift with Augmentation is a major surgical procedure and carries potential risks, which Dr. Kunal Sayani will discuss with you in detail. These include:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>General risks associated with anesthesia.</li>
                <li>Scarring: Scars are permanent, though they are placed strategically and fade over time.</li>
                <li>Bleeding & Infection.</li>
                <li>Implant-Related Risks: Capsular contracture (scar tissue hardening around the implant), implant rupture or deflation, and implant malposition.</li>
                <li>Changes in Nipple/Breast Sensation: This is common and usually temporary, but can be permanent.</li>
                <li>Asymmetry: Minor differences in breast shape or size.</li>
                <li>The need for future revision surgery.</li>
              </ul>
              <p>
                Choosing a board-certified, experienced aesthetic surgeon like Dr. Kunal Sayani who operates in accredited facilities is the single most important factor in ensuring your safety and minimizing risks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;