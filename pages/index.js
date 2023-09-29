import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomePage from "./components/home/home";

export default function Home({ resp }) {
  return <HomePage activityData={resp} />;
}

export async function getServerSideProps() {
  let resp = await fetch("/api/todaysactivity");
  resp = await resp.json();

  return {
    props: { resp },
  };
}
