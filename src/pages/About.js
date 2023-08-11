import React from "react";
import { styled } from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <h3>Nurturing life at Horto dos Barros</h3>
      <p>
        Welcome to Hortos dos Barros, a haven of life nestled near Praia da
        Areia Branca, Portugal. Our journey began three years ago, rooted in a
        profound mission of restoration and revival. Hortos dos Barros is more
        than a garden – it's a testament to possibility. We embarked on this
        venture with a simple yet profound purpose: to heal the land that was
        once bound by chemicals and to nurture a thriving ecosystem where all
        creatures find solace. In these three years, our soil has transformed
        from barren to bountiful, a testament to our unwavering dedication to
        regeneration. Though we are on a journey with a horizon yet to be
        reached, each day unveils a richer, more vibrant earth than the one
        before. Our trees, still young and reaching for the sky, symbolize our
        shared journey toward a flourishing and self-sustaining ecosystem. At
        Hortos dos Barros, we are architects of a better future. We are
        nurturing not just plants, but a vision – a vision of a productive yet
        regenerative landscape. As we tend to our no-till garden, each seed we
        sow is a promise to the earth, a promise to coexist harmoniously with
        the natural world. Our dream extends beyond our borders. We strive to be
        a beacon of hope for our region, an embodiment of what is possible when
        we prioritize restoration and sustainability. Our slow farming approach
        is a deliberate choice, a testament to our commitment to giving nature
        the time it needs to flourish once again. So, join us in this unfolding
        narrative of renewal. Step into Hortos dos Barros and become a part of a
        story that is still being written – a story of growth, transformation,
        and a shared commitment to cultivating life in all its forms. Together,
        we are sowing the seeds of a thriving future, one rooted in respect for
        the past and hope for the generations yet to come.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  p {
    line-height: 2;
    color: var(--clr-grey-5);
    margin-top: 2rem;
  }
`;

export default About;
