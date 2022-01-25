import React from "react";
import moment from "moment";
// import Loader from "react-loader-spinner";
import axios from "axios";

class FriendsList extends React.Component {
    state = {
        friendsList: []
    };

    componentDidMount() {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:9000/api/friends', {
            headers: {
                authorization: token
            }
        })
        .then(resp=> {
            console.log(resp.data);
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
                            <div className="friend-username">
                                <p>{friend.name}</p>
                            </div>
                            <div className="friend-email">
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