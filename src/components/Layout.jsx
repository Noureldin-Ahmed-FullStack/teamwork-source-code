import React from 'react'
import NavbarComponent from './NavbarComponent'
import Main from './Main'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div>
            <NavbarComponent />
            <Outlet />
        </div>
    )
}
