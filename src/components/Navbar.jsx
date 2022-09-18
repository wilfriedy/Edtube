import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import { logo } from "../utils/constants";
import { Search } from "@mui/icons-material";
import SearchFeed from "./SearchFeed";

export default function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{ backgroundColor: "#000", top: 0, justifyContent: "space-between" }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchFeed />
    </Stack>
  );
}
