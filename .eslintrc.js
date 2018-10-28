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
    'arrow-parens': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        'devDependencies': [
          '**/features/**/*.js',
          '**/test/*.js',
          '**/spec/*.js'
        ]
      }
    ],
    indent: [
      'error',
      2
    ],
    'new-cap': 0,
    'no-underscore-dangle': [
      'error',
      { 'allow': [ '_id' ] }
    ],
    'no-unexpected-multiline': 'error',
    semi: [
      'error',
      'never'
    ],
    'space-before-function-paren': [ 'error', 'always' ],
    'sort-keys': 'error',
  }
}
