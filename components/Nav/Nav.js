import React from 'react'
import { PixelRatio } from 'react-native'
import sc from 'styled-components/native'

import Hamburger from './Hamburger'
import Search from './Search'

const StyledNav = sc.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;  
  background: white;
  height: 32px;
  border-color: gray;
  border-width: 0;
  border-top-width: 1px;
  border-bottom-width: 1px;
`

const StyledText = sc.Text`
  color: red;
`

export default function Nav () {
  return (
    <StyledNav>
      <Hamburger />    
      <StyledText>Sanook!</StyledText>
      <Search />    
    </StyledNav>
  )
}