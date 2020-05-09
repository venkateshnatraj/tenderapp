import React, { Fragment, useState, useContext } from 'react'
import { Typography, Grid, Paper, Divider, Button } from '@material-ui/core'
import InputField from '../controls/inputField'
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import {store}  from  '../../store/store' ;
import 'whatwg-fetch'

const useStyles = makeStyles((theme) => ({
  textfield: {
    height: 16 ,
    marginTop:-2 , 
    maxWidth:1000
  },
  root: {
    maxWidth: 400,
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    background: red,
    backgroundColor:red,
    color:red,
  },

}));
const DummyNumberEntry = () => {
  const classes = useStyles()
  
  const {state , dispatch} =  useContext(store);
  
  

  const onTextChange=(e) =>{
     //console.log(e.target.value)
     const value = { id: e.target.id, value :e.target.value }
     dispatch({ type: 'setDummyNumber', payload: value })
     console.log(state) 
  }
  const submit = async()=>{
    const requestData = state.dummyNumberEntry

    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData) 
    }
    //options = { ...options, ...{ body: JSON.stringify(requestData) } }
    //const url = `${config.baseApiUrl}${`dummyNumber.json}` 
     const url ='https://react-burger-api-36179.firebaseio.com/dummyNumber.json'
    const response = await fetch(url,options)
    //console.log(response)
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`)
    }
   // console.log(response)
    const data = await response.json()
    console.log(data)
  }

  return (
    <Fragment>
         <Typography variant="h6" className ={classes.root} color="primary" align="left" >Daily Auction Annoucement</Typography>
          <Divider/>
          <br/>
          <br/>
          <br/>
          <Typography variant="h6" className ={classes.root} color="secondary" align="right" >{ }</Typography>
        <Grid item container> 
              <Grid item xs={1} sm={3}  />
              <Grid item xs={12} sm={9} lg={5}>
                  <InputField id="tenderNumber" name ="Tender Number" value ={state.dummyNumberEntry.tenderNumber}  onHandleChange={(e)=> onTextChange(e) }  isRequired = {true} ></InputField>
                  <InputField id="sessionTime" name ="Session Time" value ={state.dummyNumberEntry.sessionTime} onHandleChange={(e)=> onTextChange(e) }  ></InputField>
                  
                  <br/>
                  <br/>
                  <br/>
                  <Grid item container>
                    <Grid item xs={2} sm={1} lg={2}> 
                    </Grid>
                    <Grid item xs={2} sm={3} lg={2} >
                        <Button variant="outlined" color="secondary" onClick={()=>submit()}>Submit</Button>
                    </Grid>
                   
                    <Grid item xs={1} sm={3} lg={2} >
                        <Button variant="outlined" color="primary" onClick={()=>goToView()}>View</Button>
                    </Grid>
                    <Grid item xs={2} sm={3} lg={2} >
                        <Button variant="outlined" onClick={(e)=>cancel(e)}>Cancel</Button>
                    </Grid>    
                  </Grid>
              </Grid>
        </Grid>
    </Fragment>
  )
}

export default DummyNumberEntry
