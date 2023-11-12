import React from "react";
import styles from "./category.module.css";
import Image from "next/image";
import Link from "next/link";

const Category = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.Categories}>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`} >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          style
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.fashion}`} >
          <Image
            src="/fashion.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          fashion
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.traval}`} >
          <Image
            src="/travel.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          traval
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.culture}`} >
          <Image
            src="/culture.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          culture
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.food}`} >
          <Image
            src="/food.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          food
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.coding}`} >
          <Image
            src="/coding.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          coding
        </Link>
      </div>
    </div>
  );
};

export default Category;
