export interface Page {
	title?: string;
	pathname: string;
	expand: boolean;
	links: { href: string; text: string }[];
}
