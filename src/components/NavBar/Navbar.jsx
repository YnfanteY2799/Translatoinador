import {Link} from 'react-router-dom';
import { useState } from 'react';

const NavBarOptions = ({renderingOpts}) => renderingOpts.map(({name, link},k) =>
    <li className="nav-item" key={k}>
        <Link className="nav-link" to={link} >{name}</Link>
    </li>
);

const Navbar = ({name = "Translation", Logo, options = [], where}) => {
    
    const [mobileUser, setMobilUser] = useState(false);
    
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand mb-0 h1" to={where} style={{paddingLeft:10}}>{name}</Link>

        <div className={`collapse navbar-collapse ${mobileUser ? "show" : ""} navbar-fluid`} id="navsc">
            <ul className="navbar-nav mr-auto">
                <NavBarOptions renderingOpts={options}/>
            </ul>
        </div>
        <div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" 
            aria-label="Toggle navigation" onClick={() => setMobilUser(!mobileUser)}>
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>
)};

export { Navbar };