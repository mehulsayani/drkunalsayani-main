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
          <div
            className="w-[28%] max-lg:hidden max-lg:w-[90%] h-[28rem] sticky top-[5rem] mr-8 rounded-lg overflow-hidden shadow-lg"
          >
            {/* Header */}
            <div className="bg-[#1AAEBC] py-4 px-6">
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
                {data.consultation.title}
              </h2>
              <p className="mb-4">{data.consultation.description}</p>
              <ul className="list-disc ml-6 space-y-2 mb-3">
                {data.consultation.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              <div className={`${readMore ? "blur-[3px]" : "blur-[0px]"}`}>
                <h2 className="text-2xl font-semibold mt-4">
                  {data.preparation.title}
                </h2>
                <p className="mb-4">{data.preparation.description}</p>
                <ul className="list-disc ml-6 space-y-2 mb-3">
                  {data.preparation.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                <h2 className="text-2xl font-semibold mt-4">
                  {data.procedure.title}
                </h2>
                <p className="mb-4">{data.procedure.description}</p>
                <ul className="list-disc ml-6 space-y-2 mb-3">
                  {data.procedure.steps.map((step, index) => (
                    <li key={index}>
                      <strong>{step.step}:</strong>{" "}
                      {step.description.map((desc, idx) => (
                        <span key={idx}>
                          {desc}
                          {idx < step.description.length - 1 && <br />}
                        </span>
                      ))}
                    </li>
                  ))}
                </ul>
                <p className="mb-4">{data.procedure.conclusion}</p>

                <h2 className="text-2xl font-semibold mt-4">
                  {data.recovery.title}
                </h2>
                <p className="mb-4">{data.recovery.description}</p>
                {data.recovery.phases.map((phase, index) => (
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
                  {data.recovery.instructions.title}
                </h3>
                <ul className="list-disc ml-6 space-y-2 mb-3">
                  {data.recovery.instructions.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                <h2 className="text-2xl font-semibold mt-4">
                  {data.risks.title}
                </h2>
                <p className="mb-4">{data.risks.description}</p>
                <h3 className="font-semibold mt-4">
                  {data.risks.generalRisks.title}
                </h3>
                <ul className="list-disc ml-6 space-y-2 mb-3">
                  {data.risks.generalRisks.points.map((risk, index) => (
                    <li key={index}>{risk}</li>
                  ))}
                </ul>
                <h3 className="font-semibold mt-4">
                  {data.risks.specificRisks.title}
                </h3>
                <ul className="list-disc ml-6 space-y-2 mb-3">
                  {data.risks.specificRisks.points.map((risk, index) => (
                    <li key={index}>{risk}</li>
                  ))}
                </ul>
                <h3 className="font-semibold mt-4">
                  {data.risks.safetyMeasures.title}
                </h3>
                <ul className="list-disc ml-6 space-y-2 mb-3">
                  {data.risks.safetyMeasures.points.map((measure, index) => (
                    <li key={index}>{measure}</li>
                  ))}
                </ul>
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