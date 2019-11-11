import React, { Component } from 'react';
import TaskItem from '../TaskItem';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import {connect} from "react-redux";
import * as taskAction from "../../Action/Task";
import * as modalAction from "../../Action/Modal";
import {bindActionCreators} from "redux";
import TaskForm from "../TaskForm";

class TaskList extends Component {
   handleEdit =task =>{
     const {modalCreators,ediTaskCreator} = this.props;
    const {showModal, changeModalTile, changeModalContent} = modalCreators;
    showModal();
    changeModalTile("Edit Task")
    changeModalContent(<TaskForm/>);
      const {editTask} = ediTaskCreator;
      editTask(task);
   }
  render() {
    const { items, list } = this.props;
    return (
      <Grid item xs={4} md={4} key={items.value}>
        <Box mt={3} mb={1}>
          <div>{items.label}</div>
        </Box>
        <div>
          {list.map(item => (
            <TaskItem item={item} items={items} key={item.id} onClickEdit={()=>this.handleEdit(item)}></TaskItem>
          ))}
        </div>
      </Grid>
    );
  }
}
const mapStateToProps = state =>{
  return{

  }
}

const mapDispatchToProps = dispatch=>{
 return{
     ediTaskCreator: bindActionCreators(taskAction, dispatch),
     modalCreators: bindActionCreators(modalAction, dispatch)
 }
}



export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
