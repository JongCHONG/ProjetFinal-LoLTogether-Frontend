import React from 'react'

import logo from '../images/logo.png'

import styled from 'styled-components'

const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  img{
    height: 130px;
  }
`

const Logo = () => {
  return (
    <LogoDiv>
      <img src={`${logo}`} alt='LoL Together' />
    </LogoDiv>
  )
}

export default Logo