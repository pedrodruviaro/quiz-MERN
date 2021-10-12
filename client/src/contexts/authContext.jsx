import { createContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import api from "../services/api";

// creating context
export const AuthContext = createContext();
AuthContext.displayName = "Auth Context";

// creating provider
export default function AuthContextProvider({ children }) {
    const history = useHistory();
    const location = useLocation().pathname;

    const [user, setUser] = useState(null);
    const [authorized, setAuthorized] = useState(false);

    // effect for persisting user
    useEffect(() => {
        (() => {
            const user = JSON.parse(localStorage.getItem("user"));

            console.log(user);
            console.log(location);

            if (!user) {
                history.push("/");
                return;
            }

            history.push(`${location}`);
        })();
    }, [history, location]);

    //login a user and setting token
    async function loginUser(credentials) {
        try {
            const { data } = await api.post("/api/auth/login", credentials);

            if (data) {
                setAuthorized(true);
                setUser(data);
                api.defaults.headers.Authorization = data.token;
                localStorage.setItem("user", JSON.stringify(data));

                history.push(`/dashboard/${data._id}`);
            }
        } catch (err) {
            setAuthorized(false);
            setUser(null);
            const message = err.response.data;
            console.error(message);
            return message;
        }
    }

    return (
        <AuthContext.Provider value={{ user, authorized, loginUser }}>
            {children}
        </AuthContext.Provider>
    );
}
