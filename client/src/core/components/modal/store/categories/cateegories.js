import React, { useEffect, useState, useMemo } from 'react'
import { DataGrid } from "@mui/x-data-grid";
import {  useDispatch, useSelector } from 'react-redux';
import Header from '../../../../topbar/Header'
import AnimatedModal from './modal';
import { Box, Chip, Stack } from "@mui/material"
import TextField from '@mui/material/TextField';
import {useNavigate} from 'react-router-dom'
const Categoreis = (props) => {
  const dispatch = useDispatch()
  const navaigate = useNavigate()
  const [open, setOpen] = useState(false);
  const [buttonHandle, setButtonHandle] = useState('Add Categories')
  const [openModal, setOpenModal] = useState(false);
  const [row, setRow] = useState(props?.categories)
  const handleOpen = () => {
    setOpen(true);
};
const handleClose = () => {
    setOpen(false);
};

const handleDelete = async (id) =>{
  try{
    dispatch({
      type:'DELETE_REQUESTED_CATEGORIES',
      payload: {payload: id, loading : false}
     })
     
  } catch (error){
    console.log("An error occurred while delete request")
  }
  setTimeout(()=>{
       navaigate('/categories')
  },3000)
};
const columns = useMemo ( () =>  [  
      { field: "id", headerName: "ID" },
      {
        field: "name",
        headerName: "Categories name",
        headerAlign: "left",
        align: "left",
       
      },
      {
        field: "icon",
        headerName: "Categories icon ",
        type: "number",
        headerAlign: "left",
        align: "left",
        flex:0.3
      },
      {
        field: "image",
        headerName: "image",
        type:'file',
        headerAlign: "left",
        align: "left",
        renderCell: (params) => (
          <Stack direction="row" spacing={0.25}>
           <img className='w-36 h-12' src={params?.row?.image} alt='not found' />
          </Stack>
        ),
      },
      {
        field: "Delete",
        headerName: "Delete",
        type:'actions',
        headerAlign: "center",
        align: "center",
        flex: 0.3,
        renderCell: (params) => (
          <Stack direction="row" spacing={0.5}>
             <button onClick={() => handleDelete(params?.row?._id)}>
                Delete
              </button>
         
          </Stack>
        ),
      },

    ],[]) 

  useEffect(() =>{

    

  },[row]  )
  return (

    <Box m="20px" >
     <div className='flex flex-col flex-end'>
     <Header title="Categoreis" subtitle="Manage Details of Categoreis"  />
       <div className='flex flex-row justify-between'>
       <TextField
           variant="standard"
           placeholder="Search..."    
         />
       <AnimatedModal openModal={openModal} buttonHandle={buttonHandle} setButtonHandle={setButtonHandle} /> 
    
     
       </div>
     </div>

       <Box
           width='100%'
          height="75vh"
           sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .name-column--cell": {
         
        },
        "& .MuiDataGrid-columnHeaders": {
          
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
         
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
         
        },
        "& .MuiCheckbox-root": {
          
        },
      }}
    >
     <DataGrid checkboxSelection  
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10, page: 0 },
         
          },
        }}
            autoPageSize  
           rows={row} 
           getRowId={(categories) => categories?._id} 
           columns={columns} xs 
           editMode='row'
           experimentalFeatures={{ newEditingApi: true }}
          /> 

    </Box>
  </Box>
  )
}

export default Categoreis

