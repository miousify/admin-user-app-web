import React from "react";
import {PropTypes} from "@material-ui/core";
import {GenericBucketActionInterface} from "../../Lib/GenericBucketAction";
import {Class} from "@babel/types";

interface State {
    items: Array<object>
}

interface Props {
    bucketAction: GenericBucketActionInterface;
}

export class ProductList extends React.Component<Props, State> {
    bucketAction: GenericBucketActionInterface | undefined;
    constructor(props: Props, ) {
        super(props);
        this.state = {items: []}
    }

    init(bucketAction: GenericBucketActionInterface){
        this.bucketAction=  bucketAction;
    }

    // static contextType= "";
    getItems() {
        let itemsComponent = this.state.items.map(item => (<h1>Item</h1>));
        return itemsComponent;
    }



    getStarterComponent() {
        return (
            <React.Fragment>
                <h1>STARTER TEMPLATE</h1>
            </React.Fragment>
        )
    }

    componentDidMount(): void {
        // get ownerid here then us to setup path

    }

    render() {
        let items = this.state.items;
        return (
            <React.Fragment>
                {items.length == 0 ? this.getStarterComponent() : this.getItems()}
            </React.Fragment>
        )
    }

}

export default {}