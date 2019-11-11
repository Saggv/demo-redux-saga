import * as typeModal from "../Action/TypeModal";

const initialState ={
     isShow:false,
     title:"",
     content:null
}

const modalReducer = (state= initialState, action)=>{
     switch(action.type){
          case typeModal.SHOW_MODAL:{
               return{
                   ...state,
                   isShow: true
               }
          }
          case typeModal.HIDDEN_MODAL:{
            return{
                ...state,
                isShow: false
            }
          }
          case typeModal.CHANGE_MODAL_TITLE:{
            return{
                ...state,
                title:action.payload.title
            }
       }
        case typeModal.CHANGE_MODAL_CONTENT:{
           return{
            ...state,
             content: action.payload.component
           }
        }
         default:
             return state;
     }
}

export default modalReducer;