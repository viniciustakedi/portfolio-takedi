import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Ds from "./pages/projects/ds";
import M2S from "./pages/projects/m2s";

export default function Routers(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/projeto-m2s" component={M2S}></Route>
                <Route path="/projeto-detuliosilverio" component={Ds}></Route>
                <Route path="/sobre" component={About}></Route>
            </Switch>
        </BrowserRouter>
    )
}