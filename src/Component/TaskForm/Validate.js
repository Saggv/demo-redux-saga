const validate = value =>{
      const errors ={};
      if(!value.title && typeof value.title === "undefined"){
          errors.title = "Please enter field !"
        
       }
      else if(value.title.length < 5){
          errors.title = "Must be 5 characters or more";
      }
      return errors;
}

export default validate;