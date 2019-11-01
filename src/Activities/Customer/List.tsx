import React from "react";
import {Button, Grid, PropTypes, Container,Box} from "@material-ui/core";
import {CustomerAction} from "../../Lib/CustomerAction";
import {ProductAction} from "../../Lib/ProductAction";
import {GenericBucketActionInterface} from "../../Lib/GenericBucketAction";


import {AppBucketContainerHeader} from "../../Components/Containers/BucketContainerHeader";
import {AppTextInputPlain} from "../../Components/Input/TextInput";

interface State {
    items: Array<object>,
    loading?: boolean | false
}

export class CustomerList extends React.Component<{}, State> {

    bucketAction: GenericBucketActionInterface | undefined;
    componentWillMount(): void {
        this.state = {items: [new Object()]}
    }

    async componentDidMount() {
        // get items from actions
        this.bucketAction= new CustomerAction("");
        let items = await this.bucketAction.getItems();
    }
    // static contextType= "";
    getItems() {
        let itemsComponent = this.state.items.map(item => (<h1>Customer item</h1>));
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
        let toolBar= (
            <Grid container justify={"space-between"} alignContent={"center"} alignItems={"center"}>
                <Grid item>
                    <Button variant={"outlined"}>Filter</Button>
                    <span style={{padding:"0px 12px"}}>
                                <AppTextInputPlain/>
                            </span>
                </Grid>
                <Grid item>

                </Grid>
            </Grid>
        );


        return (
            <React.Fragment>
                <AppBucketContainerHeader caption={"Customer page"} header={"Customers page"} toolbar={toolBar}/>
                <Container>
                    {items.length === 0 ? this.getStarterComponent() : this.getItems()}
                </Container>
            </React.Fragment>
        )
    }

}

export default {}