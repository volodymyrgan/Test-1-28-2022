import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dashboard from '../../screens/Dashboard'

import { 
 
 } from '../../actions/Dashboard';


class DashboardContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }

    render () {
        return (
            <div>
                <Dashboard {...this.props}/>
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
)(DashboardContainer);