import React, {ReactNode} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, FormControl, Typography} from "@material-ui/core";
import {ArrowDownward, ArrowDropDown} from "@material-ui/icons";
import Divider from "@material-ui/core/Divider";
import Input from "@material-ui/core/Input";
import {FormLabel, OutlinedInput} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputBase from "@material-ui/core/InputBase";

interface _IAppExpansionPanel {
    startIcon?: ReactNode,
    endIcon?: ReactNode,
    onChange?: Function,
    helper?: string,
    label?:string,
    classes:  Styles
}
interface Styles {
baseRoot: string,
    baseInput: string
}

let styles= {
    baseInput: {
    }, baseRoot: {
        background:"ghostwhite",
        padding:"4px 12px",
        borderRadius: 30
    }
}

const _AppTextInput: React.FunctionComponent<_IAppExpansionPanel> = function (props){
    return (
        <FormControl fullWidth variant={"outlined"}>
            <label>Label</label>
            <OutlinedInput labelWidth={0} margin={"dense"} onChange={()=>{}} value={""} type={""} startAdornment={null} endAdornment={null} placeholder={""}/>
        </FormControl>
    );
}

const _AppTextInputPlain: React.FunctionComponent<_IAppExpansionPanel> = function (props){
    return (
            <InputBase  classes={{input: props.classes.baseInput, root:props.classes.baseRoot}}/>
    );
}
export const AppTextInputPlain = withStyles(styles)(_AppTextInputPlain);

export const AppTextInput = withStyles(styles)(_AppTextInput);


