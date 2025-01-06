import React from "react";
import { Chicken } from "../../../../entity/Chicken";

interface ChickenDetailProps {
  chicken: Chicken;
}

const ChickenDetail: React.FC<ChickenDetailProps> = ({ chicken }) => {
  return (
    <div className="flex justify-center">
      <div className="">
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm md:text-base">
              <span className="font-medium md:font-bold">Cân nặng trung bình : </span>
              {chicken.average_weight} kg
            </p>
            {
              chicken.egg_yield ?
                <p className="text-sm md:text-base">
                  <span className="font-medium md:font-bold">Sản lượng trứng : </span>
                  {chicken.egg_yield} Trứng/con
                </p>
                :
                <p className="text-sm md:text-base">
                  <span className="font-medium md:font-bold">Sản lượng thịt : </span>
                  {chicken.meat_yield} Kg/con
                </p>
            }
            <p className="text-sm md:text-base">
              <span className="font-medium md:font-bold">Mật độ nuôi : </span>
              {chicken.density} Con/m&sup2;
            </p>

          </div >
          <div>
            <p className="text-sm md:text-base">
              <span className="font-medium md:font-bold">Chiều cao trung bình : </span>
              {chicken.average_height} Cm
            </p>

            {
              chicken.egg_size ?
                <p className="text-sm md:text-base">
                  <span className="font-medium md:font-bold">Kích thước trứng : </span>
                  {chicken.egg_size}
                </p>
                :
                <p className="text-sm md:text-base">
                  <span className="font-medium md:font-bold">Chất lượng thịt : </span>
                  {chicken.meat_quality}
                </p>
            }
            <p className="text-sm md:text-base">
              <span className="font-medium md:font-bold">Uống nước : </span>
              {chicken.water_per_day} lần/ngày
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2 bg-gray-200 p-4 rounded-xl">
          <p className="hidden sm:block mb-1 col-span-1 md:col-span-2 text-sm md:text-base">
            {chicken.description}
          </p>

          <p className="mb-1 col-span-1 md:col-span-2 text-sm md:text-base">
            <span className="font-medium md:font-bold">Dấu hiệu thu hoạch : </span>
            {chicken.harvest_sign}
          </p>
          <p className="mb-1 col-span-1 md:col-span-2 text-sm md:text-base">
            <span className="font-medium md:font-bold">Bệnh thường gặp : </span>
            {chicken.common_diseases.map((disease) => {
              return disease.name
            }).join(",")}
          </p>
        </div>
      </div>
    </div>

  );
};

export default ChickenDetail;
