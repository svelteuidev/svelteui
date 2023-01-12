import { SvelteComponentTyped } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps } from '$lib/styles';

export interface MobileAlternate {
	media: string;
	href: string;
}

export interface LanguageAlternate {
	hrefLang: string;
	href: string;
}

export interface AdditionalRobotsProps {
	nosnippet?: boolean;
	maxSnippet?: number;
	maxImagePreview?: 'none' | 'standard' | 'large';
	maxVideoPreview?: number;
	noarchive?: boolean;
	unavailableAfter?: string;
	noimageindex?: boolean;
	notranslate?: boolean;
}

export interface Twitter {
	cardType?: 'summary' | 'summary_large_image' | 'app' | 'player';
	site?: string;
	handle?: string;
	title?: string;
	description?: string;
	image?: string;
	imageAlt?: string;
}

export interface Facebook {
	appId?: string;
}

export interface OpenGraph {
	url?: string;
	type?: string;
	title?: string;
	description?: string;
	images?: ReadonlyArray<OpenGraphImages>;
	videos?: ReadonlyArray<OpenGraphVideos>;
	locale?: string;
	site_name?: string;
	profile?: OpenGraphProfile;
	book?: OpenGraphBook;
	article?: OpenGraphArticle;
	video?: OpenGraphVideo;
}

interface OpenGraphImages {
	url: string;
	alt?: string;
	width?: number;
	height?: number;
	secure?: boolean;
}

interface OpenGraphVideos {
	url: string;
	alt?: string;
	width?: number;
	height?: number;
	secureUrl?: string;
	type?: string;
}

interface OpenGraphProfile {
	firstName?: string;
	lastName?: string;
	username?: string;
	gender?: string;
}

interface OpenGraphBook {
	authors?: ReadonlyArray<string>;
	isbn?: string;
	releaseDate?: string;
	tags?: ReadonlyArray<string>;
}

interface OpenGraphArticle {
	publishedTime?: string;
	modifiedTime?: string;
	expirationTime?: string;
	authors?: ReadonlyArray<string>;
	section?: string;
	tags?: ReadonlyArray<string>;
}

interface OpenGraphVideo {
	actors?: ReadonlyArray<OpenGraphVideoActors>;
	directors?: ReadonlyArray<string>;
	writers?: ReadonlyArray<string>;
	duration?: number;
	releaseDate?: string;
	tags?: ReadonlyArray<string>;
	series?: string;
}

interface OpenGraphVideoActors {
	profile: string;
	role?: string;
}

interface BaseMetaTag {
	content: string;
}

interface HTML5MetaTag extends BaseMetaTag {
	name: string;
	property?: undefined;
	httpEquiv?: undefined;
}

interface RDFaMetaTag extends BaseMetaTag {
	property: string;
	name?: undefined;
	httpEquiv?: undefined;
}

interface HTTPEquivMetaTag extends BaseMetaTag {
	httpEquiv:
		| 'content-security-policy'
		| 'content-type'
		| 'default-style'
		| 'x-ua-compatible'
		| 'refresh';
	name?: undefined;
	property?: undefined;
}

export type MetaTag = HTML5MetaTag | RDFaMetaTag | HTTPEquivMetaTag;

export interface LinkTag {
	rel: string;
	href: string;
	sizes?: string;
	type?: string;
	color?: string;
}

export interface SeoProps extends DefaultProps<HTMLDivElement>, HTMLAttributes<HTMLElement> {
	title?: string;
	titleTemplate?: string;
	noindex?: boolean;
	nofollow?: boolean;
	robotsProps?: AdditionalRobotsProps;
	description?: string;
	canonical?: string;
	mobileAlternate?: MobileAlternate;
	languageAlternates?: ReadonlyArray<LanguageAlternate>;
	twitter?: Twitter;
	facebook?: Facebook;
	openGraph?: OpenGraph;
	additionalMetaTags?: ReadonlyArray<MetaTag>;
	additionalLinkTags?: ReadonlyArray<LinkTag>;
}

export default class Seo extends SvelteComponentTyped<
	SeoProps,
	Record<string, never>,
	Record<string, never>
> {}
