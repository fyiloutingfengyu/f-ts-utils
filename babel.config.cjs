module.exports = {
  'presets': [
    [
      '@babel/preset-env',
      {
        'modules': false,
        'useBuiltIns': 'usage',
        'corejs': 3,
        'targets': '> 0.25%, not dead'
      },
      '@babel/preset-typescript'
    ]
  ],
  'plugins': [
    '@babel/plugin-transform-runtime'
  ],
  'ignore': [
    'node_modules/**'
  ]
};
