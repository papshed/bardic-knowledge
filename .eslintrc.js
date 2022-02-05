module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: '**/tsconfig.json',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint/eslint-plugin'
    ],
    extends: [
        'plugin:@typescript-eslint/recommended'
    ],
    root: true,
    env: {
        node: true
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        "newline-per-chained-call": [2, {"ignoreChainWithDepth": 3}],
        "@typescript-eslint/no-inferrable-types": "off"
    },
};
