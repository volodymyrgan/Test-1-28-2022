import React , { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from 'axios';

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
        marginLeft: 76
    },
    confirmBox: {
        marginLeft: 20
    }
}

class Signup extends Component {
    state = {
        email: "",
        password: "",
        confirmPassword: ""
    };

    handleChange = (e, value) => {
        if (value === "email")
            this.setState({ email: e.target.value })
        else if (value === "password")
            this.setState({ password: e.target.value })
        else if (value === "confirmPassword")
            this.setState({ confirmPassword: e.target.value })
    }

    signup = () => {
        const { email, password, confirmPassword } = this.state;
        if ( password !== confirmPassword || email === "" || password === "" || confirmPassword === "") {
            alert("Please check the following forms!");
            return false;
        } 
        else
            var authOptions = {
                method: 'post',
                url: 'http://http://localhost:8000/create',
                headers: {
                'Content-Type': 'application/json'
                },
                json: true
            };
            axios(authOptions)
                .then((response) => {
                    this.props.history.push('/dashboard');
                })
                .catch((error) => {
                    alert(error)
                })
            this.props.history.push('/dashboard');
            
    };

    render () {
        const { email, password, confirmPassword } = this.state;

        return (
            <div style={ styles.body }>
                <h1> Signup </h1>

                <Form style={ styles.form }>
                    <Form.Group controlId="formBasicEmail" style={ styles.email }>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" style={ styles.emailBox } value={email} onChange={(e) => this.handleChange(e, "email")} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" style={ styles.password }>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" placeholder="Password" style={ styles.passwordBox } value={password} onChange={(e) => this.handleChange(e, "password")} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" style={ styles.password }>
                        <Form.Label>Confirm:</Form.Label>
                        <Form.Control type="password" placeholder="Password" style={ styles.confirmBox } value={confirmPassword} onChange={(e) => this.handleChange(e, "confirmPassword")} />
                    </Form.Group>
                    
                    <Button variant="primary" style={ styles.button } onClick={ this.signup }>
                        Signup
                    </Button>
                </Form>
            </div>
        )
    }
}
export default withRouter(Signup);
