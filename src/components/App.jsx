import React from 'react';
import KegList from './TicketList';
import NewKegForm from './NewTicketForm';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';

function App() {
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

export default App;