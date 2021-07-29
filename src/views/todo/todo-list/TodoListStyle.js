import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
  listItemDiv: {
    height: 80,
  },
  inCompleteTask: {
    minHeight: '230px',
    maxHeight: '230px',
    overflow: 'auto',
  },
  hr: {
    borderBottom: '1px',
    borderColor: '#e0e7e7',
    width: '50%',
    alignContent: 'center',
    padding: '2%',
  },
  CompleteTask: {
    maxHeight: '230px',
    paddingTop: '4%',
    height: '45%',
    overflow: 'auto',
  },
  tasklist: {
    background: '#edf3f3',
    listStyle: 'none',
    padding: '10px',
    margin: '0px',
  },
  listItem: {
    background: '#FFFFFF',
    fontsize: 'medium',
    padding: '10px 8px 10px 18px',
    margin: '0%',
    position: 'relative',
    borderradius: '3px',
    left: 0,
    fontfamily: 'sans-serif',
    height: '45px',
    boxshadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
    lineheight: '25px',
  },

  delIcon: {
    cursor: 'pointer',
    borderradius: '50%',
    position: 'absolute',
    right: '10%',
    height: '70%',
    width: '5%',
    border: 'none',
    fontsize: 'x-larg',
    color: '#bfcdcb',
    background: '#FFFFFF',
    margin: '-4px',
    '&:hover': {
      color: 'red',
    },
  },

  cmpleteIcon: {
    cursor: 'pointer',
    borderradius: '50%',
    position: 'absolute',
    right: '2%',
    height: '70%',
    width: '5%',
    border: 'none',
    fontsize: 'x-large',
    color: '#52BA9A',
    background: '#FFFFFF',
    margin: '-4px',
  },
})

export default useStyle
