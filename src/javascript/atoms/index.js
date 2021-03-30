import { atom, selector } from 'recoil'
import { utcToZonedTime } from 'date-fns-tz'
import { getHours } from 'date-fns'

const localStorageEffect = (key) => ({ setSelf, onSet }) => {
  const savedValue = localStorage.getItem(key)

  if (savedValue != null) {
    setSelf(JSON.parse(savedValue));
  }

  onSet(newValue => {
    localStorage.setItem(key, JSON.stringify(newValue));
  })
}

export const darkModeOn = atom({
  key: 'darkModeState',
  default:
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  effects_UNSTABLE: [
    localStorageEffect('darkMode')
  ]
})

export const currentTime = atom({
  key: 'timeState',
  default: new Date()
})

export const selectedTimeZone = atom({
  key: 'selectedTimeZoneState',
  default: {
    value: Intl.DateTimeFormat().resolvedOptions().timeZone,
    label: 'London'
  }
})

// Selectors

export const isCurrentTimeZoneNight = selector({
  key: 'isCurrentTomeZoneNightState',
  get: ({ get }) => {
    const timeZone = get(selectedTimeZone)
    const time = get(currentTime)
    const localTime = utcToZonedTime(time, timeZone.value)

    return (
      getHours(localTime) >= 18 ||
      getHours(localTime) <= 6
    )
  },
});

export const currentTimeToSelectedTimeZone = selector({
  key: 'currentTimeToSelectedTimeZone',
  get: ({ get}) => {
    const localTime = utcToZonedTime(get(currentTime), get(selectedTimeZone).value)

    return localTime
  }
})
