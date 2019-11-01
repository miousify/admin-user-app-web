

import React from "react";
import {Grid, Paper, Typography, Avatar,  Checkbox, IconButton,} from "@material-ui/core"
import withStyles from "@material-ui/core/styles/withStyles";
import { AppTheme } from "../../theme";
import {MoreHoriz} from "@material-ui/icons";

let styles = {
    flex : {
        display: "flex"
    }
}

interface StyleI{
    flex: string
}
interface Props{
    classes: StyleI,
    product: any
}

class _ItemComponent extends React.Component<Props, {}>{

    render(){
        let {classes}= this.props;
        return (
            <Paper style={{ margin: "8px 0px", padding: 4, background:"ghostwhite" , boxShadow: "none", border:".5px solid gray"}} elevation={1}>
                <Grid container alignItems={"center"} alignContent={"center"} justify={"space-between"}>
                    <Grid item xs={12} md={6}>
                        <Grid container>
                            <Grid item>
                                <Checkbox
                                    color={"primary"}
                                />
                            </Grid>
                            <Grid item style={{ display: "flex", alignItems: "center" }} >
                        <span>
                          <Avatar src={this.props.product.mainImageLink} />
                        </span>
                                <span style={{ margin: "0px 12px" }}>
                          <Typography style={{fontWeight:700}}>{this.props.product.title}</Typography>
                        </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container justify={"space-between"} alignItems={"center"}>
                            <Grid item style={{paddingLeft:"12px"}}>
                                <Typography>{"Category"}</Typography>
                                <Typography variant={"caption"}>Main Category</Typography>
                            </Grid>
                            <Grid item>
                                <div>
                                    <Typography >{this.props.product.count || 100}</Typography>
                                </div>
                                <Typography variant={"caption"}>SKU</Typography>
                            </Grid>
                            <Grid item>
                            </Grid>
                            <Grid item>
                                <Typography>${this.props.product.sellingPrice || 100}</Typography>
                                <Typography variant={"caption"}>Selling price</Typography>
                            </Grid>
                            <Grid item>
                                <IconButton color={"primary"} ><MoreHoriz /></IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

let comp= withStyles(styles)(_ItemComponent);

export const ItemComponent=  comp
export default comp