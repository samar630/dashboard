import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'

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
    const product = useSelector((state) => (state.products));
    const navaigate = useNavigate()
    const dispatch = useDispatch();
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedName, setSelectName] = useState(null)
   const handleImageChange = (event) => {
     const file = event.target.files[0];
     setSelectedImage(file);
   };
  
   const handlesubmit = async (event) =>{
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', selectedImage);
    formData.append('name', selectedName);
    try{
      dispatch({
        type:'CREATE_REQUESTED_CATEGORIES',
        payload: { payload: formData, loading: false }
        
       })
       setTimeout(()=>{
        navaigate('/categories')
       },1000)
    } catch (error){
      console.log("An error occurred while loading dashboard")
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
                <form className="formInput" onSubmit={handlesubmit}>
                <div className='formInput'>
                 <label className='form-label' for={`image`}>
                    Categories image
                  </label>
                  <input
                    placeholder="Image of product"
                    id="image"
                    name="image"
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    onChange={handleImageChange}
               />
                </div>
                <div className='formInput'>
              <label className='form-label' for={`image`}>
                    Categories image
                  </label>
                  <input
                    placeholder="Name of categories"
                    id="name"
                    name="name"
                    type="text"
                    onChange={(e) => setSelectName(e.target.value)}
               />
                </div>
                    <button className='ml-4 p-4 w-[180px] text-xl font-bold  rounded-sm bg-orange-500 text-md text-white' type="submit">submit</button>
           </form>
            </div>
              
            </Modal>
        </div>
        </div>
    );
}