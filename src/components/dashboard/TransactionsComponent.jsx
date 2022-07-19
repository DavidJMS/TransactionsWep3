import { Box } from '../../ui/components/styles/Box.styled'
import { Text } from '../../ui/components/styles/Text.styled'
import { Transaction } from '../../ui/components/styles/Transaction.styled'
import { Skeleton } from '../../ui/components/styles/Skeleton.styled'

const TransactionsComponent = ({ transactions, symbol }) => {
  console.log('transactions', transactions)

  const getDate = (timestamp) => {
    const date = new Date(timestamp * 1000)
    return date.toLocaleString()
  }

  const transformWei = (wei) => {
    const bnb = wei / 1000000000000000000
    return parseFloat(bnb).toFixed(8).toString().substring(0, 8)
  }

  return (
    <>
      <Box
        width='100%'
        display='flex'
        justifyContent='space-between'
        color='#fff'
        margin='0 0 20px 0'
      >
        <Text fontSize='1.5rem' fontWeight='600'>Recent Transactions</Text>
        {/* <button>View more</button> */}
      </Box>

      <Box>
        {
          transactions.length > 0 && transactions.map(transaction => {
            return (
              <Transaction
                key={transaction.hash}
              >
                <div className='icon' />
                <div className='content'>
                  <div>
                    <p className='title'>Withdraw</p>
                    <p>To Lock savings</p>
                  </div>
                  <div>
                    <p className='amount'>{symbol} {transformWei(transaction.value)}</p>
                    <p>{getDate(transaction.timeStamp)}</p>
                  </div>
                </div>
              </Transaction>
            )
          })
        }
        {
          transactions.length === 0 && [...Array(5)].map((index) => (
            <Transaction key={index}>
              <div className='icon' />
              <div className='content'>
                <div>
                  <Skeleton width='120px' height='30px' />
                  <Skeleton width='100px' height='15px' />
                </div>
                <div>
                  <Skeleton width='150px' height='30px' />
                  <Skeleton width='130px' height='15px' />
                </div>
              </div>
            </Transaction>
          ))
        }
      </Box>
    </>
  )
}

export default TransactionsComponent
