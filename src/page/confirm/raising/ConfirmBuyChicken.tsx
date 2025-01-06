import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addDaysToDate, formatDate, saveBooleanVariable } from "../../../util/Utils";
import logoCoin from "../../../assets/image/coin.png"
import ChickenService from "../../../service/ChickenService";
import Loading from "../../../components/Loading";
import { Chicken } from "../../../entity/Chicken";
import ChickenDetail from "./component/ChickenDetail";
import GrowthStages from "./component/GrowthStages";
import VaccineSchedules from "./component/VaccineSchedule";
import IStateManagement from "../../../state/IStateManagement";
import { StateManagement } from "../../../state/implement/StateManagement";
import { BedHistoryStatusEnum } from "../../../entity/enum/BedHistoryStatusEnum";
const DIGIFORCE_DOMAIN = import.meta.env.VITE_DIGIFORCE_API_URL
  ? import.meta.env.VITE_DIGIFORCE_API_URL.replace(/\/$/, '')
  : ''

const ConfirmBuyChicken: React.FC = () => {
  const [chicken, setChicken] = useState<Chicken | null>(null);
  const [activeTab, setActiveTab] = useState('details');
  const [quantity, setQuantity] = useState(1);
  const [maxQuantity, setMaxQuantity] = useState(10);
  const [isStaticDataInitialized, setIsStaticDataInitialized] = useState(false);
  const [totalExpense, setTotalExpense] = useState(0); // State để lưu tổng chi phí

  const { chickenId } = useParams<{ chickenId: string }>();
  const chickenService = new ChickenService();
  const stateManagement: IStateManagement = new StateManagement();

  useEffect(() => {
    const fetchData = async () => {
      if (chickenId) {
        chickenService.getChickenById(chickenId).then((response: any) => {
          setIsStaticDataInitialized(true);
          setChicken(response.data);
          setTotalExpense(response.data.expense); // Khởi tạo expense ban đầu
        });
      }
    };
    fetchData();
    return () => {
      // Clean up side effects, if needed.
    };
  }, [chickenId]);

  useEffect(() => {
    const bedHistories = stateManagement.getBedArea()?.bedHistories;
    const maxQuantity = stateManagement.getBedArea()?.bed.max_quantity;
    let total = 0;
    if (bedHistories && maxQuantity) {
      bedHistories.forEach((histories) => {
        if (
          histories.status !== BedHistoryStatusEnum.Prepare &&
          histories.status !== BedHistoryStatusEnum.Finished
        ) {
          total += histories.quantity;
        }
      });
      setMaxQuantity(maxQuantity - total);
    }
  }, [WA.player.state.bedArea]);

  // Cập nhật totalExpense khi quantity thay đổi
  useEffect(() => {
    if (chicken) {
      setTotalExpense(chicken.expense * quantity);
    }
  }, [quantity, chicken]);

  if (!isStaticDataInitialized || !chicken) {
    return <Loading />;
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, Number(e.target.value));
    setQuantity(value);
  };

  const handleConfirm = () => {
    WA.player.state.product = {
      id: chicken.product.id,
      quantity: quantity,
    };
    saveBooleanVariable('confirmBuyChicken', true);
    saveBooleanVariable('openConfirmBuyChicken', false);
    saveBooleanVariable('openListChickens', false);
  };

  const handleCancel = () => {
    WA.player.state.productId = null;
    saveBooleanVariable('openListChickens', true);
    saveBooleanVariable('openConfirmBuyChicken', false);
    saveBooleanVariable('confirmBuyChicken', false);
  };

  return (
    <div className="w-full p-4 bg-white shadow-md rounded-lg ">
      <div className="p-2 sm:p-0 flex items-center mb-4 gap-4">
        <img
          src={DIGIFORCE_DOMAIN + chicken.avatar[0].url}
          alt="Plant Preview"
          className="min-w-48 h-32 aspect-w-5 aspect-h-3 object-cover rounded-md"
        />
        <div>
          <p className="text-2xl font-bold text-gray-700">{chicken.name}</p>
          <p className="text-wrap text-sm md:text-base">
            <span className="text-gray-700 font-bold">Thời gian nuôi: </span>
            {formatDate(new Date(), 'DD/MM/YYYY')} -{' '}
            {formatDate(addDaysToDate(new Date(), chicken.product_time), 'DD/MM/YYYY')}{' '}
            ({chicken.product_time} ngày)
          </p>
          <p className="text-wrap text-sm md:text-base">
            <span className="text-gray-700 font-bold">Ưu điểm: </span>
            {chicken.advantages}
          </p>
        </div>
      </div>
      <div className="mb-4 ">
        <nav className="grid grid-flow-col justify-stretch">
          <button
            className={`px-4 py-2 border text-sm font-medium ${activeTab === 'details' ? 'text-white border-white bg-orange-600' : ''
              }`}
            onClick={() => setActiveTab('details')}
          >
            Chi tiết
          </button>
          <button
            className={`px-4 py-2 border text-sm font-medium ${activeTab === 'growthStages' ? 'text-white border-white bg-orange-600' : ''
              }`}
            onClick={() => setActiveTab('growthStages')}
          >
            Giai đoạn phát triển
          </button>
          <button
            className={`px-4 py-2 border text-sm font-medium ${activeTab === 'schedule' ? 'text-white border-white bg-orange-600' : ''
              }`}
            onClick={() => setActiveTab('schedule')}
          >
            Lịch tiêm chủng
          </button>
        </nav>
      </div>

      <div className="min-h-[280px]">
        {activeTab === 'details' && <ChickenDetail chicken={chicken} />}
        {activeTab === 'growthStages' && (
          <GrowthStages growthStages={chicken.pets_growth_stages} />
        )}
        {activeTab === 'schedule' && <VaccineSchedules Schedule={chicken.vaccination_schedule} />}
      </div>
      {maxQuantity > 0 && (
        <div className="flex justify-end">
          <p className="text-sm md:text-base flex items-center mb-4">
            <span className="font-medium md:font-bold mr-2">Số lượng: </span>
            <input
              type="number"
              className="w-20 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              max={maxQuantity}
            />
          </p>
        </div>
      )}
      <div className="flex space-x-4">
        <button
          onClick={handleCancel}
          className="w-1/2 bg-gray-500 text-white font-bold py-2 px-4 rounded-md shadow hover:bg-gray-600 transition"
        >
          Hủy
        </button>
        {maxQuantity > 0 ? (
          <button
            onClick={handleConfirm}
            className="w-1/2 bg-orange-800 text-white font-bold py-2 px-4 rounded-md shadow hover:bg-orange-600 transition"
          >
            <p className="text-white-800 text-sm md:text-base font-bold">
              {totalExpense}{' '}
              <img
                src={logoCoin}
                alt=""
                className="inline-block h-5 w-5 object-contain ml-1 mb-1"
              />
            </p>
          </button>
        ) : (
          <button className="w-1/2 bg-gray-800 text-white font-bold py-2 px-4 rounded-md shadow">
            Chuồng đã hết chỗ
          </button>
        )}
      </div>
    </div>
  );
};


export default ConfirmBuyChicken;
