/* eslint-disable linebreak-style */
import React from 'react';
import KegList from './KegList';
import NewKegControl from './NewKegControl';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }
  handleAddingNewKegToList(newKeg) {
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({ masterKegList: newMasterKegList });
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><KegList kegList={this.state.masterKegList}/>} />
          <Route path='/newkeg' render={() => <NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
        </Switch>
      </div>
    );
  }
}

export default App;