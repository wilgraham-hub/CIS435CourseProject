import React, {Component} from "react";
import {
    Routes,
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Html from "./Html";
import References from "./JavaScript";
import Exercises from "./SQL";

class Main extends Component{
    render() {
        return(
            <HashRouter>
                <div>
                    <ul className="header">
                        <li><NavLink 
                                to="/"
                                className={({ isActive }) =>
                                    (isActive ? "active-class" : "not-active-class")}
                                >HTML
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/JavaScript"
                                className={({ isActive }) =>
                                    (isActive ? "active-class" : "not-active-class")}
                                >JavaScript
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/SQL"
                                className={({ isActive}) =>
                                    (isActive ? "active-class" : "not-active-class")}
                                >SQL
                            </NavLink>
                        </li>
                    </ul>
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Html/>}></Route>
                            <Route path="/JavaScript" element={<References/>}></Route>
                            <Route path="/SQL" element={<Exercises/>}></Route>
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;