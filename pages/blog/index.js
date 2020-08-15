import React from "react";
import glob from "fast-glob";
import fs from "fs";
import matter from "gray-matter";
import styled from "styled-components";
import Link from "next/link";

import BlogLayout from "../../layouts/BlogLayout";

import { Search } from "../../components";

export default function Blogs({ allMdx }) {
  const [filteredBlogs, setFilteredBlogs] = React.useState(allMdx);

  const handleFilter = (data) => {
    setFilteredBlogs(data);
  };

  return (
    <BlogLayout>
      <h2>Welcome To My Blog!</h2>
      <p>Take a look around, you can filter by keywords or your own criteria</p>
      <Search blogs={allMdx} handleFilter={handleFilter} />
      <ResultsContainer className="results">
        {filteredBlogs.map(({ title, slug, description }, idx) => {
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
      </ResultsContainer>
    </BlogLayout>
  );
}

export function getStaticProps() {
  const files = glob.sync("blogs/*.mdx");

  const allMdx = files.map((file) => {
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

  return {
    props: {
      allMdx,
    },
  };
}

const ResultsContainer = styled.section`
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

  .post-card {
    margin-bottom: 32px;

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
