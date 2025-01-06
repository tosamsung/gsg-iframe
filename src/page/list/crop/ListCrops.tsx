import { useEffect, useState } from "react";
import CropService from "../../../service/CropService"; // Adjust the import path based on your project structure
import { CropVariety } from "../../../entity/CropVariety";
import CloseButton from "../../../components/CloseButton";
import CropComponent from "./components/CropComponent";
import { Pagination } from "antd";
import { MetaData } from "../../../entity/Other";
import { saveBooleanVariable } from "../../../util/Utils";

const cropService = new CropService();

function ListCrops() {
  const [crops, setCrops] = useState<CropVariety[]>([]);
  const [metatData, setMetaData] = useState<MetaData>({
    count: 0,
    page: 1,
    pageSize: 10,
    totalPage: 0,
  });

  const handleSelectvariety = (id: string) => {
    WA.player.state.varietyId = id
    WA.player.state.saveVariable("openListCrops", false)
    saveBooleanVariable("openConfirmPlant", true)
  };
  const handleClose = () => {
    WA.player.state.saveVariable("openListCrops", false)

  }
  const onPaginationChange = (page: number, pageSize: number) => {
    cropService.getAllVariety(page, pageSize).then((response: any) => {
      setCrops(response.data);
      setMetaData(response.meta);
    });
  }
  useEffect(() => {
    cropService.getAllVariety(metatData.page, metatData.pageSize).then((response: any) => {
      setCrops(response.data);
      setMetaData(response.meta);
    });
  }, []);

  return (
    <div className="min-h-screen bg-green-50 rounded p-6 flex flex-col">
      <div >
        <div className="flex justify-between">
          <span className="inline-block bg-green-500 text-white text-sm font-medium py-1 px-3 rounded">
            Cây trồng
          </span>
          <CloseButton onClick={handleClose} />
        </div>
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 my-3">
            {crops.length > 0 ? (
              crops.map((crop: CropVariety) => (
                <CropComponent key={crop.id} crop={crop} onSelect={handleSelectvariety} />
              ))
            ) : (
              <p className="text-gray-500">Tải cây trồng...</p>
            )}
          </div>
        </div>
      </div>
      {metatData.totalPage > 1
        && (
          <div className="mt-auto flex justify-end">
            <div className="bg-white p-2 rounded-lg shadow">
              <Pagination
                current={metatData.page}
                pageSize={metatData.pageSize}
                total={metatData.count}
                onChange={(page, pageSize) => onPaginationChange(page, pageSize)}
                onShowSizeChange={(current, size) => onPaginationChange(current, size)}
              />
            </div>
          </div>
        )
      }
    </div>
  );
}

export default ListCrops;
