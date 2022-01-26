import React, {useState} from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const AddFriend = ()=> {
    const { push } = useHistory();
    const [form, setForm] = useState({
        name:'',
        email:''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .post('/friends', form)
        .then(resp=> {
            push('/friendsList')
        }).catch(err=>{console.log(err);});


    }
    return (
        <div>
            <h2>Add Friend</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name </label>
                    <input onChange={handleChange} name="name" id='username'/>
                </div>
                <div>
                    <label htmlFor='email'>Email </label>
                    <input onChange={handleChange} name="email" id='email'/>
                </div>
                <button>Add Friend</button>
            </form>
        </div>
    );
}

export default AddFriend;