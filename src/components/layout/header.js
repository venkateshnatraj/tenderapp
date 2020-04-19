import React, { Fragment } from 'react'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import clsx from 'clsx'
import { useStyles } from './styles'

const Header = (props) => {
  const classes = useStyles()
  return (
    <Fragment>
      <AppBar
        position="static"
        className={clsx(classes.appBar, { [classes.appBarShift]: props.isOpen })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.open}
            edge="start"
            className={clsx(classes.menuButton, props.isOpen && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Tender
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Fragment>
  )
}

export default Header
