import React, { Fragment, useState,useEffect, useContext } from 'react'
import { Typography, Grid, Paper, Divider, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import InputField from '../controls/inputField'
import DateField from '../controls/dateField'
import SelectField from '../controls/selectField'
import { store } from '../../store/store'
import useFetch from '../../store/useFetch'
import useDailyAuction from '../../store/useDailyAuction'
import { useHistory } from 'react-router-dom'
import 'whatwg-fetch'
import useValidator from '../../store/useValidator'
import dailyAuctionModel from '../../store/dailyAuctionModel'
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

const DailyAuction = () => {
  const classes = useStyles()
  const globalState = useContext(store)
  const { state } = globalState
  const saveDailyAuction = useFetch(`tenderDailyAuction`,'POST',null,false)

  const isLoading = !(state.masterData && state.masterData.commodity && Object.keys(state.masterData.commodity).length > 0)
  const getCommodity= useFetch(`commodity`,'GET',null,isLoading)

  const displayMessage  = saveDailyAuction.tenderState.message
  const {setDailyAuction, resetDailyAuction, setMasterData} = useDailyAuction()

  const {errorMessage, validateInput, validateAllInput} = useValidator(getCommodity.tenderState.data,dailyAuctionModel)
  const history = useHistory()

  useEffect(() => {
    if (getCommodity.tenderState.data) {
      const items = {
        commodity:  getCommodity.tenderState.data[Object.keys(getCommodity.tenderState.data)],
      }
      setMasterData(items);
    }
    console.log(errorMessage)
  },[getCommodity.tenderState.data ,errorMessage])

  const onTextHandleChange = (e)=> {
    validateInput(e.target)
    
    setDailyAuction({id:e.target.id, value: e.target.value})
  }

  const onDateHandleChange = (id, date)=> {
    setDailyAuction({id:id , value: date})
  }

  const onSelectHandleChange = (e)=> {
    //this is to get description
    // let index = e.nativeEvent.target.selectedIndex;
    // let label = e.nativeEvent.target[index].label;
    setDailyAuction({id:e.target.id, value: e.target.value})
  }

const submit = (e) =>{
  saveDailyAuction.startFetch(state.tenderDailyAuction)
  resetDailyAuction()
}
const goToView =()=>{
  resetDailyAuction()
  saveDailyAuction.tenderState.message =''
  history.push({
    pathname: '/dailyauctionview',
  })
}
const cancel = () =>{
  resetDailyAuction()
  saveDailyAuction.tenderState.message =''
}

  return (
    <Fragment>
         <Typography variant="h6" className ={classes.root} color="primary" align="left" >Daily Auction Annoucement</Typography>
          <Divider/>
          <br/>
          <br/>
          <br/>
          <Typography variant="h6" className ={classes.root} color="secondary" align="right" >{ displayMessage}</Typography>
        <Grid item container> 
              <Grid item xs={1} sm={3}  />
                 
              <Grid item xs={12} sm={9} lg={5}>
                  <DateField id="tenderDate" selectedDate={state.tenderDailyAuction.tenderDate } name ="Tender Date"  onHandleChange ={(id,date)=>{ onDateHandleChange(id, date)}}  ></DateField>
                  <InputField id="tenderNumber" name ="Tender Number" value ={state.tenderDailyAuction.tenderNumber} onHandleChange ={(e)=>{ onTextHandleChange(e)}} isRequired = {true} error ={errorMessage.tenderNumber}></InputField>
                  <InputField id="sessionTime" name ="Session Time" value ={state.tenderDailyAuction.sessionTime} onHandleChange ={(e)=>{onTextHandleChange(e)}} error ={errorMessage.sessionTime}></InputField>
                  <InputField id="intervalTime" name ="Interval Time" value ={state.tenderDailyAuction.intervalTime} onHandleChange ={(e)=>{onTextHandleChange(e)}}></InputField>
                  <SelectField id="commodity" name ="Commodity" value ={state.tenderDailyAuction.commodity} options={state.masterData.commodity} onHandleChange ={(e)=>{onSelectHandleChange(e)}}></SelectField>
                  <InputField id="dummyNumberFrom" name ="Dummy Number From" value ={state.tenderDailyAuction.dummyNumberFrom} onHandleChange ={(e)=>{ onTextHandleChange(e)}} isRequired = {true}></InputField>
                  <InputField id="dummyNumberTo" name ="Dummy Number To" value ={state.tenderDailyAuction.dummyNumberTo} onHandleChange ={(e)=>{onTextHandleChange(e)}}></InputField>
                  <InputField id="sessionNumber" name ="Session Number" value ={state.tenderDailyAuction.sessionNumber} onHandleChange ={(e)=>{onTextHandleChange(e)}}></InputField>
                  <InputField id="inTime" name ="In Time" value ={state.tenderDailyAuction.inTime} onHandleChange ={(e)=>{onTextHandleChange(e)}}></InputField>
                  <InputField id="outTime" name ="Out Time" value ={state.tenderDailyAuction.outTime} onHandleChange ={(e)=>{onTextHandleChange(e)}}></InputField>
                  <InputField id="bidRate" name ="Bid Rate" value ={state.tenderDailyAuction.bidRate} onHandleChange ={(e)=>{onTextHandleChange(e)}}></InputField>
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

export default DailyAuction
