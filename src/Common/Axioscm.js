import axios from "axios";

class axiosSevice{
      constructor(){
           const instance = axios.create();
            instance.interceptors.response.use(this.handleSucces, this.handleError);
           this.instance = instance;
      }
      handleSucces(response){
           return response;
      }
      handleError(err){
           return Promise.reject(err);
      }
      gets(url){
           return this.instance.get(url)
      };
      post(url, data){
            return this.instance.post(url, data);
      }
};

export default new axiosSevice();