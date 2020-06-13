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
 
      const classes = useStyles();
      const [age, setAge] = React.useState('');
      const handleChange = (event) => {
        setAge(event.target.value);
      };
  
        return (
            <div className='add-user-container'>
                <Avatar className='MuiAvatar-root' alt="Lindani Mabaso" src="/static/images/avatar/1.jpg" className={classes.large} />
                <br/>
                <div className='content-heading'>Insert User</div>
                <br/>
               <TextField
                    //required
                    id="outlined-helperText"
                    label="Full Name"
                    variant="outlined"
                    
                />
                <br/>
                <TextField
                   // required
                    id="outlined-helperText"
                    label="Code"
                    variant="outlined"
                />
                <br/>
                <TextField
                   // required
                    id="outlined-number"
                    label="State"
                    type="number"
                    variant="outlined"
                />
                <br/>
                <TextField
                 //   required
                    id="outlined-helperText"
                    label="Room / Grade / Faculty"
                    variant="outlined"
                />
                <br/>
                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="demo-customized-select-native">User Role</InputLabel>
                    <NativeSelect
                    id="demo-customized-select-native"
                    value={age}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                    >
                    <option aria-label="Select a User" value="" />
                    <option value={10}>Student</option>
                    <option value={20}>Teacher</option>
                    <option value={30}>Supervisor</option>
                    </NativeSelect>
                </FormControl>
                <br/>
                
                <button>save</button>  
            </div>
        )

}
