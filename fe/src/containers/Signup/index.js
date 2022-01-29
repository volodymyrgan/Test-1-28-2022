import React, { Component } from 'react'
import { connect } from 'react-redux'
import Signup from '../../screens/Signup'

import { 
 
 } from '../../actions/Signup';


class SignupContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }

    render () {
        return (
            <div>
                <Signup {...this.props}/>
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
)(SignupContainer);