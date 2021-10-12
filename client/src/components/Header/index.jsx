import React from "react";
import { Header } from "./styles";
import { GoPerson } from "react-icons/go";
import { useAuth } from "../../hooks/useAuth";

export default function Index() {
    const { user } = useAuth();
    return (
        <Header>
            <span>Quiz App</span>
            <div>
                <span>{user && user.username}</span>
                <div>
                    <GoPerson />
                </div>
            </div>
        </Header>
    );
}
