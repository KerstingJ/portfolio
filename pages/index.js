import React from "react";
import styled from "styled-components";
import Link from "next/link";
import glob from "fast-glob";
import fs from "fs";
import matter from "gray-matter";

import { withLayout } from "../layouts/withLayout";
import IndexLayout from "../layouts/IndexLayout";

function Home({ allMdx }) {
  return (
    <Main>
      <article className="about">
        <section className="details">
          <img
            className="profile-pic"
            src="./images/me-small.jpg"
            alt="Handsome And Talented Software Developer"
          />
          <section className="details-content">
            <h2>My Name is Josh</h2>
            <h3 className="sub-header">
              I like solving hard problems with cool people.
            </h3>
            <p>
              I build web and mobile applications as Frontend Engineer at
              Sampleserve, and as a Freelance Developer.
            </p>
            <p>
              I've spent the last 2 years working extensively with React and
              other Frontend technologies, on top of serverless and RESTful
              apis.
            </p>
          </section>
        </section>
      </article>

      <div className="container">
        <article className="the-work">
          <h2>Check Out My Latest Stuff</h2>
          {allMdx.map(({ title, slug, description }, idx) => {
            return (
              <div className="post-card" key={title + idx}>
                <Link href={`/blog/${slug}`}>
                  <a className="title-link">
                    <h4>{title || "Post Title"}</h4>
                  </a>
                </Link>
                <p>
                  {description ||
                    "What is this post all about, This is a placeholder."}
                </p>
                <Link href={`/blog/${slug}`}>
                  <a>Read Post</a>
                </Link>
              </div>
            );
          })}
        </article>
      </div>
    </Main>
  );
}

export function getStaticProps() {
  const files = glob.sync("blogs/*.mdx");

  let allMdx = files.map((file) => {
    const split = file.split("/");
    const filename = split[split.length - 1];
    const slug = filename.replace(".mdx", "");

    const mdxSource = fs.readFileSync(file);
    const { data } = matter(mdxSource);

    return {
      slug,
      ...data,
    };
  });

  // only the 5 newest posts on the index page
  allMdx = allMdx.sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 5);

  return {
    props: {
      allMdx,
    },
  };
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
    color: var(--main-color);
    font-size: 1.8rem;
    font-weight: bold;
  }

  .about {
    background: rgb(63, 187, 255);
    background: var(--header-gradient);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 128px;
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

    max-width: 1000px;

    @media (max-width: 600px) {
      flex-direction: column;
    }

    /* @media (max-width: 500px) {
      padding: 16px 0;
      width: 100%;
    } */
  }

  .profile-pic {
    display: block;
    max-width: 250px;
    min-height: 250px;
    border-radius: 3px;
    object-fit: cover;
    object-position: bottom right;

    @media (max-width: 600px) {
      margin: 16px 32px;
    }

    @media (max-width: 500px) {
      margin: 0;
      min-width: 100%;
      max-width: 100%;
    }
  }

  .details-content {
    padding: 0 16px 0 24px;

    @media (max-width: 600px) {
      padding: 16px 32px;
    }

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
      top: -19.5vh;
      background: url("/images/wavybg.svg");
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }

  .the-work {
    margin-bottom: 32px;
    max-width: 1000px;
    width: 100%;
    box-shadow: 2px 1px 4px 0px rgba(0, 0, 0, 0.2);

    padding: 32px 64px;
    border-radius: 8px;
    background: #fff;

    @media (max-width: 600px) {
      padding: 16px 32px;
    }

    h2 {
      margin-bottom: 32px;
    }

    @media (max-width: 500px) {
      padding: 8px 16px;
    }
  }

  .post-card {
    margin-bottom: 32px;

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

        &.title-link:after {
          background: var(--main-color);
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

    a > h4 {
      display: inline-block;
      border-radius: 2px;
    }

    &:first-of-type {
      margin-top: 16px;
    }

    &::last-of-type {
      margin-bottom: 16px;
    }

    h4 {
      margin-bottom: 8px;
    }

    p {
      margin-bottom: 8px;
      color: gray;
    }

    a {
      font-weight: 600;
    }
  }
`;

export default withLayout(IndexLayout)(Home);
