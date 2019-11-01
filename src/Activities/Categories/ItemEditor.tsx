import React from "react";
import {ProductAction} from "../../Lib/ProductAction";
import {CategoryAction} from "../../Lib/CategoryAction";
import {GenericBucketActionInterface} from "../../Lib/GenericBucketAction";
import {AppToolBar} from "../../Components/Containers/AppToolBar";
import {Button, Container, Grid, Hidden, IconButton, Typography} from "@material-ui/core";
import {AppTextInputPlain} from "../../Components/Input/TextInput";
import {Add} from "@material-ui/icons";

import {AppContextInterface} from "../../Context";
import {AppContext} from "../../Context";

interface State {

}

interface Props {

}

export class CategoryEditor extends React.Component<Props, State> {
    static contextType: React.Context<AppContextInterface>=  AppContext;

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
        this.bucketAction = new CategoryAction(this.context.store.id);
    }

    render() {
        let toolBar = (
            <Grid container justify={"space-between"} alignContent={"center"} alignItems={"center"}>
                <Grid item>
                    <Typography>Category</Typography>
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

                </Container>
            </React.Fragment>
        );
    }
}

export default {}
