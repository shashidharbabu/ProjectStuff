import React,{useState} from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import { useForm } from "react-hook-form";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

// class AllowOnlyNumber extends Component {
//   constructor(props) {
//       super(props);

//       this.state = {
//           telephone: ''
//       };
//       this.onHandleTelephoneChange = this.onHandleTelephoneChange.bind(this);
//   }

//   onHandleTelephoneChange = e => {
//       let telephone = e.target.value;

//       if (!Number(telephone)) {
//           return;
//       }
//       this.setState({
//           [e.target.name]: telephone
//       });
//   };
// }





const useStyles = makeStyles((theme) => ({
  root:{
    width:'100%',
    maxWidth:500,
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 300,
    },
        },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));




export default function Types() {
  const {handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  
  const classes = useStyles();
  const [grade, setGrade] = useState('');

  const handleChange = (event) => {
    setGrade(event.target.value);
  }

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
  };
  
  
  return (

    
    <Grid container direction="column" alignItems="center" justifyContent="center" >
    <div className={classes.root}>

    
      <Typography variant="h3" gutterBottom>
       Register a new Student
      </Typography>
      <Typography variant="h5" gutterBottom>
        Personal Details
      </Typography>
      <form className={classes.root} autoComplete="off" >
      <div>
        <TextField
          
          id="outlined-size-small"
          label="Student's Name"
          variant="outlined"
          size="small"
        />
        </div>
      </form>      
     <div>
     <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Grade</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={grade}
          onChange={handleChange}
          label="Grade"
          size="small"
        >
          <MenuItem value="">
            <em>Others</em>
          </MenuItem>
          <MenuItem value={1}>First</MenuItem>
          <MenuItem value={2}>Second</MenuItem>
          <MenuItem value={3}>Third</MenuItem>
          <MenuItem value={4}>Fourth</MenuItem>

        </Select>
      </FormControl>
     </div>
     <div>
     <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Timezone</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={grade}
          onChange={handleChange}
          label="Timezone"
        >
          <MenuItem value="">
            <em>Others</em>
          </MenuItem>
          <MenuItem value={1}>New Delhi</MenuItem>
          <MenuItem value={2}>Calcutta</MenuItem>
          
        </Select>
      </FormControl>
     </div>

    <div>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container >
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </Grid>
    </MuiPickersUtilsProvider>
    </div>
    
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Contact Details
      </Typography>

    </div>

    
    <div>
      
    <form className={classes.root}  autoComplete="off" spacing={4} >
          <TextField 
            id="outlined-basic"
            label="Email address" 
            variant="outlined"
           

            />

    </form>
    </div>
    
    <div>
    <form className={classes.root}  autoComplete="off" spacing={4} onSubmit={handleSubmit(onSubmit)}>
          <TextField id="outlined-basic" label="Phone Number" variant="outlined"  />
    </form>  
    </div>
    

    <div>
    <Button variant="contained" color="primary" href="#addingStudent" padding="30px" size="large">
    Create New student Account
    </Button>
    </div>
    
    </div>
    
    
    </Grid>
      
      
      

  );
}