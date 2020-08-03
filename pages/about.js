import React, { useState, useRef } from "react";
import { usePopper } from "react-popper";
import styled from "styled-components";
import { withLayout } from "../layouts/withLayout";
import IndexLayout from "../layouts/IndexLayout";
import Link from "next/link";

function About(props) {
  const timerRef = useRef(null);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: "arrow", options: { element: arrowElement } }],
  });

  const copyEmailToClipboard = (e) => {
    e.preventDefault();
    setReferenceElement(e.target);
    navigator.clipboard.writeText("Kersting.Josh@gmail.com");
    toggleVisibility();
  };

  const toggleVisibility = () => {
    if (!popperElement) {
      return;
    }

    if (timerRef.current) {
      // clear the timeout
      clearTimeout(timerRef.current);
    }

    // make element invisible if it isnt already
    if (popperElement.classList.contains("visible"))
      popperElement.classList.remove("visible");
    // make element visible and set timer to make it go away
    popperElement.classList.add("visible");
    timerRef.current = setTimeout(
      () => popperElement.classList.remove("visible"),
      1000
    );
  };

  return (
    <Main>
      <article className="about">
        <section className="details">
          <h3>Let me tell you about myself</h3>
          <p>
            I spent most of my professional life traveling the Mid-South and
            Mid-west helping grass-roots organizations manage data. We used to
            spend days and weeks manually transcribing data from one system to
            another. I taught myself python to automate the process and used my
            time to focus on turning that data into actionable insights.
          </p>
          <p>
            After moving back to Michigan I joined Lambda School at the
            beginning of 2019, where I completed a program in Computer Science.
            I liked programming so much I became a Team Lead at Lambda mentoring
            and teaching students web development with React and Express.
          </p>
          <p>
            At the end of 2019 I joined SampleServe as a Frontend Engineer.
            Since then I have been working with React and React-native building
            out features on our web and mobile apps. I've focused on reducing
            bugs and improving code quality by adding automated linting,
            formatting, and testing.
          </p>
          <p>
            I also develop web and mobile applications as a Freelance Developer.
            Lets work together!
          </p>
        </section>
      </article>

      <div className="container">
        <article className="the-work">
          <section className="projects">
            <h3>Things I've built</h3>
            <p>
              <strong>
                <a href="https://www.sampleserve.com/">Sampleserve</a>
              </strong>{" "}
              Project management tool for environmental sampling. React web app
              with flask backend. Used Redux and immutable.js for state
              management, SQLAlchemy and Postgresql on the backend.
            </p>
            <p>
              <strong>
                <a href="https://tiemendo-marketing.netlify.app/">Tieme Ndo</a>
              </strong>{" "}
              CMS to keep track of leads, loans, and inventory. React web app
              with Java Spring Backend. Used Redux and bootstrap on the
              frontend, Hibernate and Postgresql on the backend.
            </p>
            <p>
              <strong>BarHopper</strong> Directory style app with geolocation
              and social features. Consumer facing React-Native mobile app,
              administrative web app with React, and a firebase serverless
              Backend.
            </p>
            <p>
              And More!
              <button
                ref={setReferenceElement}
                className="lets-talk"
                onClick={copyEmailToClipboard}
              >
                Lets talk
              </button>
              to learn more about my experience
            </p>
          </section>
        </article>

        <article className="the-work">
          <section className="values">
            <h3>My core beliefs are</h3>
            <p>
              <strong>People are kind </strong>
              and we should assume they act with the best intentions.
            </p>
            <p>
              <strong>Together we are more.</strong> It's our job to uplift,
              empower, and include each other.
            </p>
            <p>
              <strong>Never stop learning, </strong>
              because the world never stops changing.
            </p>
          </section>
        </article>

        <article className="the-work">
          <section className="fun">
            <h3>Want to know more?</h3>
            <p>Hit me up on social media or send me an email!</p>
            <nav className="social-links">
              <a href="https://github.com/KerstingJ">
                <i className="fab fa-github"></i>Github
              </a>
              <a href="https://twitter.com/JoshOnThaTweet">
                <i className="fab fa-twitter"></i>Twitter
              </a>
              <a href="https://www.linkedin.com/in/josh-kersting-86142911b/">
                <i className="fab fa-linkedin-in"></i>LinkedIn
              </a>
              <a href="#" onClick={copyEmailToClipboard}>
                <i className="fas fa-at"></i>Email
              </a>
            </nav>
          </section>
        </article>
      </div>

      <div
        className="copied-alert"
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        Email copied to clipboard!
        <div ref={setArrowElement} style={styles.arrow} />
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

  .about {
    background: rgb(63, 187, 255);
    background: var(--header-gradient);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 128px;

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
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    background: #fff;
    border-radius: 8px;
    padding: 32px 64px;

    box-shadow: 2px 1px 4px 0px rgba(0, 0, 0, 0.2);

    margin: 8px;

    max-width: 750px;

    z-index: 1;

    @media (max-width: 500px) {
      padding: 8px 16px;
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

  .container {
    position: relative;
    padding: 8px;
    padding-top: 32px;
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

  .the-work {
    margin-bottom: 32px;
    max-width: 750px;
    width: 100%;
    box-shadow: 2px 1px 4px 0px rgba(0, 0, 0, 0.2);

    padding: 16px 32px;
    border-radius: 8px;
    background: #fff;

    padding: 32px 64px;

    h2 {
      margin-bottom: 32px;
    }

    @media (max-width: 500px) {
      padding: 8px 16px;
    }
  }

  nav.social-links {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 32px 0px;

    i:before {
      margin-right: 1rem;
    }

    a {
      position: relative;

      &:hover {
        text-decoration: none;
        color: var(--secondary-color);

        &:after {
          background: var(--secondary-color);
          width: 100%;
          left: 0;
        }
      }

      &:after {
        content: "";
        position: absolute;
        bottom: -8px;
        left: 50%;
        width: 1px;
        height: 2px;
        background: transparent;
        transition: all var(--snappy-transition);
      }
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

  .lets-talk {
    transition: all var(--snappy-transition);
    border: 1px solid var(--main-color);
    color: var(--main-color);
    background: inherit;
    border-radius: 4px;
    padding: 4px 8px;
    margin: 0 1rem;
    display: inline-block;
    box-shadow: 2px 1px 4px 0px rgba(0, 0, 0, 0.2);

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }

  .copied-alert {
    opacity: 0;
    box-shadow: 2px 1px 4px 0px rgba(0, 0, 0, 0.2);
    margin-top: 24px;
    background: #fff;
    padding: 8px 16px;
    border-radius: 4px;
    border: 1px solid var(--main-color);

    &.visible {
      opacity: 1;
    }
  }
`;

export default withLayout(IndexLayout)(About);
