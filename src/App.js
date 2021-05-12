import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
//import textField from '@material-ui/core/textField'

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { green, orange } from '@material-ui/core/colors';
import 'fontsource-roboto';

import typography from '@material-ui/core/typography'
import Container from '@material-ui/core/Container'

import paper from '@material-ui/core/paper'
import Grid from '@material-ui/core/Grid'

import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
//import menuIcon from '@material-ui/core/menu'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient (45deg, #FE6B8B, #FF8E53)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px'
  }
})

const theme = createMuiTheme({
  typography:{
    h1: {
      fontSize:36,
      marginBottom:15,
    }
  },
  palette: {
    primary: {
      main: green[400],
    },
    secondary: {
      main: orange[500],
    }
  }
})
function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Testing system</Button>
}

function CheckboxExample() {
  const [ checked, setChecked] = React.useState(true)
  return (
    <FormControlLabel 
        control={<Checkbox
        checked={checked}
        icon={<SaveIcon />}
        CheckedIcon={<SaveIcon />}
        onChange={(e)=>setChecked(e.target.checked)}
        inputProps={{
          'aria-label': 'secondary checkbox'
        }}
      />}
      label="Testing Checkbox"
    />
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
      <div className="App">
        <header className="App-header">
          <AppBar color="secondary">
            <ToolBar>
              <IconButton>
              <typography variant="h6">
                Travel Vlog
              </typography>
              <Button>
                Login
              </Button>
              </IconButton>
            </ToolBar>
          </AppBar>
          <typography variant="h1" component="div">
            welcome to my travel Vlog
          </typography>
          <typography variant="subtitle1">
            I love traveling.
          </typography>
          <ButtonStyled />

          <Grid Container spacing={4} justify="center">
            <Grid item xs={12} sm={5}>
              <paper style={{ height:75, width:'100%',  }} />
            </Grid>
            <Grid item>
              <paper style={{ height:75, width:50,  }} />
            </Grid>
            <Grid item>
              <paper style={{ height:75, width:50,  }} />
            </Grid>
          </Grid>  
          
          <CheckboxExample />
          <ButtonGroup variant="contained" color="primary"> 
            <Button 
            startIcon={<SaveIcon />}
            >
                Save
            </Button>
            <Button 
            startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </ButtonGroup>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </Container>
    </ThemeProvider>
  );
}

export default App;
