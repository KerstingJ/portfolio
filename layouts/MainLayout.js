import Head from "next/head";
import styled from "styled-components";

import Header from "../pieces/Header";
import Footer from "../pieces/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Head>
        <title>Josh Kersting - Software Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;
