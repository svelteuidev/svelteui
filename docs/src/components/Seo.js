import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import ogImage from '../images/banner.png';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const favicon = require('images/favicon.png?url');

export const Seo = withRouter(({ title, description, image = ogImage, router, children }) => (
	<Head>
		{/* DEFAULT */}

		{title != undefined && <title key="title">{title} | SvelteUI</title>}
		{description != undefined && (
			<meta name="description" key="description" content={description} />
		)}
		<link rel="icon" type="image/x-icon" href={favicon} />
		<link rel="apple-touch-icon" href={favicon} />

		{/* OPEN GRAPH */}
		<meta property="og:type" key="og:type" content="website" />
		<meta
			property="og:url"
			key="og:url"
			content={`https://svelteui-docs.vercel.app${router.pathname}`}
		/>
		{title != undefined && <meta property="og:title" content={title} key="og:title" />}
		{description != undefined && (
			<meta property="og:description" key="og:description" content={description} />
		)}
		{image != undefined && (
			<meta
				property="og:image"
				key="og:image"
				content={`https://svelteui-docs.vercel.app${image}`}
			/>
		)}

		{/* TWITTER */}
		<meta name="twitter:card" key="twitter:card" content="summary_large_image" />
		<meta name="twitter:site" key="twitter:site" content="@brisklemonaid" />
		<meta name="twitter:creator" key="twitter:creator" content="@brisklemonaid" />
		{title != undefined && <meta name="twitter:title" key="twitter:title" content={title} />}
		{description != undefined && (
			<meta name="twitter:description" key="twitter:description" content={description} />
		)}
		{image != undefined && (
			<meta
				name="twitter:image"
				key="twitter:image"
				content={`https://svelteui-docs.vercel.app${image}`}
			/>
		)}

		{children}
	</Head>
));
