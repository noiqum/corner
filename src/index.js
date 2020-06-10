import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {store,persistor} from './store/store';
import {PersistGate} from 'redux-persist/integration/react';
import ReduxToastr from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <ReduxToastr
       position="top-center"
       transitionIn="fadeIn"
       transitionOut="fadeOut"
       className='modified'/>
      <PersistGate persistor={persistor}>
        
          <App />
        
      </PersistGate>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
