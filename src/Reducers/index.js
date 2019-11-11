import {combineReducers} from "redux";
import taskReducer from "./Task";
import Loading from "./Loading";
import Modal from "./Modal";
import { reducer as formReducer } from 'redux-form'
const rootReducer =combineReducers({
       Task: taskReducer,
       Loading: Loading,
       Modal: Modal,
       form :formReducer
});

export default rootReducer;
