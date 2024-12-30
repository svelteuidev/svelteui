import MagicString from 'magic-string';
import jsStringEscape from 'js-string-escape';
import { parse } from 'svelte/compiler';
import { walk } from 'estree-walker'
import type { Node, Ast } from '$lib/types';
import type { PreprocessorGroup } from 'svelte/types/compiler/preprocess';
import type { ParsedPair, ParsedPairs, PreprocessOptions } from './types';

// @TODO: !!!IMPORTANT: this has bee commented out since svelte 5, since it requires a big migration 

function getSourceIdAttribute(node: Node) {
	return node?.attributes?.find(({ name }) => name === 'sourceId')?.value?.[0]?.data;
}

function defaultSourceCodeMap(): ParsedPair {
	return {
		foundSource: false,
		foundDisplay: false,
		displayNodesStart: [],
		content: ''
	};
}

function cleanContent(content: string): string {
	const lines = content.split(/\r?\n/);

	for (let i = 0; i < lines.length; i++) {
		if (!lines[i]?.trim()) {
			continue;
		}

		lines.splice(0, i);
		break;
	}

	for (let i = lines.length; i > 0; i--) {
		if (!lines[i]?.trim()) {
			continue;
		}

		lines.splice(i + 1);
		break;
	}

	const maxLength =
		lines.reduce((prev, curr) => (prev.length > curr.length ? prev : curr))?.length ?? 0;

	let minWhitespace = maxLength;
	lines.forEach((line) => {
		const whitespace = line.match(/(^\s+)/)?.[1]?.length ?? 0;
		if (whitespace < minWhitespace) {
			minWhitespace = whitespace;
		}
	});
	const trimmedLines = lines.map((line) => {
		return line.slice(minWhitespace);
	});
	return trimmedLines.join('\n');
}

// https://github.com/sveltejs/svelte/blob/8fc85f0ef6b53ed85e54c129d79270fe577626dc/src/compiler/preprocess/index.ts#L97
// I removed the opening part because it strips HTML comments,
// which are something we really would like to keep.
const styleRegex = /<style(\s[^]*?)?>([^]*?)<\/style>/gi;
const scriptRegex = /<script(\s[^]*?)?>([^]*?)<\/script>/gi;

export default function preprocessSvelteViewSource(opts?: PreprocessOptions): PreprocessorGroup {
	const SOURCE_NODE_NAME = opts?.sourceTagName ?? 'SourceCode';
	const DISPLAY_NODE_NAME = opts?.displayTagName ?? 'DisplaySourceCode';
	
	return {}
	/*
	return {
		markup({ content, filename }) {
			const stylesMatches = [...content.matchAll(styleRegex)].map((matchArr) => matchArr?.[0]);
			const scriptsMatches = [...content.matchAll(scriptRegex)].map((matchArr) => matchArr?.[0]);

			const trimmedContent = content.replaceAll(styleRegex, '').replaceAll(scriptRegex, '');

			const s = new MagicString(trimmedContent);
			const ast: Ast = parse(trimmedContent);

			const pairs: ParsedPairs = {};

			walk(ast.html, {
				enter(node: Node) {
					if (
						node.type === 'InlineComponent' &&
						(node.name === SOURCE_NODE_NAME || node.name === DISPLAY_NODE_NAME)
					) {
						const sourceId = getSourceIdAttribute(node);
						if (sourceId) {
							if (!pairs[sourceId]) {
								pairs[sourceId] = defaultSourceCodeMap();
							}
						} else {
							throw Error(`Node ${node.name} is missing its sourceId attribute`);
						}

						if (node.name === SOURCE_NODE_NAME) {
							if (pairs[sourceId].foundSource) {
								throw Error(
									`Found a duplicate sourceId on a ${SOURCE_NODE_NAME}: ${sourceId}. sourceIds must be unique across ${SOURCE_NODE_NAME} elements in a Svelte file`
								);
							}
							if (node.children && node.children.length > 0) {
								const contentStart = node.children[0].start;
								const contentEnd = node.children[node.children.length - 1].end;
								pairs[sourceId].content = jsStringEscape(
									cleanContent(s.slice(contentStart, contentEnd))
								);
							} else {
								pairs[sourceId].content = '';
							}
							pairs[sourceId].foundSource = true;
							return;
						}

						if (node.name === DISPLAY_NODE_NAME) {
							pairs[sourceId].displayNodesStart.push(node.start);
							pairs[sourceId].foundDisplay = true;
							return;
						}
					}
				}
			});

			Object.entries(pairs).forEach(([id, pair]) => {
				if (!(pair.foundSource && pair.foundDisplay)) {
					throw Error(
						`Did not find a matching ${
							pair.foundSource ? DISPLAY_NODE_NAME : SOURCE_NODE_NAME
						} node for sourceId ${id}`
					);
				}

				pair.displayNodesStart.forEach((nodeStart) => {
					const insertIndex = nodeStart + `<${DISPLAY_NODE_NAME}`.length;
					s.appendLeft(insertIndex, ` source={'${pair.content}'}`);
				});
			});

			return {
				code: s.toString() + stylesMatches.join('') + scriptsMatches.join(''),
				map: s.generateMap({ hires: true, file: filename })
			};
		}
	};
	*/
}
