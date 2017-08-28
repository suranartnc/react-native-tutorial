import React from 'react'
import sc from 'styled-components/native'

import { FontAwesome } from '@expo/vector-icons';

const StyledIcon = sc.View`
  align-self: stretch;
  justify-content: center;
  align-items: center;
  width: 32px;
`

export default function Search () {
  return (
    <StyledIcon>
      <FontAwesome name="search" size={16} color="red" />  
    </StyledIcon>
  )
}