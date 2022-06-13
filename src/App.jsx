import { useState } from 'react'
import MetaMaskAuth from './components/MetaMaskAuth'
import './styles/styles.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MetaMaskAuth onAddressChanged={console.log} />
  )
}

export default App
