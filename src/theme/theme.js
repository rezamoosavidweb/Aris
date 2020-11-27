import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import palette from './palette'
let theme = createMuiTheme({
  palette: palette,
  direction: 'rtl',
  spacing: 2,
  typography: {
    h2: {
      fontSize: 35,
      fontWeight: 'bold',
      lineHeight: 1.69,
      textAlign: 'left',      
      color: '#a85096'

    },
    h3: {
      fontSize: 18,
      fontWeight: 'bold',
      lineHeight: 1.69,
      textAlign: 'left',
      color: '#000',

    },
    h4: {
      fontSize: 14,
      fontWeight: '700',
      lineHeight: 4.3,
      textAlign: 'left',
      color: '#000',

    },
    h5: {
      fontSize: 12,
      fontWeight: '500',
      lineHeight: 2.9,
      color: '#000'
    },
    h6: {
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 1.67,
      textAlign: 'left',
    },
    subtitle1: {
      fontSize: 12,
      fontWeight: 'normal',
      lineHeight: 1.94,
      textAlign: 'left',
      marginTop: 0,
      color: '#000'

    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 'bold',
      lineHeight: 2.14,
      textAlign: 'left',
      color: '#000'

    },
    body1: {
      fontSize: 12,
      fontWeight: 'bold',
      lineHeight: 1.94,
      textAlign: 'left',
      color: '#000'

    },
    body2: {
      fontSize: 11,
      fontWeight: 'normal',
      lineHeight: 1.94,
      textAlign: 'left',
      color: '#000'

    },
    button: {
      fontSize: 15,
      fontWeight: 500,
      lineHeight: 2.75,
      textAlign: 'center',
      borderRadius: 20,
    },
    caption: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 2.31,
      textAlign: 'left',
    },
    allVariants: {
      fontFamily: 'IRANSans !important',
    },
  },
})
export default responsiveFontSizes(theme)
