import React from "react";
import axios from "axios";

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        console.log(this.state.credentials);
        axios.post('http://localhost:9000/api/login', this.state.credentials)
        .then(resp=> {
            localStorage.setItem('token', resp.data.token);
            localStorage.setItem('role', resp.data.role);
            localStorage.setItem('username', resp.data.username);
            this.props.history.push('/friendsList');
        }).catch(err=> {console.log(err);});
    };

    render() {
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.login}>
                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input 
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Log In</button>
                </form>
            </div>
        );
    }
}

export default Login;