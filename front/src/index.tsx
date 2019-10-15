import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore, {history} from './configureStore'

const store = configureStore({})

store.subscribe(() =>
  console.log(store.getState())
)

ReactDOM.render(
  <Provider store={ store }>
    <App history={history}/>
  </Provider>,
  document.getElementById('root')
);