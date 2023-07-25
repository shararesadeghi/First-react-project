import React from 'react';
import styles from "./Banner.module.css";
import banner from "../images/iphone 15.jpeg"

const Banner = () => {
    return (
        <div className={styles.container}>
            <img src={banner} alt="banner"/>
            <div className={styles.textContainer}>
                <h1>Phone Shop</h1>
                <p>We're selling <span>Phones</span></p>
            </div>

        </div>
        
    );
};

export default Banner;