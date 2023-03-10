import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import express from 'express'

// // mongodb
// require("./backend/config/db");

// const app = require('express')();
// const port = 3000;
// app.use(express.static('public')) 
// const UserRouter = require('./backend/api/User')

// // for accepting post form data 
// const bodyParser = require('express').json
// app.use(bodyParser());

// app.use('/user', UserRouter)

// app.listen(port, () => {
//     console.log(`server running on port ${port}`)
// })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);