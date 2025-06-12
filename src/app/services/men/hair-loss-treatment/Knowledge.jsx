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
                What a Tummy Tuck Can Achieve:
              </h2>

              <p className="mb-4">
                A tummy tuck can offer a range of aesthetic improvements,
                including:
              </p>
              <ul className="list-disc ml-6 space-y-2 mb-3">
                <li>Removal of excess skin and fat from the abdomen.</li>
                <li>
                  Tightening of weakened or separated abdominal muscles
                  (diastasis recti).
                </li>
                <li>Creation of a flatter and firmer abdominal contour.</li>
                <li>
                  Improvement in the appearance of stretch marks located on the
                  lower abdomen (though those on the upper abdomen may not be
                  affected).
                </li>
                <li>A more proportionate and balanced physique.</li>
                <li>Enhanced confidence and self-esteem.</li>
              </ul>
              <div>
                <p>
                  Dr. Kunal Sayani understands that each patient's anatomy and
                  aesthetic goals are unique. During your personalized
                  consultation with him, he will thoroughly assess your
                  individual needs, discuss your expectations, and determine if
                  a tummy tuck is the right procedure to help you achieve your
                  desired outcome. He will explain the different types of tummy
                  tucks, such as a full tummy tuck, mini tummy tuck, and
                  extended tummy tuck, and recommend the most suitable approach
                  for you.
                </p>

                <h1 className="text-3xl font-bold mb-4 text-[#10217D] font-notoSans">
                  Tummy Tuck Procedure with Dr. Kunal Sayani
                </h1>
                <p>
                  The tummy tuck procedure with Dr. Kunal Sayani is typically
                  performed under general anesthesia and takes approximately 2–4
                  hours depending on the complexity and whether it is combined
                  with other procedures (e.g., liposuction). There are different
                  types of tummy tucks, and Dr. Sayani will recommend the best
                  one based on your needs:
                </p>

                <h2 className="text-2xl font-semibold mt-4">
                  {/* <FaStethoscope className="inline mr-2 text-blue-600" /> */}
                  Types of Tummy Tuck Procedures:
                </h2>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    Full Tummy Tuck: Addresses both the upper and lower abdomen.
                    A horizontal incision is made between the hip bones, and the
                    navel is repositioned.
                  </li>
                  <li>
                    Mini Tummy Tuck: Focuses on the lower abdomen below the
                    navel. It involves a smaller incision and is ideal for
                    patients with minimal excess skin and fat.
                  </li>
                  <li>
                    Extended Tummy Tuck: Targets the abdomen and flanks (love
                    handles). It’s suitable for patients with significant skin
                    laxity after major weight loss.
                  </li>
                </ul>

                <h2 className="text-2xl font-semibold mt-4">
                  {/* <FaHeartbeat className="inline mr-2 text-blue-600" /> */}
                  The tummy tuck procedure involves the following key steps:
                </h2>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    Anesthesia: The surgery is performed under general
                    anesthesia to ensure patient comfort throughout the
                    operation.
                  </li>
                  <li>
                    Incision: A horizontal incision is made just above the pubic
                    area, extending from hip to hip. The length and pattern
                    depend on the extent of correction needed.
                  </li>
                  <li>
                    Muscle Repair: The underlying abdominal muscles, often
                    stretched or separated due to pregnancy or weight changes,
                    are tightened with permanent sutures to create a firmer
                    abdominal wall and improve core strength.
                  </li>
                  <li>
                    Removal of Excess Skin and Fat: The surgeon lifts the skin
                    and removes excess fat and skin between the belly button and
                    pubic hair. Liposuction may be used for better contouring in
                    some cases.
                  </li>
                  <li>
                    Repositioning of the Belly Button: The belly button is
                    brought out through a small incision and stitched in its
                    natural position to maintain a normal appearance.
                  </li>
                  <li>
                    Closure: The incisions are closed with sutures, and surgical
                    dressings are applied. Small drainage tubes may be placed to
                    remove excess fluid or blood.
                  </li>
                </ul>

                <p>
                  Dr. Kunal Sayani employs meticulous surgical techniques and
                  pays close attention to detail to minimize scarring and
                  achieve a natural-looking contour.
                </p>

                <h2
                  id="recovery"
                  className="text-3xl font-semibold mt-4 text-[#10217D] font-notoSans"
                >
                  {/* <FaCheckCircle className="inline mr-2 text-blue-600" /> */}
                  Recovery & Aftercare (Post-Op Instructions)
                </h2>
                <p>
                  The recovery period after a tummy tuck is crucial for
                  achieving optimal results and minimizing complications. It's
                  essential to follow Dr. Kunal Sayani's post-operative
                  instructions diligently. Here's what you can generally expect:
                </p>

                <h3 className="font-semibold mt-4">
                  Immediately After Surgery:
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    You will wake up with dressings or bandages on your
                    incisions. You may also have temporary drainage tubes in
                    place.
                  </li>
                  <li>
                    Pain medication will be prescribed to manage discomfort.
                  </li>
                  <li>
                    You will be encouraged to walk short distances as soon as
                    possible to promote circulation and prevent blood clots.
                  </li>
                  <li>
                    You will need to wear a compression garment to help reduce
                    swelling and support the healing tissues.
                  </li>
                </ul>

                <p>
                  Activity Restrictions: Avoid lifting anything heavier than 5
                  to 10 pounds for at least 6 weeks. Strenuous exercise and
                  activities should be avoided for 8 weeks. Walking is
                  encouraged to promote circulation and prevent complications.
                </p>

                <p>
                  Incision Care: Keep incisions clean and dry. Showering is
                  typically allowed 48 hours after drain removal. Avoid soaking
                  in tubs or swimming for 6-8 weeks. Use sunblock (SPF 30 or
                  higher) to protect scars from sun exposure for at least 12
                  months.
                </p>

                <p>
                  Wearing Compression Garments: An abdominal binder or
                  compression garment should be worn 24/7 for about 6 to 8 weeks
                  to reduce swelling, support the abdomen, and prevent fluid
                  buildup.
                </p>

                <p>
                  Pain Management: Pain, swelling, bruising, and tightness are
                  expected but usually subside within a few weeks. Pain
                  medications and sometimes blood thinners may be prescribed.
                </p>

                <p>
                  Diet and Hydration: Maintain a balanced diet rich in lean
                  proteins, whole foods, and plenty of fluids. Avoid
                  constipation by staying hydrated and consuming fiber-rich
                  foods. Stool softeners may be prescribed if needed.
                </p>

                <p>
                  Follow-Up: Regular follow-up visits with Dr. Kunal Sayani will
                  monitor healing, drain removal, and address any concerns.
                </p>

                <p>
                  Posture: Patients may walk slightly bent forward initially and
                  gradually return to normal posture over 3 weeks.
                </p>

                <p>
                  Full recovery may take several weeks, with swelling and
                  numbness resolving over 6 to 12 weeks.
                </p>

                <h3 className="font-semibold mt-4">
                  Immediate Post-Op (0–7 Days):
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    Expect swelling, bruising, and tightness around the abdomen.
                  </li>
                  <li>
                    Pain and discomfort are manageable with prescribed
                    medications.
                  </li>
                  <li>
                    You will be fitted with a compression garment to minimize
                    swelling and support healing tissues.
                  </li>
                  <li>
                    Surgical drains may be placed and are typically removed
                    within a week.
                  </li>
                  <li>
                    Avoid any strenuous activities, including bending, lifting,
                    or exercising.
                  </li>
                  <li>
                    Maintain a slightly bent posture while walking or resting to
                    reduce tension on the incision.
                  </li>
                </ul>

                <h3 className="font-semibold mt-4">
                  Short-Term Recovery (1–4 Weeks):
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Gradually resume light daily activities.</li>
                  <li>
                    Attend all follow-up appointments with Dr. Kunal Sayani to
                    monitor progress.
                  </li>
                  <li>Continue wearing your compression garment as advised.</li>
                  <li>
                    Maintain a healthy, protein-rich diet to promote healing.
                  </li>
                  <li>
                    Avoid smoking or alcohol as they can impede recovery and
                    increase complications.
                  </li>
                </ul>

                <h3 className="font-semibold mt-4">
                  Long-Term Recovery (1–3 Months+):
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    Resume light workouts after clearance from Dr. Sayani.
                  </li>
                  <li>
                    Scars will gradually fade over several months but may take
                    up to a year to mature fully.
                  </li>
                  <li>
                    Final results become more apparent as swelling subsides,
                    typically by 3 to 6 months.
                  </li>
                  <li>
                    Follow scar care recommendations including silicone sheets,
                    massage, or topical treatments.
                  </li>
                </ul>

                <p>
                  Dr. Kunal Sayani will remain involved throughout your recovery
                  to ensure your comfort, answer any concerns, and help you
                  achieve the best possible aesthetic outcome.
                </p>

                <h2
                  id="risks-safety"
                  className="text-3xl font-semibold mt-4 text-[#10217D] font-notoSans"
                >
                  {/* <FaShieldAlt className="inline mr-2 text-blue-600" /> */}
                  Risks & Safety
                </h2>
                <p>
                  While a tummy tuck is generally safe when performed by an
                  experienced surgeon like Dr. Kunal Sayani, it is important to
                  be aware of potential risks. Dr. Sayani prioritizes patient
                  safety and employs advanced techniques to minimize
                  complications. Possible risks include:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    Infection: Proper wound care and antibiotics reduce this
                    risk.
                  </li>
                  <li>
                    Bleeding: Careful surgical techniques and post-op monitoring
                    help prevent excessive bleeding.
                  </li>
                  <li>
                    Scarring: Scars are inevitable but are strategically placed
                    and fade over time with proper care.
                  </li>
                  <li>
                    Seroma: Fluid accumulation under the skin can occur but is
                    managed with drains and follow-up care.
                  </li>
                  <li>
                    Changes in Sensation: Temporary numbness or altered
                    sensation in the abdominal area may occur but typically
                    resolves over time.
                  </li>
                  <li>
                    Blood Clots: Early ambulation and compression garments
                    reduce this risk.
                  </li>
                  <li>
                    Anesthesia Risks: Dr. Kunal Sayani works with
                    board-certified anesthesiologists to ensure safe
                    administration.
                  </li>
                </ul>

                <p>
                  Dr. Kunal Sayani conducts thorough pre-operative assessments
                  to identify and mitigate risks, ensuring a safe surgical
                  experience. Patients are encouraged to disclose their full
                  medical history and follow all pre- and post-operative
                  instructions.
                </p>

                <h3 className="font-semibold mt-4">Safety Measures:</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    Conducting a thorough medical evaluation to ensure you are a
                    suitable candidate for the procedure.
                  </li>
                  <li>
                    Utilizing advanced surgical techniques and operating in
                    accredited surgical facilities.
                  </li>
                  <li>
                    Providing detailed pre-operative instructions to optimize
                    your health before surgery.
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
                  surgeon like Dr. Kunal Sayani, you can significantly reduce
                  the risks associated with a tummy tuck. During your
                  consultation, Dr. Sayani will discuss these risks in detail
                  and answer any questions you may have, ensuring you make an
                  informed decision.
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
