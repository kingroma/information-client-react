import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');
ReactDOM.render(<App headerTitle="Welcome !"
                     contentTitle="Stranger !"
                     />, rootElement);