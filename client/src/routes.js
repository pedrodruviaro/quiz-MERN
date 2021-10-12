import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

// pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/dashboard/:id" component={Dashboard} />
        </Switch>
    );
}
