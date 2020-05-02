import React, { Fragment, useState,useEffect, useContext } from 'react'
import { Typography, Grid, Paper, Divider, Button, NativeSelect } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import InputField from '../controls/inputField'
import DateField from '../controls/dateField'
import SelectField from '../controls/selectField'
import { store } from '../../store/store'
import useFetch from '../../store/useFetch'
import useDailyAuction from '../../store/useDailyAuction'
import { useHistory } from 'react-router-dom'



import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
// Icons
import EditIcon from "@material-ui/icons/EditOutlined";
import DoneIcon from '@material-ui/icons/Done';
import RevertIcon from "@material-ui/icons/NotInterestedOutlined";
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteIcon from '@material-ui/icons/Delete'

import CustomTableCell from '../controls/customTableCell'
import { TablePagination, TableFooter} from '@material-ui/core';
import TablePaginationActionsWrapped from '../controls/tablePaginationAction'

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  },
  selectTableCell: {
    width: 60
  },
  tableCell: {
    width: 130,
    height: 40
  },
  input: {
    width: 130,
    height: 40
  },
  // footerTableCell: {
  //   width: 20,
  //   align: 'center'
  // },
}));




const DailyAuctionView = () => {

  const globalState = useContext(store)
  const { state } = globalState
  const getDailyAuction = useFetch(`getDailyAuction`,'GET',null,true)
  const [rows, setRows] = React.useState([])
  const [header, setHeader] = React.useState([])

  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const [curselectedValue,setCurSelectedValue] =useState()
  const headerName = [
    'Tender Date',
    'Tender Number',
    'Session Time',
    'Interval Time',
    'Commodity',
    // 'Dummy Number From',
    // 'Dummy Number To',
    // 'Session Number',
    // 'In Time',
    // 'Out Time',
    // 'Bid Rate'
  ]


  const handleChangePage = (event, page) => {
    setPage(page);
  };
  
  const handleChangeRowsPerPage = event => {
    setPage(0)
    setRowsPerPage(event.target.value)
  };
  
  useEffect(() => {
    setHeader(headerName)
    if(getDailyAuction.tenderState.data) {
     // const items = getDailyAuction.tenderState.data
      const items = Object.keys(getDailyAuction.tenderState.data).map((key)=>{
         let item = getDailyAuction.tenderState.data[key]
         item.id = key
         item.isEditMode = false
         Object.keys(item).forEach((key)=>{
              if(key === 'commodity'){
                console.log(state.masterData.commodity.find(x=>x.code === item[key]))
                const val =  state.masterData.commodity.find(x=>x.code === item[key])
                item[key] = val && val.description ? val.description : ''
              }
         }) 
         return item 
      })
      setRows(items)
    }
  },[getDailyAuction.tenderState.data])


  const [previousRowsState, setPreviousRowsState] = React.useState([])

  const classes = useStyles();

  const onToggleEditMode = id => {
    console.log(rows)
    const isEditInprogress = rows.some(row => row.isEditMode)
    if(isEditInprogress){
      return 
    }
    const data = rows.map(row => {
      if (row.id === id) {
        return { ...row, isEditMode: !row.isEditMode };
      }
      return row;
    });
    setRows(data)
    setPreviousRowsState(data)
  };

  const onSave = id => {
    const data = rows.map(row => {
      if (row.id === id) {
        console.log(curselectedValue)
        row.commodity = curselectedValue
        return { ...row, isEditMode: !row.isEditMode };
      }
      return row;
    });
    setRows(data)
    setPreviousRowsState(data)
  };

  const onChange = (e, row) => {
    const value = e.target.value;
    const name = e.target.name;
    const { id } = row;
    const newRows = rows.map(row => {
      if (row.id === id) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setRows(newRows);
  };

  const onRevert = id => {
    const data= previousRowsState.map(row => {
      if (row.id === id) {
        return { ...row, isEditMode: !row.isEditMode };
      }
      return row;
    });
    setRows(data)
    setPreviousRowsState(data)
  };

  const onSelectHandleChange = (value)=> {
    setCurSelectedValue(value)
  }

  return (
  <Fragment>
          <Typography variant="h6" className ={classes.root} color="primary" align="left" >Daily Auction View</Typography>
            <Divider/>
            <br/>
            <br/>
            <br/>
            <Typography variant="h6" className ={classes.root} color="secondary" align="right" >{ }</Typography>
          <Grid item container> 
             
                <Grid item xs={12} sm={11} >
                <Paper className={classes.root}>
                    <Table className={classes.table} aria-label="caption table">
                      
                        <TableHead>
                          <TableRow style={{backgroundColor:'#96858F', color: 'white'}}>
                            {header.map(item =>(
                                <TableCell align="left">{item}</TableCell>
                              ))}
                            <TableCell align="left">Edit</TableCell>
                            <TableCell align="left">Deactivate</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
                            <TableRow key={row.id}>
                              <CustomTableCell {...{ row, name: "tenderDate", onChange, isReadonly:'true' }} />
                              <CustomTableCell {...{ row, name: "tenderNumber", onChange }} />
                              <CustomTableCell {...{ row, name: "sessionTime", onChange }} />{}
                              <CustomTableCell {...{ row, name: "intervalTime", onChange }} />
                              <CustomTableCell {...{ row, name: "commodity",  type:'select', options: state.masterData.commodity, onSelectHandleChange }} />
                              {/* <CustomTableCell {...{ row, name: "dummyNumberFrom", onChange }} />
                              <CustomTableCell {...{ row, name: "dummyNumberTo", onChange }} />
                              <CustomTableCell {...{ row, name: "sessionNumber", onChange }} />
                              <CustomTableCell {...{ row, name: "inTime", onChange }} />
                              <CustomTableCell {...{ row, name: "outTime", onChange }} />
                              <CustomTableCell {...{ row, name: "bidRate", onChange }} /> */}
                              <TableCell className={classes.selectTableCell}>
                                {row.isEditMode ? (
                                  <div>
                                        <IconButton
                                          aria-label="done"
                                          onClick={() => onSave(row.id)}
                                        >
                                          <DoneIcon />
                                        </IconButton>
                                        <IconButton
                                          aria-label="revert"
                                          onClick={() => onRevert(row.id)}
                                        >
                                          <CancelIcon />
                                        </IconButton>
                                    </div>
                                ) : (
                                  <IconButton
                                    aria-label="delete"
                                    onClick={() => onToggleEditMode(row.id)}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                )}
                              </TableCell>
                              <TableCell className={classes.selectTableCell}>
                                  <IconButton
                                    aria-label="Edit"
                                    onClick={() => onToggleEditMode(row.id)}
                                  >
                                    <DeleteIcon />
                                  </IconButton>
                              </TableCell>

                            </TableRow>
                          ))}
                        </TableBody>
                        <TableFooter style={{backgroundColor:'#96858F', color: 'white'}} >
                           <TableRow  className={classes.footerTableCell}>
                              <TablePagination 
                                  rowsPerPageOptions={5}
                                  colSpan={8}
                                  count={rows.length}
                                  rowsPerPage={rowsPerPage}
                                  page={page}
                                  SelectProps={{
                                    native: true,
                                  }}
                                  onChangePage={handleChangePage}
                                  onChangeRowsPerPage={handleChangeRowsPerPage}
                                  ActionsComponent={TablePaginationActionsWrapped}
                                />

                          </TableRow>
                      </TableFooter>
                    </Table>
                  </Paper>
                </Grid>
          </Grid>
      </Fragment>
  )
}

export default DailyAuctionView
