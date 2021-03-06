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

            if (!user) {
                history.push("/");
                return;
            }

            api.defaults.headers.Authorization = user.token;
            setUser(user);
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

    // logout a user and removing token
    async function logoutUser() {
        setAuthorized(false);
        setUser(null);
        api.defaults.headers.Authorization = undefined;
        localStorage.removeItem("user");
        history.push("/");
    }

    // registering a new user
    async function registerUser() {
        // chamada p/ api inserindo o novo usuario
        // se 200 => funcao de login passando email e senha (loginUser(credentials))
        // email, username, password => {...}
    }

    return (
        <AuthContext.Provider
            value={{ user, authorized, loginUser, logoutUser, registerUser }}
        >
            {children}
        </AuthContext.Provider>
    );
}
