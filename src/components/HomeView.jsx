import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import  HomePage  from "./MainPage/HomePage.jsx";
import { About, }  from "./About_Page/About.jsx";
import { Contact, }  from "./Contact/Concat.jsx";
import { Navbar } from "./NavBar/Navbar.jsx";
import { HomeLand } from "./Homeland/HomeLand.jsx";

const navOptiones = [
    {name:"Translator", link:"/Home/Translater", comp:HomePage},
    {name:"About Dev",  link:"/About/About_Me", comp:About},
    {name:"Contact",    link:"/About/Contact_Me", comp:Contact}
];

const HomeView = () =>{
    return(
        <HashRouter>
            <div className="bg-secondary">
                <Navbar where="/Home" options={navOptiones}/>
                <Switch>
                    <Route path={"/Home"} exact={true}>{HomeLand}</Route>
                    {navOptiones.map(({link, comp},key) => <Route key={key} path={link} exact={true}>{comp}</Route>)}
                </Switch>
            </div>
        </HashRouter>
    );
};

export default HomeView;