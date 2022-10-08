import styled, { createGlobalStyle } from 'styled-components';

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  phone: customMediaQuery(500),
};

const GlobalStyles = createGlobalStyle`






:root {

/* Primary */

--color-dark-grey:#24232C;
--color-grey:#817D92;
--color-almost-white:#E6E5EA;
--color-very-dark-grey:#18171F;
--color-neon-green:#A4FFAF;
--color-red:#F64A4A;
--color-orange:#FB7C58;
--color-yellow:#F8CD65;


/*  Font sizes*/
--font-size-heading-l: 32px;


--font-size-heading-m: 24px;


--font-size-body: 18px;


/*  Font line height*/

--font-line-heading-l:43px;
--font-line-heading-m:31px;


--font-line-body:23px;



--font-letter-spacing-body-s:-0.23px;

}

*,
*::after,
*::before {
margin: 0;
padding: 0;
box-sizing: border-box;
}

html {
font-size: 10px;
}

body {
font-size: var(--font-size-body);
line-height: var(--font-line-body);
font-family: 'JetBrains Mono', sans-serif;
font-weight: 500;
background-color: var(--color-very-dark-grey);
color: var(--color-almost-white);
padding: 1.6rem;


#root {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

  }


  ${media.phone} {
    font-size: 1.6rem;
  }

}`;

export const MainContainer = styled.main`
  max-width: 54rem;
  width: 100%;

  h1 {
    font-size: var(--font-size-heading-m);
    line-height: var(--font-line-heading-m);
    color: var(--color-grey);
    text-align: center;
    margin-bottom: 3.2rem;
    ${media.phone} {
      font-size: 2.4rem;
    }
  }
`;

export default GlobalStyles;
