import axios from "axios";
import {AxiosInstance} from "axios"


export interface GenericBucketActionInterface {
    getItems: (filter?: object) => Promise<Array<object>> ,
    getItem: (itemID: string) => Promise<object>,
    updateItem: (itemID: string, data: object) => Promise<boolean>,
    addItem: (data: object) => Promise<object>,
    deleteItem: (itemID: string) => Promise<boolean>
}

export class GenericBucketAction implements GenericBucketActionInterface {
    bucketName: string;
    owner: string;
    axiosInstance: AxiosInstance;

    constructor(owner: string, bucketName: string) {
        this.bucketName = bucketName.toLowerCase();
        this.owner = owner;
        this.axiosInstance = axios.create({
            headers: {},
            timeout: 1000,
            baseURL: `localhost:5000/api/store/${this.owner}/${this.bucketName}`
        });
    }

    async getItems(filter?: object): Promise<Array<object> > {
        let items: Array<object>;
        try {
            let response = await this.axiosInstance.get("");
            return items= response.data;
        } catch (e) {
            console.log(e)
        }
        return []
    }

    async addItem(data: object): Promise<object> {
        let check: object
        try {
            let response = await this.axiosInstance.post("", data);
            return check= response.data;
        } catch (e) {
            console.log(e)
        }
        return {}

    }

    async getItem(itemID: string): Promise<object> {
        let item: object
        try {
            let response = await this.axiosInstance.get(`/${itemID}`);
            return item= response.data;
        } catch (e) {
            console.log(e)
        }
        return {}
    }

    async updateItem(itemID: string, data: object): Promise<boolean> {
        let check: boolean;

        try {
            let response = await this.axiosInstance.put(`/${itemID}`, data);
            check= true;
            return check;
        } catch (e) {
            console.log(e)
        }
        return false
    }

    async deleteItem(itemID: string): Promise<boolean> {
        let check: boolean;
        try {
            let response = await this.axiosInstance.put(`/${itemID}`);
            check= true;
            return check
        } catch (e) {
            console.log(e)
        }
        return false;
    }

}

export default GenericBucketAction;