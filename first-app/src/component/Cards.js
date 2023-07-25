import React, { Component } from 'react';
import Card from './Card';
import styles from "./Cards.module.css";
import iphonex from "../images/iphonex.jpg";
import iphone14pro from "../images/iphone 14pro.jpg";
import iphone from "../images/iphone.jpg";
import iphone14 from "../images/iphone14.jpg";


class Cards extends Component {

    render() {
        return (
            <div className={styles.container}>
                <Card image={iphonex} name="Iphone X" cost="500 $"/>
                <Card image={iphone14pro} name="Iphone 14pro" cost="900 $"/>
                <Card image={iphone} name="Iphone" cost="300 $"/>
                <Card image={iphone14} name="iphone 14" cost="600 $"/>
            </div>
        );
    }
}

export default Cards;