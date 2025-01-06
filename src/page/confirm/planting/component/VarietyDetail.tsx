import React, { useState } from "react";
import { getFruitShapeDescription } from "../../../../entity/enum/FruitShape";
import { getFruitSizeDescription } from "../../../../entity/enum/FruitSize";

interface Disease {
  name: string;
}

interface Pest {
  name: string;
}

interface Variety {
  expected_yield_per_square_meter: number;
  min_temperature: number;
  max_temperature: number;
  min_ph: number;
  max_ph: number;
  storage_days: number;
  min_humidity: number;
  max_humidity: number;
  light: string;
  height_at_maturity: number;
  leaf_at_maturity: number;
  fruit_size: string;
  fruit_shape: string;
  protest_plant_disease: Disease[];
  protest_plant_pest: Pest[];
  min_storage_humidity: number;
  max_storage_humidity: number;
  min_storage_temperature: number;
  max_storage_temperature: number;
  description: string
}

interface VarietyDetailProps {
  variety: Variety;
}

const VarietyDetail: React.FC<VarietyDetailProps> = ({ variety }) => {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm md:text-base">
            <span className="font-medium md:font-bold">Quy cách : </span>
            {variety.storage_days} cây / luống
          </p>
          <p className="text-sm md:text-base">
            <span className="font-medium md:font-bold">Nhiệt độ : </span>
            {variety.min_temperature} - {variety.max_temperature}°C
          </p>
          <p className="text-sm md:text-base">
            <span className="font-medium md:font-bold">Độ PH : </span>
            {variety.min_ph} - {variety.max_ph}
          </p>
        </div >
        <div>
          <p className="text-sm md:text-base">
            <span className="font-medium md:font-bold">Năng suất : </span>
            {variety.expected_yield_per_square_meter}kg
          </p>

          <p className="text-sm md:text-base">
            <span className="font-medium md:font-bold">Độ ẩm : </span>
            {variety.min_humidity} - {variety.max_humidity}%
          </p>
          <p className="text-sm md:text-base">
            <span className="font-medium md:font-bold">Ánh sáng : </span>
            {variety.light}
          </p>
        </div>
      </div>
      <div className="mb-2 bg-gray-200 p-2 rounded min-h-64">
        <p className=" mb-1 md:col-span-2 text-sm md:text-base">
          {variety.description.length > 270
            ? (
              <>
                {showFullText ? variety.description : variety.description.substring(0, 270) + '...'}
                <button
                  className="text-blue-500"
                  onClick={() => setShowFullText(!showFullText)}
                >
                  {showFullText ? 'Ẩn' : 'Xem thêm'}
                </button>
              </>
            )
            : variety.description
          }
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4 ">
          <div >
            <p className="mb-1 text-sm md:text-base">
              <span className="font-medium md:font-bold">Kháng sâu: </span>
              {variety.protest_plant_pest.map((pest) => pest.name).join(", ")}
            </p>
            <p className="mb-1 text-sm md:text-base">
              <span className="font-medium md:font-bold">Chiều cao : </span>
              {variety.height_at_maturity} cm
            </p>
            <p className="mb-1 text-sm md:text-base">
              <span className="font-medium md:font-bold">Số lá : </span>
              {variety.leaf_at_maturity}
            </p>
            <p className="mb-1 text-sm md:text-base">
              <span className="font-medium md:font-bold">Kích thước: </span>
              {getFruitSizeDescription(variety.fruit_size)}
            </p>
            <p className="mb-1 text-sm md:text-base">
              <span className="font-medium md:font-bold">Hình dạng: </span>
              {getFruitShapeDescription(variety.fruit_shape)}
            </p>
          </div>
          <div>
            <p className="mb-1 text-sm md:text-base">
              <span className="font-medium md:font-bold">Kháng bệnh: </span>
              {variety.protest_plant_disease.map((disease) => disease.name).join(", ")}
            </p>

            <p className="mb-1 text-sm md:text-base">
              <span className="font-medium md:font-bold">Nhiệt độ bảo quản : </span>
              {variety.min_storage_humidity} - {variety.max_storage_humidity}%
            </p>
            <p className="mb-1 text-sm md:text-base">
              <span className="font-medium md:font-bold">Độ ẩm bảo quản : </span>
              {variety.min_storage_temperature} - {variety.max_storage_temperature}°C
            </p>
            <p className="mb-2 text-sm md:text-base">
              <span className="font-medium md:font-bold">Số ngày bảo quản: </span>
              {variety.storage_days} ngày
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VarietyDetail;
