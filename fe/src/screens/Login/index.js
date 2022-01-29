import React , { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const styles = {
    body: {
        textAlign: "left",
        marginTop: 150,
        paddingLeft: "15%",
        paddingRight: "50%"
    },
    form: {
        marginTop: 50
    },
    email: {
        display: "flex",
        alignItems: "center"
    },
    emailBox: {
        marginLeft: 35
    },
    password: {
        display: "flex",
        alignItems: "center"
    },
    passwordBox: {
        marginLeft: 8
    },
    button: {
        width: 100,
        marginLeft: 75
    }
}

class Login extends Component {
    state = {
        email: "",
        password: "",
    };

    handleChange = (e, value) => {
        if (value === "email")
            this.setState({ email: e.target.value })
        else if (value === "password")
            this.setState({ password: e.target.value })
    }

    login = () => {
        const { email, password } = this.state;
        if ( email === "" || password === "" ) {
            alert("Please check the following forms!");
            return false;
        }
        else
            this.props.history.push('/dashboard');
    };    

    render () {
        const { email, password } = this.state;
        return (
            <div style={ styles.body }>
                <h1> Login </h1>

                <Form style={ styles.form }>
                    <Form.Group controlId="formBasicEmail" style={ styles.email }>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" style={ styles.emailBox } value={email} onChange={(e) => this.handleChange(e, "email")}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" style={ styles.password }>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" placeholder="Password" style={ styles.passwordBox } value={password} onChange={(e) => this.handleChange(e, "password")}/>
                    </Form.Group>
                    
                    <Button variant="primary" style={ styles.button } onClick={ this.login }>
                        Login
                    </Button>
                </Form>
            </div>
        )
    }
}
export default withRouter(Login);
