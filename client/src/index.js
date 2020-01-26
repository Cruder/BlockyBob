import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Root from "./components/Root";
import {DrizzleProvider, DrizzleContext} from "@drizzle/react-plugin";
import drizzle, {options} from "./store";
import {LoadingContainer} from "@drizzle/react-components";
import Provider from "./components/Provider";

require('dotenv').config();


// let drizzle know what contracts we want and how to access our test blockchain

// const drizzle = new Drizzle(options);
// console.log("coco",drizzle);

// ReactDOM.render(<App drizzle={drizzle} />, document.getElementById('root'));
ReactDOM.render(
    <Provider options={options}>
        <Root/>
    </Provider>
    , document.getElementById('root'));
