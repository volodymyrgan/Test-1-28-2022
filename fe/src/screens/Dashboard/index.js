import React , { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import avatar from "../../assets/images/avatar.png";
import axios from 'axios';

const styles = {
    body: {
        textAlign: "left",
        marginTop: 50,
        paddingLeft: "5%",
        paddingRight: "5%"
    },
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    button: {
        width: 100,
        height: 40,
        marginLeft: 75
    },
    dashboardBody: {
        display: "flex",
        marginTop: 30,
        width: "100%"
    },
    dashboard: {
        display: "table-row",
        width: "75%"        
    },
    content: {
        width: "100%",
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "#245580",
        padding: 8,
        marginBottom: 10
    },
    userList: {
        width: "25%",
        width: "25%",
        paddingLeft: "5%",
        marginTop: "-20px"
    },
    imageContent: {
        display: "flex",
        alignItems: "center"
    },
    shaAuthor: {
        marginLeft: "5%"
    },
    user: {
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "#245580",
        padding: 10
    },
    imageContainer: {
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "#245580",
        padding: 10
    }
}

class Dashboard extends Component {
    state = {
        userData: []
    };

    componentDidMount() {
        var self = this;
        axios.get('https://api.github.com/repos/angular/angular/commits')
          .then(function (response) {
            self.setState({ userData: response.data })
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
          }); 
    }

    logout = () => {
        this.props.history.push('/');
    };

    render () {
        const { userData } = this.state;
        
        return (
            <div style={ styles.body }>
                <div style={ styles.header }>
                    <h1> Dashboard </h1>
                    <Button variant="primary" style={ styles.button } onClick={ this.logout }>
                        Logout
                    </Button>
                </div>
                <div style={styles.dashboardBody}>
                    <div style={ styles.dashboard }>
                        {
                            userData.map(function(data, index){
                                return <div style={ styles.content } key={ index }>
                                            <div style={ styles.imageContent }>
                                                <div style={ styles.imageContainer }>
                                                    <img src={data.author.avatar_url ? data.author.avatar_url : avatar} width="50" height="50" />                                
                                                </div>
                                                <div style={ styles.shaAuthor }>
                                                    <h4> Sha: {data.sha} </h4>
                                                    <h4> Author: {data.commit.author.name} </h4>
                                                </div>
                                            </div>
                                            <div>
                                                <h4> Message: {data.commit.message} </h4>
                                                <h4> Date: {data.commit.committer.date} </h4>
                                            </div>
                                        </div>
                            })                        
                        }                        
                    </div>
                    <div style={ styles.userList }>
                        <h3> User list </h3>
                        <div>
                            <h4 style={ styles.user }> {"user1@user.com"} </h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Dashboard);
