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
                Procedures That Can Be Included in Your Mommy Makeover
              </h1>
              <p>
                Your Mommy Makeover with Dr. Kunal Sayani is completely customized. The most common procedures chosen by women in Mumbai and beyond include:
              </p>
              <ul className="list-disc ml-6 space-y-2 mb-3">
                <li><strong>Tummy Tuck (Abdominoplasty):</strong> This is often the cornerstone of a Mommy Makeover. It removes excess, loose skin and fat from the abdomen and, crucially, repairs separated abdominal muscles (diastasis recti) to create a firmer, flatter, and more toned midsection.</li>
                <li><strong>Breast Lift (Mastopexy):</strong> To address sagging and restore a more youthful, perkier position, a breast lift elevates the breast tissue and repositions the nipple and areola higher on the chest wall.</li>
                <li><strong>Breast Augmentation:</strong> To restore lost volume and create a fuller, more rounded breast shape, implants are used. This is very often combined with a breast lift (Augmentation-Mastopexy).</li>
                <li><strong>Liposuction:</strong> This procedure is used to sculpt and contour the body by removing stubborn pockets of fat that are resistant to diet and exercise. Common areas include the flanks ("love handles"), thighs, back, and arms, helping to create a more harmonious overall silhouette.</li>
                <li><strong>Vaginal Rejuvenation (Labiaplasty):</strong> For some women, pregnancy and childbirth can cause changes to the labia. Labiaplasty is a procedure to reshape and reduce the size of the labia minora for improved comfort and aesthetics.</li>
              </ul>

              <h1 className="text-3xl font-bold mb-4 text-[#10217D] font-notoSans">
                Procedure Details
              </h1>
              <p>
                The Mommy Makeover journey is highly personal. It begins with a deep understanding of your desires and culminates in a surgical plan designed exclusively for you by Dr. Kunal Sayani.
              </p>

              <h2 className="text-2xl font-semibold mt-4">
                Designing Your Mommy Makeover: The Consultation
              </h2>
              <p>
                Your journey begins at our welcoming clinic in Andheri, Mumbai, with a comprehensive and compassionate consultation with Dr. Kunal Sayani. This is a collaborative process where you will:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Share Your Vision:</strong> You'll have an open discussion about the specific areas of your body you wish to improve and the aesthetic results you hope to achieve.</li>
                <li><strong>Undergo a Complete Evaluation:</strong> Dr. Sayani will perform a thorough physical examination to assess your skin laxity, muscle separation (diastasis recti), breast ptosis (sagging), volume loss, and areas of excess fat.</li>
                <li><strong>Select Your Procedures:</strong> Based on his evaluation and your goals, Dr. Sayani will recommend a specific combination of procedures. He will explain in detail what each surgery entails, including incision placements, potential outcomes, and what can be realistically and safely achieved.</li>
                <li><strong>Discuss Breast Augmentation Options:</strong> If a breast augmentation is part of your plan, you will discuss implant types (silicone/saline), sizes, shapes, and profiles to select the perfect option for your body frame.</li>
                <li><strong>Receive a Transparent Plan:</strong> You will leave the consultation with a clear, customized surgical plan, a transparent understanding of the costs, and all your questions answered, feeling empowered and informed.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-4">
                Preparing for Your Combined Surgery
              </h2>
              <p>
                Preparation for a Mommy Makeover is crucial for a safe and smooth experience. Our team will guide you through:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Obtaining necessary medical clearances and lab tests.</li>
                <li>Stopping smoking several weeks before surgery, as it can severely impair healing.</li>
                <li>Avoiding certain medications and supplements that can increase bleeding risk.</li>
                <li>Organizing substantial home support. This is the most critical preparation step for a mother. You will need a dedicated helper to manage all childcare (including lifting), cooking, and household chores for at least the first 1-2 weeks.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-4">
                The Day of Your Transformation
              </h2>
              <p>
                Your Mommy Makeover will be performed under general anesthesia at a fully accredited surgical facility in Mumbai. Dr. Kunal Sayani will meticulously perform the selected procedures in a sequence planned for optimal safety and results. For example, he might perform liposuction first, followed by the tummy tuck, and then the breast procedure. The entire operation can take anywhere from 4 to 7 hours, depending on the complexity and number of procedures involved.
              </p>

              <h2
                id="recovery"
                className="text-3xl font-semibold mt-4 text-[#10217D] font-notoSans"
              >
                Recovery & Aftercare (Post-Op Instructions)
              </h2>
              <p>
                Recovery from a Mommy Makeover is more intensive than from a single procedure and requires careful planning and patience. Adhering strictly to Dr. Kunal Sayani's instructions is vital for your safety and results.
              </p>

              <h3 className="font-semibold mt-4">
                Immediately After Surgery
              </h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>You will wake up in a recovery area under close monitoring.</li>
                <li>You will have dressings on your incisions, and you'll likely be in a surgical compression garment (for your abdomen) and a surgical bra (for your breasts).</li>
                <li>You may have temporary surgical drains placed to remove excess fluid from the surgical sites.</li>
                <li>Discomfort is expected and will be managed with prescribed pain medication.</li>
              </ul>

              <h3 className="font-semibold mt-4">
                The First 1-2 Weeks: The Critical Healing Phase
              </h3>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Rest is Mandatory:</strong> Your only job is to rest and heal. You must have round-the-clock help.</li>
                <li><strong>No Lifting:</strong> You are strictly forbidden from lifting anything heavier than a water bottle. This absolutely includes your children.</li>
                <li><strong>Mobility:</strong> You will be encouraged to walk around the house for short periods to promote circulation, but you will need to walk in a slightly bent-over position to avoid straining your tummy tuck incision.</li>
                <li><strong>Garments & Drains:</strong> Wear your compression garments as instructed, 24/7. Our team will teach you how to manage your surgical drains, which are typically removed within a week.</li>
                <li><strong>Sleeping:</strong> You must sleep on your back in an elevated "beach chair" position, with pillows under your knees and back to keep your hips flexed.</li>
              </ul>

              <h3 className="font-semibold mt-4">
                Weeks 3 to 6: Gradual Return to a New Normal
              </h3>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Follow-Up Appointments:</strong> You will have regular check-ins at our Andheri, Mumbai clinic to monitor your healing.</li>
                <li><strong>Increased Activity:</strong> You can gradually increase your activity levels, but still no strenuous exercise or heavy lifting. Most women can return to a desk job and light daily routines around the 2-3 week mark.</li>
                <li><strong>Driving:</strong> You may be able to resume driving after 2-3 weeks, once you are off all prescription pain medication and can move comfortably.</li>
                <li><strong>Scar Care:</strong> Dr. Sayani will advise you when to begin your scar care regimen to help scars fade over time.</li>
              </ul>

              <h3 className="font-semibold mt-4">
                6 Weeks and Beyond
              </h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>Most of the initial swelling will have subsided, and you'll begin to see the true shape of your new contour.</li>
                <li>You will typically be cleared to resume most forms of exercise.</li>
                <li>Final results will continue to emerge over the next 6-12 months as residual swelling disappears, tissues soften, and scars mature.</li>
              </ul>

              <h2
                id="risks-safety"
                className="text-3xl font-semibold mt-4 text-[#10217D] font-notoSans"
              >
                Risks & Safety
              </h2>
              <p>
                Combining surgeries increases complexity and potential risks. It is imperative to choose a highly qualified and experienced surgeon like Dr. Kunal Sayani who operates in a fully equipped, accredited facility. Potential risks include:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Increased risks associated with longer anesthesia time.</li>
                <li>Higher risk of blood clots (Deep Vein Thrombosis).</li>
                <li>Fluid collection (seroma) or blood collection (hematoma).</li>
                <li>Infection and poor wound healing or scarring.</li>
                <li>Risks specific to each_above procedure (e.g., implant complications, asymmetry, changes in sensation).</li>
              </ul>
              <p>
                Dr. Sayani prioritizes your safety above all else, employing meticulous surgical techniques and ensuring you are a suitable candidate for combined surgery before proceeding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;