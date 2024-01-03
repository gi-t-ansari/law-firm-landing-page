import React from 'react';
import styles from "./Subscription.module.css"

function Subscription() {
  return (
    <section className={styles.subscriptionWrapper}>
        <h1>Subscribe Our Newsletter</h1>
        <form className={styles.subscriptionForm}>
            <input className={styles.subscriptionInput} style={{borderRadius: "7px 0px 0px 7px"}} type="text" placeholder='Name' />
            <input className={styles.subscriptionInput} type="name" placeholder='Enter your Email' />
            <button type='submit' className={styles.subscriptionButton}>Send</button>
        </form>
    </section>
  )
}

export default Subscription