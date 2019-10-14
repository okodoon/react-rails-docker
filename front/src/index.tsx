import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import SignInContainer from './Components/SignInContainer'
// import App from './App';
import Counter from './counter/Container'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <SignInContainer />
    <Counter />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
