import React from 'react'
import {useSelector} from 'react-redux'
import {
    Route,
    Redirect
} from "react-router-dom"

import Login from '../views/login'
import Dashboard from '../views/dashboard'

export default function FrontendAuth(props) {
    const userInfo = useSelector(state => state.user.userInfo)
    if(userInfo) {
        if (props.location.pathname !== '/') {
            return <Redirect to='/' />
        }
        return <Route path="/">
            <Dashboard />
        </Route>
    } else {
        if (props.location.pathname === '/login') {
            return <Route path="/login">
                <Login />
            </Route>
        }
        return <Redirect to='/login' />
    }
}