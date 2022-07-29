import { Route, Switch } from 'react-router-dom';

import ADHD from '../../pages/adhd';
import About from '../../pages/about';
import Autism from '../../pages/autism';
import Home from '../../pages/home';
import Parent from '../../pages/parent';

import Quotes from '../../pages/quotes';
import React from "react";

import AdhdVideos from '../../pages/adhd-videos';
import Adhd from '../../pages/adhd';


const AppRouter = () => {
    return (

        <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/adhd'} component={ADHD} />
            <Route exact path={'/autism'} component={Autism} />
            <Route exact path={'/parent'} component={Parent} />
            <Route exact path={'/about'} component={About} />
            <Route exact path={'/pages/quotes'} component={Quotes} /> 
            <Route path={'/adhd-videos'} component={AdhdVideos}/>
            <Route path={'/adhd-videos'} component={Adhd}/>
            {/* <Route path={'/planets'} component={Planet} />
            <Route path={'/add-planet'} component={AddPlanet} />
            <Route path={"/edit-planet/:id"} component={AddPlanet} /> */}
        </Switch>
        
    );
}

export default AppRouter;
