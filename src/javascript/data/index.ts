// Time Zones
import africaTimeZones from './africaTimeZones'
import americaTimeZones from './americaTimeZones'
import antarticaTimeZones from './antarticaTimeZones'
import pacificTimeZones from './pacificTimeZones'
import asiaTimeZones from './asiaTimeZones'
import atlanticTimeZones from './atlanticTimeZones'
import australiaTimeZones from './australiaTimeZones'
import europeTimeZones from './europeTimeZones'
import indianTimeZones from './indianTimeZones'

type TimeZone = {
  value: string,
  label: string
}

type GroupedTimeZones = {
  label: string,
  options: Array<TimeZone>
}

const groupedTimeZones: Array<GroupedTimeZones> = [
  {
    label: 'Africa',
    options: africaTimeZones
  },
  {
    label: 'America',
    options: americaTimeZones
  },
  {
    label: 'Antarctica',
    options: antarticaTimeZones
  },
  {
    label: 'Asia',
    options: asiaTimeZones
  },
  {
    label: 'Atlantic',
    options: atlanticTimeZones
  },
  {
    label: 'Australia',
    options: australiaTimeZones
  },
  {
    label: 'Europe',
    options: europeTimeZones
  },
  {
    label: 'Indian',
    options: indianTimeZones
  },
  {
    label: 'Pacific',
    options: pacificTimeZones
  }
]

const allTimeZones: Array<TimeZone> = [
  ...africaTimeZones,
  ...americaTimeZones,
  ...antarticaTimeZones,
  ...asiaTimeZones,
  ...atlanticTimeZones,
  ...australiaTimeZones,
  ...europeTimeZones,
  ...indianTimeZones,
  ...pacificTimeZones
]


export type {
  TimeZone,
  GroupedTimeZones
}

export {
  allTimeZones,
  groupedTimeZones
}
