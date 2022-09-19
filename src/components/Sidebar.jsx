import React from 'react'
import {Stack} from "@mui/material";
import {categories} from '../utils/constants'
const categorySelected = 'New'
export default function Sidebar() {
  return (
    <Stack direction="row"
    sx={{
        overflowY:"auto",
        height:{sx:'auto',md:'95%'},
        flexDirection:{md:'column'}
    }}
    >
        {categories.map(category =>{
            return (
              <button
                className="category-btn"
                style={{
                  backgroundColor:
                    category.name == categorySelected && "#fc1503",
                  color: "white",
                }}
              >
                <span style={{ color: "#fc1503", marginRight:'10px' }}>{category.icon}</span>
                <span style={{ color: "white" }}>{category.name}</span>
              </button>
            );
        })}
    </Stack>
  )
}