import React from 'react';
import * as I from '../styles/basic';
import { RingLoader } from 'react-spinners';
import Button from '../button';
import Link from '../link';
import Margin from '../margin';

import './login_panel.css';

export default function LoginPanel(props) {
    const {
        loading,
    } = props;

    let usernameInput;
    let passwordInput;

    const onSubmit = (event) => {
        event.preventDefault();

        if (props.onSubmit) {
            props.onSubmit({
                username: usernameInput.value,
                password: passwordInput.value,
            });
        }
    }

    const loginOrLoader = loading
        ? ( 
            <div
                className="ring-loader">
                <RingLoader 
                    color={"rgb(68, 138, 255)"}
                    size={3}
                    sizeUnit={"rem"} />
            </div>
        ) : (
            <Button>
                {"Login"}
            </Button>
        )

    return (
        <form
            id="login-panel-container"
            style={props.style}
            onSubmit={onSubmit}
            method="post">
            <Logo
                className={"logo"} />
            <Margin
                height="0.8rem" />
            <I.Text
                margin="0.2rem 0rem">{"Username"}</I.Text>
            <input
                className={"input-username"}
                ref={(r) => {usernameInput = r}} />
            <I.Text
                margin="0.2rem 0rem">{"Password"}</I.Text>
            <input
                className={"input-password"}
                ref={(r) => passwordInput = r}
                type="password" />
            <Margin
                height="1rem" />
            {loginOrLoader}
            <RegisterLink visible={!loading} />
        </form>
    )
}

const Logo = (props) => {
    const image = props.src !== undefined
        ? (
            <img
                alt={props.name || "login-logo"}
                className={props.className}
                src={props.src} />
        ) : (
            <div
                className={props.className}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid black",
                }}>
                {"LOGO"}
            </div>
        )

    return image;
}

const RegisterLink = (props) => {
    const text = props.visible
        ? "Register"
        : "";

    const cursor = props.visible
        ? "pointer"
        : "auto";

    return (
        <Link
            style={{
                alignSelf: "center",
                height: "1rem",
                marginTop: "0.5rem",
                cursor,
            }}>
            {text}
        </Link>
    )
}