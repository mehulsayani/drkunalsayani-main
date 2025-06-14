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
        <div className="flex w-full max-lg:flex-col-reverse gap-6 max-w-[780px] max-lg-items-center">
          <div>
            <div>
              <h1 className="text-3xl font-bold mb-4 text-[#102842] font-noto-sans">
                Procedure Details
              </h1>
              <p className="mb-4">
                A lip lift is a procedure of millimeters, where precision is paramount. Dr. Kunal Sayani’s process, from consultation to surgery, is designed for safety, comfort, and exquisite results.
              </p>

              <h2 className="text-2xl font-semibold mt-6">
                Your Personalized Consultation in Mumbai
              </h2>
              <p className="mb-4">
                Your journey begins with an in-depth, one-on-one consultation with Dr. Kunal Sayani at his clinic in Andheri, Mumbai. This crucial meeting will involve:
              </p>
              <ul className="list-disc ml-6 space-y-2 mb-4">
                <li><strong>A Detailed Facial Analysis:</strong> Dr. Sayani will assess your complete facial anatomy, not just your lips. He will measure the length of your philtrum, evaluate your lip shape, volume, symmetry, and note how much of your upper teeth show when your face is at rest and when you smile.</li>
                <li><strong>Understanding Your Aesthetic Goals:</strong> He will listen carefully to what you wish to achieve. Are you looking for more pout, better definition, or a more pleasant resting expression?</li>
                <li><strong>Determining Candidacy:</strong> He will confirm if you are a suitable candidate for a lip lift. Ideal candidates have an elongated philtrum and desire a permanent enhancement of their upper lip.</li>
                <li><strong>Explaining the Procedure:</strong> Dr. Sayani will explain the chosen surgical technique (e.g., the Bullhorn Lift), where the incision will be placed, and the kind of result you can realistically expect. He will show you where the scar will be hidden.</li>
                <li><strong>Developing Your Surgical Plan:</strong> A bespoke plan is created, detailing the exact amount of skin to be excised to achieve a result that is both beautiful and natural for your face.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-6">
                Preparing for Your Lip Lift
              </h2>
              <p className="mb-4">
                Our team will provide you with clear pre-operative instructions to ensure a smooth procedure. This may include:
              </p>
              <ul className="list-disc ml-6 space-y-2 mb-4">
                <li>Stopping smoking several weeks before surgery to promote optimal healing.</li>
                <li>Avoiding medications and supplements that can increase bleeding, such as aspirin, anti-inflammatory drugs, and certain vitamins.</li>
                <li>Arranging for someone to drive you home after the procedure.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-6">
                The Day of Your Procedure
              </h2>
              <p className="mb-4">
                A lip lift is a minimally invasive procedure performed with meticulous care.
              </p>
              <ol className="list-decimal ml-6 space-y-2 mb-4">
                <li><strong>Anesthesia:</strong> The procedure is typically performed under local anesthesia with light sedation. This means the area will be completely numb, and you will be relaxed and comfortable but awake.</li>
                <li><strong>Surgical Markings:</strong> Dr. Kunal Sayani will make precise markings on your skin while you are sitting up, outlining the exact amount of skin to be removed from beneath the nostrils.</li>
                <li><strong>The Incision and Excision:</strong> He will then carefully make an incision along these markings, hidden within the natural contours of the base of your nose. The planned strip of skin is then excised.</li>
                <li><strong>Lifting and Suturing:</strong> The upper lip is gently lifted into its new, higher position. Dr. Sayani then uses fine, dissolvable sutures in deep layers and tiny, removable sutures on the skin surface to close the incision with extreme precision to ensure the finest possible scar.</li>
              </ol>
              <p className="mb-4">
                The entire procedure usually takes about 60 to 90 minutes.
              </p>

              <h2
                id="recovery"
                className="text-3xl font-bold mt-6 text-[#102842] font-noto-sans"
              >
                Recovery & Aftercare (Post-Op Instructions)
              </h2>
              <p className="mb-4">
                Proper aftercare is essential for a smooth recovery and an inconspicuous scar. Following Dr. Kunal Sayani's instructions is key.
              </p>

              <h3 className="font-semibold mt-4">
                Immediately After Surgery
              </h3>
              <ul className="list-disc ml-6 space-y-1 mb-4">
                <li><strong>Swelling and Discomfort:</strong> Swelling, numbness, and mild discomfort are normal and expected. The upper lip will feel very tight.</li>
                <li><strong>Care:</strong> You will be able to go home the same day. Apply cool compresses gently to the area to help manage swelling. Keep your head elevated.</li>
              </ul>

              <h3 className="font-semibold mt-4">
                The First Week
              </h3>
              <ul className="list-disc ml-6 space-y-1 mb-4">
                <li><strong>Rest and Restriction:</strong> Rest is crucial. Keep your head elevated as much as possible, including while sleeping.</li>
                <li><strong>Diet:</strong> Eat soft foods that do not require excessive chewing. Drink through a straw if it's more comfortable, but avoid puckering your lips.</li>
                <li><strong>Oral Hygiene:</strong> Be very gentle when brushing your teeth. Use a smaller toothbrush and avoid opening your mouth too wide.</li>
                <li><strong>Incision Care:</strong> You will be instructed on how to gently clean the incision line with a prescribed solution to prevent crusting and infection. An antibiotic ointment may be recommended.</li>
                <li><strong>Suture Removal:</strong> You will return to our Andheri, Mumbai clinic about 5-7 days after surgery for Dr. Sayani to remove the superficial sutures.</li>
              </ul>

              <h3 className="font-semibold mt-4">
                Weeks 2 to 4
              </h3>
              <ul className="list-disc ml-6 space-y-1 mb-4">
                <li><strong>Swelling Subsides:</strong> Most of the significant swelling will go down during this period. You can gradually return to a normal diet.</li>
                <li><strong>Activity:</strong> Avoid strenuous exercise and any activity that could put pressure on the incision line for at least 3-4 weeks.</li>
                <li><strong>Smiling:</strong> You may feel that your smile is restricted. This is normal and will improve as the swelling resolves and the tissues relax.</li>
              </ul>

              <h3 className="font-semibold mt-4">
                One Month and Beyond
              </h3>
              <ul className="list-disc ml-6 space-y-1 mb-4">
                <li><strong>Scar Maturation:</strong> The incision line will initially appear pink or red. This is normal. It will gradually fade and soften over the next 6-12 months.</li>
                <li><strong>Scar Care:</strong> Dr. Kunal Sayani will guide you on a scar care protocol, which may include silicone gels or sheets to help the scar become virtually invisible.</li>
                <li><strong>Final Result:</strong> You will be able to appreciate the final, beautiful result as the last of the swelling subsides and the scar matures.</li>
              </ul>

              <h2
                id="risks-safety"
                className="text-3xl font-bold mt-6 text-[#102842] font-noto-sans"
              >
                Risks & Safety
              </h2>
              <p className="mb-4">
                A lip lift is a very safe procedure when performed by a skilled aesthetic surgeon with a deep understanding of facial anatomy like Dr. Kunal Sayani. However, as with any surgery, there are potential risks:
              </p>
              <ul className="list-disc ml-6 space-y-1 mb-4">
                <li><strong>Scarring:</strong> While the goal is a nearly invisible scar, there is a risk of poor scarring (hypertrophic or keloid). This risk is minimized with precise surgical technique and proper aftercare.</li>
                <li><strong>Infection:</strong> A rare risk that is managed with sterile technique and post-operative care.</li>
                <li><strong>Asymmetry:</strong> Minor unevenness in the lips.</li>
                <li><strong>Numbness:</strong> Temporary numbness of the upper lip is common; permanent numbness is very rare.</li>
                <li><strong>Dissatisfaction with the Cosmetic Result:</strong> Dr. Sayani works closely with patients to align expectations with achievable outcomes.</li>
              </ul>
              <p>
                Dr. Sayani will discuss all these risks with you during your consultation to ensure you can make a fully informed decision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;