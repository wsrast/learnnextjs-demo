import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/MyLayout';
import Link from 'next/link';

const PostLink = ({ title = 'no title' }) => (
  <li>
    <Link href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);
PostLink.propTypes = {
  title: PropTypes.string.isRequired
};

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink title="Hello Next.js" />
      <PostLink title="Learn Next.js is awesome" />
      <PostLink title="Deploy apps with Zeit" />
    </ul>
  </Layout>
);
