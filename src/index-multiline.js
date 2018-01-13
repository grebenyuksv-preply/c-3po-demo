import React from 'react';
import ReactDOM from 'react-dom';
import Multiline from './multiline';


if (typeof document !== 'undefined') {
    const outlet = document.getElementById('content');
    ReactDOM.render(<Multiline />, outlet);
}

export default () => {
    return `<!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>c-3po demo</title>
        </head>
        
        <body>
        <div id="content"></div>
        <script src='./build.js' type='text/javascript'></script>
        </body>
    </html>`
};