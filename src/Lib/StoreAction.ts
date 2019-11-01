import axios ,  {AxiosInstance} from "axios";


class StoreAction {
    owner: string;
    axiosInstance: AxiosInstance;
    constructor(owner: string) {
        this.owner= owner
        this.axiosInstance= axios.create({
            headers:{},
            timeout: 1000,
            baseURL:`localhost:5000/api/store/${this.owner}`
        });
    }
    async getStore(){

    }

    async updateStore(){

    }

    async checkStoreName(){

    }

    async loginInStore(){

    }

}