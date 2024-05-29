import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
    const [userData, setUserData] = useState({});
    
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('API_ENDPOINT_TO_GET_USER_DATA');
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user data: ', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div>
            <h2>User Profile</h2>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>Favorite Recipes: {userData.favoriteRecipes}</p>
        </div>
    );
};

export default Profile;