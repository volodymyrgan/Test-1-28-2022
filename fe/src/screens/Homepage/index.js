import React , { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

const styles = {
    body: {
        textAlign: "center",
        marginTop: 150,
        paddingLeft: "15%",
        paddingRight: "15%"
    },
    buttonToolbar: {
        display: "flex",
        justifyContent: "center",
        marginTop: 55
    },
    loginButton: {
        width: 100
    },
    signupButton: {
        width: 100,
        marginLeft: "10%"
    }
}

class Home extends Component {
    login = () => {
        this.props.history.push('/login');
    };

    signup = () => {
        this.props.history.push('/signup');
    };

    render () {
        return (
            <div style={ styles.body }>
                <h3> Home Page </h3>
                <ButtonToolbar style={ styles.buttonToolbar }>
                    <Button variant="primary" size="lg" style={ styles.loginButton } onClick={ this.login }>
                        Login
                    </Button>
                    <Button variant="primary" size="lg" style={ styles.signupButton } onClick={ this.signup }>
                        Signup
                    </Button>
                </ButtonToolbar>
            </div>
        )
    }
}
export default withRouter(Home);
