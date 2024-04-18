import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { FiEdit } from "react-icons/fi";
import { RiAddCircleLine } from "react-icons/ri";
import { Button } from "@material-tailwind/react";
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
      background:'#fff',
        border: '1px solid #847e7e5e',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        
    },
}));
export default function AnimatedModal({buttonHandle,params}) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedName, setSelectName] = useState('');
  const [selectedStatus, setSelectStatus] = useState('')
  const [selectedActive, setSelectActive] = useState(false)
  const product = useSelector((state) => (state.products));
  const [data, setData] = useState(
    {
      name:params?.name,
      status:params?.state,
      active:params?.active,
      image:params?.image
    }
  )
  const dispatch = useDispatch();
  useEffect(() =>{
   })

  const handleCheckboxChange = (event) => {
    setSelectActive(event.target.checked);
  };
 const handleImageChange = (event) => {
   const file = event.target.files[0];
   setSelectedImage(file);
 };

 const handlesubmit = async (event) =>{
  event.preventDefault();
  if(buttonHandle === 'update'){
  
  }else{
    const formData = new FormData();
    formData.append('image', selectedImage)
    formData.append('active', selectedActive)
    formData.append('status', selectedStatus)
    formData.append('name', selectedName)
    console.log(formData,'formData')
    try{
      dispatch({
        type:'CREATE_REQUESTED_CATEGORIES',
        payload: { payload: formData, loading: false }
        
       })
    } catch (error){
      console.log("An error occurred while loading dashboard")
    }
  }  
};

 useEffect(() => {

 }, [product]);
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
            <Button className='filled' onClick={handleOpen} >
              {buttonHandle === 'update' ? <span className='bg-white'><FiEdit/></span>  : <span className='flex  '><RiAddCircleLine className=' mr-1' /> <p className=''>Categories</p></span> }
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
             <div in={open}  className='flex flex-col h-full items-center  bg-white '   >
                 <span className='text-xl font-bold mt-4'>{buttonHandle}</span>
              <form className='bg-white p-8 w-[26rem] flex flex-col gap-4 ' onSubmit={handlesubmit}>
              <div class="w-72">
              <div class="relative w-full min-w-[200px] h-10">        
             <input
             id="name"
             name="name"
             type="text"
             onChange={(e) => setSelectName(e.target.value)}
            class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
        />
        <label
        class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">caregories Name
         </label>
       </div>
             </div>
             <div class="w-72">
              <div class="relative w-full min-w-[200px] h-10">
             <input
             id="status"
             name="status"
             type="text"
             onChange={(e) => setSelectStatus(e.target.value)}
          class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
        /><label
        class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Categoreis status
         </label>
       </div>
            </div>
          <div class="w-72">
                <div class="relative w-full min-w-[200px] h-10">
                 <input
                   id="image"
                   name="image"
                   type="file"
                   accept=".png, .jpg, .jpeg"
                   onChange={handleImageChange}
                  class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50   text-sm px-3 py-2.5 rounded-[7px] "
                 /><label
             class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px]  ">Image
             </label>
               </div>
          </div>
         <div class="inline-flex items-center">
      <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
        <input type="checkbox"
        name="active"
       onChange={handleCheckboxChange}
      class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
      id="checkbox"  />
    <span
      class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
        stroke="currentColor" stroke-width="1">
        <path fill-rule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clip-rule="evenodd"></path>
      </svg>
    </span>
     </label>
     <span> is active</span>
         </div> 
         <button
  class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
  type="submit"
>
{buttonHandle === 'update' ? 'Update' : 'Create'}
</button>
        
           </form>
            </div>
            </Modal>
        </div>
      
    );
}