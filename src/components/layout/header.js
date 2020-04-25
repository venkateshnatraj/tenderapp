import React, { Fragment } from 'react'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import clsx from 'clsx'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import Badge from '@material-ui/core/Badge'
import NotificationsActiveSharpIcon from '@material-ui/icons/NotificationsActiveSharp'
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
          <PermIdentityIcon />
          <Typography variant="body2" className={classes.space}>
            Welcome Venkat
          </Typography>
          <Badge badgeContent={4} color="secondary">
            <NotificationsActiveSharpIcon />
          </Badge>
        </Toolbar>
      </AppBar>
    </Fragment>
  )
}

export default Header
