import ApiManager from '../api/ApiManager'; // Import ApiManager class
import { User } from '../entity/User';

export default class UserService {
    private apiManager: ApiManager;

    constructor() {
        this.apiManager = new ApiManager(); 
    }
    updateUser(user: User) {
        return this.apiManager.updateUser(user)
    }
    getWalletByUserId(id: number) {
        return this.apiManager.getWalletByUserId(id)
    }
}
