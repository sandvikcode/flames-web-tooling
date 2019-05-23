module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-order', 'stylelint-value-no-unknown-custom-properties'],
  rules: {
    'at-rule-no-vendor-prefix': true,
    'color-hex-length': 'short',
    'color-named': [
      'never',
      {
        ignoreProperties: ['/composes/'],
      },
    ],
    'color-no-hex': true,
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-no-important': [true, { severity: 'warning' }],
    'declaration-property-value-blacklist': {
      'font-family': ['/Suisse/'],
    },
    'font-family-name-quotes': 'always-where-recommended',
    'font-family-no-missing-generic-family-keyword': null,
    'function-url-no-scheme-relative': true,
    'length-zero-no-unit': true,
    'media-feature-name-no-vendor-prefix': true,
    'no-descending-specificity': null,
    'no-unknown-animations': true,
    'order/order': ['custom-properties', 'declarations', 'rules', 'at-rules'],
    'order/properties-alphabetical-order': true,
    'property-blacklist': ['font-weight'],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['/composes/'],
      },
    ],
    'property-no-vendor-prefix': true,
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['/global/'] },
    ],
    'selector-no-vendor-prefix': true,
    'shorthand-property-no-redundant-values': true,
    'value-no-vendor-prefix': true,
  },
};
