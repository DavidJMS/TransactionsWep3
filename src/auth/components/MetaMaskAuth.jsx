import React, { useEffect, useState } from "react";
import detectEthereumProvider from '@metamask/detect-provider';
import block_explorer_list from "../../../block_explorer_list";

//import button styled from UI styles 
import { Button } from "../../ui/components/styles/Button.styled";
const BSCSCAN_API_KEY = import.meta.env.VITE_BSCSCAN_API_KEY
const ETHERSCAN_API_KEY = import.meta.env.VITE_ETHERSCAN_API_KEY

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

export default function MetaMaskAuth() {
  const [chainId, setChainId] = useState(null);
  const [userAddress, setUserAddress] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [accountInfo, setAccountInfo] = useState({});

  console.log('transactions', transactions)

  useEffect(() => {
    checkIfWalletIsConnected(setUserAddress);
  }, []);

  useEffect(() => {
    const init = async () => {
      // this returns the provider, or null if it wasn't detected
      const provider = await detectEthereumProvider();

      if (provider) {
        startApp(provider); // Initialize your app
      } else {
        console.log('Please install MetaMask!');
      }
      const chainId = await ethereum.request({ method: 'eth_chainId' });
      handleChainChanged(chainId);

      ethereum.on('chainChanged', handleChainChanged);
      ethereum.on('accountsChanged', handleAccountsChanged);
    }

    init()
  }, [])

  function startApp(provider) {
    // If the provider returned by detectEthereumProvider is not the same as
    // window.ethereum, something is overwriting it, perhaps another wallet.
    if (provider !== window.ethereum) {
      console.error('Do you have multiple wallets installed?');
    }
    // Access the decentralized web!
  }

  function handleChainChanged(_chainId) {
    if (chainId) {
      // We recommend reloading the page, unless you must do otherwise
      window.location.reload();
    } else {
      console.log('Chain changed to ' + _chainId + ' id: ' + parseInt(_chainId, 16));
      setChainId(parseInt(_chainId, 16));
    }
  }

  // For now, 'eth_accounts' will continue to always return an array
  function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
      // MetaMask is locked or the user has not connected any accounts
      console.log('Please connect to MetaMask.');
    } else if (accounts[0] !== userAddress) {
      setUserAddress(accounts[0]);
      // Do any other work!
    }
  }

  useEffect(() => {
    if (!userAddress || !chainId) return
    const chainInfo = block_explorer_list.filter(e => e.id === chainId)[0]
    if (!chainInfo) throw new Error('Chain not found')
    let apiKey = ''
    switch (chainInfo.symbol) {
      case 'ETH':
        apiKey = ETHERSCAN_API_KEY
        break
      case 'BNB':
        apiKey = BSCSCAN_API_KEY
        break
      default:
        throw new Error('Chain not found')
    }

    fetch(`${chainInfo.explorer}api?module=account&action=balance&address=${userAddress}&apikey=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        setAccountInfo({
          balance: data.result,
          symbol: chainInfo.symbol
        })
      })
      .catch(err => console.log(err))

    fetch(`${chainInfo.explorer}api?module=account&action=txlist&address=${userAddress}&startblock=0&page=1&offset=50&sort=desc&apikey=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        const noContractsTransactions = data.result.filter(tx => (tx.input === '0x' && tx.value !== '0'))
        setTransactions(noContractsTransactions);
      })
      .catch(error => console.log(error))
  }, [userAddress, chainId]);

  const transformWei = (wei) => {
    const bnb = wei / 1000000000000000000
    return bnb.toString().substring(0, 8);
  }

  const getDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  }

  return userAddress ? (
    <div>
      Connected with <Address userAddress={userAddress} />
      <h1>{transformWei(accountInfo.balance || 0)}{accountInfo.symbol}</h1>
      <div>
        {
          transactions.length === 0 && <div>No transactions</div>
        }
        {
          transactions.length > 0 && transactions.map(transaction => {
            return (
              <div style={{
                margin: '10px',
                background: transaction.from === userAddress ? '#ff7676' : '#a3f3d2'
              }} key={transaction.hash}>
                {/* <div>{transaction.hash}</div> */}
                <div>fecha {getDate(transaction.timeStamp)}</div>
                <div>from {transaction.from}</div>
                <div>to {transaction.to}</div>
                <div>value {transformWei(transaction.value)} BNB</div>
                <div>hash <a target='_blank' href={`https://bscscan.com/tx/${transaction.hash}`}>{transaction.hash}</a></div>
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
    <Connect setUserAddress={setUserAddress} />
  );
}


function Connect({ setUserAddress }) {
  if (isMobileDevice()) {
    const dappUrl = ""; // TODO enter your dapp URL. For example: https://uniswap.exchange. (don't enter the "https://")
    const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl;
    return (
      <a href={metamaskAppDeepLink}>
        <Button>
          Connect to MetaMask
        </Button>
      </a>
    );
  }


  return (
    <Button onClick={() => connect(setUserAddress)}>
      Connect to MetaMask
    </Button>
  );
}


function Address({ userAddress }) {
  return (
    <span>{userAddress.substring(0, 5)}…{userAddress.substring(userAddress.length - 4)}</span>
  );
}