// @ts-check

/** @type {import("syncpack").RcFile} */
const config = {
  dependencyTypes: ['prod', 'dev'],
  source: [
    'package.json',
    'packages/*/package.json',
    'packages/web-components/package.json',
    'packages/react-components/*/package.json',
    'packages/fluentui/!(e2e|docs|circulars-test|local-sandbox|perf-test-northstar|perf|projects-test)/package.json',
  ],
  semverGroups: [
    {
      dependencyTypes: ['dev'],
      packages: ['@fluentui/**'],
      dependencies: ['@fluentui/**'],
      isIgnored: true,
    },
  ],
  versionGroups: [
    // completely ignore all devDeps that specify inner workspace deps - as we enforce usage of `*` or `>9.0.0-alpha`
    {
      dependencyTypes: ['dev'],
      packages: ['@fluentui/**'],
      dependencies: ['@fluentui/**'],
      isIgnored: true,
    },
    {
      packages: ['@fluentui/fluentui-repo'],
      dependencies: [
        '@floating-ui/dom',
        '@babel/core',
        '@babel/preset-typescript',
        '@babel/generator',
        '@babel/traverse',
        '@rnx-kit/eslint-plugin',
        '@swc/helpers',
        '@types/react-test-renderer',
        'typescript-eslint',
        '@microsoft/load-themed-styles',
        'babel-loader',
        'chalk',
        'codesandbox-import-utils',
        'copy-to-clipboard',
        'del',
        'eslint-config-airbnb',
        'eslint-config-prettier',
        'eslint-import-resolver-typescript',
        'eslint-plugin-compat',
        'eslint-plugin-import',
        'eslint-plugin-jest',
        'eslint-plugin-jsx-a11y',
        'eslint-plugin-react',
        'eslint-plugin-react-hooks',
        'eslint-plugin-jsdoc',
        'fs-extra',
        'glob',
        'jju',
        'loader-utils',
        'lodash',
        'prettier',
        'schema-utils',
        'react-is',
        'react-hot-loader',
        'react-test-renderer',
        'react-vis',
        'tslib',
        'terser',
        'terser-webpack-plugin',
        'webpack',
        'webpack-bundle-analyzer',
        'yargs',
        'dedent',
        'd3-array',
        'd3-axis',
        'd3-format',
        'd3-hierarchy',
        'd3-sankey',
        'd3-scale',
        'd3-selection',
        'd3-shape',
        'd3-time-format',
        'd3-time',
        '@types/d3-array',
        '@types/d3-axis',
        '@types/d3-format',
        '@types/d3-hierarchy',
        '@types/d3-sankey',
        '@types/d3-scale',
        '@types/d3-selection',
        '@types/d3-shape',
        '@types/d3-time-format',
        '@types/d3-time',
      ],
    },
    {
      packages: ['@fluentui/react-bindings', '@fluentui/react-northstar'],
      dependencies: ['@fluentui/dom-utilities'],
    },
    {
      packages: ['@fluentui/react-northstar-emotion-renderer'],
      dependencies: ['stylis'],
    },
    {
      packages: ['@fluentui/react-conformance'],
      dependencies: ['chalk'],
    },
  ],
};

module.exports = config;
