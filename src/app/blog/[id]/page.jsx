import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const PostBlog = ({ params }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{"data.title"}</h1>
          <p className={styles.desc}>data.d</p>
          <div className={styles.author}>
            <Image
              src={"https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{"data.username"}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={"https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{"data.contentdata.contentdata.contentdata.cont"}</p>
      </div>
    </div>
  );
};

export default PostBlog;
