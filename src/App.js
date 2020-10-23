import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./pages/Index";
import KusamaPLO from "./pages/KusamaPLO";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/kusama-plo">
                    <KusamaPLO />
                </Route>
                <Route path="/">
                    <Index />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
