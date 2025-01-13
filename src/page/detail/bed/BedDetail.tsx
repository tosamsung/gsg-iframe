import React, { useEffect, useState } from "react";
import BedService from "../../../service/BedService";
import Loading from "../../../components/Loading";
import { ReloadOutlined } from "@ant-design/icons";
import { Button, Spin } from "antd";
import HistoryTable from "./component/HistoryTable";
import { FarmingHistory } from "../../../entity/FarmingHistory";
import { BedArea, MetaData } from "../../../entity/Other";
import { getStatusEnumDescription, StatusEnum } from "../../../entity/enum/Status";
import { Bed, BedHistory } from "../../../entity/Bed";
import IStateManagement from "../../../state/IStateManagement";
import { StateManagement } from "../../../state/implement/StateManagement";
import CloseButton from "../../../components/CloseButton";

const BedDetail: React.FC = () => {
  const [bed, setBed] = useState<Bed>({
    width:1,
    length:10,
    status:StatusEnum.New,
    bed_number:0
  } as Bed);
  const [farmingHistories, setFarminHistories] = useState<FarmingHistory[]>([]);
  const [metatData, setMetaData] = useState<MetaData>({
    count: 0,
    page: 1,
    pageSize: 10,
    totalPage: 0,
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [reloadLoading, setReloadLoading] = useState<boolean>(false);

  const bedService = new BedService();
  const stateManagement: IStateManagement = new StateManagement()

  const fetchFarmingHistoryByBedId = async (bedId: string, page: number = 1, isReload: boolean = false) => {
    if (bedId) {
      if (isReload) {
        setReloadLoading(true);
      } else {
        setLoading(true);
      }
      try {
        const response: any = await bedService.getFarmingHistoryByBedId(
          bedId,
          page
        );
        const histories = response.data as FarmingHistory[];
        setFarminHistories(histories);
        setMetaData(response.meta);
      } finally {
        if (isReload) {
          setReloadLoading(false);
        } else {
          setLoading(false);
        }
      }
    }
  };
  const fetchBedHistory = async (bed: Bed) => {
    if (bed.type == "bed") {
      bedService.getBedHistoryTypePlantByBedId(bed.id).then((response: any) => {
        return response.data
      }).then((data: BedHistory[]) => {
        WA.player.state.saveVariable("reloadBed", data[0])
      })
    } else {
      bedService.getBedHistoryTypePetByBedId(bed.id).then((response: any) => {
        return response.data
      }).then((data: BedHistory[]) => {
        WA.player.state.saveVariable("reloadCage", data)
      })
    }
  }
  useEffect(() => {
    const bedArea = stateManagement.getBedArea()
    if (bedArea) {
      setBed(bedArea.bed)
      fetchFarmingHistoryByBedId(bedArea.bed.id);
      fetchBedHistory(bedArea.bed)
    }


  }, [WA.player.state.bedArea]);

  const renderButtons = () => (
    <>
      <Button
        onClick={() => {
          fetchBedHistory(bed)
          fetchFarmingHistoryByBedId((WA.player.state.bedArea as BedArea).bed.id, metatData.page, true)
        }}
        icon={reloadLoading ? <Spin size="small" /> : <ReloadOutlined />}
      >
        Kiểm tra
      </Button>
    </>
  );

  const handleClose = () => {
    WA.player.state.saveVariable("openBedDetail", false);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="p-4 bg-white shadow-md rounded-lg mt-2 border-solid border-2 border-blue-400">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">Hoạt động canh tác</h1>
        <CloseButton onClick={handleClose} />
      </div>
      <div className="w-full my-2 grid grid-cols-2 gap-4">
        <div>
          <p>
            <span className="font-bold">Chiều rộng : </span>
            <span>{bed.width} m</span>
          </p>
          <p>
            <span className="font-bold">Trạng thái : </span>
            <span>{getStatusEnumDescription(bed.status)}</span>
          </p>
        </div>
        <div>
          <p>
            <span className="font-bold">Chiều dài : </span>
            <span>{bed.length} m</span>
          </p>
          <p>
            <span className="font-bold">Luống thứ : </span>
            <span>{bed.bed_number}</span>
          </p>
        </div>
      </div>
      <div className="w-full">
        {/* {renderButtons()} */}
        <HistoryTable
          data={farmingHistories}
          buttons={renderButtons}
          meta={metatData}
          onPaginationChange={(page) => {
            fetchFarmingHistoryByBedId((WA.player.state.bedArea as BedArea).bed.id, page);
          }}
        />
      </div>
    </div>
  );
};

export default BedDetail;
