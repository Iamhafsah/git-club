import React from 'react'
import {TextField, makeStyles} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles({
    input: {
      maxWidth: '90%',
      width: '60vw',
      marginTop: '5em'
    },
    form:{
        alignItems: 'center'
    }
});


interface Props{
    value:string;
    onChange: any;
    handleSubmit: any;
}


const SignIn:React.FC <Props>  =({value, onChange, handleSubmit}) => {
    let history = useHistory();
    const classes = useStyles()

    const onClick = ()=> {
        if(value === ''){
            return alert('Please input a username')
        }else{
            history.push('/home')
        }
    }
    
    return (

        <form className={classes.form} onSubmit={handleSubmit}>
        <h1 className='app-name'>GIT 
        <GitHubIcon className='git-club-signin'/>
        CLUB</h1>
        <TextField id="outlined-basic" label="Enter username" variant="outlined" 
        className = {classes.input}
        value={value}
        onChange={e => onChange(e.target.value)}
        /> <br/>

        <button className='submit' onClick={onClick}>
            Sign In
        </button>
        
        </form>
    )
}

export default SignIn
