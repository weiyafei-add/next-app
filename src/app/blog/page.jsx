import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href={`/blog/1`} className={styles.container} key={"item.id"}>
        <div className={styles.imageContainer}>
          <Image
            src={"https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"}
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{"item.title"}</h1>
          <p className={styles.desc}>{"item.desc"}</p>
        </div>
      </Link>
      <Link href={`/blog/2`} className={styles.container} key={"item.id"}>
        <div className={styles.imageContainer}>
          <Image
            src={"https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"}
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{"item.title"}</h1>
          <p className={styles.desc}>{"item.desc"}</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
