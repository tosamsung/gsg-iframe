import ApiManager from '../api/ApiManager'; // Import ApiManager class
import { Bed } from '../entity/Bed';

export default class BedService {
    private apiManager: ApiManager;

    constructor() {
        this.apiManager = new ApiManager(); // Initialize ApiManager
    }
    getBedById(id: string): Promise<Bed> {
        return this.apiManager.getBedById(id).then((response: any) => {
            return response;
        });
    }
    getFarmingHistoryByBedId(bedId: string, page: number) {
        return this.apiManager.getFarmingHistoryByBedId(bedId, page).then((response: any) => {
            return response;
        });
    }
    getBedHistoryTypePlantByBedId(bedId: string) {
        return this.apiManager.getBedHistoryTypePlantByBedId(bedId).then((response: any) => {
            return response;
        });
    }
    getBedHistoryTypePetByBedId(bedId: string) {
        return this.apiManager.getBedHistoryTypePetByBedId(bedId).then((response: any) => {
            return response;
        });
    }

}
