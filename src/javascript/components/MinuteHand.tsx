import * as React from 'react'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'
import { getSeconds, getMinutes } from 'date-fns/fp'

// Atoms
import { currentTime, isCurrentTimeZoneNight } from '../atoms'

// Utils
import { Black, White } from '../utils/Colours'

const MinutesWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const Hand = styled.div<{
  darkMode: boolean
}>`
  height: 40%;
  background: ${(props) => (props.darkMode ? White : Black)};
  width: 1.5%;
  transform-origin: bottom;
  position: absolute;
  left: 49.25%;
  top: 10%;
  border-radius: 10px;
  transition: background 0.25s ease;

  &:after {
    width: 200%;
    left: -50%;
    height: 80%;
    content: '';
    position: absolute;
    border-radius: 10px;
    top: 0;
    background: ${(props) => (props.darkMode ? White : Black)};
    transition: background 0.25s ease;
  }
`

const MinuteHand = (): React.ReactElement => {
  const time = useRecoilValue(currentTime)
  const seconds = getSeconds(time)
  const minutes = getMinutes(time)

  const minuitesToDegrees = ((minutes + seconds / 60) / 60) * 360

  return (
    <MinutesWrapper
      style={{
        transform: `rotate(${minuitesToDegrees}deg)`
      }}
    >
      <Hand
        id='Minute-Hand'
        darkMode={useRecoilValue(isCurrentTimeZoneNight)}
      />
    </MinutesWrapper>
  )
}

export default MinuteHand
