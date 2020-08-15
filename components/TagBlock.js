import React from "react";
import styled from "styled-components";

export function TagBlock({ tags }) {
  return (
    <TagBlockStyles>
      {tags.map((tag) => {
        return (
          <span key={tag} className="tag">
            {tag.toUpperCase()}
          </span>
        );
      })}
    </TagBlockStyles>
  );
}

const TagBlockStyles = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 16px 0 32px;

  .tag {
    background: rgb(230, 230, 230);
    padding: 0 7px;
    margin: 0 5px 5px;
    border-radius: 3px;
    border-bottom: 2px solid gray;
    border-right: 2px solid gray;

    font-weight: 700;
  }
`;
