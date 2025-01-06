import React from "react";
import { Chicken } from "../../../../entity/Chicken";

const DIGIFORCE_DOMAIN = import.meta.env.VITE_DIGIFORCE_API_URL
    ? import.meta.env.VITE_DIGIFORCE_API_URL.replace(/\/$/, '')
    : ''

interface ChickenProps {
    chicken: Chicken
    onSelect: (id: string) => void;

}

const ChickenComponent: React.FC<ChickenProps> = ({ chicken, onSelect }) => {
    return (
        <div className="p-4 bg-white shadow rounded-xl flex flex-col items-center text-center">
            <img
                src={`${DIGIFORCE_DOMAIN}${chicken.avatar[0].url}`}
                alt={chicken.name}
                className="w-40 h-32 object-cover rounded-xl border-dashed border-2 border-orange-400"
            />
            <button
                onClick={() => onSelect(chicken.id)}
                className="mt-4 py-2 font-medium bg-orange-500 text-white rounded hover:bg-orange-600 w-full"
            >
                {chicken.name}
            </button>
        </div>
    );
};

export default ChickenComponent;

