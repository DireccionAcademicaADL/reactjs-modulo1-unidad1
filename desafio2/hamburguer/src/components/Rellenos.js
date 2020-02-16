import React from 'react';
import { Rellenos, Titulo } from "../styles/global";
import PropTypes from 'prop-types';

export default function renderRellenos(props){
    return (
    <Rellenos>
    <Titulo>{props.title}</Titulo>
    {props.children}
    </Rellenos>
    );
}

renderRellenos.propTypes = {
    title: PropTypes.string.isRequired
}