module.exports = {
  "env": {
      "es6": true,
      "node": true,
      "browser": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
  ],
  "parserOptions": {
    "sourceType": "module"
  },
  "parser": "babel-eslint",
  "rules": {
      "indent": [
          "error",
          2
      ],
      "linebreak-style": [
          "error",
          "unix"
      ],
      "quotes": [
          "error",
          "single"
      ],
      "semi": [
          "error",
          "always"
      ],
      "no-console": "off",
      "no-fallthrough": "off",
      "react/prop-types": "off"
  }
};