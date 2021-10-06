# XO Config

Temporarily deprecated in favor of [eslint-plugin-zardoy-config](https://github.com/zardoy/eslint-config/), will undeprecate once XO plugin for VSCode is good as ESLint plugin. (huge performace and compatibility issues, weird node_modules errors etc)

> This package doesn't use SemVer

Opinionated [config](./config.js) (with comments).

## How to Use

1. Install [XO](https://github.com/xojs/xo) and this config `@zardoy/xo-config`
2. Create file `.xo-config.js` with `module.exports = require('@zardoy/xo-config')`
3. Install [VSCode extension](https://marketplace.visualstudio.com/items?itemName=spence-s.linter-xo) for inline linting

## Main Goal

I'm planning to make all my repos follow this config (especially when I figure out how to make a wrapper for XO).

## Highlights

- Tab size: 4

It uses 4 spaces instead of hard tab, because not all websites have [normalized tab size](https://github.com/sindresorhus/modern-normalize/issues/17).

Or for another example, every tab in code printed in console would look like it has 8 spaces width. This rule doesn't make sense for me.

## Prettier

This config has disabled (at least I tried to disable) all options, that prettier can handle.

I always format code with prettier and fix all XO issues with <kbd>CMD+SHIFT+I</kdb>

For now, I didn't find a way (and don't know what's the best) to include that config in all my projects, so I'm explicitly including it only in popular ones:

```json
{
    "prettier": {
        "semi": false,
        "singleQuote": true,
        "proseWrap": "never",
        "tabWidth": 4,
        "trailingComma": "all",
        "arrowParens": "avoid",
        "printWidth": 150
    }
}
```

## Mission: Make VSCode Smarter

[TODO list](./smart-vscode.todo)
