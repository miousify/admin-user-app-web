import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ChevronRight, More, MoreHoriz, MoreVert, Person, OfflineBolt, Notifications} from "@material-ui/icons";
import {
    Theme,
    List,
    ListItemText,
    ListItemIcon,
    ListSubheader,
    ListItem,
    ButtonBase,
    AppBar,
    Toolbar,
    Drawer,
    Grid,
    Typography,
    ExpansionPanel,
    ExpansionPanelActions,
    ExpansionPanelDetails,
    ExpansionPanelSummary, IconButton
} from "@material-ui/core";
import {AppTheme} from "../../theme";

import {AppExpansionPanel} from "../../Components/Containers/Expansions";


let styles = (theme: Theme) => ({
    drawerRoot: {
        padding: theme.spacing,
        width: 240,
        height: "calc(100% - 64px)",
        background: 'ghost',
        top: 64,
        [theme.breakpoints.down("sm")]: {
            width: 0
        }
    },
    forceOpen: {
        [theme.breakpoints.down("sm")]: {
            width: 240,
            padding: theme.spacing,
            height: "100%",
            background: 'black',
            top: 64
        },

    }
})

interface Styles {
    drawerRoot: string
}

interface Props {
    classes: Styles
}

export class _PrimaryNavigation extends React.Component<Props, {}> {

    render() {
        let {classes} = this.props;
        return (
            <React.Fragment>
                <AppBar elevation={0} color={"inherit"} style={{background:"ghostwhite"}}>
                    <Toolbar>
                        <Grid container justify={"space-between"}>
                            <Grid item>

                            </Grid>
                            <Grid item>
                                <IconButton>
                                    <OfflineBolt/>
                                </IconButton>
                                <IconButton>
                                    <Notifications/>
                                </IconButton>
                                <IconButton>
                                    <Person/>
                                </IconButton>
                                <IconButton>
                                    <MoreVert/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>

                <Drawer variant="persistent" open classes={{paper: classes.drawerRoot}}>
                    <List disablePadding={true}>
                        <ListItem component={ButtonBase}>
                            <ListItemIcon>
                                <ChevronRight/>
                            </ListItemIcon>
                            <ListItemText><Typography>Tempogra</Typography></ListItemText>
                        </ListItem>
                        <ListItem dense={true} style={{margin:0,padding:0}}>
                            <AppExpansionPanel summary={<s></s>} title={<h6>Product</h6>}>
                                <List style={{width:"100%"}}>
                                    <ListItem component={ButtonBase}>
                                        <ListItemIcon>
                                            <ChevronRight/>
                                        </ListItemIcon>
                                        <ListItemText><Typography>Tempogra</Typography></ListItemText>
                                    </ListItem>
                                    <ListItem component={ButtonBase}>
                                        <ListItemIcon>
                                            <ChevronRight/>
                                        </ListItemIcon>
                                        <ListItemText><Typography>Tempogra</Typography></ListItemText>
                                    </ListItem>
                                </List>
                            </AppExpansionPanel>
                        </ListItem>
                        <ListItem dense={true} style={{margin:0,padding:0}}>
                            <AppExpansionPanel summary={<s></s>} title={<h6>Category</h6>}>
                                <List style={{width:"100%"}}>
                                    <ListItem component={ButtonBase}>
                                        <ListItemIcon>
                                            <ChevronRight/>
                                        </ListItemIcon>
                                        <ListItemText><Typography>Tempogra</Typography></ListItemText>
                                    </ListItem>
                                    <ListItem component={ButtonBase}>
                                        <ListItemIcon>
                                            <ChevronRight/>
                                        </ListItemIcon>
                                        <ListItemText><Typography>Tempogra</Typography></ListItemText>
                                    </ListItem>
                                </List>
                            </AppExpansionPanel>
                        </ListItem>
                        <ListItem dense={true} style={{margin:0,padding:0}}>
                            <AppExpansionPanel summary={<s></s>} title={<h6>Activities</h6>}>
                                <List style={{width:"100%"}}>
                                    <ListItem component={ButtonBase}>
                                        <ListItemIcon>
                                            <ChevronRight/>
                                        </ListItemIcon>
                                        <ListItemText><Typography>Transactions</Typography></ListItemText>
                                    </ListItem>
                                    <ListItem component={ButtonBase}>
                                        <ListItemIcon>
                                            <ChevronRight/>
                                        </ListItemIcon>
                                        <ListItemText><Typography>Customers</Typography></ListItemText>
                                    </ListItem>
                                </List>
                            </AppExpansionPanel>
                        </ListItem>

                    </List>
                </Drawer>

            </React.Fragment>
        );
    }
}


export const PrimaryNavigation = withStyles(styles)(_PrimaryNavigation);