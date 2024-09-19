import React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function LoadingScreen() {
  return (
    <>
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          alignItems: 'flex-start',
          justifyContent: 'flex-start'
        }}
      >
        <Skeleton 
          sx={{
            width: { xs: '95%', md: '60%' },
            minHeight: '600px',
            margin: '10px',
            marginTop: '0px', 
            backgroundColor: 'rgba(3, 4, 18, 0.53)',
            color: '#F0FFFF',
            borderTopLeftRadius: '200px',
            borderBottomLeftRadius: '10px',
            borderTopRightRadius: '10px',
            borderBottomRightRadius: '200px'
          }}
        />
        <Skeleton 
          sx={{
            width: { xs: '95%', md: '40%' },
            minHeight: '600px',
            margin: '10px',
            marginTop: '0px !important',
            backgroundColor: 'black',
            color: '#F0FFFF',
            borderRadius: '10px'
          }}
        />
      </Box>
    </>
  );
}
