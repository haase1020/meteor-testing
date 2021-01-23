import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';

export const LoginForm = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const submit = e => {
        e.preventDefault();

        Meteor.loginWithPassword(username, password);
    };


    return (
        <form onSubmit={submit} className="login-form">
            <div>
             <label htmlFor="username">Username</label>
            </div>
            <input
            type="text"
            placeholder="Username"
            name="username"
            required
            onChange={e => setUserName(e.target.value)}
            />
            <div>
                <label htmlFor="password">Password</label>
            </div>
            

            <input
            type="password"
            placeholder="Password"
            name="password"
            required
            onChange={e => setPassword(e.target.value)}
            />
            <button type="submit">Log In</button>
        </form>
    )
}