import { Route, Switch } from 'react-router-dom';

import About from '../../pages/about';
import Adhd from '../../pages/adhd';
import AdhdResources from '../../pages/adhd-resources';
import AdhdVideos from '../../pages/adhd-videos';
import AlarmClock from '../../pages/alarm-clock';
import Autism from '../../pages/autism';
import AutismResources from '../../pages/autism-resources';
import Home from '../../pages/home';
import Parent from '../../pages/parent';
import Quotes from '../../pages/quotes';
import Spinner from '../../pages/fidget-spinner';
import React from "react";

const AppRouter = () => {
    return (

        <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/adhd'} component={Adhd} />
            <Route exact path={'/autism'} component={Autism} />
            <Route exact path={'/parent'} component={Parent} />
            <Route exact path={'/about'} component={About} />
            <Route exact path={'/pages/quotes'} component={Quotes} /> 
            <Route path={'/adhd-videos'} component={AdhdVideos}/>
            <Route path={'/adhd-resources'} component={AdhdResources}/>
            <Route path={'/autism-resources'} component={AutismResources}/>
            <Route path={'/alarm-clock'} component={AlarmClock}/>
            <Route path={'/spinner'} component={Spinner}/>
        </Switch>
        
    );
}

export default AppRouter;
