import * as typeModal from "./TypeModal";

export const showModal =()=>{
      return{
           type: typeModal.SHOW_MODAL
      }
}

export const hiddenModal =()=>{
    return{
        type:typeModal.HIDDEN_MODAL
    }
};

export const changeModalTile =title=>{
    return{
        type:typeModal.CHANGE_MODAL_TITLE,
        payload:{
            title
        }
    }
};

export const changeModalContent =component=>{
    return{
        type:typeModal.CHANGE_MODAL_CONTENT,
        payload:{
            component
        }

    }
}