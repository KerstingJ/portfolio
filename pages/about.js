import React from "react";
import styled from "styled-components";
import { withLayout } from "../layouts/withLayout";
import MainLayout from "../layouts/MainLayout";

function About(props) {
  return (
    <Main>
      <article className="about">
        <section className="details">
          <img
            className="profile-pic"
            src="./images/me.jpg"
            alt="Handsome And Talented Software Developer"
          />
          <section className="details-content">
            <h2>Josh Kersting</h2>
            <p>
              <strong>Software Engineer</strong>
            </p>
            <p>
              <strong>Location: </strong>Traverse City, Mi
            </p>
            <p>
              <strong>Languages: </strong>Javascript, Python, Java, HTML, CSS,
              SQL, noSQL
            </p>
            <p>
              <strong>Libraries/Frameworks: </strong>
              React.JS, Redux.js, Spring, Hibernate, Thunks, Firebase, Axios,
              Postgresql, Styled-components, reactstrap, canvas, and more...
            </p>
          </section>
        </section>
        <section className="brief">
          <h3>About</h3>
          <p>
            I am a Software Engineer, and Father. Born in Muskegon, Mi, I spent
            most of my professional life traveling the Mid-South and Mid-west
            helping grass-roots organizations manage and use data to drive
            organizational goals.
          </p>
          <p>
            After moving back home to be closer to family I joined Lambda
            School, where I not only completed their curriculum in Computer
            Science and Web Development in 2019, but was also a Team Lead
            mentoring and teaching students working their way through the
            curriculum.
          </p>
          <p>
            In October 2019 I joined SampleServe as a Frontend Engineer, Where I
            spent the last year working extensively with React, React Native,
            and other Frontend technologies. I also worked with clients to
            identify problems and plan new features.
          </p>
        </section>
      </article>
      <article className="values">
        <section className="value-block">
          <h3>Who am I?</h3>
          <p>
            We are what we believe. These are the beliefs that form the core of
            who I am.
          </p>
        </section>
        <section className="value-content">
          <p>
            <strong>People are kind </strong>
            Looking at the news, and media, we love to have a bad guy. We love
            heros more, but how does a hero exist without a villain? I believe
            they exist in everyday acts of kindness. When I look at my sons
            chocolate covered face, as he gestures his dirty little fingers to
            share candy with his cousin, I see the one thing I know to be true
            about the world. People are kind and act with the best intentions
            they know how.
          </p>
          <p>
            <strong>Together we are more </strong>
            As much as one person can do by themselves, a group can do so much
            more. There is so much to learn and do in the world oen person
            couldn't do it all. Luckily we get to share the experiences of
            others through writings, art, music, and creating things together.
          </p>
          <p>
            <strong>Never stop moving </strong>
            Sometimes we need to take a step back and look how far we've come,
            but I cant do that without seeing all the people who have helped me
            along the way. For the people who believed in me when I didn't
            believe in myself, I will never give up, I will never stop learning,
            I will never stop moving forward.
          </p>
        </section>
      </article>
    </Main>
  );
}

const Main = styled.main`
  min-height: 50vh;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 0;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  & > article {
    width: 50%;
  }

  h3 {
    color: var(--main-color);
  }

  h4 {
    color: var(--main-color);
    font-size: 2rem;
  }

  p {
    font-size: 2rem;
  }

  @media (max-width: 1000px) {
    padding: 20px 10px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    & > article {
      width: unset;
    }
  }

  .con-block {
    width: 49%;

    @media (max-width: 800px) {
      width: 99%;
    }
  }

  .details {
    display: flex;
    justify-content: space-between;
    padding: 15px;

    strong {
      color: var(--main-color);
      font-weight: bold;
    }

    @media (max-width: 500px) {
      flex-direction: column;
    }
  }

  .profile-pic {
    display: block;
    max-width: 500px;
    max-height: 500px;
    width: 48%;
    border-radius: 3px;
    object-fit: cover;
    object-position: bottom right;

    margin-right: 15px;

    @media (max-width: 500px) {
      width: 100%;
    }
  }

  .brief {
    padding: 15px;
    p {
      margin-bottom: 15px;
    }
  }

  .details-content {
    max-width: 500px;
    width: 49%;

    @media (max-width: 500px) {
      width: 100%;
    }
  }

  .values {
    padding: 15px;

    p {
      margin-bottom: 15px;

      strong {
        color: var(--main-color);
        font-size: 2rem;
        font-weight: bold;
        display: block;
      }
    }
  }

  .value-content {
    @media (max-width: 800px) {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    @media (max-width: 600px) {
      display: block;
    }

    p {
      @media (max-width: 800px) {
        width: 31%;
      }

      @media (max-width: 600px) {
        width: 98%;
      }
    }
  }
`;

export default withLayout(MainLayout)(About);
