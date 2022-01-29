import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { AppContainer } from 'react-hot-loader';

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <App />
        </Provider>
    </AppContainer>,
    document.getElementById('root')
);
registerServiceWorker();
