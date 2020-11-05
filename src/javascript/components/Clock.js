// @flow

import * as React from 'react'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'

// Atoms
import { isCurrentTimeZoneNight } from '../atoms'

// Utils
import { Black, White } from '../utils/Colours'

// Components
import SecondHand from './SecondHand'
import MinuteHand from './MinuteHand'
import HourHand from './HourHand'

// Images
import clockFaceDay from '../../images/ios_clock.svg'
import clockFaceNight from '../../images/ios_clock--white.svg'

const ClockFace = styled.div`
  background-color: ${props => props.darkMode
    ? Black
    : White
  };
  background-image: url(${props => props.darkMode
    ? clockFaceNight
    : clockFaceDay
    }
  );
  background-repeat: no-repeat;
  background-position: center;
  background-size: 88%;
  border-radius: 50%;
  height: 230px;
  margin: auto;
  width: 230px;
  position: relative;
  transition: background-color .25s ease;

  /*
   * Create the small black circle which sits in the center of the clock face
   * itself. This circle is separate from the hands themselves.
   */
  &:before{
    background: ${props => props.darkMode
      ? White
      : Black
    };
    border-radius: 50%;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    height: 8%;
    width: 8%;
    transform: translate(-50%, -50%);
    z-index: 0
  };
`

const ClockFaceWrapper = styled.div`
  background: black;
  border-radius: 17.544%;
  display: inline-block;
  padding: 10px;
  margin: auto;
`

const Clock = (): React.Node => {
  const isNight = useRecoilValue(isCurrentTimeZoneNight)

  return (
    <ClockFaceWrapper>
      <ClockFace darkMode={isNight}>
        <MinuteHand />
        <HourHand />
        <SecondHand />
      </ClockFace>
    </ClockFaceWrapper>
  )
}

export {
  Clock,
  ClockFace,
  ClockFaceWrapper
}
