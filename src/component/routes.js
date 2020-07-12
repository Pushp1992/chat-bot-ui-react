import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePageComponent, PageNotFoundComponent } from './component';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePageComponent} />
                <Route component={PageNotFoundComponent} />
            </Switch>
        </div>
    )
}

export default Routes;