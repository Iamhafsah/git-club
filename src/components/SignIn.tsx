import React from 'react'
import {TextField, makeStyles} from "@material-ui/core";
import {Link} from "react-router-dom";
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

    const classes = useStyles()
    
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
        
       <Link to='/home'>
        <button className='submit'>
            Sign In
        </button>
      </Link>
        
    </form>
    )
}

export default SignIn
