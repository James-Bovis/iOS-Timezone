import * as React from 'react'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'

// Atoms
import { darkModeOn } from '../../atoms'

// Utils
import { Black, White, Orange, Grey } from '../../utils/Colours'

const ParagraphWrapper = styled.p<{
  darkMode: boolean
}>`
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

const Paragraph: React.FC = ({ children }): React.ReactElement => {
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

