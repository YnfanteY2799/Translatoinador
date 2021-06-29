import React from 'react';

const Sidebar = ({Logo, name}) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-bg-dark">
        <a className="navbar-brand" href="#/">{name}</a>

    </nav>
);

export { Sidebar };