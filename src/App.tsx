import { Route, Routes, } from "react-router-dom";
import { lazy, Suspense } from "react";

import 'tailwindcss/tailwind.css';
import "./assets/css/style.css"
import Loading from "./components/Loading";

const MapFarm = lazy(() => import("./page/map/MapFarm"));
const MapLand = lazy(() => import("./page/map/MapLand"));
const BedDetail = lazy(() => import("./page/detail/bed/BedDetail"));
const Error = lazy(() => import("./page/notificate/Error"));
const NotFound = lazy(() => import("./page/NotFound"));
const UserDetail = lazy(() => import("./page/detail/user/UserDetail"));
const PlotDetail = lazy(() => import("./page/detail/plot/PlotDetail"));
const Success = lazy(() => import("./page/notificate/Success"));
const BedButton = lazy(() => import("./page/button/bed/BedButton"));
const CageButton = lazy(() => import("./page/button/cage/CageButton"));
const ListCrops = lazy(() => import("./page/list/crop/ListCrops"));
const ListChickens = lazy(() => import("./page/list/chicken/ListChickens"));
const ConfirmPlant = lazy(() => import("./page/confirm/planting/ConfirmPlant"));
const ConfirmWatering = lazy(() => import("./page/confirm/watering/ConfirmWatering"));
const ConfirmBuyChicken = lazy(() => import("./page/confirm/raising/ConfirmBuyChicken"));
const ConfirmFeedingPrice = lazy(() => import("./page/confirm/feeding/ConfirmFeedingPrice"));
const ConfirmFertilizing = lazy(() => import("./page/confirm/fertilizing/ConfirmFertilizing"));

function App() {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="crops" element={<ListCrops />} />
                <Route path="confirm/plant/:varietyId" element={<ConfirmPlant />} />
                {/* <Route path="cage/:cageId" element={<CageDetail />} /> */}
                {/* user */}
                <Route path="user" element={<UserDetail />} />

                <Route path="error" element={<Error />} />
                <Route path="success" element={<Success />} />
                {/* <Route path="login" element={<Login />} /> */}
                {/* <Route path="register" element={<Register />} /> */}
                <Route path="plot/:plotId" element={<PlotDetail />} />
                <Route path="bed/:bedId" element={<BedDetail />} />

                <Route path="chickens" element={<ListChickens />} />
                <Route path="confirm/chicken/feeding" element={<ConfirmFeedingPrice />} />
                <Route path="confirm/chicken/:chickenId" element={<ConfirmBuyChicken />} />
                <Route path="confirm/watering" element={<ConfirmWatering />} />
                <Route path="confirm/fertilizing" element={<ConfirmFertilizing />} />

                <Route path="button/bed" element={<BedButton />} />
                <Route path="button/cage" element={<CageButton />} />
                <Route path="map/farm" element={<MapFarm />} />
                <Route path="map/land" element={<MapLand />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>

    );
}


export default App;
