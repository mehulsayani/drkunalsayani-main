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
          <div>
            <div>
              <h2 className="text-3xl font-bold font-notoSans mb-2 flex items-center text-[#10217D]">
                {data.title}
              </h2>

              <h3 className="text-2xl font-semibold mt-4">
                {data.content.procedureDetails.title}
              </h3>
              <p className="mb-4">
                {data.content.procedureDetails.description}
              </p>
              <ul className="list-disc ml-6 space-y-2 mb-3">
                {data.content.procedureDetails.steps.map((step, index) => (
                  <li key={index}>
                    <strong>{step.title}:</strong> {step.description}
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
                  </li>
                ))}
              </ul>

              <div>
                <h3 id="recovery" className="text-2xl font-semibold mt-4">
                  {data.content.recoveryAftercare.title}
                </h3>
                <p className="mb-4">
                  {data.content.recoveryAftercare.description}
                </p>

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
                <h5 className="font-semibold mt-4">Pain and Medication:</h5>
                <ul className="list-disc ml-6 space-y-2">
                  {data.content.recoveryAftercare.stages.immediatePostOp.painAndMedication.map(
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
                <h5 className="font-semibold mt-4">Incision and Scar Care:</h5>
                <ul className="list-disc ml-6 space-y-2">
                  {data.content.recoveryAftercare.stages.immediatePostOp.incisionAndScarCare.map(
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
                  {data.content.recoveryAftercare.stages.twoToFourWeeks.title}
                </h4>
                <ul className="list-disc ml-6 space-y-2">
                  {data.content.recoveryAftercare.stages.twoToFourWeeks.instructions.map(
                    (instruction, index) => (
                      <li key={index}>{instruction}</li>
                    )
                  )}
                </ul>

                <h4 className="font-semibold mt-4">
                  {data.content.recoveryAftercare.stages.oneToThreeMonths.title}
                </h4>
                <ul className="list-disc ml-6 space-y-2">
                  {data.content.recoveryAftercare.stages.oneToThreeMonths.instructions.map(
                    (instruction, index) => (
                      <li key={index}>{instruction}</li>
                    )
                  )}
                </ul>

                <h4 className="font-semibold mt-4">
                  {data.content.recoveryAftercare.stages.afterThreeMonths.title}
                </h4>
                <ul className="list-disc ml-6 space-y-2">
                  {data.content.recoveryAftercare.stages.afterThreeMonths.instructions.map(
                    (instruction, index) => (
                      <li key={index}>{instruction}</li>
                    )
                  )}
                </ul>

                <h3 id="risks-safety" className="text-2xl font-semibold mt-4">
                  {data.content.risksAndSafety.title}
                </h3>
                <p className="mb-4">
                  {data.content.risksAndSafety.description}
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  {data.content.risksAndSafety.risks.map((risk, index) => (
                    <li key={index}>{risk}</li>
                  ))}
                </ul>
                <p className="mt-4">
                  {data.content.risksAndSafety.safetyMeasures}
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
