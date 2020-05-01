import React, { Fragment } from 'react'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import { useTheme } from '@material-ui/core/styles'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { IconButton } from '@material-ui/core'
import { useStyles } from './styles'
import ListItemLink from './listItemLink'

const SideDrawer = (props) => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Fragment>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.isOpen}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={props.close}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItemLink to="/dailyauction" primary="Daily Auction" />
          <ListItemLink to="/toprate" primary="Top Rate Entry" />
          <ListItemLink to="/dummynumber" primary="Dummy Number Entry" />
          <ListItemLink to="/dailyauctionview" primary="Daily Auction View" />
          <ListItemLink to="/samplereport" primary="Sample Report" />
        </List>
      </Drawer>
    </Fragment>
  )
}

export default SideDrawer
