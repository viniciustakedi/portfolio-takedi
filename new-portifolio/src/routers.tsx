import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import M2S from "./pages/projects/m2s";

export default function Routers(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/project-m2s" component={M2S}></Route>
            </Switch>
        </BrowserRouter>
    )
}