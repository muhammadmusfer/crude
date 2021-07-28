import { createTheme } from '@material-ui/core'
import { colors } from 'utils/colors'

export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: colors.indigo,
    },
    secondary: {
      main: colors.yellow,
    },
  },
})

export const lightTheme = createTheme({
  palette: {
    type: 'light',
    background: {
      default: colors.white, // overriding default offWhite background for light theme.
    },
    primary: {
      main: colors.indigo,
    },
    secondary: {
      main: colors.yellow,
    },
  },
})
