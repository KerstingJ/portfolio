import React, { useState, useEffect, useRef } from "react";
import Fuse from "fuse.js";

import styled from "styled-components";

const TAG_LIST = ["javascript", "project", "general"];

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
  const fuse = useRef(new Fuse(blogs, fuseOptions));

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
      const results = fuse.current.search(queries).map((result) => result.item);
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
    <SearchSection>
      <div className="tags-container" justify="space-around">
        {TAG_LIST.map((tag, index) => (
          <button
            onClick={() => onTagClick(tag)}
            key={tag + index}
            className={searchTags.includes(tag) ? "selected" : undefined}
          >
            {tag}
          </button>
        ))}
      </div>
      {/* <input
        mt={6}
        value={searchValue}
        onChange={onChange}
        placeholder={`🔍 Use a custom filter`}
      /> */}
    </SearchSection>
  );
}

const SearchSection = styled.section`
  width: 100%;
  padding-bottom: 32px;
  border-bottom: 1px solid lightgray;
  margin-bottom: 32px;

  input {
    &:focus {
      border: 1px solid var(--main-color);
    }
  }

  .tags-container {
    display: flex;
    flex-wrap: wrap;
    /* only commented out, will need when we bring search back */
    /* margin-bottom: 32px; */

    & > * {
      margin-right: 16px;
      margin-bottom: 16px;
    }

    button {
      text-transform: capitalize;
      background: none;
      border: 1px solid lightgray;
      color: gray;

      &:hover {
        border: 1px solid var(--main-color);
        color: var(--main-color);
      }

      &.selected {
        background: var(--main-color);
        border: 1px solid var(--main-color);
        color: white;
      }
    }
  }
`;
