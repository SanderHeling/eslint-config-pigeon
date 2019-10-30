# eslint-config-pigeon

**:bird: O-pigeon-ated eslint configuration.**

This configuration uses the typescript eslint parser with plugins and rules for better structured development but is very opinionated.
It is brand new so rules stuff will be added while we stumble upon issues.

## Dependencies / used plugins
- "@typescript-eslint/eslint-plugin": "2.6.0"
- "eslint": ">= 5.0.0"
- "eslint-plugin-import": "2.18.2"
- "eslint-plugin-prettier": "3.1.1"
- "eslint-plugin-react": "7.16.0"
- "eslint-plugin-react-hooks": "2.2.0"
- "prettier": "1.18.2"
- "typescript": ">= 3.6.4"

## How to use
```sh
# Install configration
yarn add eslint-config-pigeon -D

# Install peer dependencies
npx install-peerdeps eslint-config-pigeon -D

# Extend config in package.json
"eslintConfig": {
  "extends": [
    "pigeon"
  ]
},
```
