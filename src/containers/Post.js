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
    width: 100%;
    margin: 0;
  }
  .post-title {
    flex: 3;
    padding: 2rem 1rem;
  }

  time {
    text-transform: uppercase;
    opacity: 0.5;
  }
  .back {
    border-radius: 0 0.5rem 0 0;
    display: flex;
    align-self: stretch;
    align-items: center;
    background: #fafafa;
    padding: 1rem;
    flex: 1
    height: 100%;
  }

  .back:hover,
  .back:focus,
  .back:active {
    background: #f0f0f0;
  }
`;
export default withRouteData(({ post }) => (
  <React.Fragment>
    <PostCard>
      <div className="card-title">
        <div className="post-title">
          <Moment format="MMMM Do, YYYY">{post.data.date}</Moment>
          <H3>{post.data.title}</H3>
        </div>

        <Link exact to="/blog/" className="back">
          back
        </Link>
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
