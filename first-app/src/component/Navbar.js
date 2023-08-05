import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../component/Navbar.module.css";
import Logo from "../images/logo2.png"

const Navbar = () => {
    return (
       <header className={styles.header}>
           <div className={styles.listContainer}>
               <ul className={styles.list}>
                   <li><Link to="/">Home Page</Link></li>
                   <li><Link to="/products">Products</Link></li>
                   <li><Link to="/aboutus">About Us</Link></li>
               </ul>
           </div>
           <div>
               <img className={styles.logo} src={Logo} alt="logo"/>
           </div>

        </header>
    );
};

export default Navbar;