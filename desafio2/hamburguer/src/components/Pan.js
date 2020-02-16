import React from 'react';
import { BoxHamburguesa } from "../styles/global";

export default function renderPan(props){
    return (
    
    <BoxHamburguesa>{props.children}</BoxHamburguesa>
    )
}