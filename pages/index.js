import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Revisão Javascript</title>
        <meta name='description' content='Revisão Javascript' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Rethink Academy |
          <a href='https://github.com/filiperethink'>Revisão Javascript</a>
        </h1>
        <nav className={styles.nav}>
          <Link href={`/template-literals`}>
            <a className={styles.card}>Template Literals</a>
          </Link>
          <Link href={`/shorthand`}>
            <a className={styles.card}>Shorthand property names</a>
          </Link>

          <Link href={`/arrow-functions`}>
            <a className={styles.card}>Arrow functions</a>
          </Link>
          <Link href={`/destructuring`}>
            <a className={styles.card}>Destructuring</a>
          </Link>
          <Link href={`/parameter-defaults`}>
            <a className={styles.card}>Parameter defaults</a>
          </Link>
          <Link href={`/rest-spread`}>
            <a className={styles.card}>Rest/Spread</a>
          </Link>
          <Link href={`/eSModules`}>
            <a className={styles.card}>ESModules</a>
          </Link>
          <Link href={`/ternaries`}>
            <a className={styles.card}>Ternaries</a>
          </Link>
          <Link href={`/array-methods`}>
            <a className={styles.card}>Array Methods</a>
          </Link>
          <Link href={`/nullish`}>
            <a className={styles.card}>Nullish coalescing operator</a>
          </Link>
          <Link href={`/optional-chaining`}>
            <a className={styles.card}>Optional chaining</a>
          </Link>
          <Link href={`/promises-async-await`}>
            <a className={styles.card}>Promises and async/await</a>
          </Link>
        </nav>
      </main>
      ;
    </div>
  );
}
