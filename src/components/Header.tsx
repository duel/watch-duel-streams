import React from "react"
import Logo from './Logo'

const Header = () => (
  <header
    style={{
      background: `#2b2b2b`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
       <Logo showWordMark={true} />
    </div>
  </header>
)

export default Header
