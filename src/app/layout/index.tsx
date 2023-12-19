import { background, gap } from '@shared/cssConstants'
import { Header } from '@widgets'
import { Outlet } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

const Main = styled.main`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 ${gap};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const GlobalStyle = createGlobalStyle`

::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}
html {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background-color: ${background};
    height: 100vh;
    /* overflow: hidden; */

  }
`

export const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <GlobalStyle />
    </>
  )
}
