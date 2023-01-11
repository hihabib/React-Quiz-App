import React from 'react';
import illustration from '../assets/images/signup.svg'
import classes from './styles/Illustration.module.css'
const Illustration = () => {
    return (
        <div className={classes.illustration}>
            <img src={illustration} alt="Signup"/>
        </div>
    );
};

export default Illustration;