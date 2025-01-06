import React from "react";
import { useSearchParams } from "react-router-dom";
import livestockIcon from "../../../assets/icon/livestock.png";
import feedIcon from "../../../assets/icon/chicken-rice.png";
import detailIcon from "../../../assets/icon/detail.png";


const CageButton: React.FC = () => {
  const [searchParams] = useSearchParams();
  const buttonParam = searchParams.get("button") || "";
  const buttonArray: string[] = buttonParam.split(",");

  return (
    <div
      className="p-2 rounded-lg flex flex-row justify-center items-center gap-2"
    >
      <button
        className="btn-standard bg-slate-50 border-blue-400 border p-1 rounded opacity-80 w-10 h-10 flex justify-center items-center"
        onClick={() => {
          if (WA.player.state.loadVariable("openBedDetail")) {
            WA.player.state.saveVariable("openBedDetail", false);
          }
          WA.player.state.saveVariable("openBedDetail", true);
        }}
      >
        <img src={detailIcon} alt="Detail Icon" className="w-8 h-8" />
      </button>
      <button
        className="btn-standard bg-slate-50 border-blue-400 border p-1 rounded opacity-80 w-10 h-10 flex justify-center items-center"
        onClick={() => {
          if (WA.player.state.loadVariable("openListChickens")) {
            WA.player.state.saveVariable("openListChickens", false);
          }
          WA.player.state.saveVariable("openListChickens", true);
        }}
      >
        <img src={livestockIcon} alt="Detail Icon" className="w-8 h-8" />
      </button>

      {/* Nút "Cho ăn" chỉ hiển thị khi quantity > 0 */}
      {buttonArray.includes("feeding") && (
        <button
          className="btn-standard bg-slate-50 border-blue-400 border p-1 rounded opacity-80 w-10 h-10 flex justify-center items-center"
          onClick={() => {
            if (WA.player.state.loadVariable("openConfirmFeedingPrice")) {
              WA.player.state.saveVariable("openConfirmFeedingPrice", false)
            }
            WA.player.state.saveVariable("openConfirmFeedingPrice", true)
          }}
        >
          <img src={feedIcon} alt="Detail Icon" className="w-8 h-8" />
        </button>
      )}
    </div>
  );
};

export default CageButton;
