import { useEffect } from 'react';
import { Button } from 'antd';
// import { Bed, BedHistory } from '../../entity/Bed';
// import ChickenService from '../../service/ChickenService';
// import { PetGrowthStage } from '../../entity/Pet';
// interface Field {
//     pets_name: string;
//     start_time: string;
//     days_elapsed: number;
//     current_stage_start_day: number;
//     food_per_meal: number;
//     total_feed_smaller: number;
//     total_feed_reference: number;
//     total_cost: number;
//     uom_type: string;
// }
// interface Bill {
//     products: Field[]
//     total: number
// }
function ConfirmFeedingPrice() {
    // const [loading, setLoading] = useState<boolean>(true);
    // const [bill, setBill] = useState<Bill>({
    //     products: [],
    //     total: 0
    // });
    // const chickenService = new ChickenService()
    useEffect(() => {
        // async function main(bed: Bed): Promise<number> {
        //     const timeNow = new Date(); // Current time

        //     // Function to calculate the feed and costs
        //     function calculateFeed(bed: Bed, timeNow: Date) {
        //         const results: Array<Field> = [];

        //         // Iterate through each bed history
        //         bed.bed_plant_history_id.forEach((history: BedHistory) => {
        //             if (!history.product) return; // Skip if product is missing

        //             const startTime = new Date(history.start_time);
        //             const daysElapsed = Math.floor((timeNow.getTime() - startTime.getTime()) / (1000 * 60 * 60 * 24)); // Days elapsed
        //             const quantity = history.quantity;

        //             // Determine the current growth stage
        //             let currentStage: PetGrowthStage | null = null; // Initialize with null
        //             const stages: PetGrowthStage[] = history.product.pets_id.pets_growth_stages;

        //             stages
        //                 .sort((a, b) => b.start_day - a.start_day) // Sort by start_day descending
        //                 .some((stage) => {
        //                     if (daysElapsed >= stage.start_day) {
        //                         console.log(stage);

        //                         currentStage = stage as PetGrowthStage; // Set the current stage
        //                         return true; // Exit loop
        //                     }
        //                     return false;
        //                 });
        //             if (currentStage) {
        //                 const foodPerMeal = currentStage.food_per_meal;
        //                 const mealsPerDay = 1; // Assume 1 meal per day
        //                 const totalFeed = foodPerMeal * quantity * mealsPerDay;

        //                 // Unit conversion
        //                 const { uom_type, ratio } = currentStage.uom;
        //                 let totalFeedReference: number;

        //                 if (uom_type === "smaller") {
        //                     totalFeedReference = totalFeed / ratio;
        //                 } else if (uom_type === "bigger") {
        //                     totalFeedReference = totalFeed * ratio;
        //                 } else {
        //                     totalFeedReference = totalFeed;
        //                 }

        //                 // Calculate total cost
        //                 const listPrice = currentStage.forage.list_price;
        //                 const totalCost = totalFeedReference * listPrice;

        //                 // Push result
        //                 results.push({
        //                     pets_name: history.product.name,
        //                     start_time: history.start_time,
        //                     days_elapsed: daysElapsed,
        //                     current_stage_start_day: currentStage.start_day,
        //                     food_per_meal: currentStage.food_per_meal,
        //                     total_feed_smaller: totalFeed,
        //                     total_feed_reference: totalFeedReference,
        //                     total_cost: totalCost,
        //                     uom_type: uom_type,
        //                 });
        //             }

        //         });

        //         return results;
        //     }

        //     // Calculate results and aggregate total cost and feed
        //     const results = calculateFeed(bed, timeNow);
        //     let totalCost = 0;
        //     let totalFeed = 0;

        //     results.forEach((pet) => {
        //         // console.log("result---");

        //         // console.log(pet);

        //         totalCost += pet.total_cost;
        //         totalFeed += pet.total_feed_smaller;
        //     });

        //     return totalCost;
        // }
        // if (WA.player.state.bed) {
        //     const bed = WA.player.state.bed as Bed
        //     // console.log(bed);

        //     const calculationPrice = async () => {
        //         chickenService.getFeedingInfoBedId(bed.id).then((response: any) => {
        //             const data = response.data as Bed
        //             main(data)
        //         });
        //     };
        //     calculationPrice();
        // }

    }, [WA.player.state.bed])


    const close = () => {
        WA.player.state.saveVariable("openConfirmFeedingPrice", false)

    };
    const confirm = () => {
        if (WA.player.state.loadVariable('confirmFeedChicken')) {
            WA.player.state.saveVariable('confirmFeedChicken', false);
        }
        WA.player.state.saveVariable('confirmFeedChicken', true);
        WA.player.state.saveVariable('openConfirmFeedingPrice', false);
        // WA.player.state.saveVariable('openListChickens', false);
    }


    return (
        <div className="min-h-screen mx-auto">
            <div className="max-w-4xl mx-auto">
                <div className="bg-orange-50 shadow-lg rounded-lg overflow-hidden">
                    <div className="bg-white-400 flex justify-between items-center p-3">
                        <div className='flex'>
                            <h3 className="ml-2 text-xl font-semibold text-black">Xác nhận cho ăn</h3>
                        </div>
                    </div>
                    {/* <div className="p-4">
                        <table className="min-w-full table-fixed">
                            <thead>
                                <tr className="bg-orange-200 text-left">
                                    <th className="pl-4 py-2 border  w-1/5">Giống</th>
                                    <th className="pl-4 py-2 border  w-1/5">Giai đoạn</th>
                                    <th className="pl-4 py-2 border  w-1/5">Số lượng</th>
                                    <th className="pl-4 py-2 border  w-1/5">Lượng thức ăn</th>
                                    <th className="pl-4 py-2 border  w-1/5">Tổng</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-gray-50 bg-white border-b ">
                                    <td className="pl-4 py-3 text-left text-sm border font-medium text-gray-700">Gà lương phượng</td>
                                    <td className="py-3 text-center text-sm border text-gray-600">Con non</td>
                                    <td className="py-3 text-center text-sm border text-gray-600">12</td>
                                    <td className="py-3 text-center text-sm border text-gray-600">34/gam</td>
                                    <td className="pr-4 py-3 text-center text-sm border font-medium text-gray-800">123 xu</td>
                                </tr>
                                <tr className="bg-orange-100 font-semibold">
                                    <td className="pl-4 py-3 text-left text-sm text-gray-700">Tổng</td>
                                    <td colSpan={4} className="pr-4 py-3 text-right text-sm text-gray-800">
                                        240 xu
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div> */}
                    <div className="bg-slate-100 flex justify-between items-center p-3">
                        <Button type="default" onClick={confirm} className="bg-green-400 text-white">
                            Xác nhận
                        </Button>
                        <Button type="default" onClick={close} className="ml-2 bg-red-400 text-white">
                            hủy
                        </Button>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default ConfirmFeedingPrice;
