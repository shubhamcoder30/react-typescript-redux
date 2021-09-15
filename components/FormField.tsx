import React, { useState } from 'react';
import { Iface } from '../Interfaces';
import {useDispatch} from "react-redux";
import {showData} from "../actions/index"
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
  import Button from "@material-ui/core/Button"
      
const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    marginTop:30,
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}),
);
  
const initialstate: Iface = {
  name: '',
  profile: ''
};

const FormField = () => {
   const classes=useStyles()
    const [emp, setEmp] = useState(initialstate);
    const dispatch =useDispatch()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      if (e.target.name === "name") {
         setEmp(prevEmp => {
           return {
              ...prevEmp,
               name: e.target.value
             }
         })
       }
       else if (e.target.name === "profile") {
         setEmp(prevEmp => {
          return {
         ...prevEmp,
         profile: e.target.value
           }
      })
    }
  };
        return (
          <div>
    <form className={classes.root} noValidate autoComplete="off">
              <TextField 
                     label="Employee Name" 
                     variant="filled"
                     value={emp.name}
                      name="name"
                    onChange={handleChange}  />
            <TextField 
                    label="Employee Profile"
                   variant="filled"
                    value={emp.profile}
                    name="profile" 
                    onChange={handleChange}/>
           <Button
                   color="primary" variant="outlined"  
                   onClick={() => dispatch(showData(emp))}> Show data
           </Button>
  </form>
       
 </div>
  );
};

export default FormField;
