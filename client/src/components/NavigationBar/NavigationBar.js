import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import { AppBar, Avatar, Typography, Toolbar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';

import memories from '../../img/memories.png';
import useStyles from './styles';

const NavigationBar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    
    useEffect(() => {
        const token = user?.token;
        if(token) {
            const decodedToken = decode(token);
            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location]);
    const logout = () => {
        dispatch({type: "LOGOUT"}); 
        history.push("/");
        setUser(null);
    };
    return (
    <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
            <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Memories</Typography>
            <img className={classes.image} src={memories} alt="memories" height="60"/>
        </div>
        <Toolbar>
            {user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.name} variant="h6">{user.result.name}</Typography>
                    <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                </div>
            ) : (
                <Button component={Link} to="/auth" variant="contained" color="primary">Sign in</Button>
            )}
        </Toolbar>
    </AppBar>
    )
}

export default NavigationBar;