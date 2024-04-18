import React, { useEffect, useState } from 'react';
import { Typography, Box } from "@mui/material";
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
import { Button } from "@material-tailwind/react"
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
export default function ModalNew({buttonHandle, setButtonHandle}) {
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
    console.log(data, 'datas')
    const product = {
        ...data,
        category :data?.category?.value,
        materialsWeight: data.materialsWeight?.map((material) => {
            return {
                materials_name: material.materials_name,
                materials_quantity: material.materials_quantity,
                number_of_service: material.number_of_service,
                weight_multi_service:  (parseFloat(material.materials_quantity) || 0) * (parseFloat(material.number_of_service) || 0)
            }
        }),
    }
    console.log(product, 'productdata')
    try{
      dispatch({
        type:'CREATE_REQUESTED',
        payload: { payload: product, loading: false }
       })
    } catch (error){
      console.log("An error occurred while loading dashboard")
    }
  };
  useEffect(() => { 
    fetchCategoriesAsyns()
    console.log(asyncCategories, 'asyncCategories')
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
    <div className='bg-white'>
            <Button   onClick={handleOpen}>
              {buttonHandle}
            </Button>
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
                 <div class="w-72">
                 <div class="relative w-full min-w-[200px] h-10 m-4">
                  <input
                   as={Input}
                   id={`productName`}
                   name={`productName`}
                   type="text"
                   control={control}
                   {...register(`productName`)}
                    class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                   /><label
                     for={`productName`}
                     class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">product Name
                    </label>
                  </div>        
                  </div> 
                  <div class="w-72">
                 <div class="relative w-full min-w-[200px] h-10  m-4">
                  <input
                   as={Input}
                   id={`productQuantity`}
                   name={`productQuantity`}
                   type={"text"}
                   {...register(`productQuantity`)}
                   control={control}
                    class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                   />
                   <label
                   for={`productQuantity`}
                    class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">product Quantity
                    </label>
                  </div>        
                  </div> 
{/*                   
                  <div class="w-72">
                 <div class="relative w-full min-w-[200px] h-10  m-4">
                  <input
                     id={`image`}
                     name={`image`}
                     type="file"
                     accept=".png, .jpg, .jpeg"
                     control={control}
                     {...register(`image`) }
                     onChange={handleImageChange} 
                    class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                   />
                  </div>        
                  </div> */}
                  <div className='w-72'>
                  <div class="relative w-full min-w-[200px] h-10  m-4">
                  <Controller
                      as={AsyncSelect}
                      name='category'
                      control={control}
                      defaultValue={{name : '' , id:""}}
                      loadOptions={asyncCategories}
                      render={(({field}) =>(
                        <Select
                        {...field}
                        isClearable
                        isSearchable={false}
                        className="react-dropdown"
                        classNamePrefix="dropdown"
                        options={asyncCategories}
                         />
                      ))}
                       />
                  </div>      
                </div>
                <ul>
                    {materialsWeight_fields.map((item, index) => (
                         <li key={item.id}>
                              <div class="w-72">
                              <div class="relative w-full min-w-[200px] h-10  m-4">
                              <input
                              as={Input}
                              id={`materialsWeight.${index}.materials_name`}
                              name={`materialsWeight.${index}.materials_name`}
                              type={"text"}
                              {...register(`materialsWeight.${index}.materials_name`)}
                              control={control}
                              class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                              /><label
                              for={`materialsWeight.${index}.materials_name`}
                             class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Materials Name
                           </label>
                          </div>        
                          </div>
                          <div class="w-72">
                              <div class="relative w-full min-w-[200px] h-10  m-4">
                              <input
                             as={Input}
                             id={`materialsWeight.${index}.materials_quantity`}
                             type={"number"}
                             {...register(`materialsWeight.${index}.materials_quantity`) }
                             name={`materialsWeight.${index}.materials_quantity`}
                             control={control}
                              class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                              /><label
                              for={`materialsWeight.${index}.materials_quantity`}
                             class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">materials quantity
                           </label>
                          </div>        
                          </div>
                          <div class="w-72">
                         <div class="relative w-full min-w-[200px] h-10  m-4">
                         <input
                         as={Input}
                        id={`materialsWeight.${index}.number_of_service`}
                        name={`materialsWeight.${index}.number_of_service`}
                        type={"number"}
                        {...register(`materialsWeight.${index}.number_of_service`) }
                        control={control}
                       class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                       /><label
                       for={`materialsWeight.${index}.number_of_service`}
                       class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Number of Service
                       </label>
                       </div>        
                       </div>
                          <div class="w-72">
                              <div class="relative w-full min-w-[200px] h-10  m-4">
                              <input
                             id={`materialsWeight.${index}.weight_multi_service`}
                             name={`materialsWeight.${index}.weight_multi_service`}
                             type={"number"}
                             value={watch(`materialsWeight.${index}.number_of_service`) * watch(`materialsWeight.${index}.materials_quantity`)}
                            {...register(`materialsWeight.${index}.weight_multi_service`) }
                              control={control}
                              class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                              /><label
                              for={`materialsWeight.${index}.weight_multi_service`}
                             class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">weight multi service
                           </label>
                          </div>        
                          </div>
                          <button
                          class="mb-2 salign-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                          type='button' onClick={() => materialsWeight_remove(index)} >
                           Delete
                        </button>
                      </li>
                    ))}
                </ul>
                <div className='flex flex-col gap-2'>
                <button
                class="select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
               type="button"
               onClick={() => materialsWeight_append({
                materials_name:"",
                materials_quantity:"",
                number_of_service:"",
                weight_multi_service:"",
                totalWeight:""
                })}
                >
                materials Weight
              </button>
              <button
            class="select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit">
              Submit
            </button>
                 </div>
                </form>
            </div>
              
            </Modal>
        </div>
  )
}


