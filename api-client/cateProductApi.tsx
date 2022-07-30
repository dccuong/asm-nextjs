import {CateProduct} from '../models/cateProduct'
import axiosClient from './config'

export const getAll =  ():Promise<CateProduct[]>=>{
return axiosClient.get("/cateproduct")
} 
export const remove =  (id:string):Promise<CateProduct>=>{
return axiosClient.delete(`/cateproduct/${id}`)
} 
export const add = (cateproduct: CateProduct): Promise<CateProduct> => {
    return axiosClient.post("/cateproduct", cateproduct);
  };
  export const get = (id?:string):Promise<CateProduct>=>{
    return axiosClient.get(`/cateproduct/${id}`)
  }
export const update = (cateproduct: CateProduct): Promise<CateProduct> => {
    return axiosClient.put(`/cateproduct/${cateproduct._id}`, cateproduct);
  };
  
