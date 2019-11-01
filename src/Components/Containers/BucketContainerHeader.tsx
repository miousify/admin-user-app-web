import React, {ReactNode} from "react";
import {Container, withStyles, Grid, AppBar, Toolbar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";


interface Props {
    classes:  IStyles,
    toolbar: ReactNode,
    header: string,
    caption: string
}

interface IStyles {

}
let styles = {

}

const _AppBucketContainerHeader: React.FC<Props>= function (props){
    return <div style={{background:"purple"}}>
        <Grid container alignContent={"space-between"} style={{height:"100%", flexDirection:"row"}}>
            <Grid item sm={12}  style={{ alignSelf:"stretch", height:"250px"}}>
                <Grid container style={{height:'100%'}} alignContent={"center"} justify={"space-around"}>
                    <Grid item xs={12}>
                            <Typography variant={"h4"} align={"center"} component={"div"}>
                                {props.header}
                            </Typography>
                            <Typography variant={"caption"} align={"center"} component={"div"}>
                                {props.caption}
                            </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <AppBar square position={"sticky"} color={"inherit"}>
                    <Toolbar style={{position:"sticky"}}>
                        <Container>
                            {props.toolbar}
                        </Container>
                    </Toolbar>
                </AppBar>
            </Grid>
        </Grid>

    </div>;
}

export default {};

export const AppBucketContainerHeader = withStyles(styles)(_AppBucketContainerHeader);