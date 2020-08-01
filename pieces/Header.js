import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function HeaderComponent(props) {
  return (
    <Header>
      <article>
        <a className="h1" href="/">
          <h1>Josh Kersting</h1>
        </a>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </nav>
      </article>
    </Header>
  );
}

const Header = styled.header`
  width: 100%;
  border-bottom: 1px solid lightgray;
  padding: 15px;

  article {
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    @media (max-width: 500px) {
      flex-direction: column;
    }

    a.h1 {
      color: inherit;
      font-size: inherit;
      text-decoration: none;
      padding: 0;
      margin: 0;
    }
  }

  a {
    font-size: 2rem;
    margin-left: 20px;
    color: var(--main-color);

    transition: color 0.35s ease;

    &.active {
      color: var(--main-color);
      font-weight: bold;
    }

    &:hover {
      color: black;
    }
  }
`;
