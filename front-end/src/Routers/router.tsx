import { Switch, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

function Router() {
  return (
    <Switch>
      <Route path="/" component={ Login } />
      <Route path="/register" component={ Register } />
    </Switch>
  );
}

export default Router;