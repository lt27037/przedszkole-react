import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import AppRouter from './app/AppRouter';

const App = (
    <Router>
        <AppRouter />
    </Router>
);

ReactDOM.render(App, document.getElementById('root'));
