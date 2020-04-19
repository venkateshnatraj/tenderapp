import React, { Fragment, useState } from 'react'
import { Typography, Grid } from '@material-ui/core'

import clsx from 'clsx'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './header'
import SideDrawer from './sideDrawer'
import { useStyles } from './styles'

const Layout = () => {
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
                <Typography paragraph>
                  In this variation, the persistent navigation drawer changes its width. Its resting
                  state is as a mini-drawer at the same elevation as the content, clipped by the app
                  bar. When expanded, it appears as the standard persistent navigation drawer.
                </Typography>
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
