import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../../models/PostConfig';

interface ReportComponentProps {
  blogPosts: [];
}

const Posts = ({ blogPosts }: ReportComponentProps) => {
  return (
    <ul>
      {blogPosts.map((post: Post) => (
        <li key={post.id}>
          <Link to={post.id.toString()}>
            <h3>{post.content}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
