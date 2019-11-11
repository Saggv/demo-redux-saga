import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Style from './Style';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

import {connect} from "react-redux";
import * as taskAction from "../../Action/Task";

class TaskItem extends Component {
  render() {
    const { items, item, classes, onClickEdit } = this.props;
    return (
      <Card key={item.id} className={classes.Cards}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={9}>
              <h2>{item.title}</h2>
            </Grid>
            <Grid item md={3}>
              {' '}
              {items.label}
            </Grid>
            <h5>{item.description}</h5>
          </Grid>
        </CardContent>
        <CardActions className={classes.btn}>
          <Fab color="primary" aria-label="add" onClick={onClickEdit} fontSize="samll" size="small">
            <Icon>edit_icon</Icon>
          </Fab>
          <Fab color="secondary" aria-label="add" fontSize="samll" size="small">
            <Icon>delete_icon</Icon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}
const mapStateToProps = state =>{
    return{
    }
}

const mapDispatchToProps = dispatch=>{
   return{
     ediTaskCreator: ()=> dispatch(taskAction.editTask),
   
   }
}

export default withStyles(Style)(connect(mapStateToProps, mapDispatchToProps)(TaskItem));
