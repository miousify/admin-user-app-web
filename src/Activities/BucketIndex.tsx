import {Switch, Route} from "react-router";
import React, {ReactNode} from "react";

interface IProps {
    bucketName: String,
    bucketComponent: ReactNode,
    bucketItemComponent?: ReactNode
}

export class BucketIndex extends React.Component<IProps, {}> {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path={"/"+this.props.bucketName} exact>
                        {this.props.bucketComponent}
                    </Route>
                    <Route path={`/${this.props.bucketName}/:item`} exact>
                        {this.props.bucketItemComponent}
                    </Route>
                </Switch>
            </React.Fragment>
        );
    }
}