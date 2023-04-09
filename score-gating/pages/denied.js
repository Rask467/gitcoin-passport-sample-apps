import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import dstyles from "@/styles/Denied.module.css"
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Denied() {
  return (
    <>
      <Head>
        <title>Score Gating</title>
        <meta
          name="description"
          content="A sample app to demonstrate using the Gitcoin Passport Scorer API"
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
              <Image
                src="/gitcoinWordLogo.svg"
                alt="Gitcoin Logo"
                className={styles.gitcoinLogo}
                width={150}
                height={34}
                priority
              />
            </a>
          </div>
          <ConnectButton />
        </div>

        <div className={dstyles.center}>
          <h1>Improve Your Passport Score</h1>
          <p>
            To protect our application from bots, we've implemented Gitcoin's Passport. Your Passport score is too low, meaning you either haven't created it yet or you're a bot. If you're not a robot, then head over to Passport and improve your score by adding more stamps. When you're finished, come back and re-score your Passport.
          </p>
          <a target="_blank" href="https://passport.gitcoin.co">Click here to increase your score.</a>

          <button>Score Passport</button>
        </div>

        <div className={styles.grid}></div>
      </main>
    </>
  )
}