import React from "react";
import {PropTypes} from "@material-ui/core";
import {ProductAction} from "../../Lib/ProductAction";
import {GenericBucketActionInterface} from "../../Lib/GenericBucketAction";

interface State {
    items: Array<object>,
    loading?: boolean | false
}

export class ProductList extends React.Component<{}, State> {

    bucketAction: GenericBucketActionInterface | undefined;
    componentWillMount(): void {
        this.state = {items: [new Object()]}
    }

    async componentDidMount() {
        // get items from actions
        this.bucketAction= new ProductAction("");
        let items = await this.bucketAction.getItems();
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

    render() {
        let items = this.state.items;

        return (
            <React.Fragment>
                {items.length === 0 ? this.getStarterComponent() : this.getItems()}
            </React.Fragment>
        )
    }

}

export default {}