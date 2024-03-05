import _ from "lodash"
import axios from 'axios';

const baseUrl ="http://localhost:5000"
export const createProduct = async (product) =>{
  
    try{
        axios.post(`${baseUrl}/products`, product).then(data =>{
            console.log(data, 'data')
        }
           
        )
    }catch(err){
        return console.error(err, 'error')
    }
}
export const fetchProduct = async () =>{
    try{
        const products = await axios.get(`${baseUrl}/products`)
        return products?.data  
    }  catch(err){
        return console.error(err, 'error')
    }
}
export const deleteProducts = async (id) =>{
    try{
       const product= axios.delete(`${baseUrl}/products/${id}`)     
        return product?.data  
    }catch(err){
        return console.error(err, 'error')
    }
}
export const updateProducts = async (id,product) =>{
    try{
        axios.post(`${baseUrl}/products/${id}`, product).then(data =>{
            console.log(data, 'data')
          return data
        } )
    }catch(err){
        return console.error(err, 'error')
    }
}

// export const _categoryAsync = async () => {
//     axios.get(`${baseUrl}/categories`).then(data =>{
//         result = _.map(data.data, (v, k) =>{
//             return { value: v._id, label: v.name }
//         })
//         console.log(result,'resultAsync545')
//         return result
//        })  
// }



export const _categoryAsync = async () => {
  const res = await fetch(`${baseUrl}/categories`).then(data => {
    return data.json()
  })
 
  console.log(res, 'resftexh')
    const result= res?.map((v,k) =>{
      return { value:  v?._id, label:  v?.name }
    })
    console.log(result, 'result')
    return result
}