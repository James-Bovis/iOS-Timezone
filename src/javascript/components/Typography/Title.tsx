import * as React from 'react'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'

// Atoms
import { darkModeOn } from '../../atoms'

// Utils
import { Black, White } from '../../utils/Colours'

type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type Props = {
  level?: Heading
  fontSize?: number
}

const TitleWrapper = styled.h1<{
  darkMode: boolean
  fontSize: number | undefined
}>`
  margin: 0;
  font-size: ${(props) => props.fontSize}px;
  transition: color 0.25s ease;
  color: ${(props) => (props.darkMode ? White : Black)};
`

const Title: React.FC<Props> = ({
  children,
  level = 'h1',
  fontSize = 50
}): React.ReactElement => {
  const darkMode = useRecoilValue(darkModeOn)

  switch (level) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6': {
      return (
        <TitleWrapper as={level} darkMode={darkMode} fontSize={fontSize}>
          {children}
        </TitleWrapper>
      )
    }
    default: {
      throw new Error(`Cannot create Title for level of: ${level}`)
    }
  }
}

export { Title }
