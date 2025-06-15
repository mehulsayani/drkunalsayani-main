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
        <div className="flex w-full max-lg:flex-col-reverse gap-6  max-lg-items-center">
         
            <div>
              <h1 className="text-3xl font-bold mb-4 text-[#102842] font-noto-sans">
                Procedure Details: Your BBL Journey Step-by-Step
              </h1>
              <p className="mb-4">
                The Brazilian Butt Lift is a multi-stage procedure performed with meticulous attention to detail to ensure safety, beauty, and longevity of the results.
              </p>

              <h2 className="text-2xl font-semibold mt-6">
                Step 1: Consultation and Personalized Surgical Planning
              </h2>
              <p className="mb-4">
                Your journey begins with a private consultation with Dr. Kunal Sayani. During this session, you will discuss your aesthetic goals, and he will perform a thorough evaluation of your body shape, skin elasticity, and the amount of available donor fat. He will use this information to create a bespoke surgical plan designed to achieve your desired outcome while maintaining natural proportions.
              </p>

              <h2 className="text-2xl font-semibold mt-6">
                Step 2: Anesthesia
              </h2>
              <p className="mb-4">
                The BBL procedure is typically performed under general anesthesia or intravenous sedation with local anesthesia to ensure you are completely comfortable and pain-free throughout the surgery.
              </p>

              <h2 className="text-2xl font-semibold mt-6">
                Step 3: Liposuction & Fat Harvesting
              </h2>
              <p className="mb-4">
                This is the sculpting phase. Dr. Sayani will make small, discreet incisions in the predetermined donor areas (e.g., abdomen, waist, back, thighs). A thin tube called a cannula is inserted to gently suction out the excess fat. This process is performed carefully to not only harvest the fat but also to contour the donor sites, creating a slimmer, more defined silhouette that will accentuate the final results of the buttock enhancement.
              </p>

              <h2 className="text-2xl font-semibold mt-6">
                Step 4: Fat Processing and Purification
              </h2>
              <p className="mb-4">
                The harvested fat is not immediately ready for injection. It contains a mixture of fat cells, oil, and other fluids. The collected fat is placed in a specialized centrifuge system that spins it at high speeds. This process separates the pure, healthy, and viable fat cells from the unwanted components. This purification step is critical for maximizing the survival rate of the transferred fat cells and ensuring a smooth, long-lasting result.
              </p>

              <h2 className="text-2xl font-semibold mt-6">
                Step 5: Fat Injection and Augmentation
              </h2>
              <p className="mb-4">
                This is where the artistry happens. The purified fat is loaded into small syringes. Dr. Kunal Sayani then strategically injects this fat through tiny incisions into various depths and areas of the buttocks. He uses a multi-layered micro-injection technique to meticulously sculpt the new shape, adding volume where needed, improving projection, and creating a smooth, rounded, and lifted appearance. The injections are made with precision to ensure a natural look and feel.
              </p>

              <h2 className="text-2xl font-semibold mt-6">
                Step 6: Incision Closure
              </h2>
              <p className="mb-4">
                The small incisions from both the liposuction and injection sites are closed with sutures. The procedure typically takes 3 to 5 hours, depending on the complexity and the amount of fat being transferred.
              </p>

              <h2
                id="recovery"
                className="text-3xl font-bold mt-6 text-[#102842] font-noto-sans"
              >
                Recovery & Aftercare (Post-Op Instructions)
              </h2>
              <p className="mb-4">
                The recovery phase is as crucial as the surgery itself for achieving an excellent BBL result. Following post-operative instructions diligently is essential for fat graft survival and your overall well-being.
              </p>

              <h3 className="font-semibold mt-4">
                Immediately After Surgery (First 24-48 Hours):
              </h3>
              <ul className="list-disc ml-6 space-y-1 mb-4">
                <li><strong>Compression Garment:</strong> You will be placed in a specialized compression garment that covers the liposuctioned areas and the buttocks. This garment helps reduce swelling, supports the healing tissues, and assists in skin retraction. It must be worn 24/7 as directed by Dr. Sayani.</li>
                <li><strong>Rest:</strong> Rest is essential. You will experience some swelling, bruising, and discomfort, which can be managed with prescribed pain medication.</li>
              </ul>

              <h3 className="font-semibold mt-4">
                The "No-Sit" Rule (First 2-6 Weeks):
              </h3>
              <ul className="list-disc ml-6 space-y-1 mb-4">
                <li><strong>CRITICAL:</strong> You must avoid sitting or lying directly on your buttocks for at least 2 to 6 weeks, or as specified by Dr. Kunal Sayani. This is the most important rule of BBL recovery. Direct pressure can damage the delicate, newly transferred fat cells and compromise your results.</li>
                <li><strong>Sleeping:</strong> You will need to sleep on your stomach or your sides.</li>
                <li><strong>Sitting:</strong> When you absolutely must sit, you will use a special "BBL pillow" or "booty pillow." This offloading pillow is placed under the thighs, allowing you to sit without putting pressure on your buttocks.</li>
              </ul>

              <h3 className="font-semibold mt-4">
                Weeks 1-3:
              </h3>
              <ul className="list-disc ml-6 space-y-1 mb-4">
                <li><strong>Activity:</strong> Light walking is encouraged to promote circulation, but all strenuous activities, heavy lifting, and intense exercise are strictly prohibited.</li>
                <li><strong>Diet & Hydration:</strong> Maintain a healthy diet and stay well-hydrated to support the healing process.</li>
                <li><strong>Follow-ups:</strong> Attend all your scheduled follow-up appointments at our Andheri clinic to allow Dr. Sayani to monitor your healing progress.</li>
              </ul>

              <h3 className="font-semibold mt-4">
                Weeks 4-8 and Beyond:
              </h3>
              <ul className="list-disc ml-6 space-y-1 mb-4">
                <li><strong>Resuming Activities:</strong> You can gradually begin to reintroduce normal activities and light exercise as cleared by Dr. Sayani.</li>
                <li><strong>Final Results:</strong> While you will see a noticeable difference immediately, the final results will become apparent after about 6 months. During this time, the initial swelling will completely subside, and the surviving fat cells will have established a permanent blood supply. It is normal for the body to absorb 30-40% of the injected fat; this is accounted for during the initial procedure.</li>
              </ul>

              <h2
                id="risks-safety"
                className="text-3xl font-bold mt-6 text-[#102842] font-noto-sans"
              >
                Risks & Safety
              </h2>
              <p className="mb-4">
                While the Brazilian Butt Lift can deliver beautiful results, it is a major surgical procedure that carries inherent risks. Choosing a highly qualified, board-certified aesthetic surgeon like Dr. Kunal Sayani who operates in a fully accredited facility is the single most important decision you can make to ensure your safety.
              </p>
              <p className="mb-4">Potential risks include:</p>
              <ul className="list-disc ml-6 space-y-1 mb-4">
                <li><strong>Fat Embolism:</strong> This is the most serious risk, where fat is inadvertently injected into a large blood vessel and travels to the lungs. Dr. Sayani mitigates this risk by using specialized cannulas and employing safe injection techniques, such as injecting fat only into the subcutaneous space (above the muscle).</li>
                <li><strong>Infection:</strong> Minimized with sterile operating conditions and post-op antibiotics.</li>
                <li><strong>Asymmetry or Contour Irregularities:</strong> The risk is minimized by the surgeon's skill and meticulous technique.</li>
                <li><strong>Poor Fat Graft Survival:</strong> Following all post-operative instructions, especially the "no-sitting" rule, is crucial to maximize fat survival.</li>
                <li><strong>Seroma (Fluid Collection):</strong> Can be managed with drainage if it occurs.</li>
                <li><strong>Changes in Skin Sensation:</strong> Usually temporary.</li>
                <li><strong>Risks Associated with Anesthesia:</strong> Managed by working with board-certified anesthesiologists.</li>
              </ul>
              <p>
                During your comprehensive consultation, Dr. Sayani will discuss these risks openly and in detail, ensuring you are fully informed before proceeding.
              </p>
            </div>
          
        </div>
      </div>
    </section>
  );
};

export default Knowledge;