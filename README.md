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
- persist-redux
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

### Installing react-toastify (OPTIONAL)
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

### add styles
```
import 'react-toastify/dist/ReactToastify.css';
```

### usage
```
import { toast } from 'react-toastify';

toast.error('error alert');
toast.success('success alert');
toast.warn('warning alert');
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

# Private Routes
## Create files
### 1. create src/routes/Router.js
```
# Route.js

import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function RouterWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {

  const signed = false;
  /**
   * Validations
   */
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if(signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }
  //End - Validation

  return(
    <Route
      { ...rest }
      component={Component}
    />
  );
}

RouterWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

RouterWrapper.defaultProps = {
  isPrivate: false,
}

```

# Layouts
## Create pages/_layouts/layoutName/index.js
## Create pages/_layouts/layoutName2/index.js

```
# auth/index.js

import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function AuthLayout({ children }) {
  return (
    return <Wrapper>{children}</Wrapper>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

```
## Create pages/_layouts/styles.js
```
# styles.js
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #9159c1, #ab59c1);
`;
```


## import layouts in Route.js
```
# Route.js

...

import layoutName from '../pages/_layouts/layoutName'; //added

...


...

const Layout = signed ? layoutName : layoutName2; //added

//Change return with Layout
return(
  <Route
    { ...rest }
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);


```

## Babel configuration '˜' to go to root path ( or other specific page)
### Instalation
```
yarn add customize-cra react-app-rewired babel-plugin-root-import -D
```
### Create file config-overrides.js (in project root directory)
```
# config-overrides.js

const { addBabelPlugin, override } = require('customize-cra');
module.exports = override(
  addBabelPlugin([
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src',
      }
  ])
);
```

## Adjust package.json scripts
```
# from
react-scripts
# to
react-app-rewired

  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  },

```

## configure eslint
installation
```
yarn add eslint-import-resolver-babel-plugin-root-import -D
```

### adding settings to .eslintrc.js
```
# .eslintrc.js

  ...
  rules: {
    ...
  },
  settings: { //added
    "import/resolver": {
      "babel-plugin-root-import": {
        rootPathSuffix: 'src'
      }
    }
  }
```

## configure goto path when control or cmd is presed
###  create jsconfig.json (project root path)
```
# jsconfig,json

{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      " ~/*": ["*"]
    }
  }
}

```



## Field valitation

### instalation
```
yarn add yup
```

### Usage
#### import Yup component
```
import * as Yup from 'yup';
```

#### create schema to validate data
```
const schema =  Yup.object().shape({
  email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
  pasword: Yup.string.required('A senha é obrigatória')
});
```



## Persistir dados do usuario com user-persist
This configuration manipule and set local storages of current environment (asyncStorage in case React Native),


### Install redux-persist
```
yarn add redux-persist
```

### create file src/store/persistReducers.js
```
# persistReducers.js

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer({
    key: 'root', //key to organize your reducers, you can put your application name here
    storage, // set current application storage
    whitelist: ['auth', 'user'], //reducers to store
  }, reducers);

  return persistedReducer;
}
```

### configure src/store/index.js
```
import { persistStore } from 'redux-persist'; //added
...

import persistReducers from './persistReducers'; //added

const sagaMonitor = ...

...

const store = createStore(persistReducers(rootReducer), middlewares); //modified
const persistor = persistStore(store); //added


...

export { store, persistor }; //modified
```

### Ajust import 'store' from App.js, Route.js
```
# from:
import store from './store';

to:
import { store } from './store';
```


### configure react-persist integration in App.js
```
App.js

import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'; //added
 ...
import { store, persistor } from './store'; //modify

function App() {
  return (
    <Provider store={store}> //added
      {/*  PersistGate will render after get store informations */}
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <GlobalStyle />
          <Routes />
        </Router>
    </PersistGate> //added
    </Provider>
  );
}

export default App;



```

