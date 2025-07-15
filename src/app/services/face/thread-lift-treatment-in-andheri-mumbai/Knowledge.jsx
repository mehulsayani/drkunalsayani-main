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
                <h3 className="font-semibold mt-4">Procedure Steps:</h3>
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

                <h3 className="text-2xl font-semibold mt-4">
                  {data.procedure.treatedAreas.title}
                </h3>
                <ul className="list-disc ml-6 space-y-2 mb-3">
                  {data.procedure.treatedAreas.areas.map((area, index) => (
                    <li key={index}>{area}</li>
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
                        <li key={idx}>{point}</li>
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
                <h3 className="font-semibold mt-4">
                  Common (Temporary) Side Effects:
                </h3>
                <ul className="list-disc ml-6 space-y-2 mb-3">
                  {data.risks.commonSideEffects.map((effect, index) => (
                    <li key={index}>{effect}</li>
                  ))}
                </ul>
                <h3 className="font-semibold mt-4">
                  Less Common (but possible) Side Effects:
                </h3>
                <ul className="list-disc ml-6 space-y-2 mb-3">
                  {data.risks.lessCommonSideEffects.map((effect, index) => (
                    <li key={index}>{effect}</li>
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
