import React from "react";
import { SiteData, Link } from "react-static";
import styled from "react-emotion";
import { H1 } from "./typography";
import Button from "./button";
import { Shadow } from "./styles";

const Header = styled.header`
  align-items: center;
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  padding: 2rem 1rem;
  width: calc(100% - 2rem);
  user-select: none;
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
    border-color: transparent transparent transparent rgba(128, 128, 256, 0.75);
    line-height: 0px;
  }
  .site-logo .right {
    position: absolute;
    margin-left: 0.25rem;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 1rem 1rem 0 0;
    border-color: transparent rgba(256, 128, 128, 0.75) transparent transparent;
    line-height: 0px;
  }
  ul {
    align-items: center;
  }
  a.active {
    text-decoration: none;
    color: inherit;
    button {
      box-shadow: 0 0 0 rgba(0, 0, 0, 0);
      background: rgba(0, 0, 0, 0);
      color: inherit;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  flex: 1;
  text-align: right;
  ul {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  ul li {
    text-align: right;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = () => (
  <div className={"site-logo"}>
    <div className={"left"} />
    <div className={"right"} />
  </div>
);

const MainNav = () => (
  <Header>
    <Link exact to="/" className={"header-left"}>
      <Logo />
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
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Button>Contact</Button>
          </Link>
        </li>
      </ul>
    </Nav>
  </Header>
);

export default MainNav;
