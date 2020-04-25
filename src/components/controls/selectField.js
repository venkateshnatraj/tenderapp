import React, { Fragment, useState } from 'react'
import { Typography, Grid, TextField, NativeSelect, InputLabel } from '@material-ui/core'
import './style.css'

import { makeStyles, withStyles } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'
import InputBase from '@material-ui/core/InputBase'

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3)
    },
    width: 330
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    // backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    '&:focus': {
      borderRadius: 1,
      borderColor: '#96858F'
      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    }
  }
}))(InputBase)

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 8,
    color: red,
    width: 200
  },
  Typography: {
    margin: 4,
    color: '#F51720'
  }
}))
const SelectField = ({ id, name, value, options, onHandleChange, isRequired, error }) => {
  const classes = useStyles()
  return (
    <div className="fieldContainer">
      <InputLabel className={classes.root} required={isRequired}>
        {name}
      </InputLabel>
      <div className="container">
        <NativeSelect id={id} value={value} onChange={onHandleChange} input={<BootstrapInput />}>
          {/* <option aria-label="None" value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option> */}
          {options.map(function(option, i) {
            return <option key={i} value={option.code} label={option.description} />
          })}
        </NativeSelect>
      </div>
      <Typography variant="inherit" display="inline" align="center" className={classes.Typography}>
        {error}
      </Typography>
    </div>
  )
}

export default SelectField
