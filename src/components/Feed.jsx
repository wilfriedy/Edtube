import React, {useEffect, useState} from 'react'
import {Box, Stack, Typography} from '@mui/material'
import Sidebar from './Sidebar';

export default function Feed() {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          borderRight: "1px solid #3d3d3d",
          height: { sx: "auto", md: "92vh" },
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar/>
        <Typography variant='body2' sx={{mt:1.5, color:'#fff'}}>
            Be happy to use
        </Typography>
      </Box>
    </Stack>
  );
}
