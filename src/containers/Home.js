import React from "react";
import { withSiteData } from "react-static";
import Card from "../components/card";
import { H2, H3 } from "../components/typography";

export default withSiteData(() => (
  <React.Fragment>
    <H2>Hi, my name is Odi.</H2>
    <p>I'm a full-stack software engineer, based in Jakarta, Indonesia.</p>
    <p>Welcome to my website.</p>
  </React.Fragment>
));
