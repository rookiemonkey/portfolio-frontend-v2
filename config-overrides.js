const { override, addBabelPlugin } = require('customize-cra');

/**
 * CHALLENGE: prevent the usage of relative paths inside the src folder
 * 
 * SOURCE: https://medium.com/@leonardobrunolima/react-tips-working-with-relative-path-using-create-react-app-fe55c5f97a21
 *         https://gist.github.com/jonaskirch/e243756d96cbfa3af33cffdb755c9140
 * 
 * NOTES: as of July 2022 injectBabelPlugin is already depracated, used customized-cra instead 
 *        and add babel-plugin-root-import by using the addBabelPlugin method
 */

module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
      rootPathPrefix: "~",
    },
  ])
);