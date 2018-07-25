import React from "react";
import styled from "react-emotion";
import { SiteData } from "react-static";

const FooterStyles = styled.footer`
  margin: 2rem 1rem;
  @media (max-width: 768px) {
    margin-bottom: 6rem;
  }
`;

const Footer = () => (
  <SiteData
    render={({ lastBuild }) => (
      <FooterStyles>Latest build: {lastBuild}</FooterStyles>
    )}
  />
);

export default Footer;
