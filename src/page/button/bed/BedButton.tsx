import React from "react";
import { useSearchParams } from "react-router-dom";
import plantIcon from "../../../assets/icon/field.png";
import detailIcon from "../../../assets/icon/detail.png";
import fertilizerIcon from "../../../assets/icon/fertilizer.png";
import wateringIcon from "../../../assets/icon/watering.png";
import { saveBooleanVariable } from "../../../util/Utils";


const BedButton: React.FC = () => {
  const [searchParams] = useSearchParams();
  const buttonParam = searchParams.get("button") || "";
  const buttonArray: string[] = buttonParam.split(",");
  return (
    <div className="p-2 rounded-lg flex flex-col justify-center items-center gap-2">
      <button
        className="btn-standard bg-slate-50 border-blue-400 border p-1 rounded opacity-80 w-10 h-10 flex justify-center items-center"
        onClick={() => {
          saveBooleanVariable('openBedDetail',true)
        }}
      >
        <img src={detailIcon} alt="Detail Icon" className="w-8 h-8" />
      </button>
      {buttonArray.includes("planting") && (
        <button
          className="btn-standard bg-slate-50 border-green-400 border p-1 rounded opacity-80 w-10 h-10 flex justify-center items-center"
          onClick={() => saveBooleanVariable('openListCrops',true)}
        >
          <img src={plantIcon} alt="Plant Icon" className="w-8 h-8" />
        </button>
      )}
      {buttonArray.includes("fertilizing") && (
        <button
          className="btn-standard bg-slate-50 border-orange-400 border p-1 rounded opacity-80 w-10 h-10 flex justify-center items-center"
          onClick={() => saveBooleanVariable('openConfirmFertilizing',true)}
        >
          <img src={fertilizerIcon} alt="Fertilizer Icon" className="w-8 h-8" />
        </button>
      )}
      {buttonArray.includes("watering") && (
        <button
          className="btn-standard bg-slate-50 border-cyan-400 border p-1 rounded opacity-80 w-10 h-10 flex justify-center items-center"
          onClick={() => {
          
            saveBooleanVariable("openConfirmWatering",true);
          }}
        >
          <img src={wateringIcon} alt="Watering Icon" className="w-8 h-8" />
        </button>
      )}
    </div>
  );


};

export default BedButton;
