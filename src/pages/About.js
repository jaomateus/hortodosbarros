import React from "react";
import { styled } from "styled-components";
import aboutImg from "../assets/nest.jpeg";

const About = () => {
  return (
    <Wrapper>
      <article className="img-container">
        <img src={aboutImg} alt="nest" />
      </article>
      <article className="content">
        <div className="title">
          <h2>our story</h2>
          <div className="underline"></div>
        </div>
        <p>
          Welcome to Hortos dos Barros, a vibrant haven near Praia da Areia
          Branca, Portugal. Our journey began three years ago with a mission of
          land restoration. Hortos dos Barros is more than a garden; it's a
          testament to possibility. We aim to heal the land, nurture a diverse
          ecosystem, and create a flourishing, self-sustaining environment. Our
          dedication to regeneration is evident in our transformed soil, now
          bountiful and rich. Our young trees symbolize a shared journey toward
          a thriving ecosystem. At Hortos dos Barros, we're architects of a
          better future, nurturing a vision of productive, regenerative
          landscapes. Each seed sown is a promise to coexist harmoniously with
          nature. Our dream extends beyond borders, inspiring hope for our
          region through restoration and sustainability. Our slow farming
          approach reflects our commitment to giving nature the time to
          flourish. Join us at Hortos dos Barros and be part of a growing
          story—a narrative of renewal, growth, and shared commitment to
          cultivating life for generations to come.
        </p>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 600px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 15rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;

    .img-container {
      display: block;
      position: relative;
    }
  }
`;

export default About;
