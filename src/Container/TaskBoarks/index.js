import React, { Component } from 'react';
import { Status} from '../../Contant';

import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as taskAction from "../../Action/Task";
import * as modalAction from "../../Action/Modal";


import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import TaskList from '../../Component/TaskList';
import TaskForm from '../../Component/TaskForm';
import Search from '../../Component/Search';

class TaskBoarks extends Component {
  state = {
    Open: false,
  };
  componentDidMount(){
        const {taskActionCreators} = this.props;
        const { fetchTask} = taskActionCreators;
        fetchTask();
  }

  ChangeDialog = () => {
    const {modalActionCreators, taskActionCreators} = this.props;
    const {showModal, changeModalTile, changeModalContent} = modalActionCreators;
    const {editTask} = taskActionCreators;
    editTask(null);
    showModal();
    changeModalTile("Add New Task")
    changeModalContent(<TaskForm/>);
  };

  renderBoard() {
    let xtml = null;
    const {listTask} = this.props;
    xtml = (
      <Grid container spacing={1}>
        {Status.map((items, index) => {
          const list = listTask.filter(item => item.status === items.value);
          return (
            <TaskList items={items} list={list} key={items.value} ></TaskList>
          );
        })}
      </Grid>
    );
    return xtml;
  }

  handleSearch= e =>{
    const {value}=e.target;
    const {taskActionCreators} = this.props;
    const { filterTask} = taskActionCreators;
    filterTask(value);
  }
  
  renderSearch(){
      let xtml = null;
      xtml =(
         <Search handleChange={this.handleSearch}></Search>
      )
      return xtml;
  }

  render() {
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => this.ChangeDialog()}
        >
          <Icon>add_circle</Icon> Add new task
        </Button>
        {this.renderSearch()}
        {this.renderBoard()}
      </div>
    );
  }
}
const mapStateToProps = state=>({
        listTask: state.Task.listTask
});

const mapDispatchToProps = dispatch =>{
   return{
       taskActionCreators: bindActionCreators(taskAction, dispatch),
       modalActionCreators: bindActionCreators(modalAction, dispatch),
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskBoarks);
