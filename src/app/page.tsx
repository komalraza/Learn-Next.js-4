import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Ideas Agency</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit ducimus numquam magni saepe. Ad, laudantium. Iste delectus temporibus quia quaerat rem error id illum qui, ab voluptate velit corrupti fugiat non eligendi aliquam consectetur.</p>


        <div className={styles.buttons}>
          <button className={styles.heroButton1}>Learn More</button>
          <button className={styles.heroButton2}>Contact Us</button>

        </div>

        <div className={styles.brandImg}>
          <div className={styles.imgList}>
            <Image src="/b2.png" alt="header-img" height={50} width={100} />
            <Image src="/b3.png" alt="header-img" height={50} width={100} />
            <Image src="/b4.png" alt="header-img" height={50} width={100} />
            <Image src="/b5.png" alt="header-img" height={50} width={100} />
            <Image src="/b6.png" alt="header-img" height={50} width={100} />

          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/img5.png" alt="header-img" height={600} width={600} />
      </div>
    </div>
  );
}
