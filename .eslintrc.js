module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "max-len": [
      "error",
      {
        "code": 300
      }
    ],
    "vue/eqeqeq": 2,
    "eqeqeq": 2,
    "operator-linebreak": [
      0,
      "after"
    ],
    "prefer-destructuring": [
      "error",
      {
        "array": false,
        "object": false
      }
    ],
    "comma-dangle": 0,
    "no-extra-semi": 0,
    "no-bitwise": 0,
    "prettier/prettier": 0,
    "lines-between-class-members": 0,
    "semi": [
      2,
      "never"
    ],
    "arrow-body-style": [
      "error",
      "always"
    ],
    "operator-assignment": [
      0,
      "never"
    ],
    "import/no-dynamic-require": 0,
    "global-require": 0,
    "linebreak-style": 0,
    "no-unused-expressions": 0,
    "no-undef": 0,
    "no-param-reassign": 0,
    "no-new": 0,
    "no-console": 0,
    "no-case-declarations": 0,
    "import/no-unresolved": 0,
    "import/extensions": [
      "error",
      "never",
      {
        "js": "never",
        "vue": "never"
      }
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "optionalDependencies": [
          "test/unit/index.js"
        ]
      }
    ]
  },
  "parserOptions": {
    "parser": "babel-eslint"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
