import { toast } from 'react-toastify';

export const toasError = err=>{
    let message = null;
    if( typeof err === "object" && err.message){
          ({message} = err)
    }
      toast.error(message, {
           position:toast.POSITION.TOP_LEFT
      })
}