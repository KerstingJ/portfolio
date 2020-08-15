import React from "react";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import fs from "fs";
import matter from "gray-matter";
import glob from "fast-glob";
import styled from "styled-components";
import { Code, StableImage, TagBlock } from "../../components";
import BlogLayout from "../../layouts/BlogLayout";

const components = { code: Code, TagBlock };

export default function ({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, components);

  return (
    <BlogLayout>
      <BlogHeader>
        <h2>{frontMatter.title}</h2>
        <StableImage
          src={`/images/${frontMatter.imgSrc}`}
          alt={frontMatter.imgAlt}
        />
        {frontMatter.isUnsplash && (
          <span>
            Photo by{" "}
            <a href={frontMatter.imgAuthorLink}>{frontMatter.imgAuthor}</a> on
            Unsplash
          </span>
        )}
      </BlogHeader>
      <BlogContent>{content}</BlogContent>
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

  const mdx = await renderToString(content, components, null, data);

  return {
    props: {
      mdxSource: mdx,
      frontMatter: data,
    },
  };
}

const BlogHeader = styled.section`
  margin-bottom: 32px;
`;

const BlogContent = styled.section`
  p {
    margin-bottom: 16px;
    text-indent: 4rem;
  }
  p + h3 {
    margin-top: 32px;
  }
`;
