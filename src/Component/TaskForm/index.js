import React, { Component } from 'react';
import style from "./Style";

import { Grid, Box} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {withStyles} from "@material-ui/styles";
import * as actionModal from "../../Action/Modal";
import * as actionTask from "../../Action/Task";
import {connect} from "react-redux";
import  {bindActionCreators} from "redux";

import {Field, reduxForm} from "redux-form";
import { renderTextField } from '../FormField';

import validate  from "./Validate";

class TaskForm extends Component {
   handleSubmitForm=data=>{
       const {title, description} = data;
      const {actionTaskCreator} = this.props;
       const {addTask} = actionTaskCreator;
       addTask(title, description);
   }
  render() {
    const {classes, actionModalCreator, handleSubmit, invalid, editting} = this.props;
    const {hiddenModal} = actionModalCreator;
    console.log(editting);
    return (
      <div className={classes.space}>
         <form onSubmit={handleSubmit(this.handleSubmitForm)}>
            {/* <Grid item md={12}>
                <Field name="test" component="input" type="text"></Field>
            </Grid> */}
            <Grid item md={12}>
                <Field name='title' component={renderTextField} className={classes.TextField} value={editting ? editting.title : null} id="custom-css-outlined-input"  label="Title"></Field>
            </Grid>
            <Grid item md={12}>
               <Field name="description" component={renderTextField} className={classes.TextField} value={editting ? editting.description : null} id="custom-css-outlined-input" label="DesCription"></Field>
            </Grid>
            <Grid item md={12}>
                  <Box display="flex" flexDirection="row-reverse"  mt={3}>
                    <Box ml={1}>
                    <Button  variant="contained" onClick={hiddenModal} color="secondary">
                        Cancel
                      </Button>
                      </Box>
                    <Button disabled={invalid} variant="contained" type="submit" color="primary">
                          Ok
                      </Button>
                  </Box>
            </Grid>
          </form>
         </div>

    );
  }
}
const mapStateToProps = state=>({
      editting: state.Task.taskEdit,
      initialValues: state.Task.taskEdit
})
const mapDispatchToProps = dispatch=>{
   return{
      actionModalCreator: bindActionCreators(actionModal, dispatch),
      actionTaskCreator: bindActionCreators(actionTask, dispatch),
   }
}

export default withStyles(style)(connect(mapStateToProps, mapDispatchToProps)( reduxForm({ form: 'contact', validate})(TaskForm)));
