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
    this.handleNewKegList = this.handleNewKegList.bind(this);

    this.handleNewKegList(newKegForm) {
      var newMasterKegList = this.state.masterKegList.slice();
      newMasterKegList.push(newKegForm);
      this.setState({ masterKegList: newMasterKegList });
    }

    render(){
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
}

export default App;