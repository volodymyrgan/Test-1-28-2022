import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from '../../screens/Login'

import { 
 
 } from '../../actions/Login';


class LoginContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }

    render () {
        return (
            <div>
                <Login {...this.props}/>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);