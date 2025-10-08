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
              <h2 className="text-3xl font-bold font-notoSans mb-2 flex items-center text-[#10217D]">
                {/* <FaCheckCircle className="text-blue-600 mr-2" /> */}
                What Nano-Fat Injection SVC Can Achieve:
              </h2>

              <p className="mb-4 text-gray-600">
                Nano-Fat Injection SVC for hair growth can offer a range of
                aesthetic improvements, including:
              </p>
              <ul className="list-disc ml-6 space-y-2 mb-3 text-gray-600">
                <li>
                  Stimulation of dormant hair follicles, leading to new hair
                  growth.
                </li>
                <li>Increased hair density and thickness.</li>
                <li>
                  Improved hair quality, making hair appear healthier and more
                  vibrant.
                </li>
                <li>Enhanced blood circulation to the scalp.</li>
                <li>Reduced hair shedding.</li>
                <li>A more confident and youthful appearance.</li>
              </ul>
              <div>
                <p className="text-gray-600">
                  Dr. Kunal Sayani understands that each patient's hair loss
                  pattern and aesthetic goals are unique. During your
                  personalized consultation with him, he will thoroughly assess
                  your individual needs, discuss your expectations, and
                  determine if Nano-Fat Injection SVC is the right procedure to
                  help you achieve your desired outcome. He will explain the
                  process in detail and recommend the most suitable approach for
                  you.
                </p>

                <h1 className="text-3xl font-bold mb-4 text-[#10217D] font-notoSans">
                  Procedure Details
                </h1>
                <p className="text-gray-600">
                  The Nano-Fat Injection SVC procedure, performed by Dr. Kunal
                  Sayani, is a meticulously planned treatment tailored to the
                  patient’s specific hair loss condition and goals. Below is a
                  detailed breakdown of the process:
                </p>

                <h2 className="text-2xl font-semibold mt-4">
                  {/* <FaStethoscope className="inline mr-2 text-blue-600" /> */}
                  Consultation
                </h2>
                <p className="text-gray-600">
                  Your journey begins with a comprehensive consultation with Dr.
                  Kunal Sayani. During this session, he evaluates your medical
                  history, examines your scalp and hair, and discusses your
                  expectations. This allows Dr. Kunal Sayani to determine if
                  Nano-Fat Injection SVC is best suited for you. The Nano-Fat
                  Injection SVC procedure with Dr. Kunal Sayani is typically
                  performed under local anesthesia and takes approximately 1-2
                  hours, depending on the extent of treatment.
                </p>

                <h2 className="text-2xl font-semibold mt-4">
                  {/* <FaHeartbeat className="inline mr-2 text-blue-600" /> */}
                  The Nano-Fat Injection SVC procedure involves the following
                  key steps:
                </h2>
                <ul className="list-disc ml-6 space-y-2 text-gray-600">
                  <li>
                    Fat Harvesting: A small amount of fat is typically harvested
                    from an area like the abdomen or thigh using a gentle
                    liposuction technique. This is performed under local
                    anesthesia, ensuring minimal discomfort.
                  </li>
                  <li>
                    Nano-Fat Processing: The harvested fat is then processed
                    using a specialized technique to emulsify it and concentrate
                    the stromal vascular fraction (SVC), which is rich in
                    regenerative cells, including mesenchymal stem cells, growth
                    factors, and cytokines. This process ensures the highest
                    concentration of beneficial cells for injection.
                  </li>
                  <li>
                    Scalp Injection: The highly concentrated nano-fat solution
                    is then meticulously injected into the areas of the scalp
                    experiencing thinning or hair loss. Dr. Kunal Sayani uses
                    fine needles to ensure precise and even distribution,
                    maximizing the regenerative effect on the hair follicles.
                  </li>
                  <li>
                    Anesthesia: The entire procedure is performed under local
                    anesthesia to ensure patient comfort throughout the
                    operation.
                  </li>
                </ul>

                <p>
                  Dr. Kunal Sayani employs meticulous techniques and pays close
                  attention to detail to ensure optimal cellular viability and
                  effective delivery to the target areas, promoting natural and
                  significant hair regrowth.
                </p>

                <h2
                  id="recovery"
                  className="text-3xl font-semibold mt-4 text-[#10217D] font-notoSans"
                >
                  {/* <FaCheckCircle className="inline mr-2 text-blue-600" /> */}
                  Recovery & Aftercare (Post-Op Instructions)
                </h2>
                <p>
                  The recovery period after Nano-Fat Injection SVC is relatively
                  short and crucial for achieving optimal results. It's
                  essential to follow Dr. Kunal Sayani's post-operative
                  instructions diligently. Here's what you can generally expect:
                </p>

                <h3 className="font-semibold mt-4">
                  Immediately After Procedure:
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    You may experience some mild swelling, redness, or
                    tenderness in the treated areas of the scalp and the fat
                    harvest site.
                  </li>
                  <li>
                    Pain medication will be prescribed to manage any discomfort.
                  </li>
                  <li>
                    You can typically resume most normal activities within 24-48
                    hours.
                  </li>
                </ul>

                <p>
                  Activity Restrictions: Avoid strenuous exercise, heavy
                  lifting, and activities that cause excessive sweating for at
                  least 3-5 days. Avoid direct sun exposure on the treated scalp
                  for a few days.
                </p>

                <p>
                  Scalp Care: Keep the treated area clean and dry. Avoid washing
                  your hair for the first 24-48 hours as advised by Dr.
                  Kunal Sayani. When you do wash your hair, use a gentle
                  shampoo and avoid aggressive scrubbing.
                </p>

                <p>
                  Pain Management: Mild pain or discomfort is expected but
                  usually subsides within a few days. Over-the-counter pain
                  relievers or prescribed medication can help manage this.
                </p>

                <p>
                  Follow-Up: Regular follow-up visits with Dr. Kunal Sayani will
                  monitor your progress and address any concerns. Full recovery
                  may take several days, with initial results becoming visible
                  within 3-6 months as hair growth cycles progress.
                </p>

                <h3 className="font-semibold mt-4">
                  Immediate Post-Op (0–3 Days):
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    Expect minimal swelling and tenderness at the injection
                    sites on the scalp and the fat harvest area.
                  </li>
                  <li>
                    Any discomfort is typically manageable with prescribed
                    medications.
                  </li>
                  <li>Avoid touching or rubbing the treated scalp area.</li>
                </ul>

                <h3 className="font-semibold mt-4">
                  Short-Term Recovery (1–2 Weeks):
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    Gradually resume normal daily activities, avoiding vigorous
                    exercise.
                  </li>
                  <li>
                    Attend all scheduled follow-up appointments with Dr.
                    Kunal Sayani to monitor progress.
                  </li>
                  <li>
                    Maintain a healthy diet and stay hydrated to support the
                    healing process.
                  </li>
                </ul>

                <h3 className="font-semibold mt-4">
                  Long-Term Recovery (1–6 Months+):
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    Initial hair growth may become noticeable around 3-6 months,
                    with continued improvement over the next year.
                  </li>
                  <li>
                    The full benefits of the treatment will become more apparent
                    as dormant follicles are stimulated and new hair cycles
                    begin.
                  </li>
                </ul>

                <p>
                  Dr. Kunal Sayani will remain involved throughout your recovery
                  to ensure your comfort, answer any concerns, and help you
                  achieve the best possible hair restoration outcome.
                </p>

                <h2
                  id="risks-safety"
                  className="text-3xl font-semibold mt-4 text-[#10217D] font-notoSans"
                >
                  {/* <FaShieldAlt className="inline mr-2 text-blue-600" /> */}
                  Risks & Safety
                </h2>
                <p>
                  While Nano-Fat Injection SVC for hair growth is generally safe
                  when performed by an experienced surgeon like Dr. Kunal
                  Sayani, it is important to be aware of potential risks. Dr.
                  Kunal Sayani prioritizes patient safety and employs advanced
                  techniques to minimize complications. Possible risks include:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    Infection: Proper sterile techniques and post-op care reduce
                    this risk.
                  </li>
                  <li>
                    Bleeding: Minimal bleeding is possible at the harvest and
                    injection sites.
                  </li>
                  <li>
                    Swelling and Bruising: Temporary swelling and bruising can
                    occur but typically resolve within a few days.
                  </li>
                  <li>
                    Numbness or Altered Sensation: Temporary changes in
                    sensation at the fat harvest site or treated scalp area may
                    occur but typically resolve over time.
                  </li>
                  <li>
                    Uneven Results: While rare, uneven hair growth can occur,
                    requiring further treatment.
                  </li>
                  <li>
                    Fat Necrosis (at harvest site): A rare complication where
                    fat cells at the harvest site do not survive.
                  </li>
                </ul>

                <h3 className="font-semibold mt-4">Safety Measures:</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    Conducting a thorough medical evaluation to ensure you are a
                    suitable candidate for the procedure.
                  </li>
                  <li>
                    Utilizing advanced, sterile techniques for fat harvesting
                    and processing.
                  </li>
                  <li>
                    Providing detailed pre-operative instructions to optimize
                    your health before the procedure.
                  </li>
                  <li>
                    Offering comprehensive post-operative care and support.
                  </li>
                  <li>
                    Being readily available to address any concerns or
                    complications that may arise.
                  </li>
                </ul>

                <p>
                  By choosing an experienced and board-certified aesthetic
                  surgeon like Dr. Kunal Sayani, you can significantly mitigate
                  the associated risks. During your consultation, Dr. Kunal
                  Sayani will discuss these potential risks in detail and answer
                  any questions you may have, ensuring you make an informed
                  decision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
