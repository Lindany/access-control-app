import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import fire from '../../fire';


import './AddUser.css';

const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
      large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
      },
      
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);
  
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      }
    }
  }));
  

export default function FormPropsTextFields(){
 // constconstructor(props) {
  //  super(props);
    // Don't call this.setState() here!
    let state={
      name: "",
      code: "",
      _state:0
    }
    // this.handleName = this.handleName.bind(this);
    // this.handleCode = this.handleCode.bind(this);
    // this.handleState = this.handleState.bind(this);
 
      const classes = useStyles();
      const [role, setRole] = React.useState('');
      const handleChange = (event) => {
        setRole(event.target.value);
      };

      const [name, setName] = React.useState('');
      const [code, setCode] = React.useState('');
      const [_state, _setState] = React.useState('');
      const [faculty, setFaculty] = React.useState(''); 

     
      const handleSubmit = e =>{
        let newUser = {
          "Full Name": name,
          "Code" : code,
          "State" : _state,
          "Fuculty" : faculty,
          "Role": role
        }

        console.log('Submitted:',name, "Code:",code, "Faculty:",faculty, "State: ",_state)
        let messageRef = fire.database().ref('messages').orderByKey().limitToLast
        fire.database().ref('user-'+code).push(newUser); //add object
        // this.setName('');
        // this.setCode('');
        // this._setState('');
        // this.setFaculty('');
        console.log("Successfuly saved record!!", newUser)
      }
      return (
          <div className='add-user-container'>
              <Avatar className='MuiAvatar-root' alt="Lindani Mabaso" src="/static/images/avatar/1.jpg" className={classes.large} />
              <div className='content-heading'>Insert User</div>
              <TextField
                  id="outlined-helperText"
                  label="Full Name"
                  variant="outlined"
                  onChange={e => setName(e.target.value)}
              />
              <TextField
                  id="outlined-helperText"
                  label="Code"
                  variant="outlined"
                  //value={code}
                  onChange={e => setCode(e.target.value)}

              />
              <TextField
                  id="outlined-number"
                  label="State"
                  type="number"
                  variant="outlined"
                  defaultvalue={0}
                  min={0}
                  max={1}
                  onChange={e => _setState(e.target.value)}

              />
              <TextField
                  id="outlined-helperText"
                  label="Faculty"
                  variant="outlined"
                  // value={faculty}
                  onChange={e => setFaculty(e.target.value)}
              />
              <FormControl className={classes.margin}>
                  <InputLabel htmlFor="demo-customized-select-native">User Role</InputLabel>
                  <NativeSelect
                  id="demo-customized-select-native"
                  value={role}
                  onChange={handleChange}
                  input={<BootstrapInput />}
                  >
                  <option aria-label="Select a User" value="" />
                  <option value={'Student'}>Student</option>
                  <option value={'Teacher'}>Teacher</option>
                  <option value={'Supervisor'}>Supervisor</option>
                  </NativeSelect>
              </FormControl>
          
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                className={classes.submit}
              >
                Save
              </Button>
            </div>
        )

}
