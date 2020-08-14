import React from "react";
import glob from "fast-glob";
import fs from "fs";
import matter from "gray-matter";

import BlogLayout from "../../layouts/BlogLayout";

import { Search } from "../../components";

export default function Blogs({ allMdx }) {
  console.log({ allMdx });

  const [filteredBlogs, setFilteredBlogs] = React.useState(allMdx);

  const handleFilter = (data) => {
    setFilteredBlogs(data);
  };

  return (
    <BlogLayout>
      <h2>This page is under construction</h2>
      <Search blogs={allMdx} handleFilter={handleFilter} />
      <div className="results">
        {filteredBlogs?.map((blog) => (
          <div>{JSON.stringify(blog)}</div>
        ))}
      </div>
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
