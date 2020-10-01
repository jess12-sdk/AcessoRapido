import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/home';
import FPassWord from './pages/FPassWord';
import Landing from './pages/Landing';
import Register from './pages/Register';
import RegisterOK from './pages/RegisterOK';
import FPassWordOk from './pages/FPassWordOk';
import Search from './pages/Search';
import Give from './pages/Give';
import Profile from './pages/Profile';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/fpassword" component={FPassWord} />
            <Route path="/fpasswordok" component={FPassWordOk} />
            <Route path="/landing" component={Landing} />
            <Route path="/register" component={Register} />
            <Route path="/registerok" component={RegisterOK} />
            <Route path="/search" component={Search} />
            <Route path="/service" component={Give} />
            <Route path="/profile" component={Profile} />
        </BrowserRouter>
    );
}

export default Routes;