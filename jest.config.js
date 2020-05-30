
module.exports = {
      roots :['./test/'],
      transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '.+\\.(css|styl|less|sass|scss)$' : 'jest-css-modules-transform'
      },
      transformIgnorePatterns:['/node_modules/'],
      moduleNameMapper: {
        '@environment': '<rootDir>/config/development.js',
      }
  };                                                                                                                                             