import React from "react";
import { withRouteData, Link } from "react-static";
import Moment from "react-moment";
import Markdown from "react-markdown";
import styled from "react-emotion";

import Card from "../components/card";
import { H3 } from "../components/typography";
//

const PostCard = styled(Card)`
  h3 {
    margin-top: 0rem;
    margin-bottom: 0rem;
  }
  .card-title {
    display: flex;
    align-items: center;
    width: calc(100% - 2rem);
    margin-top: 1rem;
  }
  .post-title {
    flex: 1;
    margin-right: 1rem;
  }
`;
export default withRouteData(({ post }) => (
  <React.Fragment>
    <PostCard>
      <div className="card-title">
        <div className="post-title">
          <H3>{post.data.title}</H3>
          <Moment format="MMMM Do, YYYY">{post.data.date}</Moment>
        </div>
        <Link to="/blog/">Back</Link>
      </div>
      <img className="image" src={post.data.thumbnail} alt="" />
      <Markdown
        className="react-markdown"
        source={post.content}
        escapeHtml={false}
      />
    </PostCard>
  </React.Fragment>
));
