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

              <h3 className="text-2xl font-semibold mt-4">
                {data.content.procedureDetails.title}
              </h3>
              <ul className="list-disc ml-6 space-y-2 mb-3">
                {data.content.procedureDetails.steps.map((step, index) => (
                  <li key={index}>
                    <strong>{step.title}:</strong> {step.description}
                    {step.items && (
                      <ul className="list-disc ml-6 space-y-1 mt-2">
                        {step.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {step.techniques && (
                      <ul className="list-disc ml-6 space-y-1 mt-2">
                        {step.techniques.map((technique, idx) => (
                          <li key={idx}>{technique}</li>
                        ))}
                      </ul>
                    )}
                    {step.additionalInfo && (
                      <p className="mt-2">{step.additionalInfo}</p>
                    )}
                    {step.steps && (
                      <ul className="list-disc ml-6 space-y-1 mt-2">
                        {step.steps.map((subStep, idx) => (
                          <li key={idx}>{subStep}</li>
                        ))}
                      </ul>
                    )}
                    {step.note && <p className="mt-2">{step.note}</p>}
                  </li>
                ))}
              </ul>

              <div className={`${readMore ? "blur-[3px]" : "blur-[0px]"}`}>
                <h3 className="text-2xl font-semibold mt-4">
                  {data.content.recoveryAftercare.title}
                </h3>

                <h4 className="font-semibold mt-4">
                  {data.content.recoveryAftercare.stages.immediatePostOp.title}
                </h4>
                <ul className="list-disc ml-6 space-y-2">
                  {data.content.recoveryAftercare.stages.immediatePostOp.instructions.map(
                    (instruction, index) => (
                      <li key={index}>{instruction}</li>
                    )
                  )}
                </ul>
                <h5 className="font-semibold mt-4">Pain Management:</h5>
                <ul className="list-disc ml-6 space-y-2">
                  {data.content.recoveryAftercare.stages.immediatePostOp.painManagement.map(
                    (item, index) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>
                <h5 className="font-semibold mt-4">Activity Restrictions:</h5>
                <ul className="list-disc ml-6 space-y-2">
                  {data.content.recoveryAftercare.stages.immediatePostOp.activityRestrictions.map(
                    (item, index) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>
                <h5 className="font-semibold mt-4">Follow-Up:</h5>
                <ul className="list-disc ml-6 space-y-2">
                  {data.content.recoveryAftercare.stages.immediatePostOp.followUp.map(
                    (item, index) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>

                <h4 className="font-semibold mt-4">
                  {data.content.recoveryAftercare.stages.firstWeek.title}
                </h4>
                <ul className="list-disc ml-6 space-y-2">
                  {data.content.recoveryAftercare.stages.firstWeek.instructions.map(
                    (instruction, index) => (
                      <li key={index}>{instruction}</li>
                    )
                  )}
                </ul>

                <h4 className="font-semibold mt-4">
                  {data.content.recoveryAftercare.stages.weeksTwoToFour.title}
                </h4>
                <ul className="list-disc ml-6 space-y-2">
                  {data.content.recoveryAftercare.stages.weeksTwoToFour.instructions.map(
                    (instruction, index) => (
                      <li key={index}>{instruction}</li>
                    )
                  )}
                </ul>

                <h4 className="font-semibold mt-4">
                  {data.content.recoveryAftercare.stages.weeksFourToSix.title}
                </h4>
                <ul className="list-disc ml-6 space-y-2">
                  {data.content.recoveryAftercare.stages.weeksFourToSix.instructions.map(
                    (instruction, index) => (
                      <li key={index}>{instruction}</li>
                    )
                  )}
                </ul>

                <p className="mt-4">{data.content.recoveryAftercare.note}</p>

                <h3 className="text-2xl font-semibold mt-4">
                  {data.content.risksAndSafety.title}
                </h3>
                <p className="mb-4">
                  {data.content.risksAndSafety.description}
                </p>
                <h4 className="font-semibold mt-4">Common Risks:</h4>
                <ul className="list-disc ml-6 space-y-2">
                  {data.content.risksAndSafety.commonRisks.map(
                    (risk, index) => (
                      <li key={index}>{risk}</li>
                    )
                  )}
                </ul>
                <h4 className="font-semibold mt-4">Rare but Serious Risks:</h4>
                <ul className="list-disc ml-6 space-y-2">
                  {data.content.risksAndSafety.rareRisks.map((risk, index) => (
                    <li key={index}>{risk}</li>
                  ))}
                </ul>
                <p className="mt-4">
                  {data.content.risksAndSafety.safetyMeasures}
                </p>
              </div>
            </div>

            <button onClick={toggleReadMore}>
              <p className="mt-4 px-8 py-3 bg-[#1AAEBC] text-base font-semibold text-white rounded-lg hover:bg-blue-500">{`${
                readMore ? "Read More" : "Read Less"
              }`}</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
