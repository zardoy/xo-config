const config = {
    "space": 4,
    "rules": {
        // it's just not convenient
        "capitalized-comments": "off",
        "no-unused-vars": "warn",
        "no-empty-function": "warn",
        "template-curly-spacing": "error",
        "prefer-template": "error",
        "no-implicit-coercion": ["error", {
            boolean: false,
            number: false
        }],
        "@typescript-eslint/no-implicit-any-catch": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/restrict-template-expressions": [
            "error",
            {
                "allowBoolean": true,
                "allowAny": true
            }
        ],
        // common for libs
        "@typescript-eslint/no-unsafe-return": "off",
        // also common for libs or for React component with empty props
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/space-before-function-paren": [
            "error",
            {
                "anonymous": "never",
                "named": "never",
                "asyncArrow": "always"
            }
        ],
        // common to reference since it is not possible to reference to types via tsconfig
        "@typescript-eslint/triple-slash-reference": "off",
        // TODO investigate
        "@typescript-eslint/prefer-readonly": "warn",
        "@typescript-eslint/no-empty-function": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        // a commong style
        "@typescript-eslint/object-curly-spacing": [
            "error",
            "always"
        ],
        // TODO disable completely. I really know where and when to use null
        "unicorn/no-null": "warn",
        "unicorn/custom-error-definition": "error",
        "unicorn/consistent-destructuring": "warn",
        "unicorn/empty-brace-spaces": "off",
        "unicorn/filename-case": [
            "error",
            {
                "cases": {
                    "camelCase": true,
                    "pascalCase": true
                }
            }
        ],
        "unicorn/import-style": [
            "error",
            {
                "styles": {
                    "fs": {
                        "default": true
                    },
                    "vscode": {
                        "default": true
                    }
                }
            }
        ],
        "unicorn/no-array-reduce": "warn"
    }
};

module.exports = config;