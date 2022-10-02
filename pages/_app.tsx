import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default MyApp
