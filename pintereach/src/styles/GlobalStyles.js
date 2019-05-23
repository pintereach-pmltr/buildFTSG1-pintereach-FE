import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #EDF2F4;
        font-family: 'Rubik', sans-serif;
        font-size: 62.5%;
        color: #141618;
    }

    h1,h2,h3,h4,h5 {
        font-family: 'Rubik Mono One', sans-serif;
    }

    h1 {
        font-size: 3rem;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.5rem;
    }

    h4, h5 {
        font-size: 1.25rem;
        color: #EF233C;
    }

    p {
        font-size: 1.25rem;
    }

    a {
        text-decoration: none;
        font-size: 1.25rem;
        color: #EF233C;
    }
`

export default GlobalStyle;