import {fork, take, call, put, delay, takeLatest, select, takeEvery} from "redux-saga/effects";
import * as typeTask from "../Action/Type";
import {fetchTaskSuccess,fetchTaskFailed, filterTaskCuccess, addTaskSuccess, addTaskFail, fetchTask} from "../Action/Task";
import {getList, postTask} from "../Api/Task";
import {showLoading, hiddenLoading} from "../Action/Loadding";

function* watchFetchListTaskAction(){
      while(true){
             const action =  yield take(typeTask.FETCH_TASK);
          const {params} = action.payload;
            yield put(showLoading())
            const res =  yield call(getList, params);
            const {data} = res;

             if(res.status === 200){
                   yield put(fetchTaskSuccess(data))
             }
             else{
                    yield put(fetchTaskFailed(data))
             }
            yield delay(200);
             yield put(hiddenLoading());
      }
}

function * filterTaskSage({payload}){
     yield delay(500);
     const {keyword} = payload;
       yield put(fetchTask({
               q:keyword
       }))
//      const list = yield select(state=> state.Task.listTask);
//      const listTask = list.filter( item => item.title.trim().toLowerCase().includes(keyword.trim().toLowerCase()));
//      yield put(filterTaskCuccess(listTask));
}

function * addTask({payload}){
       const {title, description} = payload;
      yield put(showLoading());
      const resp = yield call(postTask,{
              title,
              description,
              status:0
      });
      if(resp.status === 201){
             yield put(addTaskSuccess(resp.data));
      }
      else{
             yield put(addTaskFail(resp.data));
      }
      yield put(hiddenLoading());
}

function* rootSaga(){
   yield fork(watchFetchListTaskAction);
   yield takeLatest(typeTask.FILTER_TASK, filterTaskSage);
   yield takeEvery(typeTask.ADD_TASK,addTask)
}

export default rootSaga;