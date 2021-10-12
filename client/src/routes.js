import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

// pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PlayQuiz from "./pages/PlayQuiz";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/dashboard/:id" component={Dashboard} />
            <Route path="/play/:id" component={PlayQuiz} />
        </Switch>
    );
}
