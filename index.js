const path = require('path');
const fs = require('fs');

const appDir = fs.realpathSync(process.cwd());
const srcDir = path.resolve(appDir, 'src');

module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        'plugin:import/typescript',
    ],
    plugins: [
        'react',
        '@typescript-eslint',
        'prettier',
        'import',
        'react-hooks',
    ],
    env: {
        browser: true,
        jasmine: true,
        jest: true,
        node: true,
    },
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
        'import/resolver': {
            node: {
                paths: [srcDir],
            },
        },
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    rules: {
        'arrow-body-style': [
            'error',
            'as-needed',
            {
                requireReturnForObjectLiteral: false,
            },
        ],
        '@typescript-eslint/interface-name-prefix': [
            'error',
            {
                prefixWithI: 'always',
                allowUnderscorePrefix: false,
            },
        ],
        '@typescript-eslint/explicit-function-return-type': ['off'],
        '@typescript-eslint/no-var-requires': ['off'],
        'react/prop-types': ['off'],
        'prettier/prettier': [
            'error',
            {
                arrowParens: 'always',
                singleQuote: true,
                tabWidth: 4,
                trailingComma: 'es5',
            },
        ],
        'import/no-unresolved': 'error',
        'import/namespace': 'error',
        'import/no-default-export': 'error',
        'import/export': 'error',
        'import/order': [
            'error',
            {
                'newlines-between': 'always',
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                ],
            },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-sort-props': [
            'warn',
            {
                callbacksLast: true,
                shorthandFirst: true,
                ignoreCase: true,
            },
        ],
        'react/self-closing-comp': [
            'warn',
            {
                component: true,
                html: true,
            },
        ],
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                ignoreRestSiblings: true,
            },
        ],
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: ['return', 'block', 'block-like'],
            },
        ],
    },
    overrides: [
        {
            files: ['*.stories.tsx'],
            rules: {
                'import/no-default-export': 0,
            },
        },
        {
            files: ['*.d.ts'],
            rules: {
                '@typescript-eslint/interface-name-prefix': 'off',
            },
        },
    ],
};
