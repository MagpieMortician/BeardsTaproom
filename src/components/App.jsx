/* eslint-disable linebreak-style */
import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   masterKegList: []
  };
  
  return (
   <div>
    <Header />
    <Switch>
     <Route exact path='/' component={KegList} />
     <Route path='/newkeg' component={NewKegForm} />
    </Switch>
   </div>
  );
 }
}

export default App;