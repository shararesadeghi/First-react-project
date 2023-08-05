import React from 'react';
import styles from "./Banner.module.css";
import banner from "../images/banner2.jpg";

const Banner = () => {
    return (
        <div className={styles.container}>
            <img src={banner} alt="banner"/>
            <div className={styles.textContainer}>
                <h1>Online Shop</h1>
                <p>We're selling <span>Bestes</span></p>
            </div>

        </div>
        
    );
};

export default Banner;