
import React, { useState, useEffect } from 'react';
import {Typography, Paper, FilledInput} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {Controller, useForm, useFieldArray} from 'react-hook-form'
import {
    FormGroup,
    Label,
    Button,
    Input,
} from 'reactstrap'
import {createProduct, fetchProducts} from '../../core/redux/actions/index'

const Form_Material = () =>{
    const product = useSelector((state) => (state.products));
     const dispatch = useDispatch();
    const { register, errors, handleSubmit, control, setValue, watch } = useForm()
    const {fields: materialsWeight_fields, append: materialsWeight_append, remove: materialsWeight_remove} = useFieldArray({
        control,
        name: "materialsWeight"
    })



    const onSubmit = (data) => {
        const product = {
            ...data,
            materialsWeight: data.materialsWeight?.map((material) => {
                return {
                    materials_name: material.materials_name,
                    materials_quantity: material.materials_quantity,
                    number_of_service: material.number_of_service,
                    weight_multi_service:  (parseFloat(material.materials_quantity) || 0) * (parseFloat(material.number_of_service) || 0)
                }
            }),
        }

        dispatch(createProduct(product))
         console.log(product, "product")
    }
    const handleTotalWeight = () =>{
        const productQuantity = (parseFloat(product.productQuantity || 0))
        const totalWeight = product?.map(x => {
            return (
                <div>
                   <h1 key={x.id}> x?.materialsWeight</h1>
                </div>
            )
        })
        return console.log(totalWeight, 'totalWeight')
    }
    useEffect(() => {
        if (product) fetchProducts(product);
        console.log(product,'productttt');
    }, [product]);
    return (
   <>
       <form onSubmit={handleSubmit(onSubmit)}>
           <FormGroup >
               <Label className='form-label' for={`productName`}>
                   materials Name
               </Label>
               <input
                   as={Input}
                   id={`productName`}
                   name={`productName`}
                   type={"text"}
                   control={control}
                   {...register(`productName`)}
               />
               <Label className='form-label' for={`productQuantity`}>
                   product Quantity
               </Label>
               <input
                   as={Input}
                   id={`productQuantity`}
                   name={`productQuantity`}
                   type={"text"}
                   {...register(`productQuantity`)}
                   control={control}
               />
               <ul>
                   {materialsWeight_fields.map((item, index) => (
                       <li key={item.id}>
                           <Label className='form-label' for={`materialsWeight.${index}.materials_name`}>
                               materials Name
                           </Label>
                           <input
                               as={Input}
                               id={`materialsWeight.${index}.materials_name`}
                               name={`materialsWeight.${index}.materials_name`}
                               type={"text"}
                               {...register(`materialsWeight.${index}.materials_name`)}
                               control={control}
                           />
                           <Label className='form-label' for={`materialsWeight.${index}.materials_quantity`}>
                               materials_quantity
                           </Label>
                           <input
                               as={Input}
                               id={`materialsWeight.${index}.materials_quantity`}
                               type={"number"}
                               {...register(`materialsWeight.${index}.materials_quantity`) }
                               name={`materialsWeight.${index}.materials_quantity`}
                               control={control}
                           />
                           <Label className='form-label' for={`materialsWeight.${index}.number_of_service`}>
                               number_of_service
                           </Label>
                           <input
                               as={Input}
                               id={`materialsWeight.${index}.number_of_service`}
                               name={`materialsWeight.${index}.number_of_service`}
                               type={"number"}
                               {...register(`materialsWeight.${index}.number_of_service`) }
                               control={control}
                           />
                           <Label className='form-label' for={`materialsWeight.${index}.weight_multi_service`}>
                               weight_multi_service
                           </Label>
                           <input

                               id={`materialsWeight.${index}.weight_multi_service`}
                               name={`materialsWeight.${index}.weight_multi_service`}
                               type={"number"}
                               value={watch(`materialsWeight.${index}.number_of_service`) * watch(`materialsWeight.${index}.materials_quantity`)}
                               {...register(`materialsWeight.${index}.weight_multi_service`) }
                               control={control}
                           />
                           <Button type='button' onClick={() => materialsWeight_remove(index)}
                                   className='flex-grow-1'
                                   color='secondary' >
                               Delete
                           </Button>
                       </li>
                   ))}
               </ul>
               <Button type='button' className='flex-grow-1' color='primary'
                       onClick={() => materialsWeight_append({
                           materials_name:"",
                           materials_quantity:"",
                           number_of_service:"",
                           weight_multi_service:"",
                           totalWeight:""
                       })}> materialsWeight </Button>
           </FormGroup>

           <Button variant="contained" color="primary" type="submit">
               Submit
           </Button>
       </form>

   </>

    )
}

export default Form_Material