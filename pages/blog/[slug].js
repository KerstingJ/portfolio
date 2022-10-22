import React from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import matter from "gray-matter";
import glob from "fast-glob";
import styled from "styled-components";
import { Code, StableImage, TagBlock } from "../../components";
import BlogLayout from "../../layouts/BlogLayout";
import useHasMounted from "../../hooks/useHasMounted";

const components = { pre: Code, TagBlock };

export default function ({ mdxSource, frontMatter }) {
  return (
    <BlogLayout>
      <BlogHeader>
        <h2>{frontMatter.title}</h2>
        <StableImage
          src={`/images/${frontMatter.imgSrc}`}
          alt={frontMatter.imgAlt}
          className="banner-image"
        />
        {frontMatter.isUnsplash && (
          <span>
            Photo by{" "}
            <a href={frontMatter.imgAuthorLink}>{frontMatter.imgAuthor}</a> on
            Unsplash
          </span>
        )}
      </BlogHeader>
      <BlogContent>
        <MDXRemote {...mdxSource} components={components} lazy />
      </BlogContent>
    </BlogLayout>
  );
}

// This glob is what will be used to generate static routes
const contentGlob = "blogs/*.mdx";

export async function getStaticPaths() {
  const files = glob.sync(contentGlob);

  const paths = files.map((file) => {
    const split = file.split("/");
    const filename = split[split.length - 1];
    const slug = filename.replace(".mdx", "");

    return {
      params: {
        slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const files = glob.sync(contentGlob);

  const fullPath = files.filter((item) => {
    const split = item.split("/");
    const filename = split[split.length - 1];
    return filename.replace(".mdx", "") === slug;
  })[0];

  const mdxSource = fs.readFileSync(fullPath);
  const { content, data } = matter(mdxSource);

  if (!fullPath) {
    console.warn("No MDX file found for slug");
  }

  const mdx = await serialize(content, { parseFrontmatter: true, scope: data });

  return {
    props: {
      mdxSource: mdx,
      frontMatter: data,
    },
  };
}

const BlogHeader = styled.section`
  margin-bottom: 32px;

  .banner-image {
    max-height: 400px;
    object-fit: cover;
  }
`;

const BlogContent = styled.section`
  p {
    margin-bottom: 24px;
  }
  pre {
    margin-top: 24px;
    margin-bottom: 24px;
  }
  p + h3 {
    margin-top: 64px;
  }

  a {
    position: relative;
    font-size: 2rem;
    font-weight: 500;

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
`;
