import { Box } from '../../ui/components/styles/Box.styled'
import { Heading } from '../../ui/components/styles/Heading.styled'
import { Skeleton } from '../../ui/components/styles/Skeleton.styled'

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
      {
        symbol &&
          <Heading fontWeight={600} fontSize='1.5em' margin='0'>{symbol} {balance}</Heading>
      }
      {
        !symbol &&
          <Skeleton width='200px' height='30px' />
      }
    </Box>
  )
}

export default BalanceComponent
