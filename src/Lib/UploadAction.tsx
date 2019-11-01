import {GenericBucketAction} from "./GenericBucketAction";

export class UploadAction extends GenericBucketAction{
    constructor(owner: string){
        super(owner,"");
    }
}

// export const ProductActionInstance= new _ProductAction();