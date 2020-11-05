// @flow

import * as React from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'

// Colours
import { Green, White, Black } from '../utils/Colours'

// Atoms
import { darkModeOn } from '../atoms'

const DarkMode = styled.button`
  width: 60px;
  height: 30px;
  background: ${props => props.darkMode ? Green : '#E5E5E5'};
  border-radius: 30px;
  position: relative;
  transition: background .25s ease;
  border: 0;
  display: flex;
  align-items: center;
  font-size: 16px;

  :before {
    content: "Dark mode ${props => props.darkMode ? 'on' : 'off'}";
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

    position: absolute;
    left: 0;
    transform: translateX(-100%);
    white-space: nowrap;
    opacity: 0;
    color: ${props => props.darkMode ? White : Black};
    transition: opacity .25s ease, color .25s ease, transform .25s ease;
    pointer-events: none;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :after {
    content: '';
    width: 20px;
    height: 20px;
    position: absolute;
    top: 5px;
    right: 5px;
    transform: translateX(${props => props.darkMode ? '0' : '-30px'});
    background: ${White};
    transition: transform .25s ease;
    border-radius: 30px;
  }

  :focus {
    outline: 0
  }

  :hover {
    cursor: pointer;

    :before {
      opacity: 1;
      transform: translateX(calc(-100% -  10px));
    }
  }
`

const DarkModeWrapper = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
`

const DarkModeToggle = (): React.Element<typeof DarkMode> => {
  const [darkMode, setDarkMode ] = useRecoilState(darkModeOn)

  return (
    <DarkModeWrapper>
      <DarkMode
        onClick={(): void => setDarkMode(!darkMode)}
        darkMode={darkMode}
      />
    </DarkModeWrapper>
  )
}

export default DarkModeToggle

