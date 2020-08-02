import Head from "next/head";
import styled from "styled-components";

import Header from "../pieces/Header";

export default function IndexLayout({ children }) {
  return (
    <>
      <Head>
        <title>Josh Kersting - Software Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Header />
        {children}
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
