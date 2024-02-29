import { Typography, Box } from "@mui/material";
import Topbar from "./Topbar";
 const Header = ({ title, subtitle}) => {
   
  return (
    <div className="flex flex-col p-6 gap-4"> 
      <Box>
      <Typography
        variant="h4"
        fontWeight="bold"
      >
        {title}
      </Typography>
      </Box>
      <div className='flex justify-between w-full'>
      <Typography variant="h6" >
        {subtitle}
      </Typography>
        <Topbar/>
      </div>
     
 
    </div>
  );
};

export default Header;