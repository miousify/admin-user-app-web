import {Switch, Route} from "react-router";
import React from "react";
import {BucketIndex} from "../BucketIndex";
import {CustomerList} from  "./List";

export class CustomerIndex extends React.Component{
    render(){
        return (
            <BucketIndex bucketName={"customer"} bucketComponent={<CustomerList/>}/>
        );
    }
}
