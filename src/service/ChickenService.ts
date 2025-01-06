import ApiManager from '../api/ApiManager';


export default class ChickenService {
    private apiManager: ApiManager;

    constructor() {
        this.apiManager = new ApiManager();
    }
    getAllChickens(page:number,pageSize:number) {
        return this.apiManager.getAllChickens(page,pageSize)
    }
    getChickenById(chickenId: string) {
        return this.apiManager.getChickenById(chickenId)
    }
    getFeedingInfoBedId(bedId: string) {
        return this.apiManager.getFeedingInfoByBedId(bedId)
    }

}
