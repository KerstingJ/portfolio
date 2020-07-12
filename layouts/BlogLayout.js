import Head from "next/head";

export default function Home({ children, title = "Software Developer" }) {
  return (
    <div className="container">
      <Head>
        <title>Josh Kersting - {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>

      <footer>{/* Gotta get a footer set up */}</footer>
    </div>
  );
}
