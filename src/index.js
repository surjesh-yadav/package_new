import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
} from "@thirdweb-dev/react";
import { ChainId } from "@thirdweb-dev/sdk";
const root = ReactDOM.createRoot(document.getElementById('root'));
const chainId = ChainId.Mumbai;
root.render(
  <div >
    <Router>
    <ThirdwebProvider
      supportedWallets={[metamaskWallet(), coinbaseWallet(), walletConnect()]}
      activeChain="mumbai"
      clientId="c5c449ea568c764befd7f07dac04f539"
    >
     <App />
    </ThirdwebProvider>
    </Router>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
