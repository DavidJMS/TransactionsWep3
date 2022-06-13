import React, { useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_BE_API
const API_KEY = import.meta.env.VITE_API_KEY

function isMobileDevice() {
  return 'ontouchstart' in window || 'onmsgesturechange' in window;
}

async function connect(onConnected) {
  if (!window.ethereum) {
    alert("Get MetaMask!");
    return;
  }

  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });

  onConnected(accounts[0]);
}

async function checkIfWalletIsConnected(onConnected) {
  if (window.ethereum) {
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    if (accounts.length > 0) {
      const account = accounts[0];
      onConnected(account);
      return;
    }

    if (isMobileDevice()) {
      await connect(onConnected);
    }
  }
}


export default function MetaMaskAuth({ onAddressChanged }) {
  const [userAddress, setUserAddress] = useState("");
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    checkIfWalletIsConnected(setUserAddress);
  }, []);

  useEffect(() => {
    onAddressChanged(userAddress);

    if(!userAddress) return
    fetch(`https://api.bscscan.com/api?module=account&action=txlist&address=${userAddress}&startblock=0&page=1&offset=10&sort=desc&apikey=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      setTransactions(data.result);
    });
  }, [userAddress]);

  const weiToBNB = (wei) => {
    const bnb = wei / 1000000000000000000
    return bnb.toString();
  }

  return userAddress ? (
    <div>
      Connected with <Address userAddress={userAddress} />
      <div>
        {
          transactions.length > 0 && transactions.map(transaction => {
            return (
              <div style={{margin: '10px'}} key={transaction.hash}>
                {/* <div>{transaction.hash}</div> */}
                <div>fecha {new Date(parseInt(transaction.timeStamp)).toUTCString()}</div>
                <div>to {transaction.to}</div>
                <div>value {weiToBNB(transaction.value)} BNB</div>
                {/* <div>{transaction.gasPrice}</div> */}
                {/* <div>{transaction.gas}</div> */}
                {/* <div>{transaction.input}</div> */}
              </div>
            );
          })
        }
      </div>
    </div>
  ) : (
     <Connect setUserAddress={setUserAddress}/>
  );
}


function Connect({ setUserAddress }) {
  if (isMobileDevice()) {
    const dappUrl = "metamask-auth.ilamanov.repl.co"; // TODO enter your dapp URL. For example: https://uniswap.exchange. (don't enter the "https://")
    const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl;
    return (
      <a href={metamaskAppDeepLink}>
         <button>
           Connect to MetaMask
         </button>
      </a>
    );
  }

  
  return (
    <button onClick={() => connect(setUserAddress)}>
      Connect to MetaMask
    </button>
  );
}


function Address({ userAddress }) {
  return (
    <span>{userAddress.substring(0, 5)}…{userAddress.substring(userAddress.length - 4)}</span>
  );
}