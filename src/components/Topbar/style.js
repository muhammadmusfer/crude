import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: {
    backgroundColor: theme.palette.background.paper,
  },
  span: {
    flexGrow: 1,
  },
}))

export default useStyles
