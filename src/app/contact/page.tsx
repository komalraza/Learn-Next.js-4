import React from 'react'
import styles from "./contact.module.css"
import Image from 'next/image'
const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/img7.png" alt="contact" fill />
      </div>

      <div className={styles.form}>
        <form className={styles.formFields}>
          <input type="text" placeholder='Name' name="name" />
          <input type="text" placeholder='Email' name="email" />

          <textarea name="message" id="" cols="30" rows="10" placeholder='Message'></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact