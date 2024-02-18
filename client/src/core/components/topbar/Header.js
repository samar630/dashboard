import { Typography, Box } from "@mui/material";





      const Header = ({ title, subtitle}) => {
   
  return (
    <Box  sx={{display:"flex",justifyContent:"space-around",alignItems:"center", gap:'60%', position:'relative'}}>
     <Box >
     <Typography
        variant="h2"
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" >
        {subtitle}
      </Typography>
     </Box>
      <Box
           width="10%"
           height='4rem'
            m="0 auto"
              display="flex"
                justifyContent="center"
                borderRadius="4px"
              >
          
              </Box>
    </Box>
  );
};

export default Header;