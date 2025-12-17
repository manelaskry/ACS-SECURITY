import { stopMethodSteps } from "../../data/StopMethodSteps";
import ServiceCard from "../ServiceCard";

const LetterIcon = ({ letter, className }) => (
  <div className={`${className} flex items-center justify-center font-bold text-2xl`}>
    {letter}
  </div>
);

const StopMethodSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start bg-gray-50 rounded-2xl p-8">

      <div className="flex-shrink-0">
        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
          2
        </div>
      </div>

      <div className="flex-1">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Méthode STOP</h3>
        <p className="text-gray-700 mb-6">
          Une approche reconnue pour éliminer les risques efficacement, en appliquant une hiérarchie des mesures de prévention.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stopMethodSteps.map((step) => (
            <ServiceCard
              key={step.id}
              icon={(props) => <LetterIcon letter={step.id} {...props} />}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StopMethodSection;