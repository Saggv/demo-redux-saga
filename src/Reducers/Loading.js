import * as TypeLoading from "../Action/TypeLoading";

const initialState ={
       isShow: false
}

const Loading=(state=initialState, action)=>{
     switch(action.type){
         case TypeLoading.SHOW_LOADING:{
             return{
                 ...state,
                 isShow: true
             }
         }
         case TypeLoading.HIDDEN_LOADING:{
            return{
                ...state,
                isShow:false
            }
         }
         default:
             return state;
     }
}

export default Loading;