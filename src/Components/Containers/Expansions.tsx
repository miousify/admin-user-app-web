import React, {ReactNode} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography} from "@material-ui/core";
import {ArrowDownward, ArrowDropDown} from "@material-ui/icons";
import Divider from "@material-ui/core/Divider";


interface _IAppExpansionPanel {
    summary:ReactNode,
    title:ReactNode,
    classes:  Styles
}
interface Styles {
    root: string,
    rounded: string,
    expansionRoot: string,
    summary: string,
    details: string
}
let styles= {
    root: {borderRadius:0, width:"100%", padding:0, margin:0},
    rounded: {borderRadius:"300px"},
    expansionRoot: {
        borderRadius: 0,
    },
    summary: {
        background:""
    },
    details:{
        padding:0,
        margin:0,
        background:"ghostwhite"
    }
}

const _AppExpansionPanel: React.FunctionComponent<_IAppExpansionPanel> = function (props){
    return (
      <ExpansionPanel
          classes={{rounded: props.classes.rounded, root: props.classes.root}}
          className={props.classes.expansionRoot} square elevation={0} style={{padding:0}}>
          <ExpansionPanelSummary expandIcon={<ArrowDropDown/>} className={props.classes.summary} >
                  {props.title}
          </ExpansionPanelSummary>
          <Divider/>
          <ExpansionPanelDetails classes={{root: props.classes.details}}>
              {props.children}
          </ExpansionPanelDetails>
      </ExpansionPanel>
    );
}

export const AppExpansionPanel = withStyles(styles)(_AppExpansionPanel);


