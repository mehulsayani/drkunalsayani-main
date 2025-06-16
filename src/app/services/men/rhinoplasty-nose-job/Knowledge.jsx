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
              <h3 className="font-semibold mt-4">
                {data.recovery.phases[0].phase}
              </h3>
              <ul className="list-disc ml-6 space-y-2 mb-3">
                {data.recovery.phases[0].points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              <div>
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
                <p className="mb-4">{data.recovery.conclusion}</p>

                <h2 id="risks-safety" className="text-2xl font-semibold mt-4">
                  {data.risks.title}
                </h2>
                <p className="mb-4">{data.risks.description}</p>
                <ul className="list-disc ml-6 space-y-2 mb-3">
                  {data.risks.specificRisks.map((risk, index) => (
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
