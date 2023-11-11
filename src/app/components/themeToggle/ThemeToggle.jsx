"use client";

import React, { useContext } from 'react'
import styles from "./themeToggle.module.css"
import Image from 'next/image'
import { ThemeContext } from '@/app/context/ThemeContext';
const ThemeToggle = () => {

const {theme} = useContext(ThemeContext)
console.log(theme);

  return (
    <div className={styles.coniainer}>
      <Image src="/moon.png" alt='' width={14} height={14}></Image>
      <div className={styles.ball}></div>
      <Image src="/sun.png" alt='' width={14} height={14}></Image>
    </div>
  )
}

export default ThemeToggle
