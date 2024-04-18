
import React, { useEffect, useState, useMemo } from 'react'
import { DataGrid } from "@mui/x-data-grid";
import {  useDispatch, useSelector } from 'react-redux'
import Header from '../../../topbar/Header'
import AnimatedModal from './modal'
import { Box, Chip, Stack } from "@mui/material"
import TextField from '@mui/material/TextField'
import {useNavigate} from 'react-router-dom'
import { RiDeleteBin6Line } from "react-icons/ri"
import { Button } from "@material-tailwind/react"
const Categories = (props) => {
  const dispatch = useDispatch()
  const navaigate = useNavigate()
  const [open, setOpen] = useState(false);
  const [buttonHandle, setButtonHandle] = useState('Add Categories')
  const [openModal, setOpenModal] = useState(false);
  const [row, setRow] = useState(props?.categories)

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
const handleUpdate = async (param) =>{
  try{
    dispatch({
      type:'UPDATE_REQUESTED_CATEGORIES',
      payload: {payload: param, loading : false}
     })
     
  } catch (error){
    console.log("An error occurred while delete request")
  }
  setTimeout(()=>{
       navaigate('/categories')
  },3000)
};


const columns = useMemo ( () =>  [  
      { field: "id",
       headerName: "ID" 
      },
      {
        field: "name",
        headerName: "name",
        headerAlign: "left",
        align: "left",
        flex:0.2,
      },
      {
        field: "status",
        headerName: "status",
        headerAlign: "left",
        align: "left",
        flex:0.2,
      },
      {
        field: "image",
        headerName: "image",
        type:'file',
        headerAlign: "left",
        align: "left",
        flex:0.5,
        renderCell: (params) => (
          <Stack direction="row" spacing={0.25}>
           <img style={{objectFit:'contain'}} className='w-36 h-12' src={params?.row?.image} alt='not found' />
          </Stack>
        ),
      },
      {
        field: "Delete",
        headerName: "Delete",
        type:'actions',
        headerAlign: "center",
        align: "center",
        renderCell: (params) => (
          <Stack direction="row" spacing={0.5}>
             <Button onClick={() => handleDelete(params?.row?._id)} className=''>
              <RiDeleteBin6Line />
              </Button>
          </Stack>
        ),
      },    
      {
        field: "Edits",
        headerName: "Edits",
        type:'actions',
        headerAlign: "left",
        align: "left",
        getActions: (params) => [
          <button
          onClick={() => setButtonHandle('update')  }
          variant="contained"
        >
         <AnimatedModal params={params?.row} openModal={openModal} buttonHandle='update' />
        </button>
        ],
      }
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
       <AnimatedModal openModal={openModal} buttonHandle='Add Categories' /> 
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
          {...row}
           initialState={{
            ...row.initialState,
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10, 25]}
           
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

export default Categories