import React from 'react';
// import ReactDOM from 'react-dom'; 
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';



// FUNCTIONAL BASE
// ReactDOM.render(<App />, document.getElementById("root"));

// CLASS BASE
// ReactDOM.render(<App title="Heyy react dev tool"/>, document.getElementById("root"));

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render (
    <BrowserRouter>
        <App tab="home" />
    </BrowserRouter>
);
