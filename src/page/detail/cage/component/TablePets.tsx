// import React from "react";
// // import { getAdministrationMethodDescription } from "../../../entity/enum/AdministrationMethod";
// import { Cage } from "../../../entity/Cage";


// interface CageProps {
//     cage: Cage[];
// }

// const TablePets: React.FC<CageProps> = ({ cage }) => {
//     // Sort by start_day (assuming ISO 8601 format like "YYYY-MM-DD")
//     // const sortedCages = [...cage].sort((a, b) => {
//     //     return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
//     // });

//     return (
//         <div className="mb-3">
//             {/* {sortedCages.map((cage, index) => (
//                 <table className="min-w-full table-fixed border-collapse border border-white min-h-[328px]">
//                     <thead>
//                         <tr className="bg-gray-200 text-left">
//                             <th className="pl-4 py-2 border border-gray-300 w-1/5">Vật nuôi</th>
//                             <th className="pl-4 py-2 border border-gray-300 w-1/5">Số lượng</th>
//                             <th className="pl-4 py-2 border border-gray-300 w-1/5">Trạng thái</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {cage.pet_cages_id.map(() => {
//                             <tr className="hover:bg-gray-100 bg-white" key={index}>
//                                 <td className="pl-4 py-2 border border-gray-300 text-sm">{cage.}</td>
//                                 <td className="pl-4 py-2 border border-gray-300 text-sm">{cage.vaccine.name}</td>
//                                 <td className="pl-4 py-2 border border-gray-300 text-sm">{getAdministrationMethodDescription(stage.administration_method)}</td>
//                             </tr>
//                         })}

//                     </tbody>
//                 </table>
//             ))} */}

//         </div>
//     );
// };

// export default TablePets;
