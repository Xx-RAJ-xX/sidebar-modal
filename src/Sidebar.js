import React from 'react'
import logo from './logo.svg'
import {FaTimes} from 'react-icons/fa'
import {social,links} from './data'
import { useGlobalContext } from './context'
const Sidebar = () => {

    const {showSidebar, setShowSidebar} = useGlobalContext();
    return (
        <aside className={ `${showSidebar ? 'sidebar show-sidebar' : 'sidebar'}` }>
            <div className="sidebar-header">
                <img src={logo} alt="logo" />
                <button className="close-btn" onClick={()=>setShowSidebar(!showSidebar)}><FaTimes /></button>
            </div>
            <ul className="links">
                {links.map((link)=>{
                    const {id,url,text,icon}=link
                    return(
                        <li key={id}>
                            <a href={url}>{icon}{text}</a>
                        </li>
                    )
                })}
            </ul>
            <ul className="social-icons">
                {social.map((socialIcons)=>{
                    const {id,url,icon}=socialIcons;
                    return(
                        <li  key={id}>
                            <a href={url}>{icon}</a>
                            </li>
                    );
                })}
            </ul>
        </aside>
    )
}

export default Sidebar
