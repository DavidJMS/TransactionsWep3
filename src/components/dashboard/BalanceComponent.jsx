import { Box } from '../../ui/components/styles/Box.styled'
import { Heading } from '../../ui/components/styles/Heading.styled'

const BalanceComponent = ({ balance, symbol }) => {
  return (
    <Box
      minH='12rem'
      bg='#3E3E3E'
      color='#fff'
      padding='2rem 1.5rem'
      borderRadius='0.75rem'
      textAlign='left'
      margin='4rem 0 2rem'
    >
      <Heading fontWeight={500} fontSize='1.1em' margin='0 0 1em'>Wallet  Balance</Heading>
      <Heading fontWeight={600} fontSize='1.5em' margin='0'>{symbol} {balance}</Heading>
    </Box>
  )
}

export default BalanceComponent
