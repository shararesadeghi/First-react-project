import React, { Component } from 'react';
import styles from "./Card.module.css";
import up from "../images/icons8-up-67.png";
import down from "../images/icons8-down-67.png";

class Card extends Component {

    constructor(){
        super();
        this.state = {
            counter : 0
        }
    }

    downHandler = () =>{
        if(this.state.counter >= 1){
            
            this.setState(prev=>({
                counter : prev.counter - 1
            }))
        }
    }

    upHandler = () =>{
        this.setState(prev =>({
            counter : prev.counter + 1
        }))
    
    }

    render() {
        const {image,name,cost} = this.props;
        const {counter} = this.state;
        return (
            <div className={styles.container}>
                <img src={image} alt="product"/>
                <h3>{name}</h3>
                <p>{cost} {counter ? `* ${counter} = ${counter * Number(cost.split(' ')[0])} $` : ""}</p>
                <div className={styles.counter}>
                    <img className={!counter ? styles.deactive : ""} src={down} onClick={this.downHandler} alt="down-arrow"/>
                    <span>{counter}</span>
                    <img src={up} onClick={this.upHandler} alt="up-arrow"/>
                </div>
            </div>
        );
    }
}

export default Card;