import React from "react";
import { withRouteData, Link } from "react-static";
import Moment from "react-moment";
import styled from "react-emotion";

import { H2, H3 } from "../components/typography";
import Card from "../components/card";

const BlogCard = styled(Card)`
  max-height: 16rem;
  a {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
    text-decoration: none;
    color: inherit;
  }
  img {
    flex: 1;
    overflow-y: hidden;
    border-radius: 0.5rem;
    margin-bottom: 0;
  }
  h3,
  time {
    margin: 0;
  }
  h3 {
    flex: 3;
  }
  time {
    flex: 1;
  }
  .card-title {
    display: flex;
    flex: 2;
    height: 4rem;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
    width: calc(100% - 2rem);
  }
  .card-image {
    flex: 4;
    height: 8rem;
    border-radius: 0.5rem 0.5rem 0 0;
    background-image: url(${props => props.thumbnail});
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
  }
`;

export default withRouteData(({ posts }) => (
  <React.Fragment>
    <H2>Recent Writings</H2>
    {posts.map(post => (
      <BlogCard thumbnail={post.data.thumbnail}>
        <Link to={`/blog/post/${post.data.slug}`}>
          <div className={"card-image"} />
          <div className="card-title">
            <H3>{post.data.title}</H3>
            <Moment format="MMMM Do, YYYY">{post.data.date}</Moment>
          </div>
        </Link>
      </BlogCard>
    ))}
  </React.Fragment>
));

// {/* <div>
//     <br />
//     Recent writings:
//     <ul>
//       {posts.map(post => (
//         <li key={post.data.slug}>
//           <Link to={`/blog/post/${post.data.slug}`}>{post.data.title}</Link>
//         </li>
//       ))}
//     </ul>
//   </div> */}
