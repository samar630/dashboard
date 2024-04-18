import React, { useEffect, useState } from 'react';
import { Typography, Box, Button } from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import AsyncSelect from "react-select/async"
import {Controller, useForm, useFieldArray} from 'react-hook-form'
import {
    FormGroup,
    Label,
    Input,
    
} from 'reactstrap'

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        flexDirection:'flex-col',
        alignItems: 'right',
        justifyContent: 'right',
        width:'100%',
        height:'100%',
        overflow:'scroll',  
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #847e7e5e',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        
    },
}));
export default function AnimatedModal({buttonHandle, setButtonHandle}) {
    const product = useSelector((state) => (state?.products));
    const [selectedImage, setSelectedImage] = useState(null);
    const array =[{name:"", _id:""}]
    const categories = useSelector((state) => (state?.categories?.categories?.categories));
    const asyncCategories = useSelector((state) => (state?.products?.categoryAsync?.result));
    const [loadOprtionCategories, setLoadOptionCategories] = useState(asyncCategories)
    const dispatch = useDispatch();
   const { register, errors, handleSubmit, control, setValue, watch } = useForm()
   const {fields: materialsWeight_fields, append: materialsWeight_append, remove: materialsWeight_remove} = useFieldArray({
       control,
       name: "materialsWeight"
   })

   const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };
   const fetchCategoriesAsyns = async () =>{
    try{
      dispatch({
        type:'SET_LOADING_CATEGORIES_REQUEST'
       })
    } catch (error){
      console.log("An error occurred while loading dashboard")
    }
}


   const handlesubmit = async (data) =>{
    console.log(data, 'xsvdxvfcdvbgfc')
    const product = {
        ...data,
        image : data.image[0],
        category :data?.category?.value,
        materialsWeight: data.materialsWeight?.map((material) => {
            return {
                materials_name: material.materials_name,
                materials_quantity: material.materials_quantity,
                weight_multi_service:  (parseFloat(material.materials_quantity) || 0) * (parseFloat(material.number_of_service) || 0)
            }
        }),
    }
    console.log(product, 'productdfsdgrd')
    try{
      dispatch({
        type:'CREATE_REQUESTED',
        payload: { payload: product, loading: false }
       })
    } catch (error){
      console.log("An error occurred while loading dashboard")
    }
  };
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
     
       fetchCategoriesAsyns()
     
   }, []);
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
  };
  const handleClose = () => {
      setOpen(false);
  };
   
    return (
        <div>
    
        <div className='bg-white'>
            <button className='p-4 rounded-sm bg-orange-500 text-white text-xl'  onClick={handleOpen}>
              {buttonHandle}
            </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
               
            >
             <div in={open}  className='flex flex-col h-full items-center   bg-white '   >
                 <span className='text-xl font-bold mt-4'>{buttonHandle}</span>
                 <form  onSubmit={handleSubmit(handlesubmit)} className='bg-white p-8 w-[32rem]' >
                    <div className='formInput'>
                    <label className='form-label' for={`productName`}>
                   materials Name
                    </label>
                    <input
                    as={Input}
                    id={`productName`}
                    name={`productName`}
                    placeholder='Product Name'
                    type={"text"}
                    control={control}
                    {...register(`productName`)}
                   />
                  </div>
                  <div className='formInput'>
                  <label className='form-label' for={`productQuantity`}>
                   product Quantity
                  </label>
                  <input
                   as={Input}
                   placeholder='Product Quantity'
                   id={`productQuantity`}
                   name={`productQuantity`}
                   type={"text"}
                   {...register(`productQuantity`)}
                   control={control}
                   />
                  </div>
                   <div className='w-72'>
                        {/* <label for={`number_of_service`}
                       class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">   Number Of Service
                       </label> */}
                          <div class="relative w-full min-w-[200px] h-10">  
                          <input
                               as={Input}
                               id={`number_of_service`}
                               name={`number_of_service`}
                               placeholder='Number Of Service'
                               type={"number"}
                               {...register(`number_of_service`) }
                               control={control}
                           />
                          </div>
                          </div>
                                   
                 <div className='formInput'>
                <label className='form-label' for={`image`}>
                image
               </label>
               <input
                   placeholder='image of product'
                   id={`image`}
                   name={`image`}
                   type="file"
                   accept=".png, .jpg, .jpeg"
                   control={control}
                   {...register(`image`) }
                   onChange={handleImageChange}     
               />
                </div>
                <div className='formInput'>
                      <Controller
                      as={AsyncSelect}
                      name='category'
                      control={control}
                      defaultValue={{name : '' , id:""}}
                      loadOptions={loadOprtionCategories}
                      render={(({field}) =>(
                        <Select
                        {...field}
                        isClearable
                        isSearchable={false}
                        className="react-dropdown"
                        classNamePrefix="dropdown"
                        options={loadOprtionCategories}
                         />
                      ))}
                       />
                </div>
                <ul>
                   {materialsWeight_fields.map((item, index) => (
                       <li key={item.id}>
                          <div className='formInput'>
                          <label className='form-label' for={`materialsWeight.${index}.materials_name`}>
                               materials Name
                           </label>
                           <input
                               as={Input}
                               id={`materialsWeight.${index}.materials_name`}
                               name={`materialsWeight.${index}.materials_name`}
                               placeholder='Materials Name'
                               type={"text"}
                               {...register(`materialsWeight.${index}.materials_name`)}
                               control={control}
                           />
                          </div>
                          <div className='formInput'>
                          <label className='form-label' for={`materialsWeight.${index}.materials_quantity`}>
                               Materials Quantity
                           </label>
                           <input
                               as={Input}
                               id={`materialsWeight.${index}.materials_quantity`}
                               placeholder='Materials Quantity'
                               type={"number"}
                               {...register(`materialsWeight.${index}.materials_quantity`) }
                               name={`materialsWeight.${index}.materials_quantity`}
                               control={control}
                           />
                          </div>
                     
                           <div className='formInput'> 
                           <label className='form-label' for={`materialsWeight.${index}.weight_multi_service`}>
                               Weight Service
                           </label>
                           <input
                               id={`materialsWeight.${index}.weight_multi_service`}
                               name={`materialsWeight.${index}.weight_multi_service`}
                               placeholder='Weight Multi Service'
                               type={"number"}
                               value={watch(`materialsWeight.${index}.number_of_service`) * watch(`materialsWeight.${index}.materials_quantity`)}
                               {...register(`materialsWeight.${index}.weight_multi_service`) }
                               control={control}
                           />
                           </div> 
                           <button type='button' onClick={() => materialsWeight_remove(index)}
                            className='ml-4 mt-4  rounded-sm mb-8 p-4 bg-orange-500 font-[1.2rem] text-md text-white'
                                   >
                               Delete
                           </button>
                       </li>
                   ))}
               </ul>
                 <div className='flex flex-col gap-2'>
                 <button type='button' className='ml-4 text-xl  rounded-sm p-4 w-[320px] bg-orange-500 text-md text-white'
                       onClick={() => materialsWeight_append({
                           materials_name:"",
                           materials_quantity:"",
                           number_of_service:"",
                           weight_multi_service:"",
                           totalWeight:""
                       })}> materials Weight </button>
               <button className='ml-4 p-4 w-[180px] text-xl font-bold  rounded-sm bg-orange-500 text-md text-white' type="submit">
               Submit
              </button>
                 </div>
                </form>
             
            </div>
              
            </Modal>
        </div>
        </div>
    );
}