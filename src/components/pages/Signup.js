import React from 'react';
import Nav from "../Nav";
import Layout from "../Layout";
import Illustration from "../Illustration";
import SignUpForm from "../SignUpForm";

const Signup = () => {
    return (
        <>
            <Nav/>
            <Layout>
                <h1>Create an account</h1>
                <div className="column">
                    <Illustration/>
                    <SignUpForm/>
                </div>
                <div className="info">Already have an account? <a href="login.html">Login</a> instead.</div>

            </Layout>
        </>
    );
};

export default Signup;