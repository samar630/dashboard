import _ from "lodash"
import axios from 'axios';
const baseUrl ="http://localhost:5000"
export const createCategories  = async (categories) =>{
  
    try{
        axios.post(`${baseUrl}/categories`, categories).then(data =>{
            console.log(data, 'data')
        }
           
        )
    }catch(err){
        return console.error(err, 'error')
    }
}
export const fetchCategories = async () =>{
    try{
        const categories = await axios.get(`${baseUrl}/categories`)
        return categories?.data  
    }  catch(err){
        return console.error(err, 'error')
    }
}
export const deleteCategories  = async (id) =>{
   
    try{
       const categories= axios.delete(`${baseUrl}/categories/${id}`)     
        return categories?.data  
    }catch(err){
        return console.error(err, 'errorfdsf')
    }
}
export const updateCategories = async (id,categories) =>{
    try{
        axios.post(`${baseUrl}/categories/${id}`, categories).then(data =>{
            console.log(data, 'data')
          return data
        } )
    }catch(err){
        return console.error(err, 'error')
    }
}
