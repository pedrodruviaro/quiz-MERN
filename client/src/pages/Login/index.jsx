import React, { useState } from "react";
import { Button } from "../../styles/Button";
import { Container } from "../../styles/Container";
import { Input } from "../../styles/Input";
import { PageHeading } from "../../styles/Typography";
import { CustomText, Form } from "./styles";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function Login() {
    const [email, setEmail] = useState("pedrodruviaro@gmail.com");
    const [password, setPassword] = useState("pedrodruviaro");
    const [error, setError] = useState("");

    // useAuth
    const { loginUser } = useAuth();

    function showError(err) {
        setError(err);
        setTimeout(() => {
            setError("");
        }, 2500);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (email.trim() === "" || password.trim() === "") {
            showError("Please fill all fields");
            return;
        }

        const user = { email, password };

        const response = await loginUser(user);

        if (response) {
            console.log(response);
            return;
        }
    }

    return (
        <Container>
            <PageHeading>Login With Your Account</PageHeading>
            <Form onSubmit={handleSubmit}>
                {error && <p>{error}</p>}

                <Input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit">Login</Button>
                <CustomText>
                    Doesn't have an account?{" "}
                    <Link to="/register">Create one!</Link>
                </CustomText>
            </Form>
        </Container>
    );
}
