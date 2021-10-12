import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

export default function App() {
    return (
        <BrowserRouter>
            <h1>Here goes a new app</h1>
            <Routes />
        </BrowserRouter>
    );
}
