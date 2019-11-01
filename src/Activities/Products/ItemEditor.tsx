import React from "react";
import {ProductAction} from "../../Lib/ProductAction";
import {GenericBucketActionInterface} from "../../Lib/GenericBucketAction";

import {AppToolBar} from "../../Components/Containers/AppToolBar";
import {Button, Container, Grid, Hidden, IconButton} from "@material-ui/core";
import {AppTextInputPlain} from "../../Components/Input/TextInput";
import {Add} from "@material-ui/icons";

import {IProductModel} from "../../Models/Product";

interface State {
    product: IProductModel
}

interface Props {

}

export class ProductEditor extends React.Component<Props, State> {

    bucketAction: GenericBucketActionInterface | undefined;

    loadItem() {
        // loads item into state
    }

    saveItem() {
        //
    }

    updateItem() {
        //
    }

    componentWillMount(): void {
        this.bucketAction = new ProductAction("");
    }

    render() {
        let toolBar = (
            <Grid container justify={"space-between"} alignContent={"center"} alignItems={"center"}>
                <Grid item>
                </Grid>
                <Grid item>
                    <Button color={"primary"} variant={"contained"}>Save</Button>
                </Grid>
            </Grid>
        );

        return (
            <React.Fragment>
                <AppToolBar toolbar={toolBar}/>
                <Container>
                    <h1>OPEN</h1>
                </Container>
            </React.Fragment>
        );
    }
}

export default {}
