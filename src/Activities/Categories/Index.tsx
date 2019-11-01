import {Switch, Route} from "react-router";
import React from "react";
import {BucketIndex} from "../BucketIndex";
import {CategoryList} from  "./List";
import {CategoryEditor} from "./ItemEditor";

export class CategoryIndex extends React.Component{
    render(){
        return (
            <BucketIndex bucketName={"category"} bucketComponent={<CategoryList/>} bucketItemComponent={<CategoryEditor/>}/>
        );
    }
}
