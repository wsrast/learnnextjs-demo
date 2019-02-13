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
