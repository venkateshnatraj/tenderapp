import React, {Fragment, useState} from  'react'
import { Typography, Grid , TextField } from '@material-ui/core'
import "./style.css";
import { InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider,KeyboardDatePicker } from "@material-ui/pickers";
const useStyles = makeStyles((theme) => ({
    // textfield: {
    //   height: 16 ,
    //   marginTop:-2 , 
    //   maxWidth:1000
    // },
    root: {
      margin: 8,
      color: red,
      width: 100
    },
    Typography: {
        margin: 4,
        color: '#F51720',        
      },
  
  }));
const DateField =({id ,name, onHandleChange, isRequired, error, selectedDate}) =>{

    const test=(date) =>{
        console.log(date)
        console.log(id)
        onHandleChange(id, date)
    }
    const classes = useStyles();
    return(
            <div className="fieldContainer">
                <InputLabel className={classes.root} required={isRequired}>{name}</InputLabel>
                <div className="container2">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">   
                        <KeyboardDatePicker
                            id = {id}
                            clearable
                            value={selectedDate}
                            placeholder="10/10/2018"
                            onChange={date => onHandleChange(id,date)}
                            //minDate={new Date()}
                            format="dd/MMM/yyyy"
                            variant="outlined"
                            //className
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                </div>
            {/* <Typography variant="inherit"  display="inline" align="center"  className ={classes.Typography} >{error}</Typography>  */}
                {/* <InputLabel className={classes.root} >{name}</InputLabel> */}
            </div>
            
    )
}

export default DateField