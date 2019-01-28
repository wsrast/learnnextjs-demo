import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Layout from '../components/MyLayout';

const PostLink = ({ id = '', title = 'no title' }) => (
	<li>
		<Link as={`/p/${id}`} href={`/post?title=${title}`}>
			<a>{title}</a>
		</Link>
	</li>
);
PostLink.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
};

export default () => (
	<Layout>
		<h1>My Blog</h1>
		<ul>
			<PostLink id="hello-nextjs" title="Hello Next.js" />
			<PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
			<PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
		</ul>
	</Layout>
);
