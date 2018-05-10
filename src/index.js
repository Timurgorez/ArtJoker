import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import Header from './header';



ReactDOM.render(
    <MuiThemeProvider>
        <Header />
    </MuiThemeProvider>,
    document.getElementById('root')
);











