import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...otherProps }) {
    const authorized = true;

    return (
        <Route
            {...otherProps}
            render={(props) => {
                if (authorized) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: {
                                    from: props.location,
                                },
                            }}
                        />
                    );
                }
            }}
        />
    );
}
