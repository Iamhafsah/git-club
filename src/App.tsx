import React, {useState} from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import client from './client';
import HomePage from './components/HomePage'
import SignIn from './components/SignIn'
import './styles/App.css';
import './styles/nav.css';
import './styles/repo.css';
import './styles/mediaqueries.css';


function App() {

  const [input, setInput] = useState('');

  const handleSubmit = (e:any)=> {
    e.preventDefault()
}
  return (
    <Router>
      <ApolloProvider client={client}>
    <>
    
    <Switch>
      <Route exact path="/">
        <SignIn value={input} 
onChange={setInput} handleSubmit={handleSubmit}/>
      </Route>
      <Route exact path="/home">
        <HomePage input={input}/>
      </Route>
    </Switch>
   
    </>
  </ApolloProvider>
  </Router>
  
  );
}

export default App;
