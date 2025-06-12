import React, { useEffect, useState } from "react";
import content from "./Knowledge.json";

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
      <div
        id="procedure-details"
        className="w-full flex flex-col items-center justify-center py-8"
      >
        <div className="flex w-full max-lg:flex-col-reverse gap-10 max-w-[1300px] max-lg:justify-center max-lg:items-center">
          <div>
            <div
              className={`text-gray-800 relative ${
                readMore ? "" : "text-blue-500"
              }`}
            >
              <h2 className="text-3xl font-bold font-notoSans mb-2 flex items-center text-[#10217D]">
                {content.whatTummyTuckCanAchieve.title}
              </h2>
              <p className="mb-4">
                {content.whatTummyTuckCanAchieve.description}
              </p>
              <ul className="list-disc ml-6 space-y-2 mb-3">
                {content.whatTummyTuckCanAchieve.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <div className={``}>
                <p>{content.consultation.description}</p>
                <h1 className="text-3xl font-bold mb-4 text-[#10217D] font-notoSans">
                  {content.procedure.title}
                </h1>
                <p>{content.procedure.description}</p>
                <h2 className="text-2xl font-semibold mt-4">
                  {content.procedureTypes.title}
                </h2>
                <ul className="list-disc ml-6 space-y-2">
                  {content.procedureTypes.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                <h2 className="text-2xl font-semibold mt-4">
                  {content.procedureSteps.title}
                </h2>
                <ul className="list-disc ml-6 space-y-2">
                  {content.procedureSteps.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                <p>{content.procedureDetails.description}</p>
                <h2
                 
                  id="recovery"
                  className="text-3xl font-semibold mt-4 text-[#10217D] font-notoSans"
                >
                  {content.recovery.title}
                </h2>
                <p>{content.recovery.description}</p>
                <h3 className="font-semibold mt-4">
                  {content.immediatePostOp.title}
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  {content.immediatePostOp.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                <p>{content.activityRestrictions.description}</p>
                <p>{content.incisionCare.description}</p>
                <p>{content.compressionGarments.description}</p>
                <p>{content.painManagement.description}</p>
                <p>{content.dietAndHydration.description}</p>
                <p>{content.followUp.description}</p>
                <p>{content.posture.description}</p>
                <p>{content.fullRecovery.description}</p>
                <h3 className="font-semibold mt-4">
                  {content.shortTermRecovery.title}
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  {content.shortTermRecovery.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                <h3 className="font-semibold mt-4">
                  {content.longTermRecovery.title}
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  {content.longTermRecovery.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                <p>{content.recoverySupport.description}</p>
                <h2
                  id="risks-safety"
                
                  className="text-3xl font-semibold mt-4 text-[#10217D] font-notoSans"
                >
                  {content.risks.title}
                </h2>
                <p>{content.risks.description}</p>
                <ul className="list-disc ml-6 space-y-2">
                  {content.risks.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                <p>{content.safety.description}</p>
                <h3 className="font-semibold mt-4">
                  {content.safetyMeasures.title}
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  {content.safetyMeasures.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                <p>{content.safetyConclusion.description}</p>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
