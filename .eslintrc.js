// Eslint configuration file

module.exports = {
    parser: 'babel-eslint',
    extends: 'airbnb-base',
    env: {
        browser: true,
    },
    rules: {
        indent: ['error', 4],
        'arrow-parens': ['error', 'as-needed'],
        'no-param-reassign': 0,
        'no-restricted-syntax': 0,
        'no-plusplus': 0,
    },
    overrides: [
        {
            files: ['webpack/*', '*.config.js', '*.*rc.js'],
            rules: {
                'import/no-extraneous-dependencies': 0,
            },
        },
    ],
};
