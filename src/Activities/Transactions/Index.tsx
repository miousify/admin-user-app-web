import {Switch, Route} from "react-router";
import React from "react";

export class ProductIndex extends React.Component{

    render(){
        return (
            <React.Fragment>
                <Switch>
                    <Route path={"/product"} />
                    <Route path={"/product/:item"} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default ProductIndex