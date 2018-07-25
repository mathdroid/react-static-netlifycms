import React from "react";
import { Router, Link } from "react-static";
import { hot } from "react-hot-loader";
import styled, { injectGlobal } from "react-emotion";
import Routes from "react-static-routes";

import "reset-css";
// import "./app.css";
import Nav from "./components/main-nav";
import Footer from "./components/main-footer";

injectGlobal`
  * {
    box-sizing: inherit;
  }

  html {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    background: #eee; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to top left,
      #aaa,
      #ddd 25%,
      #fff 50%
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to top left,
      #aaa,
      #ddd 25%,
      #fff 50%
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    ${"" /* background-repeat: no-repeat; */}
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,
      monospace;
    font-weight: lighter;
    font-size: 16px;
    color: hsla(0, 0%, 15%, 0.8);
  }

  body {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
  }

  #root {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 48em;
  }
  
  p {
    margin-bottom: 1rem;
  }
  .react-markdown {
    margin-top: 1rem;
  }
`;

const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: calc(100% - 2rem);
`;

const MobileNav = styled.nav`
  @media (min-width: 768px) {
    display: none;
  }
  background: linear-gradient(to right, #8888ff 0%, #ff8888 100%);
  min-height: 4rem;
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  ${"" /* border-top: 1px solid #f5f3f7; */};
  a.active {
    color: #fff;
    text-decoration: none;
  }
`;

const Gradient = styled.div`
  width: 100vw;
  height: 0.25rem;
  background: linear-gradient(to right, #8888ff 0%, #ff8888 100%);
`;

const App = () => (
  <Router>
    <React.Fragment>
      <Gradient />
      <Nav />
      <Main>
        <Routes />
      </Main>
      <Footer />
      <MobileNav>
        <Link to="/" exact>
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </MobileNav>
    </React.Fragment>
  </Router>
);

export default hot(module)(App);
