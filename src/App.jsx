import { ThemeProvider } from 'styled-components'
import Layout from './components/Layout/Layout'
import { AppRouter } from './router/AppRouter'
import GlobalStyles from './ui/components/styles/Global'

const theme = {
  colors: {
    body: '#000'
  }
}

function App () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <AppRouter />
      </Layout>
    </ThemeProvider>
  )
}

export default App
