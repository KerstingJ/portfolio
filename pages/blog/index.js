import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { withLayout } from "../../layouts/withLayout";
import IndexLayout from "../../layouts/IndexLayout";
import Link from "next/link";

const searchString = "https://source.unsplash.com/random?construction";
function About(props) {
  return (
    <Main>
      <article className="about">
        <section className="details">
          <h2>This page is under construction</h2>
          <p>
            Thanks for checking it out! <br /> come back soon to see the new
            content.
          </p>

          <p>
            Random image from <a href="https://unsplash.com/">Unsplash.com</a>
          </p>
          <img src={searchString} />
        </section>
      </article>

      <div className="container">{/* This bad boy sets the curvy line */}</div>
    </Main>
  );
}

const Main = styled.main`
  /* display: flex;
  justify-content: space-between;
  align-items: flex-start; */
  background: var(--white-but-chilly);
  min-height: 100vh;

  h2 {
    text-align: center;
    margin: 32px 64px;
  }

  h3 {
    margin-bottom: 16px;
  }

  h3.sub-header {
    font-size: 1.9rem;
    font-weight: 600;
  }

  h4 {
    font-size: 2rem;
  }

  a > h4 {
    display: inline-block;
    cursor: pointer;
    transition: all var(--snappy-transition);

    &:hover {
      color: var(--secondary-color);
      text-decoration: underline;
    }
  }

  h6 {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 8px;
  }

  p {
    font-size: 2rem;
    margin-bottom: 32px;
    text-align: center;
  }

  strong {
    color: var(--main-color);
    font-size: 1.8rem;
    font-weight: bold;
  }

  img {
    border-radius: 8px;
  }

  .about {
    background: rgb(63, 187, 255);
    background: var(--header-gradient);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 128px;
    min-height: 50vh;

    /* &:after {
      content: "";
      width: 100%;
      height: 20vh;
      position: absolute;
      bottom: -4px;
      background: url("./images/wavybg.svg");
      background-size: 100% 100%;
      background-repeat: no-repeat;
    } */
  }

  .details {
    z-index: 1;

    background: #fff;
    border-radius: 8px;
    padding: 32px 64px;

    box-shadow: 2px 1px 4px 0px rgba(0, 0, 0, 0.2);

    margin: 32px 8px 8px;

    max-width: 750px;
  }

  .container {
    position: relative;
    /* padding: 8px;
    padding-top: 64px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    &:before {
      content: "";
      width: 100%;
      /* border: 1px solid red; */
      height: 20vh;
      position: absolute;
      top: -19.5vh;
      background: url("./images/wavybg.svg");
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }
`;

export default withLayout(IndexLayout)(About);
