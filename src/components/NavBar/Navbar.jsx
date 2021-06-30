import {Link} from 'react-router-dom';
import { useState } from 'react';

const NavBarOptions = ({renderingOpts}) => renderingOpts.map((x,k) =>
    <li className="nav-item" key={k}>
        <Link className="nav-link" >{x.name}</Link>
    </li>
);

const Navbar = ({name = "Translation", Logo, options = [], }) => {
    
    const [mobileUser, setMobilUser] = useState(false);
    
    
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand mb-0 h1" href="#/" style={{paddingLeft:10}}>{name}</a>

        <div className={`collapse navbar-collapse ${mobileUser ? "show" : ""}`} id="navsc">
            <ul className="navbar-nav mr-auto">
                <NavBarOptions renderingOpts={options}/>
            </ul>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" 
        aria-label="Toggle navigation" onClick={() => setMobilUser(!mobileUser)}>
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="form-inline my-2 my-lg-0">

        </div>
    </nav>
)};

export { Navbar };