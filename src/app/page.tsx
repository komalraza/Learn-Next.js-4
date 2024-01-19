import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Creative Ideas Agency</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit ducimus numquam magni saepe. Ad, laudantium. Iste delectus temporibus quia quaerat rem error id illum qui, ab voluptate velit corrupti fugiat non eligendi aliquam consectetur.</p>


        <div className={styles.buttons}>
          <button className="heroButton1">Learn More</button>
          <button className="heroButton2">Contact Us</button>

        </div>

        <div className={styles.brandImg}>
          {/* <Image src="/img.jpg" alt="header-img" fill height={500} width={500} /> */}

        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/img2.jpg" alt="header-img" height={500} width={500} />
      </div>
    </div>
  );
}
