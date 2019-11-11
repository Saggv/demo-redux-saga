import * as TypeLoading  from "./TypeLoading";

export const showLoading =()=>({
     type:TypeLoading.SHOW_LOADING
})

export const hiddenLoading =()=>({
      type: TypeLoading.HIDDEN_LOADING
})