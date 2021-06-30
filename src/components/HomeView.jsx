import React from "react";
import { 
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import  HomePage  from "./MainPage/HomePage";
import { Navbar } from "./NavBar/Navbar.jsx";

const navOptiones = [
    {name:"Translator", link:"/Home/Translater", comp:HomePage},
    {name:"About Dev"},
    {name:"Contact"}
];

const HomeView = () =>{
    return(
        <Router>
            <div className="bg-secondary">
                <Navbar options={navOptiones}/>
                <Switch>
                    {navOptiones.map(({link, comp},key) => <Route key={key} path={link} exact={true}>{comp}</Route>)}
                </Switch>
            </div>
        </Router>
    );
};


export default HomeView;
