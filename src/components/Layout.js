import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

export default function Layout({children}) {
    return (
    <div className="layout">
        <Navbar />
        <div className="content">{children}
        </div>
        <footer>
            <p>Copyright by A little birdy @2021</p>
        </footer>
    </div>
    )
}
