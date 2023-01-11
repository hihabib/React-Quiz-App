import React from 'react';
import classes from './styles/SignUpForm.module.css'
import TextInput from "./TextInput";
import Checkbox from "./Checkbox";
import Button from "./Button";
const SignUpForm = ({className, ...rest}) => {
    return (
        <form className={`${classes.signup} ${classes.form} ${className}`} {...rest}>
            <TextInput icon="person" placeholder="Enter Name" type="text"/>
            <TextInput icon="alternate_email" placeholder="Enter email" type="email"/>
            <TextInput icon="lock" placeholder="Enter password" type="password"/>
            <TextInput icon="lock_clock" placeholder="Confirm password" type="password"/>
            <Checkbox>I agree to the Terms & Conditions</Checkbox>
            <Button type="submit" label="Submit Now"/>
        </form>
    );
};

export default SignUpForm;