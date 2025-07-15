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

              <h2 id="recovery" className="text-2xl font-semibold mt-4">
                {data.recovery.title}
              </h2>
              <p className="mb-4">{data.recovery.description}</p>

              <h3 className="text-xl font-semibold mt-4">
                {data.recovery.nonSurgical.title}
              </h3>
              {data.recovery.nonSurgical.phases.map((phase, index) => (
                <div key={index}>
                  <h4 className="font-semibold mt-4">{phase.phase}</h4>
                  <ul className="list-disc ml-6 space-y-2 mb-3">
                    {phase.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}

              <div>
                <h3 className="text-xl font-semibold mt-4">
                  {data.recovery.surgical.title}
                </h3>
                {data.recovery.surgical.phases.map((phase, index) => (
                  <div key={index}>
                    <h4 className="font-semibold mt-4">{phase.phase}</h4>
                    <ul className="list-disc ml-6 space-y-2 mb-3">
                      {phase.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}

                <h3 className="text-xl font-semibold mt-4">
                  {data.recovery.generalTips.title}
                </h3>
                <ul className="list-disc ml-6 space-y-2 mb-3">
                  {data.recovery.generalTips.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                <h2 id="risks-safety" className="text-2xl font-semibold mt-4">
                  {data.risks.title}
                </h2>
                <p className="mb-4">{data.risks.description}</p>

                <h3 className="text-xl font-semibold mt-4">
                  {data.risks.generalRisks.title}
                </h3>
                <ul className="list-disc ml-6 space-y-2 mb-3">
                  {data.risks.generalRisks.points.map((risk, index) => (
                    <li key={index}>{risk}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold mt-4">
                  {data.risks.specificRisks.title}
                </h3>
                {data.risks.specificRisks.procedures.map((procedure, index) => (
                  <div key={index}>
                    <h4 className="font-semibold mt-4">{procedure.name}</h4>
                    <ul className="list-disc ml-6 space-y-2 mb-3">
                      {procedure.risks.map((risk, idx) => (
                        <li key={idx}>{risk}</li>
                      ))}
                    </ul>
                  </div>
                ))}

                <h3 className="text-xl font-semibold mt-4">
                  {data.risks.safetyMeasures.title}
                </h3>
                <ul className="list-disc ml-6 space-y-2 mb-3">
                  {data.risks.safetyMeasures.points.map((measure, index) => (
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
