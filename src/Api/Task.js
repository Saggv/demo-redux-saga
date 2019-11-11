import axiosService from "../Common/Axioscm";
import query from "query-string";
const url ="http://localhost:4000"

export const getList =(params={})=>{
       let queryParams = '';
       if(Object.keys(params).length >0){
            queryParams = `?${query.stringify(params)}`;
       }
       console.log(params);
      return axiosService.gets(`${url}/task${queryParams}`);
};

export const postTask = data=>{
        return axiosService.post(`${url}/task`, data);
}