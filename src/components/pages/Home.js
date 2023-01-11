import React from 'react';
import Nav from "../Nav";
import Layout from "../Layout";
import Videos from "../Videos";

const Home = () => {
    return (
    <>
        <Nav/>
        <Layout>
            <Videos/>
        </Layout>
    </>
    );
};

export default Home;