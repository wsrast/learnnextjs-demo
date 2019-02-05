import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/MyLayout';

const Index = ({ shows }) => (
	<Layout>
		<h1>Batman TV Shows</h1>
		<ul>
			{shows.map(({ show }) => (
				<li key={`show${show.id}`}>
					<Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
						<a>{show.name}</a>
					</Link>
				</li>
			))}
		</ul>
	</Layout>
);
Index.propTypes = {
	shows: PropTypes.arrayOf(PropTypes.object)
};
Index.defaultProps = {
	shows: []
};
Index.getInitialProps = async function() {
	const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
	const data = await res.json();

	console.log(`Show data fetched. Count: ${data.length}`);
	return {
		shows: data
	};
};

export default Index;

/*
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
*/
