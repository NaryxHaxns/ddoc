import { Route, Switch } from 'react-router-dom';
import './App.css';
import landing from '../landing/landing';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path='/' component={landing}/>
        </Switch>
      </header>
    </div>
  );
}
