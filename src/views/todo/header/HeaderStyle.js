import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
  headerDiv: {
    background: '#52ba9a',
    borderRadius: '0px 0px 7px 7px',
    margin: '-1px',
  },
  main: {
    width: '50%',
    height: '85%',
    border: '5px solid',
    borderColor: '#aab5d1',
    marginLeft: '20%',
    marginTop: '0.51%',
    background: '#edf3f3',
    position: 'absolute',
  },
  inputField: {
    width: '93%',
    marginTop: '3%',
    marginLeft: '2%',
    marginBottom: '3%',
    height: 55,
    borderRadius: '3px',
    background: '#58c8ad',
    color: '#ffffff',
    fontSize: '20px',
    border: 'none',
    fontfamily: 'sans-serif',
    '&.focused': {
      outline: 'none',
    },
  },
  addButton: {
    cursor: 'pointer',
    background: 'whitesmoke',
    color: 'teal',
    width: '10%',
    height: '60px',
    top: '16px',
    marginLeft: '-7%',
    borderRadius: '50%',
    border: 'none',
    padding: '0.8%',
    position: 'relative',
  },
})

export default useStyle
