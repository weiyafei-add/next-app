import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";

const Categary = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p>Desc</p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image alt="" src={"https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"} fill />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1>Test</h1>
          <p>Desc</p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image alt="" src={"https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"} fill />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1>Test</h1>
          <p>Desc</p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image alt="" src={"https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"} fill />
        </div>
      </div>
    </div>
  );
};

export default Categary;
