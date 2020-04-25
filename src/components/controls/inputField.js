import React, { Fragment, useState } from 'react'
import { Typography, Grid, TextField, InputLabel } from '@material-ui/core'
import './style.css'

import { makeStyles } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

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
        />
        {/* <Typography color="primary"  variant="inherit"  display="inline"  >{"this is error"}</Typography> */}
      </div>
      <Typography variant="inherit" display="inline" align="center" className={classes.Typography}>
        {error}
      </Typography>
      {/* <InputLabel className={classes.root} >{name}</InputLabel> */}
    </div>
  )
}

export default InputField
