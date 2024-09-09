module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: '> 0.25%, not dead'
      },
      '@babel/preset-typescript'
    ]
  ],
  'plugins': [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
        helpers: true, // 使用从 @babel/runtime-corejs3库中导入辅助函数包来替代内联helpers
        regenerator: true, // 将generator函数转换为使用不污染全局作用的regenerator运行时
        useESModules: false // 是否使用ES模块语法生成的帮助函数
      }
    ]
  ],
  ignore: [
    'node_modules/**'
  ]
};
