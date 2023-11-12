import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"what's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}></Link>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur .</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Jhone doe</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
