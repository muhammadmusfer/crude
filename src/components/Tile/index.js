import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import useStyles from 'components/Tile/style'
import PropType from 'prop-types'
import { useHistory } from 'react-router-dom'

const Tile = ({ textPrimary, textSecondary, icon: Icon, path }) => {
  const history = useHistory()
  const onPressTodos = () => history.push(path)
  const classes = useStyles()
  return (
    <Paper>
      <div className={classes.container}>
        <Icon fontSize="large" color="action" onClick={onPressTodos} />
        <div className={classes.textContainer}>
          <Typography variant="h5">{textPrimary}</Typography>
          <Typography variant="body2" color="textSecondary">
            {textSecondary}
          </Typography>
        </div>
      </div>
    </Paper>
  )
}

Tile.propTypes = {
  textPrimary: PropType.string.isRequired,
  textSecondary: PropType.string.isRequired,
  icon: PropType.element.isRequired,
  path: PropType.string.isRequired,
}

export default Tile
