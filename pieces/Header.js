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
  padding: 15px;
  position: absolute;
  z-index: 1;
  color: white;

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
    color: white;

    transition: all var(--snappy-transition);

    &.active {
      color: white;
      font-weight: bold;
    }

    &:hover {
      display: inline-block;
      transform: scale(1.15);
      text-decoration: none;
    }
  }
`;
