import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./pages/Index";
import KusamaIPO from "./pages/KusamaIPO";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/kusama-ipo">
                    <KusamaIPO />
                </Route>
                <Route path="/">
                    <Index />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
