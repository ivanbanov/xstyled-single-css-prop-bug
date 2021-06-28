import React from 'react'
import ReactDOM from 'react-dom'
import styled, { ThemeProvider } from '@xstyled/emotion'

const Foo = styled.div({
  backgroundColor: 'error',
})

const Bar = styled.div({
  backgroundColor: 'info',
  color: 'white',
})

const App = () => (
  <ThemeProvider theme={{ colors: {
    error: 'red',
    success: 'green',
    info: 'blue',
  }}}>
    <Foo>Foo</Foo>
    <Bar>Bar</Bar>
  </ThemeProvider>
)

const rootEl = document.querySelector('#root')

ReactDOM.render(<App />, rootEl)
