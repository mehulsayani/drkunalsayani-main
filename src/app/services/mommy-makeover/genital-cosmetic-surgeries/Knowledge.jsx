import { ArrowUpRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import data from "./Knowledge.json";

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
          <div className="w-[28%] max-lg:hidden max-lg:w-[90%] h-[28rem] sticky top-[5rem] mr-8 rounded-lg overflow-hidden shadow-lg">
            <div className="bg-[#1aaebcaf] py-4 px-6">
              <h1 className="text-white text-center font-bold text-2xl">
                BOOK CONSULTATION
              </h1>
              <form className="space-y-4 py-8">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="border border-gray-300 p-3 rounded-lg w-full bg-white"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="border border-gray-300 p-3 rounded-lg w-full bg-white"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="border border-gray-300 p-3 rounded-lg w-full bg-white"
                  />
                  <select className="border border-gray-300 text-gray-500 p-3 rounded-lg w-full bg-white">
                    <option className="text-black">Services</option>
                    <option className="text-black">Skin Care</option>
                    <option className="text-black">Hair Treatment</option>
                    <option className="text-black">Body Wellness</option>
                  </select>
                </div>
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="border border-gray-300 p-3 rounded w-full bg-white"
                ></textarea>
                <button
                  type="submit"
                  className="bg-yellow-300 w-full text-black font-semibold px-6 py-3 rounded-lg hover:bg-blue-500 transition"
                >
                  Book Consultation
                </button>
              </form>
            </div>
          </div>
          <div
            className={`w-[70%] ${
              readMore ? "min-h-[7rem]" : "min-h-[70rem]"
            } max-lg:w-[90%]`}
          >
            <div
              className={`text-gray-800 relative ${
                readMore ? "h-98 overflow-hidden" : "text-blue-500"
              }`}
            >
              <h2 className="text-3xl font-bold font-notoSans mb-2 flex items-center text-[#10217D]">
                {data.title}
              </h2>

              <p className="mb-4">{data.introduction}</p>

              <h2 className="text-2xl font-semibold mt-4">
                {data.procedure.title}
              </h2>
              <h3 className="font-semibold mt-4">
                {data.procedure.steps[0].step}
              </h3>
              <p className="mb-2">{data.procedure.steps[0].description}</p>
              <ul className="list-disc ml-6 space-y-2 mb-3">
                {data.procedure.steps[0].points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              <div className={`${readMore ? "blur-[3px]" : "blur-[0px]"}`}>
                {data.procedure.steps.slice(1).map((step, index) => (
                  <div key={index}>
                    <h3 className="font-semibold mt-4">{step.step}</h3>
                    <p className="mb-2">{step.description}</p>
                    <ul className="list-disc ml-6 space-y-2 mb-3">
                      {step.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}

                <h2 className="text-2xl font-semibold mt-4">
                  {data.recovery.title}
                </h2>
                <p className="mb-4">{data.recovery.introduction}</p>
                <h3 className="font-semibold mt-4">
                  {data.recovery.phases[0].phase}
                </h3>
                <ul className="list-disc ml-6 space-y-2 mb-3">
                  {data.recovery.phases[0].points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                {data.recovery.phases.slice(1).map((phase, index) => (
                  <div key={index}>
                    <h3 className="font-semibold mt-4">{phase.phase}</h3>
                    <ul className="list-disc ml-6 space-y-2 mb-3">
                      {phase.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                <h3 className="font-semibold mt-4">
                  {data.recovery.contactInstructions.title}
                </h3>
                <ul className="list-disc ml-6 space-y-2 mb-3">
                  {data.recovery.contactInstructions.points.map(
                    (point, index) => (
                      <li key={index}>{point}</li>
                    )
                  )}
                </ul>
                <p className="mb-4">{data.recovery.contactInstructions.note}</p>

                <h2 className="text-2xl font-semibold mt-4">
                  {data.risks.title}
                </h2>
                <p className="mb-4">{data.risks.introduction}</p>
                <h3 className="font-semibold mt-4">General Safety Measures</h3>
                <ul className="list-disc ml-6 space-y-2 mb-3">
                  {data.risks.safetyMeasures.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <h3 className="font-semibold mt-4">Potential Risks</h3>
                <ul className="list-disc ml-6 space-y-2 mb-3">
                  {data.risks.potentialRisks.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="mb-4">{data.risks.conclusion}</p>
              </div>
            </div>

            <button onClick={toggleReadMore}>
              <p className="mt-4 px-8 py-3 bg-[#1AAEBC] text-base font-semibold text-white rounded-lg hover:bg-blue-500">
                {readMore ? "Read More" : "Read Less"}
              </p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
