import { ListItemText } from "@mui/material";
import { List } from "@mui/material";
import React from "react";
import ListItemButton from '@mui/material/ListItemButton';
import './VerticalMenu.css';


export default function VerticalMenu() {
    return (
        <List component="nav" className="menu">
            <ListItemButton>
                <ListItemText primary="Board" />
            </ListItemButton>
            <ListItemButton>
                <ListItemText primary="Tasks" />
            </ListItemButton>
        </List>
    );
}