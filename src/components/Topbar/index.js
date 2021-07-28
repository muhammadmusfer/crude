import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import { Apps, Brightness4Outlined } from '@material-ui/icons'
import useStyles from 'components/Topbar/style'

const Topbar = () => {
  const classes = useStyles()
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton>
          <Apps />
        </IconButton>
        <Typography variant="h6" color="textPrimary">
          CRUDE
        </Typography>
        <span className={classes.span} />
        <IconButton>
          <Brightness4Outlined color="action" />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Topbar
