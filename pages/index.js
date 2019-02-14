import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/MyLayout';

const getPosts = () => [
	{ id: 'hello-nextjs', title: 'Hello Next.js' },
	{ id: 'learn-nextjs', title: 'Learn Next.js' },
	{ id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
];

export default () => (
	<Layout>
		<h1>My Blog</h1>
		<ul>
			{getPosts().map(post => (
				<li key={post.id}>
					<Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
						<a>{post.title}</a>
					</Link>
				</li>
			))}
		</ul>
		<style jsx>
			{`
				h1,
				a {
					font-family: 'Arial';
				}
				ul {
					padding: 0;
				}
				li {
					list-style: none;
					margin: 5px 0;
				}
				a {
					text-decoration: none;
					color: blue;
				}
				a:hover {
					opacity: 0.6;
				}
			`}
		</style>
	</Layout>
);

/*
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
*/
