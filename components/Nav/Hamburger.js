import React from 'react'
import sc from 'styled-components/native'

import { FontAwesome } from '@expo/vector-icons';

const StyledIcon = sc.View`
  align-self: stretch;
  justify-content: center;
  align-items: center;
  width: 32px;
`

export default function Hamburger () {
  return (
    <StyledIcon>
      <FontAwesome name="navicon" size={16} color="red" />  
    </StyledIcon>
  )
}