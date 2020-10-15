import { createMuiTheme } from '@material-ui/core/styles'
import { zhCN } from '@material-ui/core/locale'

export const darkTheme = createMuiTheme(
  {
    palette: {
      primary: {
        main: '#FF4053',
        contrastText: '#fff'
      },
      secondary: {
        main: '#19857b',
        contrastText: '#fff'
      },
      error: {
        main: '#556cd6'
      },
      type: 'dark',
      background: {
        paper: '#161A2B'
      },
      text: {
        primary: '#fff'
      },
      action: {
        disabledBackground: '#8A8C99'
      },
      info: {
        main: '#82678f'
      }
    }
  },
  zhCN
)

export const lightTheme = createMuiTheme(
  {
    palette: {
      primary: {
        main: '#FF4053',
        contrastText: '#fff'
      },
      secondary: {
        main: '#19857b',
        contrastText: '#000'
      },
      type: 'light',
      text: {
        primary: '#000'
      },
      background: {
        paper: '#fff'
      },
      action: {
        disabledBackground: '#bababa'
      },
      error: {
        main: '#556cd6'
      }
    }
  },
  zhCN
)
