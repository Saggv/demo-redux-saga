import * as taskApi from "../Api/Task";
import  * as typeTask from "./Type";


export const fetchTask =(params={})=>{
      return{
           type:typeTask.FETCH_TASK,
           payload:{
                params
           }
      }
}
export const fetchTaskSuccess = data =>{
     return{
          type:typeTask.FETCH_TASK_SUCCESS,
          payload: data
     }
}
export const fetchTaskFailed = err=>{
     return{
          type:typeTask.FETCH_TASK_FAILDED,
          payload:{
               err
          }
     }
}

export const fetchListTaskRequest =()=>{
     return dispatch=>{
          dispatch(fetchTask());
           taskApi.getList()
                .then( data =>{
                     dispatch(fetchTaskSuccess(data));
                })
                .catch( err =>{
                    console.log(err);
                    dispatch(fetchTaskFailed(err));
                });
     }
}

export const filterTask =keyword=>{
      return{
           type: typeTask.FILTER_TASK,
           payload:{
                keyword
           }
      }
}

export const filterTaskCuccess = data=>{
     return {
           type: typeTask.FILTER_TASK_SUCCESS,
           payload:{
                 data
           }
     }
}

export const addTask = (title,description)=>{
        return{
             type:typeTask.ADD_TASK,
             payload:{
                  title,
                  description
             }
        }
}

export const addTaskSuccess = data=>{
      return{
            type:typeTask.ADD_TASK_SUCCESS,
            payload: data
      }
};

export const addTaskFail = err=>{
      return{
            type: typeTask.ADD_TASK_FAIL,
            payload:{
                  err
            }
      }
}

export const editTask = task=>{
       return{
            type:typeTask.EDIT_TASK,
            payload:{
                 task
            }
       }
}