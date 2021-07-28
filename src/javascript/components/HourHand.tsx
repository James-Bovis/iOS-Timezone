import * as React from 'react'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'
import { utcToZonedTime } from 'date-fns-tz'
import {
  getHours,
  getMinutes
} from 'date-fns/fp'

// Atoms
import { currentTime, selectedTimeZone, isCurrentTimeZoneNight } from '../atoms'

// Utils
import { Black, White } from '../utils/Colours'

const HoursWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const Hand = styled.div<{
  darkMode: boolean
}>`
  height: 30%;
  background: ${props => props.darkMode
    ? White
    : Black
  };
  width: 1.5%;
  transform-origin: bottom;
  position: absolute;
  left: 49.3%;
  top: 20%;
  border-radius: 10px;
  transition: background .25s ease;

  &:after {
    width: 200%;
    left: -50%;
    height: 75%;
    content: '';
    position: absolute;
    border-radius: 10px;
    top: 0;
    background: ${props => props.darkMode
      ? White
      : Black
    };
    transition: background .25s ease;
  }
`

const HourHand = (): React.ReactElement => {
  const localTime = utcToZonedTime(useRecoilValue(currentTime), useRecoilValue(selectedTimeZone).value)
  const hours = getHours(localTime)
  const minutes = getMinutes(localTime)
  const hoursToDegrees = (hours + (minutes / 60)) / 12 * 360

  return (
    <HoursWrapper
      style={{
        transform: `rotateZ(${hoursToDegrees}deg)`
      }}
    >
      <Hand
        id='Hour-Hand'
        darkMode={useRecoilValue(isCurrentTimeZoneNight)}
      />
    </HoursWrapper>
  )
}

export default HourHand

