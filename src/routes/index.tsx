

import { BrowserRouter, Route, Switch, RouteProps } from 'react-router-dom'
import { Home } from '../pages/Home'
import { NewRoom } from "../pages/NewRoom";
import { Room } from '../pages/Room';
import { AdminRoom } from '../pages/AdminRoom';
import { AuthContext } from '../providers/AuthContext'
import { User }from '../types'

function Routes() {
  return (
    <BrowserRouter>
      <AuthContext.Consumer>
         {
           ({user}) => user ? 
            (
                <Switch>
                  <Route path="/" exact component={Home}/>
                  <Route path="/rooms/new" exact component={NewRoom} />
                  <Route path="/rooms/:id" component={Room}/>
                  <PrivateRoute path="/admin/rooms/:id" user={user} component={AdminRoom}/>
                </Switch>
            ) : <></>
         }
      </AuthContext.Consumer>
       
    </BrowserRouter>
  );
}

const PrivateRoute: React.FC<RouteProps & { user?: User | null }> = ({
  children,
  user,
  ...rest
}) => {
  console.log('user', user)
  return (
    <Route
      {...rest}
    />
  )
}
export default Routes
