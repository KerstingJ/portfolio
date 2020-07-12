import React from "react";
import styled from "styled-components";

export default function _Footer(props) {
  return (
    <Footer>
      <article className="footer-content">
        <section className="about">
          <div className="dev-info">
            <h3>Josh Kersting</h3>
            <p>Software Engineer</p>
          </div>
          <nav>
            <div className="nav-block">
              <a href="https://github.com/KerstingJ">Github</a>
              <a href="https://twitter.com/JoshOnThaTweet">Twitter</a>
            </div>
            <div className="nav-block">
              <a href="https://www.linkedin.com/in/josh-kersting-86142911b/">
                LinkedIn
              </a>
              <a href="mailto:Kersting.Josh@Gmail.com">Email</a>
            </div>
          </nav>
        </section>
        <section className="brief">
          <p>
            Josh has spent the last year working extensively with React, React
            Native, Redux, and other Frontend technologies, as well as Python,
            Node, and Java backends. He has Built web and mobile applications as
            Frontend Engineer at Sampleserve, and mentored students through
            Lambda Schools full stack web development curriculum as a Team Lead.
          </p>
        </section>
      </article>
    </Footer>
  );
}

const Footer = styled.footer`
  width: 100%;
  border-top: 1px solid lightgray;
  padding: 15px;

  .footer-content {
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
    margin: 0 auto;

    @media (max-width: 600px) {
      flex-direction: column;
    }

    p {
      font-size: 2rem;
    }
  }

  .about {
    width: 35%;

    @media (max-width: 600px) {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    nav {
      display: flex;
      margin-top: 15px;

      @media (max-width: 600px) {
        margin: 0;
      }

      .nav-block {
        &:last-child {
          margin-left: 30px;
        }
        a {
          display: block;
          font-size: 2rem;
          color: var(--main-color);
          transition: all 0.35s ease;

          &:hover {
            color: black;
          }
        }
      }
    }
  }
  .brief {
    width: 60%;
    max-width: 500px;
    line-height: 1.35;

    @media (max-width: 600px) {
      margin-top: 20px;

      max-width: 600px;
      width: 100%;
    }
  }
`;
