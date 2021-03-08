[![Netlify Status](https://api.netlify.com/api/v1/badges/e25a1ce7-5940-4489-a70f-0250611e7202/deploy-status)](https://app.netlify.com/sites/ios-timezone/deploys)

# iOS Timezone
This is a small React app that displays the local time of worlds timezones in an
iOS-style analogue clock. Much like you would find on your iPhone or other
Apple device.

By selecting a new timezone from the drop-down list, the hour hand on the clock
moves and displays the selected timezone's local time. For timezones whose
current local time is after 18:00 (6PM) and before 06:00 (6AM), the clock face
changes to a dark colour representing night time. Just like in your iOS Clock
app.

## Technology Stack
Whilst iOS Timezone is a front-end only app. It still relies on some core
third-party libraries and functionality.

### [React](https://reactjs.org/)
[React](https://reactjs.org/) is the JavaScript library which powers the majority
of the front-end and controls a lot of the UI you see on the page.

### [Date-fns](https://date-fns.org/)
Date-fns is the wonderful libray which provides a range of helper functions when
it comes to working with Dates and Time in JavaScript. For an app which sole
functions revolve around time, it's a key library which helps provide some
critical functionality.

### [RecoilJS](https://recoiljs.org/)
Recoil is a state management library built by the folks at Facebook. Recoil is
built specifically for React and allows State to be managed easily across the
whole app without providing too much bloat. Recoil is crucial to iOS Timezone as
it controls and stores the App's entire state. So everything like toggling Dark
Mode, selecting a new timezone and also controlling the local time itself -
Recoil is responsible for managing.

### [Styled Components](https://styled-components.com/)
All of the React components in iOS Timezone are styled using Styled Components.
What Styled Components allows is a really user-friendly way of writing CSS in
JavaScript but also provides some really nice JavaScript benefits too. From
random class name generation to being able to use prop values in CSS - Styled
Components is a crucial tool for controlling the apps CSS and the component
styles.

## Building Locally
If you want to build and work on iOS Timezone locally, you can do so by running
the following commands.

To start a local development server and environment run:
`yarn start`

To build a production version of iOS Timezone, run:
`yarn build`

To run the test suite for iOS Timezone, run:
`yarn test`


