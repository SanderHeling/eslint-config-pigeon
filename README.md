# eslint-config-pigeon

**:bird: O-pigeon-ated eslint configuration.**

This configuration uses the typescript eslint parser with plugins and rules for
better structured development and is very opinionated.
It is brand new so rules will be added when we feel the need to.

## Dependencies / used plugins
- "@typescript-eslint/eslint-plugin": "^2.6.0"
- "@typescript-eslint/parser": "^2.6.0"
- "eslint": "^6.6.0"
- "eslint-plugin-import": "^2.20.0"
- "eslint-plugin-prettier": "^3.1.1"
- "eslint-plugin-react": "^7.16.0"
- "eslint-plugin-react-hooks": "^2.2.0"
- "prettier": "^1.18.2"
- "eslint-config-prettier": "6.5.0"
- "eslint-config-react": "1.1.7"
- "typescript": "3.6.4"

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
