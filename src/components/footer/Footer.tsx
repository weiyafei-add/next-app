import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2023 Lamamia, All rights reserved.</div>
      <div className={styles.imgs}>
        <Image className={styles.img} src="/1.png" width={15} height={15} alt="Lama Dev" />
        <Image className={styles.img} src="/2.png" width={15} height={15} alt="Lama Dev" />
        <Image className={styles.img} src="/3.png" width={15} height={15} alt="Lama Dev" />
        <Image className={styles.img} src="/4.png" width={15} height={15} alt="Lama Dev" />
      </div>
    </div>
  );
};

export default Footer;
