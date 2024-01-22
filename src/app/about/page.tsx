import Image from 'next/image'
import React from 'react'
import styles from "./about.module.css"
const About = () => {
    return (
        <div className={styles.container}>

            <div className={styles.text}>
                <h4 className={styles.subHeading}>About Agency </h4>
                <h2 className={styles.heading}>We Create Digital Ideas that are bigger, bolder and better</h2>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae quis dolorum incidunt dolore animi provident quibusdam itaque, possimus porro!</p>

                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>10k+</h1>
                        <p>Years of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>10k+</h1>
                        <p>Years of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>10k+</h1>
                        <p>Years of experience</p>
                    </div>
                </div>
            </div>

            <div className={styles.imgcontainer}>
                <Image className={styles.img} src="/img6.png" alt="About" width={600} height={600} />
            </div>
        </div>
    )
}

export default About