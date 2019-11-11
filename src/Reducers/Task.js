
import * as typeTask from "../Action/Type";
import {toasError} from "../Helper/toasError";
const initialState={
      listTask:[],
      taskEdit:null
}

const taskReducer = (state=initialState, action)=>{
      switch(action.type){
            case typeTask.FETCH_TASK:{
                  return{
                         ...state,
                         listTask:[]
                  }
            }
            case typeTask.FETCH_TASK_SUCCESS:{
                  return{
                         ...state,
                         listTask:action.payload
                  }
            }
            case typeTask.FETCH_TASK_FAILDED:{
                    const {err} = action.payload
                    toasError(err);
                  return{
                         ...state
                  }
            }
            case typeTask.FILTER_TASK_SUCCESS:{
                  const {data} = action.payload;
                  return{
                        ...state,
                        listTask:data
                  }
            };
            case typeTask.ADD_TASK:{
                  return{
                        ...state
                  }
            }
            case typeTask.ADD_TASK_SUCCESS:{
                  return{
                        ...state,
                        listTask: state.listTask.concat([action.payload])
                  }
            }
            case typeTask.ADD_TASK_FAIL:{
                   const {err} =action.payload
                   toasError(err);
                  return{
                        ...state
                  }
            }
            case typeTask.EDIT_TASK:{
                  return{
                        ...state,
                        taskEdit:action.payload.task
                  }
            }
           default:
                return state
      }
};

export default taskReducer;