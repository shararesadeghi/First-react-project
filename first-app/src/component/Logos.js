import React from 'react';
import styles from "./Logos.module.css";
import apple from "../images/iphone logo.jpg";
import samsung from "../images/samsung.png";
import xiaomi from "../images/xiaomi.png";

const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>Who Support US?</h3>
            <div>
                <img src={apple} alt="apple"/>
                <img src={samsung} alt="samsung"/>
                <img src={xiaomi} alt="xiaomi"/>
            </div>

        </div>
    );
};

export default Logos;