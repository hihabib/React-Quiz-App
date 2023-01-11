import React from 'react';
import classes from "./styles/Videos.module.css";
import Video from "./Video";
import image from '../assets/images/3.jpg';

const Videos = () => {
    return (
        <div className={classes.videos}>
            <Video image={image}/>
            <Video image={image}/>
            <Video image={image}/>
            <Video image={image}/>
            <Video image={image}/>
            <Video image={image}/>
            <Video image={image}/>
            <Video image={image}/>
        </div>
    );
};

export default Videos;