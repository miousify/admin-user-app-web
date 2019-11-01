import React, {ReactNode} from "react";
import {PropTypes, Zoom, Grid, ButtonBase, Button, InputBase, IconButton, Hidden} from "@material-ui/core";
import {ProductAction} from "../../Lib/ProductAction";
import {GenericBucketActionInterface} from "../../Lib/GenericBucketAction";
import {Filter, Facebook, Add} from "@material-ui/icons";
import {AppBucketContainerHeader} from "../../Components/Containers/BucketContainerHeader";
import {AppTextInputPlain} from "../../Components/Input/TextInput";
import ItemComponent from "./ItemComponent";
import Container from "@material-ui/core/Container";
import EnhancedButton from "material-ui/internal/EnhancedButton";

interface State {
    items: Array<object>,
    loading?: boolean | false
}

export class ProductList extends React.Component<{}, State> {

    bucketAction: GenericBucketActionInterface | undefined;

    componentWillMount(): void {
        this.state = {items: [new Object(), new Object()]}
    }
    async componentDidMount() {
        // get items from actions
        this.bucketAction= new ProductAction("");
        let items = await this.bucketAction.getItems();
    }
    // static contextType= "";
    getItems() {
        let itemsComponent = this.state.items.map((item, i) => (
            <Zoom in timeout={150 * i}>
                <ItemComponent product={item}/>
            </Zoom>
        ));
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
                            <Hidden  smUp={true}>
                                <IconButton>
                                    <Add/>
                                </IconButton>
                            </Hidden>
                            <Hidden smDown={true}>
                                <Button  color={"primary"} variant={"contained"}>New Product</Button>
                            </Hidden>
                        </Grid>
                    </Grid>
        );
        return (
            <React.Fragment>
                <AppBucketContainerHeader header={"Products"} caption={"List of all products"} toolbar={toolBar} />
                <Container>
                    {items.length === 0 ? this.getStarterComponent() : this.getItems()}
                </Container>
            </React.Fragment>
        )
    }

}

export default {}