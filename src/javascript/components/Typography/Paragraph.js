// @flow

import * as React from 'react'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'

// Atoms
import { darkModeOn } from '../../atoms'

// Utils
import { Black, White, Orange, Grey } from '../../utils/Colours'

type Props = {|
  children: React.Node
|}

const ParagraphWrapper = styled.p`
  font-size: 20px;
  transition: color .25s ease;
  color:${props =>
    props.darkMode
      ? White
      : Black
  };
  line-height: 1.5;

  a {
    transition: color .25s ease;
    color: ${props =>
    props.darkMode
      ? Orange
      : Grey.dark
    };
  }
`

const Paragraph = ({ children }: Props): React.Node => {
  const darkMode = useRecoilValue(darkModeOn)

  return (
    <ParagraphWrapper darkMode={darkMode}>
      { children }
    </ParagraphWrapper>
  )

}

export {
  Paragraph
}

