module.exports = (extendRules = {}) => {
    const config = {
        space: false,
        rules: {
            // diabled, because too annoying. I'm using prettier for formatting
            semi: 'off',
            '@typescript-eslint/semi': 'off',
            indent: 'off',
            '@typescript-eslint/indent': 'off',
            'react/jsx-indent': 'off',
            quotes: 'off',
            '@typescript-eslint/object-curly-spacing': 'off',

            'semi-style': ['error', 'first'],
            curly: ['error', 'multi', 'consistent'],
            // it's just not convenient. I got used to it
            'capitalized-comments': 'off',
            'no-unused-vars': 'warn',
            'no-empty-function': 'warn',
            'template-curly-spacing': 'error',
            'prefer-template': 'error',
            'import/no-anonymous-default-export': 'off',
            // TODO error on stable. Warn on PRs
            '@typescript-eslint/no-unsafe-assignment': 'warn',
            '@typescript-eslint/no-unsafe-argument': 'off',
            // TODO enable once Error type in catch clauses
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            // don't see a reason for that. Also, don't know how to re-export in that case
            '@typescript-eslint/no-var-requires': 'off',
            'no-implicit-coercion': [
                'error',
                {
                    boolean: false,
                    number: false,
                },
            ],
            '@typescript-eslint/no-implicit-any-catch': 'off',
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/restrict-template-expressions': [
                'error',
                {
                    allowBoolean: true,
                    allowAny: true,
                },
            ],
            // common for libs
            '@typescript-eslint/no-unsafe-return': 'off',
            // also common for libs or for React component with empty props
            '@typescript-eslint/no-empty-interface': 'off',
            '@typescript-eslint/space-before-function-paren': [
                'error',
                {
                    anonymous: 'never',
                    named: 'never',
                    asyncArrow: 'always',
                },
            ],
            // common to reference since it is not possible to reference to types via tsconfig
            '@typescript-eslint/triple-slash-reference': 'off',
            // TODO investigate
            '@typescript-eslint/prefer-readonly': 'warn',
            '@typescript-eslint/no-empty-function': 'warn',
            '@typescript-eslint/no-unused-vars': 'warn',
            // a commong style
            // '@typescript-eslint/object-curly-spacing': ['error', 'always'],
            // TODO disable completely. I really know where and when to use null
            'unicorn/no-null': 'warn',
            'unicorn/custom-error-definition': 'error',
            'unicorn/consistent-destructuring': 'warn',
            'unicorn/empty-brace-spaces': 'off',
            // its too early for me. TODO enable back
            'unicorn/prefer-module': 'off',
            'unicorn/filename-case': [
                'error',
                {
                    cases: {
                        camelCase: true,
                        pascalCase: true,
                    },
                },
            ],
            'unicorn/import-style': [
                'error',
                {
                    styles: {
                        fs: {
                            default: true,
                        },
                        vscode: {
                            default: true,
                        },
                    },
                },
            ],
            'unicorn/no-array-reduce': 'warn',
            // TODO try to enable once cjs problems are solved (esbuild)
            'unicorn/prefer-node-protocol': 'off',
            // It is just would be super inconveniet for me. So far I didn't have any problems with that. I'll try to enable it once import system in VSCode is smarter.
            'node/prefer-global/process': 'off',
            '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true }],
            'unicorn/prevent-abbreviations': 'off',
            // "unicorn/prevent-abbreviations": [
            //     "error",
            //     {
            //         // these replacements are too aggressive by default. most of the abbreviations are known
            //         "replacements": {
            //             "e": {
            //                 "error": false
            //             },
            //             // de facto standard
            //             "i": false,
            //             "func": false,
            //             "dir": false,
            //             "dirs": false,
            //             "ctx": false,
            //             "arg": false,
            //             "args": false,
            //             "req": false,
            //             // result actually
            //             "res": false,
            //             // "tmp": false,
            //             "prop": false,
            //             "str": false,
            //             "props": false,
            //             "param": false,
            //             // even got using params!
            //             "params": false,
            //             // react
            //             "ref": false,
            //             "refs": false,

            //             "cmd": {
            //                 "command": true
            //             },
            //             "errCb": {
            //                 "handleError": true
            //             },
            //         }
            //     }
            // ],
            // 'react/jsx-child-element-spacing': 'off',
            // 'react/no-unknown-property': 'off',
            // 'react/jsx-uses-vars': 'error',
            'react/no-array-index-key': 'warn',
            'react/prop-types': 'off',
            // 'react/jsx-indent': [
            //     'error',
            //     4,
            //     {
            //         checkAttributes: true,
            //         indentLogicalExpressions: true,
            //     },
            // ],
            'react/jsx-indent-props': ['error', 4],
            // jsx-max-props-per-line
            'react/jsx-pascal-case': [
                'error',
                {
                    // framer-motion (motion.div)
                    allowNamespace: true,
                },
            ],
            'react/jsx-tag-spacing': [
                'error',
                {
                    closingSlash: 'never',
                    beforeSelfClosing: 'always',
                    afterOpening: 'never',
                    beforeClosing: 'never',
                },
            ],
            // TODO block jsx-no-bind arrow functions
            'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
            'react/jsx-wrap-multilines': [
                'error',
                // I just find them redundant in most cases
                {
                    declaration: 'ignore',
                    assignment: 'ignore',
                    return: 'ignore',
                    arrow: 'parens-new-line',
                    condition: 'ignore',
                    logical: 'ignore',
                    prop: 'ignore',
                },
            ],
            ...extendRules,
        },
    }
    return config
}
