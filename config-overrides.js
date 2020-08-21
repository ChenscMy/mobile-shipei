
const { override, fixBabelImports,addPostcssPlugins,addLessLoader } = require('customize-cra');
 
module.exports = override(
  addLessLoader({}),
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  addPostcssPlugins([require('postcss-pxtorem')({
    rootValue: 37.5,
    propList: ['*']
  }),])
 );