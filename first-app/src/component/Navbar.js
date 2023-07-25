import React from 'react';
import styles from "../component/Navbar.module.css";
import Logo from "../images/logo-image.jpg"

const Navbar = () => {
    return (
       <header className={styles.header}>
           <div className={styles.listContainer}>
               <ul className={styles.list}>
                   <li>Home Page</li>
                   <li>Products</li>
                   <li>About Us</li>
               </ul>
           </div>
           <div>
               <img className={styles.logo} src={Logo} alt="logo"/>
           </div>

        </header>
    );
};

export default Navbar;