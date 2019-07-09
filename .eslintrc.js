module.exports = {
  extends: 'react-app',
  "rules": {
    "comma-dangle": ["error", "never"], // 不允许末尾逗号
    "indent": ["error", 2], // JavaScript代码强制使用一致的缩进：2格缩进
    "semi": ["error", "never"], // 不使用分号
    "arrow-parens": ["error", "as-needed"], // 箭头函数的参数可以不使用圆括号
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }], //react文件的后缀名为.js或.jsx均可
    "linebreak-style": "off", // 取消换行符\n或\r\n的验证
    "object-curly-newline": ["error", { "consistent": true }], // 花括号内的换行符不一定要格式一致
    "function-paren-newline": "off", // 不验证函数括号内的换行
    "import/extensions": "off", // 取消对文件扩展名的验证
    "import/no-unresolved": "off", // 取消自动解析路径，以此开启alias的别名路径设置
    "no-shadow": "off", // 取消变量声明覆盖的验证，保证mapDispatchToProps的正确使用
    "no-param-reassign": "off", // 允许对函数参数进行再赋值
    "no-underscore-dangle": "off", // 允许在标识符中使用下划线
    "no-use-before-define": "off", // 允许变量和函数在定义前使用
    "no-unused-expressions": "off", // 允许使用未使用过的表达式，以此来支持a && a()的代码形式
    "jsx-a11y/anchor-is-valid": [ "error", { "components": [ "Link" ], "specialLink": [ "to" ]}], // 允许正常地使用Link
    "import/no-extraneous-dependencies": "off", //使用history/createBrowserHistory引入包时，不会报错
    "no-console": "off", // 启用console控制台
    "import/no-mutable-exports": "off", // 取消exports不允许使用var或let的限制
    "max-len": "off", // 取消行的最大长度的验证，使SVG不用重新调整格式
    "global-require": "off" // 允许在语句中使用require，从而可以正确加载图片路径
  }
};
