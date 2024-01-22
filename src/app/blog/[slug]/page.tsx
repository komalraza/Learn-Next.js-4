import React from 'react'
import styles from './postdetail.module.css';
import Image from 'next/image';

const PostDetail = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/img1.jpg" alt="Blog Poster" width={400} height={600} />
      </div>

      <div className={styles.blogContent}>
        <h1 className={styles.blogTitle}>Post title</h1>


        <div className={styles.authorDetails}>
          <Image className={styles.avatar} src="/img2.jpg" alt="avatar" height={80} width={80} />
          <div className={styles.blogDetails}>
            <span className={styles.title}>Author</span>
            <span className={styles.value}>Julie</span>
          </div>

          <div className={styles.publish}>
            <span className={styles.title}>Published</span>
            <span className={styles.value}>2024-01-12</span>

          </div>
        </div>


        <p className={styles.desc}>Desc</p>
      </div>

    </div>
  )
}

export default PostDetail