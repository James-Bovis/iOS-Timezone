// @flow

import * as React from 'react'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'

// Atoms
import { darkModeOn } from '../../atoms'

// Utils
import { Black, White } from '../../utils/Colours'

type Props = {|
  children: React.Node,
  level?: number
|}

const TitleWrapper = styled.h1`
  margin: 0;
  font-size: 50px;
  transition: color .25s ease;
  color:${props =>
    props.darkMode
      ? White
      : Black
  };
`

const Title = ({
  children,
  level =  1
}: Props): React.Element<typeof TitleWrapper> => {
  const darkMode = useRecoilValue(darkModeOn)
  const tag = `h${level}`

  return (
    <TitleWrapper as={tag} darkMode={darkMode}>
      { children }
    </TitleWrapper>
  )
}

export {
  Title
}
