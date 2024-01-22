import React from "react";
import styles from "./blogcard.module.css";
import Image from "next/image";
import Link from "next/link";

const BlogCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.blogImg}>
        <div className={styles.imgContainer}>
          <Image src="/img1.jpg" alt="Blog Poster" width={300} height={300} />
        </div>
      </div>
      <div className={styles.blogContent}>
        <h1 className={styles.title}>Blog Title</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet.</p>
        <Link href="/">Read More</Link>
        <span className={styles.date}>2024-01-12</span>
      </div>
    </div>
  );
};

export default BlogCard;
