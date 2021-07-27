# XO Config

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

## Mission: Make VSCode Smarter

[TODO list](./smart-vscode.todo)
