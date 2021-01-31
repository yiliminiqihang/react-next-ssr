const withCss = require('@zeit/next-css');

// 为了支持css
if(typeof require !== 'undefined') {//服务端环境
    require.extensions['css'] = file => {}
}
module.exports = withCss({})