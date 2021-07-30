import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AllCommits from './pages/AllCommits';
import { NotFound } from './pages/NotFound';

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={AllCommits}/>
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
)

export default App;
