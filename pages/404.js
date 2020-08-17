import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { conway } from "../scripts/conway";

import BlogLayout from "../layouts/BlogLayout";

export default function PageNotFound(props) {
  const [game, setGame] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let game = conway();
    setGame(game);
  }, []);

  useEffect(() => {
    let styles = getComputedStyle(document.documentElement);
    // let dead = styles.getPropertyValue("--main-color-light");
    let live = styles.getPropertyValue("--main-color-light");

    if (game) {
      game.init(live);
      return game.cleanUp;
    }
  }, [game]);

  const handleToggleGame = (e) => {
    e.preventDefault();
    if (game) {
      setIsRunning(game.toggle());
    }
  };

  return (
    <BlogLayout>
      <ConwayContainer>
        <h2>404</h2>
        <h4>We couldn't find that page</h4>
        <p></p>
        <p>But we did find this, have some fun with Conways Game of Life.</p>
        <canvas width="300px" height="300px"></canvas>
        <div class="status">
          <p>
            Iterations: <span id="count">0</span>
          </p>
        </div>
        <div class="actions">
          <button
            id="toggle"
            className={isRunning ? "running" : ""}
            onClick={handleToggleGame}
          >
            {isRunning ? "Stop" : "Start"}
          </button>
          <button id="reset">Reset With Seed</button>
          <button id="clear">Reset And Clear</button>
        </div>
      </ConwayContainer>
    </BlogLayout>
  );
}

const ConwayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  .actions {
    width: 500px;
    display: flex;
    justify-content: space-evenly;
    padding: 16px 0;
  }

  canvas:hover {
    cursor: pointer;
  }

  button {
    background: none;
    border: 1px solid var(--main-color);
    color: var(--main-color);

    &:hover {
      border: 1px solid var(--secondary-color);
      color: var(--secondary-color);
    }

    &.running {
      background: var(--main-color);
      border: 1px solid var(--main-color);
      color: white;

      &:hover {
        background: var(--secondary-color);
        border: 1px solid var(--secondary-color);
      }
    }
  }
`;
