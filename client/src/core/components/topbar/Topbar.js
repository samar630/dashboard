import React from 'react'
import { Box, IconButton } from "@mui/material";

import InputBase from "@mui/material/InputBase";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import logo from '../../images/vector.png'
const Topbar = () => {

  return (
   <Box display='flex' justifyContent='space-between' >
   
      <Box display="flex "  >
        <IconButton >
          <NotificationsOutlinedIcon className='text-[orange]' />
        </IconButton>
        <IconButton >
          <SettingsOutlinedIcon className='text-[orange]'/>
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon  className='text-[orange]'/>
        </IconButton>
      </Box>
    </Box>
 
  )
}

export default Topbar
