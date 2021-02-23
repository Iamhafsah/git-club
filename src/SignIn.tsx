import React from 'react'
import {TextField, Button, makeStyles} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    input: {
      maxWidth: '90%',
      width: '40vw',
      marginTop: '5em'
    },
    form:{
       
        alignItems: 'center'
    },
    submit:{
        marginTop: '1em' ,
        width: '15vw',
        height: '3.5em'
    }
});

interface Props{
    value:string;
    onChange: (e:any)=>string;
}

const SignIn:React.FC <Props>  =({value, onChange}) => {

    const classes = useStyles()
    
    return (
        <form className={classes.form}>
        <TextField id="outlined-basic" label="Enter your username to sign in" variant="outlined" 
        className = {classes.input}
        value={value}
        onChange={e => onChange(e.target.value)}
        /> <br/>
        
       <Link to='/home'>
        <Button variant="contained" color="primary" 
            className = {classes.submit}>
            Sign In
        </Button>
      </Link>
        
    </form>
    )
}

export default SignIn
