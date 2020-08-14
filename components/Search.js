import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";

import styled from "styled-components";

const TAG_LIST = ["react", "javascript", "html/css", "java"];

const fuseOptions = {
  threshold: 0.35,
  location: 0,
  distance: 100,
  minMatchCharLength: 1,
  shouldSort: true,
  includeScore: true,
  useExtendedSearch: true,
  keys: ["title", "tags"],
};

export function Search({ blogs, handleFilter }) {
  const [searchValue, setSearchValue] = useState("");
  const [searchTags, setSearchTags] = useState([]);
  const fuse = new Fuse(blogs, fuseOptions);

  useEffect(() => {
    if (searchValue === "" && searchTags.length === 0) {
      handleFilter(blogs);
    } else {
      // Allow for a search for tag
      const formattedTags = [...searchTags.map((item) => ({ tags: item }))];
      const formattedTitle = searchValue.length ? [{ title: searchValue }] : [];
      const queries = {
        $or: [
          { tags: searchValue },
          { title: searchValue },
          {
            $and: [...formattedTags, ...formattedTitle],
          },
        ],
      };
      const results = fuse.search(queries).map((result) => result.item);
      handleFilter(results);
    }
  }, [searchValue, searchTags]);

  const onChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const onTagClick = (tag) => {
    if (searchTags.includes(tag)) {
      setSearchTags(searchTags.filter((included) => included != tag));
    } else {
      setSearchTags([...searchTags, tag]);
    }
  };

  return (
    <section direction="column" w={["100%", "75%", "50%"]}>
      <div justify="space-around">
        {TAG_LIST.map((tag, index) => (
          <button onClick={() => onTagClick(tag)} key={tag + index}>
            #{tag}
          </button>
        ))}
      </div>
      <input mt={6} value={searchValue} onChange={onChange} />
    </section>
  );
}
