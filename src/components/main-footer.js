import React from "react";
import styled from "react-emotion";
import { SiteData } from "react-static";

const FooterStyles = styled.footer`
  width: calc(100% - 2rem);
  padding: 2rem 1rem;
  @media (max-width: 768px) {
    padding-bottom: 6rem;
  }
`;

const Footer = () => (
  <SiteData
    render={({ lastBuild }) => (
      <FooterStyles>
        Latest build: {lastBuild}.
        <br />
        Powered by React Static and Netlify.
      </FooterStyles>
    )}
  />
);

export default Footer;
