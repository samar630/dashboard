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
        <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={logo}
                  style={{ cursor: "pointer",marginLeft:'2rem' }}
                />
              </Box>
    
      {/* ICONS */}
      <Box display="flex" >
        <IconButton >
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton >
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
 
  )
}

export default Topbar
