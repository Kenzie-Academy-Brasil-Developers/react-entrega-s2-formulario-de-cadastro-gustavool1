import './App.css';
import Form from './components/Form';
import {Switch, Route} from 'react-router-dom'
import Logged from './components/Logged';
import { useState } from 'react';
import ErrorRoute from './components/ErrorRoute';
function App() {
  const [ userData ,setUserData ] = useState(null)
  return (
    <div className="App">
      <header className="App-header">
          <Switch>
            <Route exact path='/'>
              <Form setUserData={ setUserData }/>
            </Route>
            <Route  exact path='/logged/:name'>
                <Logged userData={ userData } setUserData={ setUserData }/>
            </Route>
            <Route>
                <ErrorRoute/>
            </Route>
          </Switch>
      </header>
    </div>
  );
}

export default App;
