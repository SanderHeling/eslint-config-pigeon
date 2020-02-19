# eslint-config-pigeon

**:bird: O-pigeon-ated eslint configuration.**

This configuration uses the typescript eslint parser with plugins and rules for
better structured development and is very opinionated.
It is brand new so rules will be added when we feel the need to.

## How to use
```sh
# Install configuration
yarn add eslint-config-pigeon --dev

# Install peer dependencies
npx install-peerdeps eslint-config-pigeon -DY

# Extend config in package.json
"eslintConfig": {
  "extends": [
    "pigeon"
  ]
},
```
