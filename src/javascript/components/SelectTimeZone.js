// @flow

import * as React from 'react'
import Select from 'react-select'
import styled from 'styled-components'
import { useSetRecoilState, useRecoilValue } from 'recoil'

// Atoms
import { selectedTimeZone } from '../atoms'

// Data
import { allTimeZones, groupedTimeZones } from '../data'

// Utils
import { White, Grey } from '../utils/Colours'

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: Grey.light,
    boxShadow: 'none',
    padding: '10px',
    fontSize: '18px',
    outline: state.isFocused ? 0 : 0,
    border: state.isFocused ? 0 : 0,

    ':hover': {
      outline: 0,
      border: 0,
    }
  }),
  singleValue: (provided) => ({
    ...provided,
    color: White
  }),
  input: (provided) => ({
    ...provided,
    color: White
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  groupHeading: (provided) => ({
    ...provided,
    background: Grey.dark,
    padding: '20px',
    color: White,
    textTransform: 'capitalize',
    fontSize: '18px',
    borderBottom: `1px solid ${Grey.light}`
  }),
  group: (provided) => ({
    ...provided,
    background: Grey.medium,
    paddingTop: 0,
    paddingBottom: 0,
    textAlign: 'left'
  }),
  option: (provided, state) => ({
    ...provided,
    color: White,
    borderBottom: `1px solid ${Grey.light}`,
    padding: '15px',
    fontSize: '18px',
    background: state.isSelected ? Grey.light : Grey.medium,
    ':hover': {
      background: Grey.light,
      cursor: 'pointer'
    }
  }),
  noOptionsMessage: (provided) => ({
    ...provided,
    background: Grey.medium,
    color: White
  }),
  menu: (provided) => ({
    ...provided,
    background: 'none',
  }),
  menuList: (provided) => ({
    ...provided,
    paddingTop: 0,
    borderRadius: '4px',
  })
}

const SelectTimeZoneWrapper = styled.div`
  margin-top: 0
`

const SelectTimeZone = (): React.Node => {
  const currentTimezone = useRecoilValue(selectedTimeZone)
  const setSelectedTimezone = useSetRecoilState(selectedTimeZone)

  const defaultValue =
    allTimeZones.find((timezone) => timezone.value === currentTimezone.value)

  return (
    <SelectTimeZoneWrapper>
      <Select
        options={groupedTimeZones}
        onChange={selectedOption => setSelectedTimezone(selectedOption)}
        defaultValue={defaultValue}
        styles={customStyles}
        formatGroupLabel={
          (data) => (
            <p style={{ margin: 0}}>
              { data.label }
            </p>
          )
        }
      />
    </SelectTimeZoneWrapper>
  )
}

export {
  SelectTimeZone,
  SelectTimeZoneWrapper
}

