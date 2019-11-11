import React, { Component } from 'react';
import image from "../Asset/image/loading.gif";
import {connect} from "react-redux";

import {withStyles} from "@material-ui/styles";
import Style from "./Style";

class Loading extends Component {
    render() {
         const {classes, isShow} = this.props;
         let xtml =null;
         if(isShow){
             xtml =(
                <div className={classes.box}>
                    <img src={image} alt="loading" className={classes.icon}></img>
                </div>
             )
         }
         return xtml;
        
    }
}
const mapStateToProps = state=>({
    isShow: state.Loading.isShow
});


export default withStyles(Style)(connect(mapStateToProps,null)(Loading));