import React from 'react';
import classes from './styles/Button.module.css';
const Button = ({type, label}) => {
    return (
        <button type={type} className={classes.button}>
            <span>{label}</span>
        </button>
    );
};

export default Button;