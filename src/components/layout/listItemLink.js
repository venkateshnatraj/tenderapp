import React, { Fragment } from 'react'
import { Link as RouterLink } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from 'react-router-dom'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'

// '#3f51b5'
const useStyles = makeStyles((theme) => ({ 
  root: {
     background: '#3f51b5',
     '&:hover': {
      backgroundColor: '#c6c6e6',
      color: 'white'
    }
  },
}
))

const ListItemLink = (props) => {
    const classes = useStyles();
    const { icon, primary, to } = props;

    const renderLink = React.useMemo( 
      () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
      [to]
    );

    return (
      <li>
        <ListItem button component={renderLink} classes ={{ root : classes.root }}  >
          {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
          <ListItemText primary={primary}   />
        </ListItem>
        <Divider/>
      </li>
    );
  }

  export default ListItemLink