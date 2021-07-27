module.exports = {
    parser: `@typescript-eslint/parser`,
    env: {
      es6: true,
      browser: true,
    },
    plugins: [
        `svelte3`,
        `@typescript-eslint`,
    ],
    overrides: [
        {
        files: [`*.svelte`],
        processor: `svelte3/svelte3`,
        },
    ],
    rules: {
        // allow async-await
        "generator-star-spacing": `off`,
        // allow debugger/console during development
        "no-debugger": process.env.NODE_ENV === `production` ? `error` : `off`,
        "no-console": process.env.NODE_ENV === `production` ? `error` : `off`,
        quotes: [`error`, `backtick`],
        curly: [`error`, `all`],
        "comma-dangle": [`error`, `always-multiline`],
        semi: [`error`, `never`],
    },
    settings: {
        'svelte3/typescript': require(`typescript`),
        'svelte3/ignore-styles': () => true,
    },
    ignorePatterns: [`node_modules`],
}
