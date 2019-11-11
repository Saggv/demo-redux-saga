import React, { Component } from 'react';
import {Modal, Icon} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";
import style from "./Style";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as actionModal from "../../Action/Modal";

class ModalComponent extends Component {
    render() {
         const {classes, open, title, contentModal, actionModalCreators} = this.props;
        const {hiddenModal} = actionModalCreators;
        return (
            <Modal
            open={open}
            onClose={hiddenModal}
            className={classes.modal}
            >
               <div className={classes.paper}>
                   <div className={classes.header}>
                       <span className={classes.title}>{title}</span>
                       <span className={classes.icon} onClick={hiddenModal}> <Icon>clear</Icon></span>
                   </div>
                    {
                        contentModal
                    }
                 </div>
   
            </Modal>
        );
    }
}

const mapStateToProps = state =>({
      open: state.Modal.isShow,
      title: state.Modal.title,
      contentModal: state.Modal.content
});

const mapDispatchToProps = dispatch=>{
      return{
           actionModalCreators: bindActionCreators(actionModal, dispatch)
      }
}

export default withStyles(style)(connect(mapStateToProps, mapDispatchToProps)(ModalComponent)); 