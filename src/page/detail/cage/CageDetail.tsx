import React from "react";

// { useState } 
// import { Cage } from "../../entity/Cage";

const CageDetail: React.FC = () => {
    // const [cage, setCage] = useState<Cage | null>(null);

    return (
        <div className="w-99">
            <div className="w-full p-4 bg-orange-50 shadow-md rounded-lg ">
                <div className="p-2 sm:p-0 flex items-center mb-4 gap-4">
                    <div>
                        <p className="text-2xl font-bold text-gray-700">
                            {/* {chicken.name} */}
                        </p>
                        <p className="text-wrap text-sm md:text-base">
                            <span className="text-gray-700 font-bold">Thời gian thu hoạch: </span>
                            {/* {formatDate(new Date(), 'DD/MM/YYYY')} -{' '}
                            {formatDate(
                                addDaysToDate(new Date(), chicken.product_time),
                                'DD/MM/YYYY'
                            )}{' '}
                            ({chicken.product_time} ngày) */}
                        </p>
                        <p className="text-wrap text-sm md:text-base">
                            <span className="text-gray-700 font-bold">Ưu điểm: </span>
                            {/* {chicken.advantages} */}
                        </p>
                    </div>
                </div>

                <div className="">
                    {/* <TablePets ca/> */}
                </div>
            </div>
        </div>
    );

};

export default CageDetail;
