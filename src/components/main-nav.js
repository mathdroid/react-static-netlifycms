import React from "react";
import { SiteData, Link } from "react-static";
import styled from "react-emotion";
import { H1 } from "./typography";

const Header = styled.header`
  display: flex;
  flex-flow: wrap row;
  margin: 2rem 1rem 1rem 1rem;
  width: calc(100% - 2rem);
  justify-content: space-between;
  align-items: center;
  h1 {
    margin-top: 0;
    margin-bottom: 0;
  }
  .header-left {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    color: inherit;
    margin-bottom: 1rem;
    @media (max-width: 768px) {
      justify-content: center;
    }
  }
  .site-logo {
    width: 1.5rem;
    height: 1rem;
    margin-right: 1rem;
  }
  .site-logo .left {
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 1rem 0 0 1rem;
    border-color: transparent transparent transparent rgba(0, 0, 128, 0.5);
    line-height: 0px;
  }
  .site-logo .right {
    position: absolute;
    margin-left: 0.25rem;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 1rem 1rem 0 0;
    border-color: transparent rgba(128, 0, 0, 0.5) transparent transparent;
    line-height: 0px;
  }
  a.active {
    text-decoration: none;
    color: inherit;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex: 1;
  flex-direction: row;

  text-align: right;
  margin-bottom: 1rem;
  ul {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  ul li {
    text-align: right;
    margin-right: 1em;
  }
  ul li:last-child {
    margin-right: 0;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const MainNav = () => (
  <Header>
    <Link to="/" className={"header-left"}>
      <div className={"site-logo"}>
        <div className={"left"} />
        <div className={"right"} />
      </div>
      <SiteData render={({ title }) => <H1>{title}</H1>} />
    </Link>
    <Nav>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </Nav>
  </Header>
);

export default MainNav;
