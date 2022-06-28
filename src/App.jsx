import { ThemeProvider } from 'styled-components'
import { AppRouter } from './router/AppRouter'
import GlobalStyles from './ui/components/styles/Global'

const theme = {
  colors: {
    body: '#3E3E3E',
  }
}


function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <AppRouter />
    </>
    </ThemeProvider>
  )
}

export default App
