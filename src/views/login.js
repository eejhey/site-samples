import React from 'react';
import { connect } from 'react-redux';
import { addNotification } from '../redux/actions';

import LoginPanel from '../components/common/login_panel';

export default class Login extends React.Component {

    state = {
        isLoading: false,
    }

    navigateTo = (page) => {
        this.props.history.push(page);
    }

    loginHandler = (response, err) => {
        if (!response.success) {
            this.props.addNotification({
                id: 0,
                text: "Login Failed.",
            })
        }
    }

    onLoginFormSubmit = (creds) => {
        const {
            username,
            password,
        } = creds;

        console.log(creds);
        this.setState({
            isLoading: true,
        })

        this.loginLoadingSwitch = setTimeout(() => this.setState({isLoading: false}), 2780)
        this.loginHandler({success: false});
        this.navigateTo("/home");
    }

    componentDidMount() {
        
    }

    componentWillUnmount() {
        clearTimeout(this.loginLoadingSwitch);
    }

    render() {
        const {
            isLoading,
        } = this.state;
        
        return (
            <div
                className="view"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <LoginPanel
                    onSubmit={this.onLoginFormSubmit}
                    loading={isLoading}
                    style={{
                        width: "80%",
                        maxWidth: "300px",
                        borderRadius: "10px",
                        padding: "3rem 3rem 2rem 3rem",
                        margin: "1rem",
                        boxShadow: "0px 0px 20px 2px rgba(68, 138, 255, 0.7), 0px 0px 20px 2px rgba(68, 138, 255, 0.7)",
                    }} />
            </div>
        )
    }
}

const mapDispatchToProps = {
    addNotification,
}

export const ConnectedLoginPage = connect(null, mapDispatchToProps)(Login);