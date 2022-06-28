module.exports = {
  plugins: ['stylelint-prettier'],
  extends: [
    'stylelint-config-standard',
    'stylelint-prettier/recommended',
    'stylelint-config-recess-order',
    'stylelint-config-recommended-vue',
  ],
  rules: {
    'prettier/prettier': [
      true,
      {
        singleQuote: true,
      },
    ],
    'at-rule-no-unknown': null,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['export'],
      },
    ],
  },
};
