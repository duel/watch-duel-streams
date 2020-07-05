import React from "react"
import styled from 'styled-components'
import ILayout from './ILayout'
import '../styles/layout.css'

const WatchLayout = ({ children }: ILayout) => {

  return (
    <StyledLayout>
      {children}
    </StyledLayout>
  )
}

const StyledLayout = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #1f1f1f;
    display: flex;
    justify-content: center;
    align-items: center;
  `

export default WatchLayout
