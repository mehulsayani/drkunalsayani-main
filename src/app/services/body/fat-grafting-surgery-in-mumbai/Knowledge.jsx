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
                What a Fat-Grafting Service Can Achieve:
              </h2>

              <p className="mb-4">
                Fat grafting can provide a wide array of aesthetic and
                reconstructive enhancements, including:
              </p>
              <ul className="list-disc ml-6 space-y-2 mb-3">
                <li>
                  Restoration of youthful volume to the face, addressing
                  hollows in the cheeks, temples, and under-eye area.
                </li>
                <li>
                  Softening of facial wrinkles and folds, such as nasolabial
                  folds and marionette lines.
                </li>
                <li>
                  A modest increase in breast size and improvement in shape and
                  symmetry.
                </li>
                <li>
                  Enhancement of the buttocks, creating a fuller and more
                  lifted appearance (commonly known as a Brazilian Butt Lift).
                </li>
                <li>
                  Rejuvenation of the hands, diminishing the appearance of
                  prominent veins and tendons.
                </li>
                <li>
                  Improvement in the appearance of scars, including acne scars
                  and those from previous surgeries.
                </li>
                <li>
                  A more contoured and proportionate physique by removing fat
                  from one area and adding it to another.
                </li>
                <li>Enhanced self-confidence and a more positive self-image.</li>
              </ul>
              <div>
                <p>
                  During your personalized consultation, your surgeon will
                  conduct a thorough evaluation of your individual needs and
                  aesthetic aspirations to ascertain if fat grafting is the
                  optimal procedure for you. They will explain the different
                  applications of fat grafting and recommend the most suitable
                  approach to help you achieve your desired results.
                </p>

                <h1 className="text-3xl font-bold mb-4 text-[#10217D] font-notoSans">
                  Procedure Details
                </h1>
                <p>
                  The fat grafting procedure is a meticulously executed surgery,
                  customized to the patient's unique anatomy and aesthetic
                  objectives. Below is a comprehensive overview of the process:
                </p>

                <h2 className="text-2xl font-semibold mt-4">
                  {/* <FaStethoscope className="inline mr-2 text-blue-600" /> */}
                  Consultation
                </h2>
                <p>
                  Your journey commences with an in-depth consultation with your
                  plastic surgeon. During this meeting, they will review your
                  medical history, assess the potential donor and recipient
                  sites, and discuss your goals and expectations. This allows the
                  surgeon to determine the most appropriate technique and plan
                  for your procedure. The fat grafting procedure is typically
                  performed under local anesthesia with sedation or general
                  anesthesia, depending on the volume of fat being transferred
                  and the number of areas being treated. The surgery can take
                  anywhere from one to four hours.
                </p>

                <h2 className="text-2xl font-semibold mt-4">
                  {/* <FaStethoscope className="inline mr-2 text-blue-600" /> */}
                  Types of Fat Grafting Procedures:
                </h2>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    Microfat Grafting: This technique uses very small fat
                    particles to address fine lines, wrinkles, and delicate
                    areas like the under-eyes.
                  </li>
                  <li>
                    Structural Fat Grafting: This involves injecting fat in
                    multiple layers to provide volume and structure to larger
                    areas such as the cheeks, breasts, and buttocks.
                  </li>
                  <li>
                    Nanofat Grafting: This innovative technique utilizes
                    emulsified fat that is rich in stem cells to improve skin
                    texture, tone, and the appearance of fine scars.
                  </li>
                </ul>

                <h2 className="text-2xl font-semibold mt-4">
                  {/* <FaHeartbeat className="inline mr-2 text-blue-600" /> */}
                  The fat grafting procedure consists of the following key
                  steps:
                </h2>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    Anesthesia: The surgery is performed with the appropriate
                    anesthesia to ensure your comfort throughout the procedure.
                  </li>
                  <li>
                    Fat Harvesting: A small incision is made in the donor area,
                    and a thin tube called a cannula is used to gently suction
                    out the excess fat, similar to liposuction.
                  </li>
                  <li>
                    Fat Purification: The harvested fat is then carefully
                    processed to separate the viable fat cells from other
                    fluids, such as oil and blood. This is often done through
                    centrifugation or filtration to ensure only the healthiest
                    fat is used for transfer.
                  </li>
                  <li>
                    Fat Injection: The purified fat is then meticulously
                    injected into the recipient area in small droplets at
                    various depths to ensure an even distribution and maximize
                    the chances of fat survival.
                  </li>
                  <li>
                    Closure: The small incisions from the liposuction are then
                    closed with sutures and dressed. The injection sites
                    typically do not require sutures.
                  </li>
                </ul>

                <p>
                  Your surgeon will utilize precise surgical techniques and a
                  keen artistic eye to create natural-looking and long-lasting
                  results.
                </p>

                <h2
                  id="recovery"
                  className="text-3xl font-semibold mt-4 text-[#10217D] font-notoSans"
                >
                  {/* <FaCheckCircle className="inline mr-2 text-blue-600" /> */}
                  Recovery & Aftercare (Post-Op Instructions)
                </h2>
                <p>
                  A smooth and successful recovery is vital for achieving the
                  best possible outcome from your fat grafting procedure. It is
                  essential to diligently follow your surgeon's post-operative
                  instructions. Here is a general outline of what to expect:
                </p>

                <h3 className="font-semibold mt-4">
                  Immediately After Surgery:
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    You will have dressings on the donor and recipient sites.
                  </li>
                  <li>
                    You may experience some mild pain, swelling, and bruising in
                    both areas, which can be managed with prescribed pain
                    medication.
                  </li>
                  <li>
                    You may be required to wear a compression garment over the
                    donor area to minimize swelling and support healing.
                  </li>
                  <li>
                    It is crucial to avoid putting pressure on the grafted area
                    to protect the newly transferred fat cells.
                  </li>
                </ul>

                <p>
                  Activity Restrictions: Gentle walking is encouraged to promote
                  circulation. However, you should avoid strenuous activities,
                  heavy lifting, and any pressure on the treated areas for
                  several weeks.
                </p>

                <p>
                  Incision and Site Care: Keep the incision sites clean and dry.
                  You will receive specific instructions on when you can shower.
                  It is important to protect the treated areas from excessive sun
                  exposure.
                </p>

                <p>
                  Wearing Compression Garments: If a compression garment is
                  provided for the donor site, it should be worn as directed by
                  your surgeon to help reduce swelling and contour the area.
                </p>

                <p>
                  Diet and Hydration: Maintaining a healthy diet and staying
                  well-hydrated is crucial for healing.
                </p>

                <p>
                  Follow-Up: You will have follow-up appointments with your
                  surgeon to monitor your healing progress and address any
                  questions or concerns.
                </p>

                <p>
                  Posture and Positioning: Depending on the area treated (e.g.,
                  buttocks), you may need to avoid sitting directly on the area
                  for a specified period and sleep in a particular position.
                </p>

                <p>
                  Full recovery and the final results will become apparent over
                  several months as the swelling subsides and the transferred fat
                  establishes a new blood supply.
                </p>

                <h3 className="font-semibold mt-4">
                  Immediate Post-Op (0–7 Days):
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    Expect noticeable swelling and bruising in both the donor
                    and recipient areas.
                  </li>
                  <li>
                    Discomfort is typically manageable with prescribed
                    medication.
                  </li>
                  <li>
                    Follow all instructions regarding compression garments and
                    avoiding pressure on grafted sites.
                  </li>
                </ul>

                <h3 className="font-semibold mt-4">
                  Short-Term Recovery (1–4 Weeks):
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>You can gradually return to light daily activities.</li>
                  <li>
                    Attend all scheduled follow-up appointments.
                  </li>
                  <li>
                    Continue to wear any compression garments as advised.
                  </li>
                  <li>
                    Maintain a healthy lifestyle to support the healing process.
                  </li>
                </ul>

                <h3 className="font-semibold mt-4">
                  Long-Term Recovery (1–3 Months+):
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    You can typically resume most exercise routines after being
                    cleared by your surgeon.
                  </li>
                  <li>
                    The final results will continue to refine as swelling fully
                    resolves. A portion of the transferred fat will be naturally
                    absorbed by the body, and the remaining fat will be
                    permanent.
                  </li>
                  <li>Enjoy your enhanced contours and rejuvenated appearance.</li>
                </ul>

                <p>
                  Your surgeon and their team will provide continuous support
                  throughout your recovery to ensure a comfortable experience and
                  help you achieve your desired aesthetic outcome.
                </p>

                <h2
                  id="risks-safety"
                  className="text-3xl font-semibold mt-4 text-[#10217D] font-notoSans"
                >
                  {/* <FaShieldAlt className="inline mr-2 text-blue-600" /> */}
                  Risks & Safety
                </h2>
                <p>
                  While fat grafting is generally considered a safe procedure,
                  especially since it uses your own body's tissue, it is
                  important to be aware of the potential risks. A qualified and
                  experienced plastic surgeon will prioritize your safety and
                  take all necessary precautions to minimize complications.
                  Possible risks include:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    Infection: Proper surgical technique and post-operative care
                    significantly reduce this risk.
                  </li>
                  <li>
                    Bleeding or Hematoma: Careful surgical maneuvers help to
                    prevent excessive bleeding.
                  </li>
                  <li>
                    Scarring: Incisions are typically small and placed in
                    discreet locations to minimize visible scarring.
                  </li>
                  <li>
                    Asymmetry or Irregularities: The surgeon's skill and
                    experience are crucial for achieving a smooth and
                    symmetrical result.
                  </li>
                  <li>
                    Fat Necrosis (death of fat cells): This can lead to hard
                    lumps, which may require further treatment.
                  </li>
                  <li>
                    Fat Absorption: Not all of the transferred fat will survive.
                    The surgeon will account for this by slightly overfilling
                    the area. In some cases, a follow-up procedure may be desired
                    for additional volume.
                  </li>
                  <li>
                    Changes in Sensation: Temporary numbness in the treated
                    areas may occur but usually resolves over time.
                  </li>
                  <li>
                    Risks Associated with Anesthesia: Working with a
                    board-certified anesthesiologist ensures the safe
                    administration of anesthesia.
                  </li>
                </ul>

                <h3 className="font-semibold mt-4">Safety Measures:</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    Conducting a thorough medical evaluation to confirm your
                    suitability for the procedure.
                  </li>
                  <li>
                    Utilizing advanced surgical techniques and operating in
                    accredited surgical facilities.
                  </li>
                  <li>
                    Providing comprehensive pre-operative instructions to
                    optimize your health before surgery.
                  </li>
                  <li>
                    Offering dedicated post-operative care and support.
                  </li>
                  <li>
                    Being readily available to address any concerns or
                    complications that may arise.
                  </li>
                </ul>

                <p>
                  By selecting a board-certified plastic surgeon with extensive
                  experience in fat grafting, you can significantly mitigate the
                  associated risks. During your consultation, your surgeon will
                  discuss these potential risks in detail, ensuring you can make
                  a well-informed decision about your treatment.
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