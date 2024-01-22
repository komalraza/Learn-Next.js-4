import React from 'react'
import styles from "./blog.module.css"
import BlogCard from "@/components/BlogCard/BlogCard";


const Blogs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.blog}>
        <BlogCard />

      </div>
      <div className={styles.blog}>
        <BlogCard />

      </div> <div className={styles.blog}>
        <BlogCard />

      </div> <div className={styles.blog}>
        <BlogCard />

      </div>
    </div>
  )
}

export default Blogs