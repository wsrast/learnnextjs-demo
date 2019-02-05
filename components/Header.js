import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { asyncReactor } from 'async-reactor';

const linkStyle = {
	marginRight: 15
};

const Header = async () => {
	const data = await fetch('https://jsonplaceholder.typicode.com/posts');
	const posts = await data.json();

	console.log(`posts: `, posts);

	return (
		<div>
			<Link href="/">
				<a style={linkStyle}>Home</a>
			</Link>
			<Link href="/about" prefetch>
				<a style={linkStyle}>About</a>
			</Link>
		</div>
	);
};

const Load = () => <h2>Loading...</h2>;

const Error = () => <h2>Error</h2>;

export default asyncReactor(Header, Load, Error);
