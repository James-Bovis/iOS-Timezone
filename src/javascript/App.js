// @flow

import * as React from 'react'
import styled from 'styled-components'
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil'
import { format } from 'date-fns'

// Atoms
import { darkModeOn, currentTime, selectedTimeZone, currentTimeToSelectedTimeZone } from './atoms'

// Utils
import { Black, White } from './utils/Colours'

// Components
import { Title } from './components/Typography/Title'
import { Paragraph } from './components/Typography/Paragraph'
import { Clock, ClockFaceWrapper } from './components/Clock'
import { SelectTimeZone, SelectTimeZoneWrapper } from './components/SelectTimeZone'
import DarkModeToggle from './components/DarkModeToggle'

const Wrapper = styled.section`
  background:${props =>
    props.darkMode
      ? Black
      : White
  };
  transition: background .25s ease;
  min-height: 100vh;
  text-align: center;
`

const Container = styled.section`
  max-width: 500px;
  margin: auto;
  padding: 50px 15px;

  ${ClockFaceWrapper} {
    margin-top: 30px;
  }

  ${SelectTimeZoneWrapper} {
    margin-top: 20px
  }
`

const App = (): React.Node => {
  const [darkMode, setDarkMode ] = useRecoilState(darkModeOn)
  const setCurrentTime = useSetRecoilState(currentTime)
  const selectedTimeZoneValue = useRecoilValue(selectedTimeZone)
  const selectedLocalTime = useRecoilValue(currentTimeToSelectedTimeZone)

  // Update the App's global time every .5s
  React.useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date())
    }, 50)
  }, [setCurrentTime])

  // When the App renders, watch for any changes in the users color-scheme
  // preference and set it accordingly
  React.useEffect((): void => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      setDarkMode(!darkMode)
    })
  }, [darkMode, setDarkMode])

  // Ensure that when in Dark mode, the background colour matches the current
  // theme. Especially noticeable when rubber-banding occurs on scroll
  React.useEffect((): void => {
    const htmlElement = document.getElementById('html')

    if (htmlElement) {
      htmlElement.style.background = darkMode ? Black : White
    }
  }, [darkMode])

  // Show the selected Timezone's time in the Title
  React.useEffect((): void => {
    document.title = `iOS Timezone - ${format(selectedLocalTime, 'HH:mm')}`
  }, [selectedLocalTime])

  return (
    <Wrapper darkMode={darkMode}>
      <DarkModeToggle />
      <Container>
        <Title>
          { `iOS Timezone` }
        </Title>
        <Paragraph>
          { `A tool to preview a city's local time, recreated as an iOS-style analogue clock. All built using ` }
          <a
            href='https://styled-components.com/'
            target='_blank'
            rel='noreferrer'
          >
            { `styled-components`}
          </a>
          { `, ` }
          <a
            href='https://reactjs.org/'
            target='_blank'
            rel='noreferrer'
          >
            { `React`}
          </a>
          { ` and ` }
          <a
            href='https://date-fns.org/'
            target='_blank'
            rel='noreferrer'
          >
            { `date-fns`}
          </a>
          { `.` }
        </Paragraph>
        <Clock />
        <SelectTimeZone />
        <Paragraph>
          { `The current time in ${selectedTimeZoneValue.label} is ${selectedLocalTime.toLocaleTimeString()}` }
        </Paragraph>
        <Paragraph>
          { `You can preview the source code on ` }
          <a
            href='https://github.com/James-Bovis/iOS-Timezone'
            target='_blank'
            rel='noreferrer'
          >
            { `GitHub` }
          </a>
          { `.` }
        </Paragraph>
      </Container>
    </Wrapper>
  )
}

export default App;
