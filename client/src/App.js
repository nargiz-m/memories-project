import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Container} from '@material-ui/core';

import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {
    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <NavigationBar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/auth" exact component={Auth}/>
                </Switch>
            </Container>
        </BrowserRouter>
    );
}

export default App;