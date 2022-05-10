const theme = `
    export const themeMap = {
        ...defaultStitchesThemeMap,
        width: 'space',
        height: 'space',
        minWidth: 'space',
        maxWidth: 'space',
        minHeight: 'space',
        maxHeight: 'space',
        flexBasis: 'space',
        gridTemplateColumns: 'space',
        gridTemplateRows: 'space',
        blockSize: 'space',
        minBlockSize: 'space',
        maxBlockSize: 'space',
        inlineSize: 'space',
        minInlineSize: 'space',
        maxInlineSize: 'space',
        borderWidth: 'borderWeights'
    };
`;

const utils = `
    export const utils = {
        // Abbreviated padding properties
        p: (value) => ({
            padding: value
        }),
        pt: (value) => ({
            paddingTop: value
        }),
        pr: (value) => ({
            paddingRight: value
        }),
        pb: (value) => ({
            paddingBottom: value
        }),
        pl: (value) => ({
            paddingLeft: value
        }),
        px: (value) => ({
            paddingLeft: value,
            paddingRight: value
        }),
        py: (value) => ({
            paddingTop: value,
            paddingBottom: value
        }),
        // Abbreviated padding properties
        m: (value) => ({
            margin: value
        }),
        mt: (value) => ({
            marginTop: value
        }),
        mr: (value) => ({
            marginRight: value
        }),
        mb: (value) => ({
            marginBottom: value
        }),
        ml: (value) => ({
            marginLeft: value
        }),
        mx: (value) => ({
            marginLeft: value,
            marginRight: value
        }),
        my: (value) => ({
            marginTop: value,
            marginBottom: value
        }),
        ta: (value) => ({
            textAlign: value
        }),
        tt: (value) => ({
            textTransform: value
        }),
        to: (value) => ({
            textOverflow: value
        }),
        d: (value) => ({ display: value }),
        dflex: (value) => ({
            display: 'flex',
            alignItems: value,
            justifyContent: value
        }),
        fd: (value) => ({
            flexDirection: value
        }),
        fw: (value) => ({ flexWrap: value }),
        ai: (value) => ({
            alignItems: value
        }),
        ac: (value) => ({
            alignContent: value
        }),
        jc: (value) => ({
            justifyContent: value
        }),
        as: (value) => ({
            alignSelf: value
        }),
        fg: (value) => ({ flexGrow: value }),
        fs: (value) => ({
            fontSize: value
        }),
        fb: (value) => ({
            flexBasis: value
        }),
        bc: (value) => ({
            backgroundColor: value
        }),
        bf: (value) => ({
            backdropFilter: value
        }),
        bg: (value) => ({
            background: value
        }),
        bgBlur: (value) => ({
            bf: 'saturate(180%) blur(10px)',
            bg: \`\${value}600\`
        }),
        bgColor: (value) => ({
            backgroundColor: value
        }),
        backgroundClip: (value) => ({
            WebkitBackgroundClip: value,
            backgroundClip: value
        }),
        bgClip: (value) => ({
            WebkitBackgroundClip: value,
            backgroundClip: value
        }),
        br: (value) => ({
            borderRadius: value
        }),
        bw: (value) => ({
            borderWidth: value
        }),
        btrr: (value) => ({
            borderTopRightRadius: value
        }),
        bbrr: (value) => ({
            borderBottomRightRadius: value
        }),
        bblr: (value) => ({
            borderBottomLeftRadius: value
        }),
        btlr: (value) => ({
            borderTopLeftRadius: value
        }),
        bs: (value) => ({
            boxShadow: value
        }),
        normalShadow: (value) => ({
            boxShadow:  \`0 4px 14px 0 $colors\${value}\`
        }),
        normalShadowVar: (value) => ({
            boxShadow: \`0 4px 14px 0 \${value}\`
        }),
        lh: (value) => ({
            lineHeight: value
        }),
        ov: (value) => ({ overflow: value }),
        ox: (value) => ({
            overflowX: value
        }),
        oy: (value) => ({
            overflowY: value
        }),
        pe: (value) => ({
            pointerEvents: value
        }),
        events: (value) => ({
            pointerEvents: value
        }),
        us: (value) => ({
            WebkitUserSelect: value,
            userSelect: value
        }),
        userSelect: (value) => ({
            WebkitUserSelect: value,
            userSelect: value
        }),
        w: (value) => ({ width: value }),
        h: (value) => ({ height: value }),
        mw: (value) => ({ maxWidth: value }),
        maxW: (value) => ({
            maxWidth: value
        }),
        mh: (value) => ({
            maxHeight: value
        }),
        maxH: (value) => ({
            maxHeight: value
        }),
        size: (value) => ({
            width: value,
            height: value
        }),
        minSize: (value) => ({
            minWidth: value,
            minHeight: value,
            width: value,
            height: value
        }),
        sizeMin: (value) => ({
            minWidth: value,
            minHeight: value,
            width: value,
            height: value
        }),
        maxSize: (value) => ({
            maxWidth: value,
            maxHeight: value
        }),
        sizeMax: (value) => ({
            maxWidth: value,
            maxHeight: value
        }),
        appearance: (value) => ({
            WebkitAppearance: value,
            appearance: value
        }),
        scale: (value) => ({
            transform: \`scale(\${value})\`
        }),
        linearGradient: (value) => ({
            backgroundImage: \`linear-gradient(\${value})\`
        }),
        tdl: (value) => ({
            textDecorationLine: value
        }),
        // Text gradient effect
        textGradient: (value) => ({
            backgroundImage: \`linear-gradient(\${value})\`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
        })
    };
    `;

export { theme, utils };
