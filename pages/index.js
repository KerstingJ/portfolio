import React from "react";
import styled from "styled-components";
import { withLayout } from "../layouts/withLayout";
import IndexLayout from "../layouts/IndexLayout";
import Link from "next/link";

function About(props) {
  return (
    <Main>
      <article className="about">
        <section className="details">
          <img
            className="profile-pic"
            src="./images/me.jpg"
            alt="Handsome And Talented Software Developer"
          />
          <section className="details-content">
            <h2>My Name is Josh</h2>
            <h3>I like solving hard problems with cool people.</h3>
            <p>
              I build web and mobile applications as Frontend Engineer at
              Sampleserve, and as a Freelance Developer.
            </p>
            <p>
              I have spent the last 2 years working extensively with React,
              React Native, Redux, and other Frontend technologies on top of
              serverless and RESTful apis.
            </p>
          </section>
        </section>
      </article>

      <div className="container">
        <article className="the-work">
          <h2>Check Out My Blog!</h2>
          {[{}].map(({ title, link, short }) => {
            return (
              <div className="post-card">
                <Link href={"/about"}>
                  <a>
                    <h4>{title || "Post Title"}</h4>
                  </a>
                </Link>
                <p>
                  {short ||
                    "What is this post all about, heres the question im answering"}
                </p>
                <Link href={link || "#"}>Read Post</Link>
              </div>
            );
          })}
        </article>
      </div>

      {/* <article className="the-work">
        <section className="brief">
          <h4>My favorite tools to work with</h4>
          <p>Javascript, Python, CSS, and HTML</p>
        </section>
        <section className="projects">
          <h4>Things I've built</h4>
          <p>
            <strong>Sampleserve</strong> Project management tool for
            environmental sampling. React web app with flask backend. Used Redux
            and immutable.js for state management, SQLAlchemy and Postgresql on
            the backend.
          </p>
          <p>
            <strong>Tieme Ndo</strong> CMS to keep track of leads, loans, and
            inventory. React web app with Java Spring Backend. Used Redux and
            bootstrap on the frontend, Hibernate and Postgresql on the backend.
          </p>
          <p>
            <strong>BarHopper</strong> Directory style app with geolocation and
            social features. Consumer facing React-Native mobile app,
            administrative web app with React, and a firebase serverless
            Backend.
          </p>
        </section>
      </article> */}

      {/* <div className="about-footer">
        <article className="social-links">
          <h3>More Links</h3>
          <nav>
            <a href="https://github.com/KerstingJ">Github</a>
            <a href="https://twitter.com/JoshOnThaTweet">Twitter</a>
            <a href="https://www.linkedin.com/in/josh-kersting-86142911b/">
              LinkedIn
            </a>
            <a href="mailto:Kersting.Josh@Gmail.com">Email</a>
          </nav>
        </article>
        <article className="values">
          <h3>My Beliefs</h3>
          <section className="value-content">
            <p>
              <h6>People are kind </h6>
              and act with the best intentions.
            </p>
            <p>
              <h6>Together we are more </h6>
              It's our job to uplift, empower, and include each other.
            </p>
            <p>
              <h6>Never stop learning </h6>
              because the world never stops changing.
            </p>
          </section>
        </article>
      </div> */}
    </Main>
  );
}

const Main = styled.main`
  /* display: flex;
  justify-content: space-between;
  align-items: flex-start; */
  background: #f8fcff;
  min-height: 100vh;

  h2,
  h3 {
    color: var(--main-color);
    margin-bottom: 16px;
  }

  h4 {
    color: var(--main-color);
    font-size: 2rem;
  }

  a > h4 {
    display: inline-block;
    cursor: pointer;
    transition: all 0.35s ease;

    &:hover {
      color: #fc92b9;
      text-decoration: underline;
    }
  }

  h6 {
    color: var(--main-color);
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 8px;
  }

  p {
    font-size: 2rem;
    margin-bottom: 16px;
  }

  strong {
    color: var(--main-color);
    font-size: 1.8rem;
    font-weight: bold;
  }

  .about {
    background: rgb(63, 187, 255);
    background: linear-gradient(
      67deg,
      rgba(63, 187, 255, 1) 0%,
      rgba(109, 47, 217, 1) 35%,
      rgba(98, 37, 203, 1) 46%,
      rgba(255, 192, 185, 1) 100%
    );
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 64px;

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
    display: inline-flex;
    justify-content: center;
    z-index: 1;

    background: #fff;
    border-radius: 8px;
    padding: 16px;

    box-shadow: 2px 1px 4px 0px rgba(0, 0, 0, 0.2);

    margin: 8px;

    max-width: 750px;

    @media (max-width: 500px) {
      flex-direction: column;
    }
  }

  .profile-pic {
    display: block;
    max-width: 250px;
    min-height: 250px;
    border-radius: 3px;
    object-fit: cover;
    object-position: bottom right;
  }

  .details-content {
    max-width: 450px;

    padding: 0 16px;

    @media (max-width: 500px) {
      padding: 16px 0;
      width: 100%;
    }
  }

  .container {
    position: relative;
    padding: 8px;
    padding-top: 64px;
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
      top: -20vh;
      background: url("./images/wavybg.svg");
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

    h2 {
      margin-bottom: 32px;
    }

    @media (max-width: 500px) {
      padding: 8px 16px;
    }
  }

  .post-card {
    &:first-of-type {
      margin-top: 16px;
    }

    &::last-of-type {
      margin-bottom: 16px;
    }

    p {
      margin-bottom: 0;
    }
  }
`;

export default withLayout(IndexLayout)(About);
