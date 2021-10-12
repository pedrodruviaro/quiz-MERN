import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import AuthContextProvider from "./contexts/authContext";

export default function App() {
    return (
        <BrowserRouter>
            <AuthContextProvider>
                <Routes />
            </AuthContextProvider>
        </BrowserRouter>
    );
}
