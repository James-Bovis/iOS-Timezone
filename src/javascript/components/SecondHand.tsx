import * as React from 'react'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'
import {
  getSeconds,
  getMilliseconds
} from 'date-fns/fp'

// Atoms
import { currentTime } from '../atoms'

// Utils
import { Orange, White } from '../utils/Colours'

const Hand = styled.div`
  background: ${Orange};
  height: 55%;
  left: 49.25%;
  position: absolute;
  top: 4%;
  transform-origin: 40% 70%;
  width: 1.5%;
`

const SecondsWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  &:before{
    background: ${Orange};
    border-radius: 50%;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    height: 5%;
    width: 5%;
    transform: translate(-50%, -50%);
  };

  &:after{
    background: ${White};
    border-radius: 50%;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    height: 2%;
    width: 2%;
    transform: translate(-50%, -50%);
    z-index: 10
  };
`

const SecondHand = (): React.ReactElement => {
  const seconds = getSeconds(useRecoilValue(currentTime))
  const milliseconds = getMilliseconds(useRecoilValue(currentTime))

  const secondsToDegrees = ((seconds + milliseconds / 1000) / 60 * 360).toFixed(1)

  return (
    <SecondsWrapper
      style={{
        transform: `rotateZ(${secondsToDegrees}deg)`
      }}
    >
      <Hand id='Second-Hand' />
    </SecondsWrapper>
  )
}

export default SecondHand

