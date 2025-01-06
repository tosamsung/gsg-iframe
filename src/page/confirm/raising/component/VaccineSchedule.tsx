import React from "react";
import { VaccinationSchedule } from "../../../../entity/Chicken";
import { getAdministrationMethodDescription } from "../../../../entity/enum/AdministrationMethod";


interface VaccineScheduleProps {
    Schedule: VaccinationSchedule[];
}

const VaccineSchedules: React.FC<VaccineScheduleProps> = ({ Schedule }) => {
    // Sort by start_day (assuming ISO 8601 format like "YYYY-MM-DD")
    const sortedStages = [...Schedule].sort((a, b) => {
        return new Date(a.days).getTime() - new Date(b.days).getTime();
    });

    return (
        <table className="min-w-full table-fixed border-collapse border border-white ">
            <thead>
                <tr className="bg-gray-200 text-left">
                    <th className="pl-4 py-2 border border-gray-300 w-1/5">Ngày tiêm</th>
                    <th className="pl-4 py-2 border border-gray-300 w-1/5">Vắc xin</th>
                    <th className="pl-4 py-2 border border-gray-300 w-1/5">Phương pháp tiêm</th>
                </tr>
            </thead>
            <tbody>
                {sortedStages.map((stage, index) => (
                    <tr className="hover:bg-gray-100 bg-white" key={index}>
                        <td className="pl-4 py-2 border border-gray-300 text-sm">{stage.days}</td>
                        <td className="pl-4 py-2 border border-gray-300 text-sm">{stage.vaccine.name}</td>
                        <td className="pl-4 py-2 border border-gray-300 text-sm">{getAdministrationMethodDescription(stage.administration_method)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default VaccineSchedules;
