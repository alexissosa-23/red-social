import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the users!", error);
            });
    }, []);
    
    const lista =()=>{
        axios.post('http://localhost:5000/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the users!", error);
            });
    }

    return (
        <div>
            <h2>User List</h2>
            <button onClick={lista}>Lista</button>
            <ul>
                {users.map(user => (
                    <li key={user._id}>{user.name}: {user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
