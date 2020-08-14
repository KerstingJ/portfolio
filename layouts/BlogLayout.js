import React from "react";
import styled from "styled-components";
import { withLayout } from "../layouts/withLayout";
import IndexLayout from "../layouts/IndexLayout";

function BlogLayout({ children }) {
  return (
    <Main>
      <div className="spacer"></div>
      <div className="container">
        <article className="the-work blog-styles">{children}</article>
      </div>
    </Main>
  );
}

const Main = styled.main`
  /* display: flex;
  justify-content: space-between;
  align-items: flex-start; */
  background: var(--white-but-chilly);
  min-height: 100vh;

  h2,
  h3 {
    margin-bottom: 16px;
  }

  h4 {
    font-size: 2rem;
  }

  h6 {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 8px;
  }

  p {
    font-size: 2rem;
    margin-bottom: 16px;
  }

  strong {
    font-size: 1.8rem;
    font-weight: bold;

    & > a {
      color: var(--main-color);
      font-size: inherit;
      transition: all var(--snappy-transition);
      &:hover {
        text-decoration: none;
        color: var(--secondary-color);
      }
    }
  }

  .spacer {
    background: rgb(63, 187, 255);
    background: var(--header-gradient);
    padding-top: 128px;
    min-height: 80vh;
  }

  .container {
    position: relative;
    padding: 8px;
    padding-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    z-index: 1;

    &:before {
      content: "";
      width: 100%;
      /* border: 1px solid red; */
      height: 20vh;
      position: absolute;
      top: -19.5vh;
      background: url("/images/wavybg.svg");
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }

  .the-work {
    margin-bottom: 32px;
    max-width: 750px;
    width: 100%;
    box-shadow: 2px 1px 4px 0px rgba(0, 0, 0, 0.2);

    padding: 16px 32px;
    border-radius: 8px;
    background: #fff;

    padding: 32px 64px;

    margin-top: -65vh;

    z-index: 1;

    h2 {
      margin-bottom: 32px;
    }

    @media (max-width: 500px) {
      padding: 8px 16px;
    }
  }
`;

export default withLayout(IndexLayout)(BlogLayout);
