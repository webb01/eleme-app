// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'semi': ['error', 'always'], //后面加上分号
        'eol-last': 0, //强调文件末尾不要有换行符
        'space-before-function-paren': 0, //函数名和括号之间空格不要求
        'no-trailing-spaces': 0, //一行结尾可以空白
        'indent': 0 //不缩进
    }
}