import ApiManager from '../api/ApiManager'; // Import ApiManager class
// import { UserLogin, UserRegister } from '../entity/Request';

export default class AuthService {
    private apiManager: ApiManager;

    constructor() {
        this.apiManager = new ApiManager(); // Initialize ApiManager
    }
    // login(userLogin: UserLogin): Promise<any | {}> {
    //     return this.apiManager.login(userLogin)
    // }
    // register(userRegister: UserRegister): Promise<any | {}> {
    //     return this.apiManager.register(userRegister)
    // }
    logout(): Promise<unknown> {
        return this.apiManager.logout()
    }
    auth(token: string) {
        return this.apiManager.auth(token)
    }

}
