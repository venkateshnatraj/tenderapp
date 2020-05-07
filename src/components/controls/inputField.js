import React, { Fragment, useState } from 'react'
import { Typography, Grid, TextField, InputLabel } from '@material-ui/core'
import './style.css'

import { makeStyles } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 8,
    color: red,
    width: 200,
  },
  inputError: {
    
    // '& label.Mui-focused': {
    //   color: 'green',
    // },
    // '& .MuiInput-underline:after': {
    //   borderBottomColor: 'green',
    // },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      // '&:hover fieldset': {
      //   borderColor: 'yellow',
      // },
      // '&.Mui-focused fieldset': {
      //   borderColor: 'green',
      // },
    }
  },
  input: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'primary',
      },
    }
  },
  Typography: {
    margin: 4,
    color: '#F51720',
    fontSize:12
  },
  error: {
    color: 'red',
    '& p': {
      color: 'red',
      '& span': {
        color: 'blue'
      }
    },
    fontSize:12
    
  }
}))
const InputField = ({ id, name, value, onHandleChange, isRequired, error }) => {

  const classes = useStyles()
  return (
    <div className="fieldContainer">
      <InputLabel className={classes.root} required={isRequired}>
        {name}
      </InputLabel>
      <div className="container">
        <TextField
          id={id}
          variant="outlined"
           color="primary"
          value={value}
          onChange={onHandleChange}
          className ={ error ? classes.inputError : classes.input}
        />
        <br></br> 
        <Typography  display="inline" align="center" className={classes.Typography}>
        {error}
      </Typography>
      </div>
    </div>
  )
}

export default InputField
