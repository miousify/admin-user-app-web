import React from "react"
import {Container} from "@material-ui/core";
import {PrimaryNavigation} from "./PrimaryAppUIComponents/PrimaryNavigation";
import {Theme} from "@material-ui/core";
import {Switch, Route, useRouteMatch,matchPath, match as Match  } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import {ProductIndex} from "./Products/Index";
import {CategoryIndex} from "./Categories/Index";
import {CustomerIndex} from "./Customer/Index";
import {MainScreen} from "./MainScreen/Index";

interface StyleInterface {
    containerRoot?: string
}

interface Props {
    classes: StyleInterface
}

let styles = (theme: Theme) => ({
    containerRoot: {
        left: 240,
        top: 64,
        height: `calc(100vh - 64px)`,
        width: `calc(100% - 240px)`,
        [theme.breakpoints.down("sm")]: {
            width: `calc(100%)`,
            left: 0
        }
    }
});

export class AppRoot extends React.Component<{}, {}> {
    render() {
        return (
            <React.Fragment>
                <div>
                    <PrimaryNavigation></PrimaryNavigation>
                </div>
                <AppContainer/>
            </React.Fragment>
        );
    }
}

class _AppContainer extends React.Component<Props, {}> {
    render() {
        let {classes} = this.props;
        return (

            <React.Fragment>
                <div style={{position: "absolute"}} className={classes.containerRoot}>
                    <div style={{height: "100%"}}>
                        <Switch>
                            <Route path={"/"} exact>
                                <MainScreen/>
                            </Route>

                            <Route path={"/product"} >
                                <ProductIndex/>
                            </Route>

                            <Route path={"/category"}>
                                <CategoryIndex/>
                            </Route>

                            <Route path={"/section"}>
                            </Route>

                            <Route path={"/upload"}>

                            </Route>

                            <Route path={"/transaction"}>

                            </Route>

                            <Route path={"/customer"} exact>
                                <CustomerIndex/>
                            </Route>

                            <Route path={"/settings"}>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </React.Fragment>
        );

    }
}

const AppContainer = withStyles(styles)(_AppContainer);

