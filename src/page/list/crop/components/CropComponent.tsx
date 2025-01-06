import React from "react";
import { CropVariety } from "../../../../entity/CropVariety";
const DIGIFORCE_DOMAIN = import.meta.env.VITE_DIGIFORCE_API_URL
    ? import.meta.env.VITE_DIGIFORCE_API_URL.replace(/\/$/, '')
    : ''

interface CropProps {
    crop: CropVariety
    onSelect: (id: string) => void;
}

const CropComponent: React.FC<CropProps> = ({ crop, onSelect }) => {
    return (
        <div className="p-2 bg-white shadow rounded-lg flex flex-col items-center text-center">
            <img
                src={`${DIGIFORCE_DOMAIN}${crop.avatar[0].url}`}
                alt={crop.name}
                className="w-32 h-32 object-cover rounded-full border-solid border-2 border-green-300"
                onClick={() => onSelect(crop.id)}

            />
            <button
                onClick={() => onSelect(crop.id)}
                className=" py-2 mt-2 font-medium bg-green-500 text-white rounded hover:bg-green-600 transition w-full"
            >
                {crop.name}
            </button>
        </div>
    );
};

export default CropComponent;
