import React, {useEffect, useState} from 'react'
import {useSelector} from "react-redux";
import useStyles from './styles'
const Product = () =>{
    const products = useSelector((state) => state.products)

 const sum = (num1,num2) => {
    const result = num1 * num2
     console.log(result , 'num1 * num2')
     return result
 }

    let array = []; // Declare an empty array
    useEffect(() =>{
        console.log(products, 'products')
        console.log(array,'array')
    },[products,array])

    return (
        <div>
            {products.map((q,index) =>{
               return(
                   <div key={index}>
                       <h1>{q?.productName}</h1>
                       <h2>{q?.productQuantity}</h2>
                       <p>{q?.materialsWeight.map((t,i)=>{
                         return(
                             <div key={i}>
                                 <div>{t?.materials_name}</div>
                                 <div>{t?.weight_multi_service}</div>
                                 <div> {sum(q?.productQuantity,t?.weight_multi_service)} </div>
                                 <div>{array.push(t?.materials_name,sum(q?.productQuantity,t?.weight_multi_service))}</div>
                             </div>
                         )
                       })}

                       </p>
                   </div>
               )
            })}
        </div>
    )
}

export default Product;