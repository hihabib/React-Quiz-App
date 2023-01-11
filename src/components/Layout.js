import React from 'react';
import classes from "./styles/Layout.module.css";
const Layout = ({children}) => {
    return (
        <main className={classes.main}>
            <div className={classes.container}>
                {children}
            </div>
        </main>
    );
};

export default Layout;