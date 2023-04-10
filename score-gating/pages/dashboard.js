import styles from "@/styles/Dashboard.module.css";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.leftmenu}>Left Menu</div>
      <div className={styles.header}>
        <h1>Dashboard</h1>
        <p>
          You're seeing this page because your Passport score
          <br />
          was high enough for you to be signed in.
        </p>
      </div>
      <div className={styles.photocontainer}>
        <Image src="/solar1.png" width={200} height={200} alt="Solarpunk city" className={styles.photo}></Image>
        <Image src="/solar2.png" width={200} height={200} alt="Solarpunk city" className={styles.photo}></Image>
        <Image src="/solar3.png" width={200} height={200} alt="Solarpunk city" className={styles.photo}></Image>
        <Image src="/solar4.png" width={200} height={200} alt="Solarpunk city" className={styles.photo}></Image>
        <Image src="/solar5.png" width={200} height={200} alt="Solarpunk city" className={styles.photo}></Image>
        <Image src="/solar6.png" width={200} height={200} alt="Solarpunk city" className={styles.photo}></Image>
      </div>
    </div>
  )
}