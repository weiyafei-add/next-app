import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.title}>better design for you digital porducts</div>
        <p className={styles.desc}>
          Turning your idea into Reality. We bring together the teams from the global tech industry
        </p>
        <Button url="contact" text="Contact"></Button>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="hero" className={styles.img} />
      </div>
    </div>
  );
}
