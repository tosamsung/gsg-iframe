import ApiManager from '../api/ApiManager'; // Import ApiManager class
import { Crop } from '../entity/Crop';

export default class CropService {
    private apiManager: ApiManager;

    constructor() {
        this.apiManager = new ApiManager(); // Initialize ApiManager
    }
    getAllCropVarietyByCropId(id: string): Promise<Crop[]> {
        return this.apiManager.getAllCropVarietyByCropId(id).then((response: any) => {
            return response;
        });
    }
    getVarietyByid(varietyId: string) {
        return this.apiManager.getVarietyById(varietyId).then((response: any) => {
            return response;
        })
    }
    getVarietyAllInfoById(varietyId: string) {
        return this.apiManager.getVarietyAllInfoById(varietyId).then((response: any) => {
            return response;
        })
    }
    getAllVariety(page: number, pageSize: number) {
        return this.apiManager.getAllVariety(page,pageSize).then((response: any) => {
            return response;
        })
    }

}
