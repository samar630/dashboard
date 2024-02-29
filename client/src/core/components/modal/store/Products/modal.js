import React, { useEffect, useState } from 'react';
import { Typography, Box, Button } from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useDispatch, useSelector } from 'react-redux';
import {Controller, useForm, useFieldArray} from 'react-hook-form'

import {
    FormGroup,
    Label,
    Input,
    
} from 'reactstrap'
import './input.css'
const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        flexDirection:'flex-col',
        alignItems: 'right',
        justifyContent: 'right',
        width:'100%',
        height:'auto',
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
    const product = useSelector((state) => (state.products));
    const dispatch = useDispatch();
   const { register, errors, handleSubmit, control, setValue, watch } = useForm()
   const {fields: materialsWeight_fields, append: materialsWeight_append, remove: materialsWeight_remove} = useFieldArray({
       control,
       name: "materialsWeight"
   })

const style = { 
        height:"auto",
        background: "#fff"     
}
function FetchProduct() {
     dispatch(
          {
            type: 'FETCH_ALL_REQUESTED',
            payload: {loading: false },
        })  
       setTimeout(() =>{
            
       },3000)
   
      }
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
       dispatch(
        {
          type: 'CREATE_REQUESTED',
          payload: { data: data, loading: false },
      }) 
    //    dispatch(createProduct(product))
    //     console.log(product, "product")
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
    FetchProduct()
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
            <Button sx={{position:'relative',background:'#ffa809'}} variant="white"  onClick={handleOpen}>
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
             <Fade in={open} >
               <Box sx={style}>
                 <Typography>{buttonHandle}</Typography>
                <form  onSubmit={handleSubmit(onSubmit)} style={{width:'45rem', height:'auto', background:'#fff'}}>
                    <div className='formInput'>
                    <label className='form-label' for={`productName`}>
                   materials Name
                  </label>
                  <input
                   as={Input}
                   id={`productName`}
                   name={`productName`}
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
                   id={`productQuantity`}
                   name={`productQuantity`}
                   type={"text"}
                   {...register(`productQuantity`)}
                   control={control}
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
                               type={"number"}
                               {...register(`materialsWeight.${index}.materials_quantity`) }
                               name={`materialsWeight.${index}.materials_quantity`}
                               control={control}
                           />
                          </div>
                          <div className='formInput'>
                          <label className='form-label' for={`materialsWeight.${index}.number_of_service`}>
                               Number Of Service
                           </label>
                           <input
                               as={Input}
                               id={`materialsWeight.${index}.number_of_service`}
                               name={`materialsWeight.${index}.number_of_service`}
                               type={"number"}
                               {...register(`materialsWeight.${index}.number_of_service`) }
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
                               type={"number"}
                               value={watch(`materialsWeight.${index}.number_of_service`) * watch(`materialsWeight.${index}.materials_quantity`)}
                               {...register(`materialsWeight.${index}.weight_multi_service`) }
                               control={control}
                           />
                           </div> 
                           <button type='button' onClick={() => materialsWeight_remove(index)}
                           className='sun_btn'
                                   >
                               Delete
                           </button>
                       </li>
                   ))}
               </ul>
               <button type='button' className='sun_btn_matariel' color='primary'
                       onClick={() => materialsWeight_append({
                           materials_name:"",
                           materials_quantity:"",
                           number_of_service:"",
                           weight_multi_service:"",
                           totalWeight:""
                       })}> materials Weight </button>

             <button className='sun_btn_matariel' variant="contained" color="primary" type="submit">
               Submit
           </button>
                </form>
                </Box>
            </Fade>
              
            </Modal>
        </div>
    );
}