import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {

  return (
    <MenuItem
      active={selected === title}
     
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `#fec1518c !important`,
          height:'100vh !important',
          fontFamily:'Cairo !important',
          fontStyle:'Cairo !important'
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
          color:'rgb(56 55 38 / 90%)'
        },
        "& .pro-inner-item:hover": {
          color: "rgb(226 103 17 / 90%) !important",
        },
        "& .pro-menu-item.active": {
          color: "#000 !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color:'#000 !important'
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
               
              >
                <Typography variant="h6"  style={{color:'#000'}}  >
                  Project Manager
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px"   style={{
              }}>
              <Box textAlign="center"  >
                <Typography variant="h5"  style={{color:'#000'}}>
                samar Qaddour 
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
           
            />

            <Typography
              variant="h6"
              style={{
                color:'#000'
              }}
              sx={{ m: "15px 0 5px 20px" }}
            >
              user
            </Typography>
            <Item
              title="Products"
              to="/products"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Role"
              to="/role"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="categories"
              to="/categories"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              style={{color:'#000'}}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Jobs
            </Typography>
            <Item
              title="categories"
              to="/categories"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Vocational training"
              to="/training"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              style={{color:'#000'}}
              sx={{ m: "15px 0 5px 20px" }}
            >
             Academy
            </Typography>
            <Item
              title="Acadmic Accounts"
              to="/Acadmic_Accounts"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Subscription types"
              to="/Subscription_types"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Subscription available"
              to="/SubscriptionAvailable"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              style={{color:'red'}}
            />
              <Typography
              variant="h6"
              style={{color:'#000'}}
              sx={{ m: "15px 0 5px 20px" }}
            >
             Team
            </Typography>
            <Item
              title="Team Work"
              to="/team"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
           
          
          
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;