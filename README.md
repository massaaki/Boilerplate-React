# React Boilerplate to start generic new projects
This is a React Boilerplate with:
```configuration
- eslint
- .editorconfig
- prettier
- babel-prettier
```

overwrite config to Airbnb style guide
```overwrite
- prettierrc.js
- eslintr.js
```

# Libraries
```
- global-styles (styled-components)
- Default font: Roboto (from google fonts)
- Icons (Material Design)
- redux (https://redux.js.org/)
- reactotron
- immer (https://immerjs.github.io/immer/docs/)
- redux-saga
```

# Samples pages
```
- Redux ('/')
- React Hooks ('/hook-sample')
```

# Start project
```
# 1. Clone repository
git clone https://github.com/massaaki/react-boilerplate.git <projectName>

# 2. navigate to path
cd PATH/<projectName>

# 3. Install dependences
yarn

# 4. run project
yarn start
```

# State logs on development mode
```
Just Install `reactotron`
https://github.com/infinitered/reactotron
```


## Steps to generate same boilerplate from zero

### Create a new react project
```
yarn create react-app <project-name>
```
### Create .editorconfig
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
### How to use redux in component
#### 1. go to Component PATH/index.js and add connect from redux
```
# conect the component with redux state
import { connect } from 'react-redux'
```
#### 2. remove export default from function and add separate with connect()
```
# from:
export default class ClassName extends Component {
  ...
}

# to:
class className extends Component {
  ...
}

export default connect()(className);
```
#### 3. create a handle function (is exampla is using an button)
```
{ itens.map((item) => (
  ...
  <button type="button" onClick={ () => this.handleAdd(item) }>
    Button action
  </button>
  ...
))}
```

```
handleAdd => item => {
  # this.props.dispatch({})
  const { dispatch } = this.props;

  dispatch({
    type: 'ADD_ITEM',
    item
  });
}
```

### 4. modfy reducer.js
```
# action has the type sended by component, itens vars etc.

export default function cart(state =[], action) {
  switch(action.type) {
    case 'ADD_ITEM':
      return [...state, action.item];
    default:
      return state;
  }
}
```


### 5. retrieve reducer informations
#### import connect from react-redux to component
```
import { connect } from 'react-redux';
```
#### remove export default declare with connect with state information
```
# from:
export default class ClassName extends Component {
  ...
}

# to:
class className extends Component {
  ...
}

//or use snippet mapStateToProps
//set the parammeters and add to connect

export default connect(state=> ({
  itens: state.itens,
}))(className);
```
### 6. declare state parameter
```
import ...
import ...

...

function className({item}) {
  console.log(item);
  ...
  return (
    ...
  );
}

```

## Reactotron
### installation
```
yarn add reactotron-react-js reactotron-redux
```
### folders
#### create file: src/config/ReactotronConfig.js
```
# ReactotronConfig.js
import Reactoltron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

if( process.env.NODE_ENV === 'development' ) {
  const tron = Reactoltron.configure()
  .use(reactotronRedux())
  .connect();

  tron.clear();
  console.tron = tron;
}
```

### import config to src/App.js
```
import './config/ReactotronConfig';
```

### declare enchancer and send as parameter in createStore
```
# src/store/index.js
import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';


const enhancer = process.env.NODE_ENV === 'development'
  ? console.tron.createEnhancer() : null;
  const store = createStore(rootReducer, enhancer);
export default store;
```

### USAGE
#### 1. Just Install reactotron
```
https://github.com/infinitered/reactotron/releases
```


## IMMER (Support to modify imutable states)
### instalation
suport to modify imutable states
```
yarn add immer
```

### import to reducer.js
```
import producer from 'immer';
```

### modify return in reduce.js
```
import producer from 'immer';

export default function cart(state = [], action) {
  switch(action.type) {
    case 'STATE_NAME':
      return produce(state, draft => {
        // changes here
        // examples
        draft.push(action.item);
      });
    default:
      return state;
  }
}

```

## Redux Saga - Middleware (intercept action)
### Install redux-saga
```
yarn add redux-saga
```

### create saga.js in module folder (PATH_TO_STORE/modules/MODULE_NAME/sagas.js)
```
# sagas.js

import { call, put, all, takeLatest } from 'redux-saga/effects'; //for async methods and returns promises and put call redux action
import api from 'PATH/services/api';

import { addToCartSuccess } from './actions';


function* addItem({id}) {
  const response = yield call(api.get, `/API_REQUEST/${id}`);

  yield put(addItemSuccess(response.data));

}

export default all([
  takeLatest('@Item/ADD_REQUEST', addItem),
]);

```

### rename type action and a new one to control request and sucess request
```

...

export function addItemRequest(id) {
  return {
    type: '@Item/ADD_REQUEST',
    id
  };
}

export function addItemSuccess(product) {
  return {
    type: '@Item/ADD_REQUEST_SUCCESS',
    product
  };
}

...

```

### replace PATH_TO_MODULES/module/reducer.js
```
export default function item(state = [], action) {
  switch(action.type) {

    ...

    //case '@Item/ADD':
    //  return ...

    case 'Item/ADD_SUCCESS':
      return ...
    ...

  }
}
```



### replace addItem to addItemRequest in page component PATH/pages/PAGE_COMPOENT/COMPONENT/index.js
```


imports ...

class Item extends Component {
  state: ...
  async componentDidMount() {
    ...
  }

  handleAddItem = id => {
      // const { addItem } = this.props;
      const { addItemRequest } = this.props;

      //addItem(product);
      addToItemReqeust(id);
  }


  ...
}

```

### create a rootSaga.js in PATH_TO_STORE/modules/rootSaga.js
```
import { all } from 'redux-saga/effects;

import item from './itens/sagas';

export default function* rootSaga(){
  return yield all([
    item,
  ])
}
```

### add rootSaga in store/index.js
```

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';


import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';


const sagaMiddleware = createSagaMiddleware();

const enhancer = process.env.NODE_ENV === 'development'
  ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))  : applyMiddleware(sagaMiddleware);
  const store = createStore(rootReducer, enhancer);



sagaMiddleware.run(rootSaga);

export default store;


```


## Adding redux-saga flow to reactotron

### Instalation
```
yarn add reactotron-redux-saga
```

### import in src/config/ReactotronConfig.js
```
import Reactoltron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga'; //added


if( process.env.NODE_ENV === 'development' ) {
  const tron = Reactoltron.configure()
  .use(reactotronRedux())
  .use(reactotronSaga()) //added
  .connect();

  tron.clear();
  console.tron = tron;
}

```

### import in src/store/index.js
```
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';


import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';


//added
const sagaMonitor = process.env.NODE_ENV === 'development'
  ? console.tron.createSagaMonitor()
  : null ;


//added parameter
const sagaMiddleware = createSagaMiddleware({
  sagaMonitor
});

const enhancer = process.env.NODE_ENV === 'development'
  ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))  : applyMiddleware(sagaMiddleware);
  const store = createStore(rootReducer, enhancer);



sagaMiddleware.run(rootSaga);

export default store;


```

## react-toastify Error/Success/warning/info messages

### Installing react-toastify
```
yarn add react-toastify
```

### import in App.js
```
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify'; //added
import './config/ReactotronConfig';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';

import store from './store';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <ToastContainer autoClose={3000}/> //added
      <GlobalStyle />
      <Header />
      <Routes />
    </BrowserRouter>
    </Provider>
  );
}

export default App;

```


## History - Control rotes (history dom que é usado para as rotas no react)
Controla a parte da history api que sao as rotas que o react dom utiliza

### Installation
```
yarn add history
```

### create configuration file src/services/history.js

```
# history.js
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export default history;

```

### then configure in App.js
Com essa alteração o ReactRouterDom fica ouvindo as informações que vao acontecer no service history
e toda vez que acontece uma alteração no HistoryApi através do servico que criamos
o ReactRouterRom ouve essas alterações faz a navegação de telas automaticamente
```
# App.js
import { Router } from 'react-router-dom'; //changed here
...


function App() {
  return (
    ...
    <Router history={history}> //changed here
    ...
    </Router>
    ...
  )
}
```


### open module/saga.js
```
# saga.js

# import history
import history from '../../../services/history';

# redirect using
history.push('/some-route-here');

```

## React Hooks

### React Hooks Sintax
#### Installation
```
yarn add eslint-plugin-react-hooks -D
```

#### Configuration
```
# .eslintrc.js

...

  plugins: [

    ...

    'react-hooks'
  ],

...

rules : {

  ...

  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn'
}

```

