# flames-web-tooling

Basic tooling configuration for web projects

# Setup

Install this dependency as a devDependency

Create a file `.prettierrc.js` in the root of the project with the contents:

```js
module.exports = require('flames-web-tooling').prettier;
```

Create a file `.eslintrc.js` in the root of the project with the contents:

```js
module.exports = require('flames-web-tooling').eslint;
```

In `package.json` add:

```js
{
  "dependencies": {
    "flames-web-tooling": "",
    ...
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
