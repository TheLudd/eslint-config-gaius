module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import',
  ],
  rules: {
    'arrow-parens': [ 'warn', 'always' ],
    'array-bracket-spacing': [ 'warn', 'always' ],
    'import/no-extraneous-dependencies': [
      'warn',
      {
        'devDependencies': [
          '**/features/**/*.js',
          '**/test/*.js',
          '**/spec/*.js'
        ]
      }
    ],
    indent: [
      'warn',
      2
    ],
    'new-cap': 0,
    'no-underscore-dangle': [
      'warn',
      { 'allow': [ '_id' ] }
    ],
    'no-unexpected-multiline': 'warn',
    'no-unused-vars': [ 'warn', {
      'vars': 'all',
      'args': 'all',
      'argsIgnorePattern': '^_',
      'ignoreRestSiblings': false,
    }],
    semi: [
      'warn',
      'never'
    ],
    'space-before-function-paren': [ 'warn', 'always' ],
    'sort-keys': 'warn',
  }
}
