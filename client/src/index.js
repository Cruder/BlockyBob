import React from 'react';
import ReactDOM from 'react-dom';

// import drizzle functions and contract artifact
import { Drizzle } from "@drizzle/store";
import VoteStore from "./contracts/Vote.json";

import './index.css';
import Root from "./components/Root";

require('dotenv').config();

// let drizzle know what contracts we want and how to access our test blockchain
const options = {
  contracts: [VoteStore],
  web3: {
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:9545",
    },
  },
};

// setup drizzle
const drizzle = new Drizzle(options);

ReactDOM.render(
    <Root store={drizzle} />,
    document.getElementById('root')
);
