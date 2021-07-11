import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import {ContextProvider } from './SocketContainer'
ReactDOM.render(<ContextProvider>
<App />
</ContextProvider>,
document.getElementById('root')
);
