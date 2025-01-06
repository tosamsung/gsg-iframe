import {useEffect, useState } from "react";
import ChickenService from "../../../service/ChickenService";
import Loading from "../../../components/Loading";
import CloseButton from "../../../components/CloseButton";
import { Chicken } from "../../../entity/Chicken";
import ChickenComponent from "./components/ChickenComponent";
import { Pagination } from "antd";
import { MetaData } from "../../../entity/Other";

function ListChickens() {
    const [chickens, setChickens] = useState<Chicken[]>([]);
    const [metatData, setMetaData] = useState<MetaData>({
        count: 0,
        page: 1,
        pageSize: 10,
        totalPage: 0,
    });
    const chickenService = new ChickenService()

    const handleSelectvariety = (id: string) => {
        WA.player.state.chickenId = id
        if (WA.player.state.loadVariable("openConfirmBuyChicken")) {
            WA.player.state.saveVariable("openConfirmBuyChicken", false)
        }
        WA.player.state.saveVariable("openConfirmBuyChicken", true)
        WA.player.state.saveVariable("openListChickens", false)
    };
    const handleClose = () => {
        WA.player.state.saveVariable("openListChickens", false)
    }
    const onPaginationChange = (page: number, pageSize: number) => {
        chickenService.getAllChickens(page, pageSize).then((response: any) => {
            setChickens(response.data);
            setMetaData(response.meta);
        });
    }
    useEffect(() => {
        chickenService.getAllChickens(metatData.page, metatData.pageSize).then((response: any) => {
            setChickens(response.data);
            setMetaData(response.meta);
        });
    }, []);
    if (!chickens) {
        return (
            <div className="bg-yellow-100 text-yellow-700 p-4 rounded">
                Plot not found.
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-orange-50 rounded p-6 flex flex-col">
            <div className="">
                <div className="flex justify-between mb-3">
                    <span className="inline-block bg-orange-600 text-white text-sm font-medium py-1 px-3 rounded">
                        Vật nuôi
                    </span>
                    <CloseButton onClick={handleClose} />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 my-3">
                    {/* Grid layout with 4 columns */}
                    {chickens.length > 0 ? (
                        chickens.map((chicken: Chicken) => (
                            <ChickenComponent key={chicken.id} chicken={chicken} onSelect={handleSelectvariety} />
                        ))
                    ) : (
                        <div className="col-span-full flex justify-center items-center">
                            <Loading />
                        </div>
                    )}
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

export default ListChickens;
