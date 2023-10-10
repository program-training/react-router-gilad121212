import React, { useContext } from "react";
import { Box } from "@mui/material";
import { Link ,Outlet } from 'react-router-dom';
import { userContext } from "../../contex.tsx/data";
import UsersInfo from "./infoUsers";

export default function Users(){
    const context = useContext(userContext);
    if (!context) return null;
     const { user } = context;
    return(
        user?.map((arr)=><Box >
           <Link  to={`/infoUsers/${arr.id}`} key = {arr.id}>
            <h1 >{arr.name}</h1>
           </Link>
        </Box>)
        
    )
}