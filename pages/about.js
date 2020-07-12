import Head from "next/head";
import { withLayout } from "../layouts/withLayout";
import MainLayout from "../layouts/MainLayout";

function Home() {
  return <h1>About Me</h1>;
}

export default withLayout(MainLayout)(Home);
