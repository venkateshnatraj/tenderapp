import React, {useState,useEffect } from 'react'
import {  NativeSelect, Input } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import TableCell from "@material-ui/core/TableCell";
const useStyles = makeStyles(theme => ({
    tableCell: {
      width: 130,
      height: 40
    },
    input: {
      width: 130,
      height: 40
    }
  }));

const CustomTableCell = ({ row, name, onChange , isReadonly=false,type='text', options=[], onSelectHandleChange} ) => {
    const classes = useStyles();
    const { isEditMode } = row;
    let cellItem
    const [selectedValue,setSelectedValue] = useState()

    useEffect(()=>{
        if(type==='select'){
            const code = options.find(x=>x.description === row[name])['code']
            setSelectedValue(code)
           }
    },[])
     
    if(isEditMode && !isReadonly && type ==='text'){
      cellItem = <Input
                    value={row[name]}
                    name={name}
                    onChange={e => onChange(e, row)}
                    className={classes.input}
                  />
    }
    else if(isEditMode && type ==='select'){
      cellItem =  <NativeSelect value={selectedValue} onChange={(e) => onHandleChange(e)} >      
                    {options.map(function(option, i) {
                      return <option key={i} value={option.code} label={option.description} />
                    })}
                  </NativeSelect>
    }
    else {
      cellItem =  row[name]
    }
  
    const onHandleChange = (e)=> {
        setSelectedValue(e.target.value)
        let index = e.nativeEvent.target.selectedIndex;
        let label = e.nativeEvent.target[index].label;
        onSelectHandleChange(label)
      }
  
  
    return (
      <TableCell align="left" className={classes.tableCell}>
         {cellItem}
      </TableCell>
    );
  };

  
export default CustomTableCell