# React Boilerplate to start generic new projects
This is a React Boilerplate with:
```configuration
- eslint
- .editorconfig
- prettier
- babel-prettier
- global-styles (styled-components)
```

overwrite config to Airbnb style guide
```overwrite
- prettierrc.js
- eslintr.js
```



## Steps to generate same boilerplate from zero

### Create a new react project
```
yarn create react-app <project-name>
```
### Created .editorconfig
```editor
root = true

[*]
end_of_line = lf
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```
### ESLINT
```eslint
yarn add eslint --init -D

Remove package-lock.json

yarn # run in terminal to generate/recreate yarn.lock
```


### PRETTIER
```pretter
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
yarn add babel-eslint -D # configure babel to use last javascripts features
```


### Change .eslintrc.js
```estlinrc
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.js'] }
    ],
    'import/prefer-default-export': 'off'
  },
};
```

### Create file .prettierrc in root path and add these lines
```prettierrc
{
  "singleQuote": true,
  "trailingComma": "es5"
}
```

### Routes
```routes
yarn add react-router-dom

Create routes in src

import this element in App.js
```

### Styled-component
```styled
yarn add styled-components

create styles/global.js
set default styles

import then in App.js
```
