import React from "react";
import moment from "moment";
// import Loader from "react-loader-spinner";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
    state = {
        friendsList: []
    };

    componentDidMount() {
        axiosWithAuth()
        .get('/friends')
        .then(resp=> {
            this.setState({
                friendsList: resp.data
            });
        }).catch(err=> {console.log(err);});
    };

    render() {
        const friendsList = this.state.friendsList;
        return (
            <div className="friends-list-container">
                <div className="title">
                    <h1>FRIENDS LIST</h1>
                </div>
                <div className="list">
                    {friendsList.map(friend => (
                        <div key={friend.id} className="friend">
                            <div>
                                <p>-{friend.name}: </p>
                                <p>{friend.email}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default FriendsList;