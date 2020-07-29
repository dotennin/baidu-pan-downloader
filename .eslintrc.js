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
    'indent': 'off',
    '@typescript-eslint/indent': 'off',
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
  ],
  globals: {
    unsafeWindow: true,
    GM_addStyle: true,
    GM_deleteValue: true,
    GM_addValueChangeListener: true,
    GM_removeValueChangeListener: true,
    GM_setValue: true,
    GM_getValue: true,
    GM_log: true,
    GM_getResourceText: true,
    GM_getResourceURL: true,
    GM_registerMenuCommand: true,
    GM_unregisterMenuCommand: true,
    GM_openInTab: true,
    GM_xmlhttpRequest: true,
    GM_download: true,
    GM_getTab: true,
    GM_saveTab: true,
    GM_getTabs: true,
    GM_notification: true,
    GM_setClipboard: true,
    GM_info: true,
    GM_listValues: true,
  }
}
