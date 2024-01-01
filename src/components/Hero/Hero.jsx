import React, { useState } from 'react';
import styles from "./Hero.module.css";
import {ReactComponent as MessageICon} from "../../assets/msg icon.svg";
import heroImg from "../../assets/hero.png"

function Hero() {
  const [email, setEmail] = useState("");

  const getEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value)
  }

  const pushEmail = (e) => {
    e.preventDefault();
    alert("Email captured");
    setEmail("");
  }

  return (
    <section className={styles.heroWrapper}>
        <div className={styles.heroContent}>
            <h1 style={{fontWeight: "500"}}>You don't have to</h1>
            <h1>Fight them Alone.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
            <form className={styles.heroForm} onSubmit={pushEmail}>
                <input className={styles.heroInput} type="email" placeholder='Enter your email address' onChange={getEmail} value={email} />
                <button className={styles.heroBtn} type='submit'>Let's Talk</button>
            </form>
        </div>
        <div className={styles.heroImgWrapper}>
            <img width={400} src={heroImg} alt="hero-img" />
        </div>
    </section>
  )
}

export default Hero