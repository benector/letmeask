

import { BrowserRouter, Route, Switch, RouteProps } from 'react-router-dom';
import { Home } from '../pages/Home'
import { NewRoom } from "../pages/NewRoom";
import { Room } from '../pages/Room';
import { MyRooms } from '../pages/MyRooms';
import { AuthContextProvider } from '../providers/AuthContext';

function Routes() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/rooms/new" exact component={NewRoom} />
            <Route path="/rooms/:id" component={Room}/>
            <PrivateRoute path="/admin/rooms/:id" component={Room}/>
            <PrivateRoute path="/admin/my-rooms" component={MyRooms}/>
          </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

const PrivateRoute: React.FC<RouteProps>  = ({
  children,
  ...rest
}) => {
  return (
    <Route
      {...rest}
    />
  )
}
export default Routes
