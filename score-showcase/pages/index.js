import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Score from "../components/score";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Score Showcase</title>
        <meta
          name="description"
          content="A sample app to demonstrate using the Gitcoin scorer API"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            <a
              href="https://www.gitcoin.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/gitcoinWordLogo.svg"
                alt="Gitcoin Logo"
                className={styles.gitcoinLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
          <ConnectButton />
        </div>

        <div className={styles.center}>
          <h1 className={inter.className}>
            Gitcoin Passport Score Showcase Sample App
            <Score />
          </h1>
        </div>

        <div className={styles.grid}></div>
      </main>
    </>
  );
}
