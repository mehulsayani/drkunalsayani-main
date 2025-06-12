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

              <div>
                <h2 className="text-2xl font-semibold mt-4">
                  {data.beforeProcedure.title}
                </h2>
                <p className="mb-4">{data.beforeProcedure.description}</p>
                <ul className="list-disc ml-6 space-y-2 mb-3">
                  {data.beforeProcedure.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                <h2 className="text-2xl font-semibold mt-4">
                  {data.procedure.title}
                </h2>
                <p className="mb-4">{data.procedure.description}</p>

                <h3 className="text-xl font-semibold mt-4">
                  {data.procedure.lipomaRemoval.title}
                </h3>
                <ul className="list-disc ml-6 space-y-2 mb-3">
                  {data.procedure.lipomaRemoval.steps.map((step, index) => (
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

                <h3 className="text-xl font-semibold mt-4">
                  {data.procedure.cystRemoval.title}
                </h3>
                <ul className="list-disc ml-6 space-y-2 mb-3">
                  {data.procedure.cystRemoval.steps.map((step, index) => (
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

                <h3 className="text-xl font-semibold mt-4">
                  {data.procedure.scarRevision.title}
                </h3>
                <ul className="list-disc ml-6 space-y-2 mb-3">
                  {data.procedure.scarRevision.steps.map((step, index) => (
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

                <h2
                  id="recovery"
                  className="text-3xl font-semibold mt-4 text-[#10217D] font-notoSans"
                >
                  {data.recovery.title}
                </h2>
                <p className="mb-4">{data.recovery.description}</p>
                {data.recovery.phases.map((phase, index) => (
                  <div key={index}>
                    <h3 className="font-semibold mt-4">{phase.phase}</h3>
                    <ul className="list-disc ml-6 space-y-2 mb-3">
                      {phase.points.map((point, idx) => (
                        <li key={idx}>
                          {point.includes("Silicone Sheeting/Gel") ? (
                            <>
                              {point.split(":")[0]}:
                              <ul className="list-disc ml-6 space-y-1">
                                <li>{point.split(":")[1].split(",")[0]}</li>
                                <li>{point.split(":")[1].split(",")[1]}</li>
                                <li>{point.split(":")[1].split(",")[2]}</li>
                              </ul>
                            </>
                          ) : (
                            point
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <h2
                  id="risks-safety"
                  className="text-3xl font-semibold mt-4 text-[#10217D] font-notoSans"
                >
                  {data.risks.title}
                </h2>
                <p className="mb-4">{data.risks.description}</p>
                <h3 className="font-semibold mt-4">General Surgical Risks:</h3>
                <ul className="list-disc ml-6 space-y-2 mb-3">
                  {data.risks.generalSurgicalRisks.map((risk, index) => (
                    <li key={index}>{risk}</li>
                  ))}
                </ul>
                <h3 className="font-semibold mt-4">
                  Specific Risks for Lipoma/Cyst Removal:
                </h3>
                <ul className="list-disc ml-6 space-y-2 mb-3">
                  {data.risks.lipomaCystRisks.map((risk, index) => (
                    <li key={index}>{risk}</li>
                  ))}
                </ul>
                <h3 className="font-semibold mt-4">
                  Specific Risks for Scar Revision:
                </h3>
                <ul className="list-disc ml-6 space-y-2 mb-3">
                  {data.risks.scarRevisionRisks.map((risk, index) => (
                    <li key={index}>{risk}</li>
                  ))}
                </ul>
                <h3 className="font-semibold mt-4">
                  Minimizing Risks with Dr. Kunal Sayani:
                </h3>
                <ul className="list-disc ml-6 space-y-2 mb-3">
                  {data.risks.minimizingRisks.map((measure, index) => (
                    <li key={index}>{measure}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
