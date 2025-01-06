import ApiManager from '../api/ApiManager'; // Import ApiManager class
import { Plot } from '../entity/Plot'; // Assuming you have a Plot class or interface to type the response

export default class PlotService {
    private apiManager: ApiManager;

    constructor() {
        this.apiManager = new ApiManager(); // Initialize ApiManager
    }
    getAllPlotsByOwnerId(id:number): Promise<Plot[]> {
        return this.apiManager.getAllPlotsByOwnerId(id).then((response:any)=>{
            return response.data
        })
    }
    getById(id:string){
        return this.apiManager.getPlotById(id).then((response:any)=>{
            return response.data
        })
    }
}
