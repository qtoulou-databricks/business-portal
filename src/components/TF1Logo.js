import React from 'react';
import { Box } from '@mui/material';
import logoTF1 from '../images/Logo_TF1_2013.png';

const TF1Logo = ({ width = 32, height = 32 }) => (

  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <img
      src={logoTF1}
      alt="TF1 Logo"
      width={width}
      height={height}
      style={{
        objectFit: 'contain',
        filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
      }}
    />
  </Box>
  
);

export default TF1Logo;