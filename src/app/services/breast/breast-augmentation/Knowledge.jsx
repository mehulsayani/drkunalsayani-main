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
        <div
          className="flex w-full max-lg:flex-col-reverse gap-10 max-w-[1300px] max-lg:justify-center 
        max-lg:items-center"
        >
          
          <div>
            <div>
              <h2 className="text-3xl font-bold font-notoSans mb-2 flex items-center text-[#10217D]">
                {data.title}
              </h2>

              <h3 className="font-semibold mt-4">{data.consultation.title}</h3>
              <p className="mb-4">{data.consultation.description}</p>

              <h3 className="font-semibold mt-4">
                {data.implantChoices.title}
              </h3>
              <p className="mb-2">{data.implantChoices.description}</p>
              <ul className="list-disc ml-6 space-y-2 mb-3">
                {data.implantChoices.options.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>

              <div>
                <h2 className="text-2xl font-semibold mt-4">
                  {data.procedure.title}
                </h2>
                <p className="mb-4">{data.procedure.description}</p>
                {data.procedure.steps.map((step, index) => (
                  <div key={index}>
                    <h3 className="font-semibold mt-4">{step.step}</h3>
                    <p className="mb-2">{step.description}</p>
                    {step.points && (
                      <ul className="list-disc ml-6 space-y-2 mb-3">
                        {step.points.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    )}
                    {step.note && <p className="mb-2">{step.note}</p>}
                  </div>
                ))}

                <h2 id="recovery" className="text-2xl font-semibold mt-4">
                  {data.recovery.title}
                </h2>
                <p className="mb-4">{data.recovery.introduction}</p>
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

                <h2 id="risks-safety" className="text-2xl font-semibold mt-4">
                  {data.risks.title}
                </h2>
                <p className="mb-4">{data.risks.introduction}</p>
                <h3 className="font-semibold mt-4">General Surgical Risks</h3>
                <ul className="list-disc ml-6 space-y-2 mb-3">
                  {data.risks.generalSurgicalRisks.map((risk, index) => (
                    <li key={index}>{risk}</li>
                  ))}
                </ul>
                <h3 className="font-semibold mt-4">Implant-Related Risks</h3>
                <ul className="list-disc ml-6 space-y-2 mb-3">
                  {data.risks.implantRelatedRisks.map((risk, index) => (
                    <li key={index}>{risk}</li>
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
