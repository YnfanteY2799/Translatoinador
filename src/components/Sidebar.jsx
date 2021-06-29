import React from 'react';

const Sidebar = ({name}) => (
    <div className="wrapper">
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3>{name}</h3>
            </div>
            <ul className="list-unstyled components">
                <p>Dummy Heading</p>
                <li >
                    <a href="#HomeSubMenu" aria-expanded="false" className="dropdown-toggle">Home</a>
                </li>




            </ul>
        </nav>
    </div>
);

export { Sidebar };