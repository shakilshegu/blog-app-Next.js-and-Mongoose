import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}><b>Hey , guyyyis</b>Lorem ipsum dolor sit amet consectetur  
      </h1>
      <div className={styles.post}>
        <div className={styles.imgcontainer}>
          <Image src="/p1.jpeg" alt='' fill />
        </div>
        <div className={styles.textcontainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit id et odit maiores, hic atque!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured