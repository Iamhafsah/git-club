import React, {useState} from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import client from './client';
import HomePage from './HomePage'
import SignIn from './SignIn'
import './App.css';


function App() {

  const [input, setInput] = useState('');

  return (
    <Router>
      <ApolloProvider client={client}>
    <>
    
    <Switch>
      <Route exact path="/sigin">
        <SignIn value={input} 
onChange={setInput}/>
      </Route>
      <Route exact path="/">
        <HomePage input={input}/>
      </Route>
    </Switch>
   
    </>
  </ApolloProvider>
  </Router>
  
  );
}

export default App;
