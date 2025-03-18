import Image from "next/image";
import styles from "./page.module.css";
import PersonalInfo from "./sections/personalInfo";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <h1>Christoffer Iversen Junge</h1>
        </div>
        <PersonalInfo />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/sixfourtwo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github-mark.svg"
            alt="Go to Chris' github profile"
            width={32}
            height={32}
          />
        </a>
      </footer>
    </div>
  );
}
