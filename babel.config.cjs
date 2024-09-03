// todo f
// 1、优化babel配置； 2、将 rollup 和 typescript 使用项目本地安装的方式
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
