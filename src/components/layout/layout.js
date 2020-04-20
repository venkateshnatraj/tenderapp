import React, { Fragment, useState } from 'react'
import { Typography, Grid } from '@material-ui/core'

import clsx from 'clsx'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './header'
import SideDrawer from './sideDrawer'
import { useStyles } from './styles'

const Layout = (props) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  return (
    <Fragment>
      <div className={classes.root}>
        <CssBaseline />
        <Grid container direction="column">
          <Grid item>
            <Header isOpen={open} open={handleDrawerOpen} />
            <SideDrawer isOpen={open} close={handleDrawerClose} />
          </Grid>
          <main className={clsx(classes.content, { [classes.contentShift]: open })}>
            <div className={classes.drawerHeader} />
           
            <Grid item container>
              <Grid item xs={1} sm={2} />
              <Grid item xs={12} sm={8}>

                {props.children}
              </Grid>
              <Grid item xs={1} sm={2} />
            </Grid>
          </main>
        </Grid>
      </div>
    </Fragment>
  )
}

export default Layout
