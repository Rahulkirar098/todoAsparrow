import React from 'react'
import Create from "../Components/Pages/Create";
import Edit from "../Components/Pages/Edit";
import ListItem from "../Components/Pages/ListItem";



export const Routes =[
   

    {
        path:"/create",
        title:"/create",
        exact: true,
        component:()=><Create />
    },
    {
        path:"/edit/:id",
        title:"/edit",
        exact: true,
        component:()=><Edit />
    },
    {
        path:"/list",
        title:"/list",
        exact: true,
        component:()=><ListItem />
    },
    
]