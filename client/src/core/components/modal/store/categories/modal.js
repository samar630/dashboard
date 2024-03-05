import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { FiEdit } from "react-icons/fi";
import { RiAddCircleLine } from "react-icons/ri";
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
export default function AnimatedModal({buttonHandle, params}) {
    const product = useSelector((state) => (state.products));
    const navaigate = useNavigate()
    const dispatch = useDispatch();
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedName, setSelectName] = useState({
      ...params?.name

    })
    const [selectedStatus, setSelectStatus] = useState(null)
    const [selectedActive, setSelectActive] = useState(true)
    const handleCheckboxChange = (event) => {
      setSelectActive(event.target.checked);
    };
   const handleImageChange = (event) => {
     const file = event.target.files[0];
     setSelectedImage(file);
   };
  
   const handlesubmit = async (event) =>{
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', selectedImage);
    formData.append('name', selectedName);
    formData.append('status', selectedStatus);
    formData.append('active', selectedActive);
    
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
    console.log(selectedImage,'selectedImage')
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
            <button className=' rounded-sm p-2 bg-orange-500 text-white text-xl'  onClick={handleOpen}>
              {buttonHandle === 'update' ? <span className='bg-white'><FiEdit/></span>  : <span className='flex  '><RiAddCircleLine className='mt-1 mr-1' /> <p className=''>Categories</p></span> }
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
                    filename={params?.image}
                    onChange={handleImageChange}
               />
                </div>
                <div className='formInput'>
              <label className='form-label' for={`image`}>
                    Categories Name
                  </label>
                  <input
                    placeholder="Name of categories"
                    id="name"
                    name="name"
                    type="text"
                    // value={buttonHandle === "update" ? `${params?.name}` : null}
                    onChange={(e) => setSelectName( e.target.value)}
               />
                </div>
                <div className='formInput'>
              <label className='form-label' for={`image`}>
                    Categories status
                  </label>
                  <input
                    placeholder="status of categories"
                    id="status"
                    name="status"
                    type="text"
                  
                    // value={buttonHandle === "update" ? `${params?.status}` : null}
                    onChange={(e) => setSelectStatus( e.target.value)}
               />
                </div>
                <div className='formInput'>
                  <input
                
                    placeholder="Name of categories"
                    id="active"
                    name="active"
                    type="checkbox"
                     value={buttonHandle === "update" ? `${params.active}` : null}
                    onChange={handleCheckboxChange}
                    title='Is Active'
               />
                </div>
                    <button className='ml-4 p-2 w-[180px] text-xl font-bold  rounded-sm bg-orange-500 text-md text-white' type="submit">{buttonHandle === 'update' ? 'Update' : 'Create'}</button>
           </form>
            </div>
              
            </Modal>
        </div>
        </div>
    );
}