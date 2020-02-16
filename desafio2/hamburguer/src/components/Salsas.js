import React from 'react';
import PropTypes from 'prop-types';
import { BoxSalsas, Titulo } from "../styles/global";

export default function showSalsas(props){
    return (
    <BoxSalsas>
    <Titulo>{props.title}</Titulo>
    {props.children}
    </BoxSalsas>
    )
}

showSalsas.propTypes = {
    title: PropTypes.string.isRequired
}