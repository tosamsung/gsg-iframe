import React from "react";
// import { PetGrowthStage } from "../../../entity/Pet";
import { getPetPhaseDescription } from "../../../../entity/enum/PetGrowthPhase";
import { ChickenGrowthStage } from "../../../../entity/Chicken";


interface GrowthStagesProps {
  growthStages: ChickenGrowthStage[];
}

const GrowthStages: React.FC<GrowthStagesProps> = ({ growthStages }) => {
  // Sort by start_day (assuming ISO 8601 format like "YYYY-MM-DD")
  const sortedStages = [...growthStages].sort((a, b) => {
    return new Date(a.start_day).getTime() - new Date(b.start_day).getTime();
  });

  return (
    <table className="min-w-full table-fixed border-collapse border border-white ">
      <thead>
        <tr className="bg-gray-200 text-left">
          <th className="pl-4 py-2 border border-gray-300 w-1/5">Giai đoạn</th>
          <th className="pl-4 py-2 border border-gray-300 w-1/5">Ngày</th>
          <th className="pl-4 py-2 border border-gray-300 w-1/5">Cho ăn (Gram/con/lần)</th>
          <th className="pl-4 py-2 border border-gray-300 w-1/5">Tần suất (lần/ngày)</th>
        </tr>
      </thead>
      <tbody>
        {sortedStages.map((stage, index) => (
          <tr className="hover:bg-gray-100 bg-white" key={index}>
            <td className="pl-4 py-2 border border-gray-300 text-sm">{getPetPhaseDescription(stage.phase)}</td>
            <td className="pl-4 py-2 border border-gray-300 text-sm">{stage.start_day}</td>
            <td className=" pl-4 py-2 border border-gray-300 text-sm">{stage.food_per_meal}</td>
            <td className="pl-4 py-2 border border-gray-300 text-sm">
              {stage.feeding_frequency_per_day}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GrowthStages;
