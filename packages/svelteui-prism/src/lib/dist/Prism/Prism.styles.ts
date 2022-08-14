import { createStyles } from '@svelteuidev/core';
import type { DefaultProps, SvelteUISize } from '@svelteuidev/core';

export interface PrismStyles extends DefaultProps {
	size: SvelteUISize;
	code: string;
	language: string;
	lineNumbers: boolean;
	highlightLines: string;
	normalizeWhiteSpace: boolean;
	normalizeWhiteSpaceConfig: WhiteSpaceConfig;
	copy: boolean;
	copyTimeout: number;
}

interface PrismStyleParams {
	size: SvelteUISize;
}

export interface WhiteSpaceConfig {
	'remove-trailing': boolean;
	'remove-indent': boolean;
	'left-trim': boolean;
	'right-trim': boolean;
	'break-lines': number;
	indent: number;
	'remove-initial-line-feed': boolean;
	'tabs-to-spaces': number;
	'spaces-to-tabs': number;
}

export default createStyles((theme, { size }: PrismStyleParams) => {
	return {
		root: {
			color: '$gray900',
			backgroundColor: '$gray50',
			fontSize: `$${size}`,
			lineHeight: `$${size}`,
			position: 'relative',
			paddingTop: '$xs',
			paddingBottom: '$xs',
			pre: {
				margin: 0
			},
			'pre[data-line]': {
				paddingTop: 0,
				paddingBottom: 0
			}
		},

		copy: {
			position: 'absolute',
			right: '$mdPX',
			zIndex: 2,
			background: 'transparent',
			'&:hover': {
				background: 'transparent',
				[`${theme.dark} &`]: {
					background: 'transparent'
				}
			}
		},

		'& .token.comment': {
			color: '$gray600'
		},
		'& .token.string': {
			color: '$indigo900'
		},
		'& .token.inserted': {
			color: '$indigo900'
		},
		'& .token.number': {
			color: '$blue700'
		},
		'& .token.builtin': {
			color: '$lime900'
		},
		'& .token.char': {
			color: '$lime900'
		},
		'& .token.constant': {
			color: '$lime900'
		},
		'& .token.function': {
			color: '$lime900'
		},
		'& .token.selector': {
			color: '$lime900'
		},
		'& .token.atrule': {
			color: '$lime900'
		},
		'& .token.punctuation': {
			color: '$gray700'
		},
		'& .token.variable': {
			color: '$violet900'
		},
		'& .token.attr-name': {
			color: '$green900'
		},
		'& .token.class-name': {
			color: '$red900'
		},
		'& .token.tag': {
			color: '$violet900'
		},
		'& .token.deleted': {
			color: '$violet900'
		},
		'& .token.operator': {
			color: '$red900'
		},
		'& .token.boolean': {
			color: '$red900'
		},
		'& .token.keyword': {
			color: '$red900'
		},
		'& .token.doctype': {
			color: '$gray700'
		},
		'& .token.url': {
			color: '$gray700'
		},
		'& .line-numbers': {
			position: 'relative',
			paddingLeft: '3.8em',
			counterReset: 'linenumber'
		},
		'& .line-numbers > code': {
			position: 'relative',
			whiteSpace: 'inherit'
		},
		'& .line-numbers .line-numbers-rows': {
			position: 'absolute',
			pointerEvents: 'none',
			top: 0,
			fontSize: '$md',
			left: '-3.8em',
			width: '3em',
			letterSpacing: '-1px',
			userSelect: 'none'
		},
		'& .line-numbers .line-numbers-rows span': {
			display: 'block',
			counterIncrement: 'linenumber'
		},
		'& .line-numbers .line-numbers-rows span:before': {
			color: '$gray400',
			display: 'block',
			textAlign: 'right',
			content: 'counter(linenumber)',
			marginRight: '$xs'
		},
		'& .line-highlight': {
			marginTop: 0,
			backgroundColor: 'rgba(51, 154, 240, 0.2)'
		},
		[`${theme.dark} &`]: {
			color: '$gray400',
			backgroundColor: '$dark800',

			'& .comment': {
				color: '$gray600'
			},
			'& .string': {
				color: '$teal400'
			},
			'& .inserted': {
				color: '$teal400'
			},
			'& .number': {
				color: '$blue400'
			},
			'& .builtin': {
				color: '$orange500'
			},
			'& .char': {
				color: '$orange500'
			},
			'& .constant': {
				color: '$orange500'
			},
			'& .function': {
				color: '$orange500'
			},
			'& .selector': {
				color: '$teal400'
			},
			'& .atrule': {
				color: '$teal400'
			},
			'& .punctuation': {
				color: '$gray500'
			},
			'& .variable': {
				color: '$gray500'
			},
			'& .attr-name': {
				color: '$yellow500'
			},
			'& .class-name': {
				color: '$yellow500'
			},
			'& .tag': {
				color: '$red600'
			},
			'& .deleted': {
				color: '$red600'
			},
			'& .operator': {
				color: '$gray500'
			},
			'& .boolean': {
				color: '$red600'
			},
			'& .keyword': {
				color: '$indigo300'
			},
			'& .doctype': {
				color: '$gray500'
			},
			'& .url': {
				color: '$gray500'
			},
			'& .line-numbers .line-numbers-rows span:before': {
				color: '$dark400'
			}
		}
	};
});
