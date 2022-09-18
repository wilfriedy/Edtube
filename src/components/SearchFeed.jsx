import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import {Search} from "@mui/icons-material"
export default function SearchFeed() {
  return (
    <Paper component ="form" onSubmit={()=>{}} sx={{
        borderRadius:20,
        mr:{sm:5},
        pl:2,
        boxShadow:"none"
    }}>
        <input className='search-bar' placeholder='Search...' onChange={()=>{}} />
        <IconButton>
            <Search sx={{color:'red'}}/>
        </IconButton>
    </Paper>
  )
}
