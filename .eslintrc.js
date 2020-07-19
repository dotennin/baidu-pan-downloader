module.exports = {
  env: {
    'es6': true,
    'node': true,
    'browser': true
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  plugins: [ '@typescript-eslint', 'react' ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    'sourceType': 'module',
    'project': './tsconfig.json'
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: "es5",
        semi: false,
        bracketSpacing: true,
        printWidth: 120,
        tabWidth: 2,
        useTabs: false
      }
    ],
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-object-literal-type-assertion': 0,
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
    'indent': [2, 2, {'SwitchCase': 1}],
    '@typescript-eslint/indent': [2, 2],
    'eqeqeq': 2,
    'no-var': 2,
    'prefer-const': 2,
    'react/no-find-dom-node': 'off',
    'no-debugger': 'error',
    'no-case-declarations': 'off',
    "no-restricted-imports": [
  "error",
  // {
  //   "paths": [{
  //     "name": "styled-components",
  //     "message": "Please import from styled-components/macro."
  //   }],
  //   "patterns": [
  //     "!styled-components/macro"
  //   ]
  // }
]
  },
  overrides: [
    {
      files: ['*.js'],
      rules: { '@typescript-eslint/no-var-requires': 0 }
    },
    {
      files: ['src/**/*.tsx'],
      rules: { 'react/prop-types': 'off' }
    }
  ]
}
