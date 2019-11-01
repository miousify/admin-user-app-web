import {Switch, Route} from "react-router";
import React from "react";
import {BucketIndex} from "../BucketIndex";
import {ProductList} from  "./List";
import {ProductEditor} from "./ItemEditor";

export class ProductIndex extends React.Component{
    render(){
        return (
            <BucketIndex bucketName={"product"} bucketComponent={<ProductList/>} bucketItemComponent={<ProductEditor/>}/>
        );
    }
}

export default ProductIndex