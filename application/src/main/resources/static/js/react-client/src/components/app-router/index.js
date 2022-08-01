import { Route, Switch } from 'react-router-dom';
import Timer from '../../pages/timer';
import About from '../../pages/about';
import Adhd from '../../pages/adhd';
import AdhdVideos from '../../pages/adhd-videos';
import Autism from '../../pages/autism';
import Home from '../../pages/home';
import Parent from '../../pages/parent';
import Quotes from '../../pages/quotes';
import React from "react";

// import AdhdVideos from '../../pages/adhd-videos';




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
            <Route path={'/adhd-videos'} component={Adhd}/>
            <Route path={'/timer'} component={Timer}/>
            {/* <Route path={'/planets'} component={Planet} />
            <Route path={'/add-planet'} component={AddPlanet} />
            <Route path={"/edit-planet/:id"} component={AddPlanet} /> */}
        </Switch>
        
    );
}

export default AppRouter;
