import { createMuiTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'
import { red } from '@material-ui/core/colors'

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#96858F'
    }
    // secondary :green,
    // secondary:{
    //     main: '#f50057'
    // }
  },
  status: {
    danger: 'orange'
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: '#96858F'
      },
      asterisk: {
        color: '#F51720'
      }
    }
    //  MuiInputLabel : {
    //   root :{
    //     color: '#96858F'
    //   },
    //   asterisk: {
    //     color : '#F51720'
    //   }
    // }
  }
})

export default Theme
