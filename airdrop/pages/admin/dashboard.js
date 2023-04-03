import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Dashboard.module.css";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Dashboard({ data }) {
  function renderAddresses() {
    return data.map((d) => {
      return (
        <tr key={d.address}>
          <td>{d.address}</td>
        </tr>
      );
    });
  }

  async function getMerkleRoot() {
    const resp = await axios.get("/api/admin/merkle");
    console.log(resp.data);
  }

  function downloadData() {
    // Convert the data object to a JSON string
    const jsonData = JSON.stringify(data, null, 2);

    // Create a Blob from the JSON string
    const blob = new Blob([jsonData], { type: "application/json" });

    // Generate a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create an invisible anchor element and set its attributes
    const link = document.createElement("a");
    link.href = url;
    link.download = "data.json";

    // Append the anchor element to the DOM, click it to trigger the download, and remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Release the Blob URL
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <Head>
        <title>Airdrop</title>
        <meta
          name="description"
          content="A sample app to demonstrate using the Gitcoin passport scorer API"
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
        </div>
        <div>
          <button onClick={downloadData}>Download Airdrop Data</button>
          <button onClick={getMerkleRoot}>Generate Merkle Root</button>
          <h2>Total eligible addresses: {data.length}</h2>
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: "left" }}>Address</th>
              </tr>
            </thead>
            <tbody>{renderAddresses()}</tbody>
          </table>
        </div>

        <div className={styles.grid}></div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const { data } = await axios.get("http://localhost:3000/api/admin/airdrop");
  // Return the fetched data as props
  return {
    props: {
      data,
    },
  };
}
