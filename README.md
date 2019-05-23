# flames-web-tooling

Basic tooling configuration for web projects.

# Setup

Create a `.prettierrc.js` file in the root of the project with the following contents:

```js
module.exports = require('@sandvikcode/flames-web-tooling').prettier;
```

Create a `.eslintrc.js` file in the root of the project with the following contents:

```js
module.exports = require('@sandvikcode/flames-web-tooling').eslint;
```

In `package.json` add:

```js
{
  "devDependencies": {
    "@sandvikcode/flames-js-tooling": "https://github.com/sandvikcode/flames-web-tooling/archive/vX.X.X.tar.gz"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "yarn lint && yarn test"
    }
  },
  "lint-staged": {
    "*.{html,json,md,yaml}": [
      "prettier --write",
      "git add"
    ],
    "*.js": [
      "eslint --fix",
      "git add"
    ]
  }
}
```

Run `yarn` or `npm install` and install this dependency as a devDependency, don't install any ESLint or Prettier dependencies directly in your project.
