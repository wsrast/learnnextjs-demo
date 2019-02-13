import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/MyLayout';

const Post = ({
	show: {
		name,
		summary,
		image: { medium }
	}
}) => (
	<Layout>
		<h1>{name}</h1>
		<p>{summary.replace(/<[/]?p>/g, '')}</p>
		<img src={medium} alt={name} />
	</Layout>
);
Post.propTypes = {
	show: PropTypes.objectOf(PropTypes.any).isRequired
};
Post.getInitialProps = async function({ query }) {
	const { id } = query;
	const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
	const show = await res.json();

	// console.log(`context: `, arguments[0]);
	console.log(`Fetched show: ${show.name}`);

	return { show };
};

/*
const Content = withRouter(({ router }) => (
	<div>
		<h1>{router.query.title}</h1>
		<p>This is the blog post content</p>
	</div>
));
Content.propTypes = {
	router: PropTypes.objectOf(PropTypes.object)
};

const Page = () => (
	<Layout>
		<Content />
	</Layout>
);
*/

export default Post;
