import React, {ReactNode} from "react";
import {Container, withStyles, Grid, AppBar, Toolbar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";


interface Props {
    classes:  IStyles,
    toolbar: ReactNode,
}

interface IStyles {

}
let styles = {

}

const _AppToolBar: React.FC<Props>= function (props){
    return (
        <AppBar position={"sticky"} color={"inherit"} elevation={0}>
            <Toolbar>
                {props.toolbar}
            </Toolbar>
            <Divider/>
        </AppBar>
    );
}

export default {};

export const AppToolBar = withStyles(styles)(_AppToolBar);