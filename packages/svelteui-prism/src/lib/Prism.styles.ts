import { css } from '@stitches/core';

export const light = css({
	color: '$gray900',
	backgroundColor: '$gray50',

	'& .comment': {
		color: '$gray600'
	},
	'& .string': {
		color: '$indigo900'
	},
	'& .inserted': {
		color: '$indigo900'
	},
	'& .number': {
		color: '$blue700'
	},
	'& .builtin': {
		color: '$lime900'
	},
	'& .char': {
		color: '$lime900'
	},
	'& .constant': {
		color: '$lime900'
	},
	'& .function': {
		color: '$lime900'
	},
	'& .selector': {
		color: '$lime900'
	},
	'& .atrule': {
		color: '$lime900'
	},
	'& .punctuation': {
		color: '$gray700'
	},
	'& .variable': {
		color: '$violet900'
	},
	'& .attr-name': {
		color: '$green900'
	},
	'& .class-name': {
		color: '$red900'
	},
	'& .tag': {
		color: '$violet900'
	},
	'& .deleted': {
		color: '$violet900'
	},
	'& .operator': {
		color: '$red900'
	},
	'& .boolean': {
		color: '$red900'
	},
	'& .keyword': {
		color: '$red900'
	},
	'& .doctype': {
		color: '$gray700'
	},
	'& .url': {
		color: '$gray700'
	}
});

export const dark = css({
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
	}
});
