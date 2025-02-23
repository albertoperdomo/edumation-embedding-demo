module.exports = {
  globals: {
    process: "readonly",
    pending: false,
    before: true,
    cy: true,
    Cypress: true,
  },
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: [
    "import",
    "react-hooks",
    "jsx-a11y",
    "react",
    "jest",
    "no-only-tests",
    "@typescript-eslint",
    "better-styled-components",
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "next",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx", ".json"],
    "import/ignore": ["\\.css$"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["*.{ts,tsx}"],
      rules: {
        "no-undef": "off",
      },
    },
  ],
  rules: {
    strict: [2, "never"],
    "no-case-declarations": 1,
    "no-undef": 2,
    "no-var": 1,
    "no-unused-vars": [2, { vars: "all", args: "none" }],
    "no-empty": [1, { allowEmptyCatch: true }],
    curly: [1, "all"],
    eqeqeq: [1, "smart"],
    "import/no-commonjs": 1,
    "no-console": 0,
    "react/no-is-mounted": 2,
    "react/prefer-es6-class": 2,
    "react/display-name": 1,
    "react/prop-types": 2,
    "react/no-did-mount-set-state": 0,
    "react/no-did-update-set-state": 0,
    "react/no-find-dom-node": 0,
    "react/no-children-prop": 2,
    "react/no-string-refs": 2,
    "react/no-unescaped-entities": 2,
    "react/jsx-no-target-blank": 2,
    "react/jsx-key": 2,
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "react/react-in-jsx-scope": "off",
    "prefer-const": [1, { destructuring: "all" }],
    "jest/no-disabled-tests": 1,
    "jest/no-focused-tests": 2,
    "jest/prefer-to-have-length": 1,
    "no-useless-escape": 0,
    "no-only-tests/no-only-tests": "error",
    complexity: ["error", { max: 54 }],
    "@next/next/no-img-element": 1,
    "@typescript-eslint/no-unused-vars": 2,
    "@typescript-eslint/no-namespace": 1,
    "better-styled-components/sort-declarations-alphabetically": 2,
  },
};
