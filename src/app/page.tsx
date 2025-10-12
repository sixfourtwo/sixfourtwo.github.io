import Image from "next/image";
import styles from "./page.module.css";
import PersonalInfo from "./sections/personalInfo";
import Experience from "./sections/experience";
import Header from "./components/header";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header>Christoffer Iversen Junge</Header>
        <PersonalInfo />
        <Experience />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/sixfourtwo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.logo}
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
