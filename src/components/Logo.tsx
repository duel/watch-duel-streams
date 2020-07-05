import React from 'react'
import styled from 'styled-components'
import logo from '../images/duel-logo.png'

interface LogoModel {
  showWordMark: boolean
}

const Logo = ({ showWordMark = false }: LogoModel) => (
  <StyledLink href="/">
        <img 
          src={logo}
          alt="duel streams logo"
          style={{
            marginRight: 20,
            width: 50,
            height: 50,
          }}
        />
        {showWordMark ? (
          <span style={{ marginRight: 15, color: 'white', fontWeight: 'bold', fontSize: '1.5rem', fontFamily: `'Avenir', sans-serif`, textTransform: 'uppercase', transform: `translateY(3px)` }}>Duel Streams</span>
        ) : null}
  </StyledLink>
)

Logo.defaultProps = {} as Partial<LogoModel>

const StyledLink = styled.a`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  text-decoration: none;
`

export default Logo
