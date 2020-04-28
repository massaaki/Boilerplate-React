# React Boilerplate to start generic new projects
This is a React Boilerplate with:
```configuration
- eslint
- .editorconfig
- prettier
- babel-prettier
- global-styles (styled-components)
- Default font: Roboto (from google fonts)
- Icons (Material Design)
- redux
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


### Icons ( Material design )
```
yarn add react-icons

```
#### Usage icons
```
import {<name>} from 'react-icons/md';
```


### Polished ( Javascript manipulate color )
```
yarn add polished;

```

#### Usage Polished
```
import {darken} from 'polished';

# in style.js ( using style-component)
background: ${darken(0.02, '#333')};

```


### API
```
# Install axios
yarn add axios

# create folder src/services/api.js

```



### util general format
```
create src/util/format.js

```
#### usage format
```
import { formatPrice } from '../../util/format';

formatPrice(<VALUE)
```
#### good practices to use format
```
# if you're using in api request, you shold use something like this:

async componentDidMount() {

  ...

  const response = await api.get('/items');
  const data = response.data.map(item => ({
    ...product,
    priceFormated: formatPrice(item.price)
  }));

  this.setState({
    items: item
  });

  ...

}

```



## REDUX

### Install Redux and React Redux integration
```
yarn add redux react-redux
```

### Folders

#### 1. create reducer folders
```
src/store/modules/rootReducer.js
src/store/modules/<reducerName>/reducer.js
```
```
# reducer.js
function <reducerName> {
  return [];
}

export default <reducerName>;
```

```
# rootReducer
import { combineReducers } from 'redux';

import <reducerName> from './<reducerName>/reducer;

export default combineReducers({
  <reducerName>,
});

```


#### 2. create folder src/store/index.js
```
# index.js
import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';


const store = createStore(rootReducer);

export default store;
```

#### 3. import in App.js
```
import { Provider } from 'react-redux';
import store from './store';
```

#### 4. add this code in function App()
```
# src/App.js

function App() {
  return(
    <Provider store={store}>
      ...
    <Provider>
  );

}
```



