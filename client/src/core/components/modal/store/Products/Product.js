import React, { useEffect, useState, useMemo } from 'react'
import { Typography, useTheme, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../../../data/mockData";
import {  useDispatch, useSelector } from 'react-redux';
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from '../../../topbar/Header'
import TextField from '@mui/material/TextField';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import AnimatedModal from './modal';
import { Box, Chip, Stack } from "@mui/material"
import { deleteProducts } from '../../../../redux/actions/index';
const Product = () => {
  const [clickedRow, setClickedRow] = React.useState();

  function onButtonClick(e, row) {
    e.preventDefault();
     dispatch(
          {
            type: 'DELETE_REQUESTED',
            payload: { id: row?._id, loading: false },
        })  
       setTimeout(() =>{
            
       },3000)
   
      }

  const [platform, setPlatform] = useState([])
  const [buttonHandle, setButtonHandle] = useState('add product')
  const [openModal, setOpenModal] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [rowProduct, setRowProduct]= useState('')
  const [rows, setRows] = useState([]);
  const product = useSelector((state) => (state.products));
  const dispatch = useDispatch();
  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    return updatedRow;
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
};
const handleClose = () => {
    setOpen(false);
};

    const columns = useMemo ( () =>  [
      { field: "id", headerName: "ID" },
      {
        field: "productName",
        headerName: "Name",
        headerAlign: "left",
        align: "left",
       
      },
   
      {
        field: "productQuantity",
        headerName: "product Quantity",
        type: "number",
        headerAlign: "left",
        align: "left",
        flex:0.3
      },
      // {
      //   field: "materialsWeight?.materials_name",
      //   headerAlign: "center",
      //   align: "center",
      //   headerName: "materials Name",
      //   flex: 0.6,
      //   valueOptions: [...new Set(product.map((o) => o?.materialsWeight).flat())],
      //   renderCell: (params) => (
      //     <Stack direction="row" spacing={0.25}>
      //       {params.row.materialsWeight.map(( x, index) => (
      //         <Chip label={x?.materials_name} />
      //       ))}
      //     </Stack>
      //   ),
      // },
      // {
      //   field: "materialsWeight?.number_of_service",
      //   headerName: "Number Of service",
      //   headerAlign: "center",
      //   align: "center",
      //   flex: 0.3,
      //   valueOptions: [...new Set(product.map((o) => o?.materialsWeight).flat())],
      //   renderCell: (params) => (
      //     <Stack direction="row" spacing={0.25}>
      //       {params.row.materialsWeight.map(( x, index) => (
      //         <Chip label={x?.number_of_service} />
      //       ))}
      //     </Stack>
      //   ),
      // },
      {
     field: 'actions',
    type: 'actions',
    headerName: 'Actions',
    flex: 0.2,
    getActions: (params) => [
    <Button
    onClick={(e) => onButtonClick(e, params.row)}
    variant="contained"
  >
    Delete
  </Button>
  ],
      },
      {
        field: "action",
        headerName: "action",
        headerAlign: "left",
        align: "left",
        renderCell: 
        (params) => <AnimatedModal {...{ params }} />,
      }
    ],[]) 
     function escapeRegExp(value) {
        return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    }
    const requestSearch = (searchValue) => {
      const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
      const filteredRows = mockDataTeam.filter((row) => {
          return Object.keys(row).some((field) => {
              return searchRegex.test(row[field].toString());
          });
      });
      setRows(filteredRows);
  };
  useEffect(() =>{
  console.log(clickedRow, 'clickedRow')
  },[product]  )
  return (

    <Box m="20px" >
    
    <Header title="TEAM" subtitle="Managing the Team Members"  />
       <Box sx={{justifyContent:'space-between', display:'flex'}}>
                  <TextField
                   variant="standard"
                 value={searchText}
                 onChange={(e) => { setSearchText(e.target.value); requestSearch(e.target.value) }}
                  placeholder="Search..."
                  InputProps={{
                  startAdornment: <SearchIcon fontSize="small" color="action" />,
                   endAdornment: (
                                <IconButton
                                    title="Clear"
                                    aria-label="Clear"
                                    size="small"
                                    style={{ visibility: searchText ? 'visible' : 'hidden', borderRadius: "57%", paddingRight: "1px", margin: "0", fontSize: "1.25rem" }}
                                    onClick={(e) => {setSearchText(''); setRows(platform)} }
                                >
                                    <ClearIcon fontSize="small" color="action" />
                                </IconButton>
                            ),
                        }}
                        sx={{
                            width: { xs: 1, sm: 'auto' }, m: (theme) => theme.spacing(1, 0.5, 1.5),
                            '& .MuiSvgIcon-root': {
                                mr: 0.5,
                            },
                            '& .MuiInput-underline:before': {
                                borderBottom: 1,
                                borderColor: 'divider',
                            },
                        }}
                    />
                   <Typography >
                    <AnimatedModal openModal={openModal} buttonHandle={buttonHandle} setButtonHandle={setButtonHandle} /> 
                </Typography>
        </Box>
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
      {rows === ''  ? <DataGrid checkboxSelection  
        initialState={{
          pagination: {
            paginationModel: { pageSize: 25, page: 0 },
          },
        }}
           autoPageSize  
           rows={product} 
           getRowId={(product) => product._id} 
           columns={columns} xs 
           editMode='row'
           experimentalFeatures={{ newEditingApi: true }}
          /> 

        : <DataGrid checkboxSelection 
           getRowId={(product) => product._id} columns={columns} xs 
        editMode='row'
           
           experimentalFeatures={{ newEditingApi: true }}
          rows={product}  />}
    </Box>
  </Box>
  )
}

export default Product
