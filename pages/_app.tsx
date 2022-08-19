import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import { NavbarContextProvider } from '../src/contexts/NavbarContext'
import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <NavbarContextProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </NavbarContextProvider>
    </ThemeProvider>
  )
}

export default MyApp
