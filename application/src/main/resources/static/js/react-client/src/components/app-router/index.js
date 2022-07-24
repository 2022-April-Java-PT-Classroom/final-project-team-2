import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/home';
import ADHD from '../../pages/adhd';
import Autism from '../../pages/autism';
import Parent from '../../pages/parent';
import About from '../../pages/about';

const AppRouter = () => {
    return (

        <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/adhd'} component={ADHD} />
            <Route exact path={'/autism'} component={Autism} />
            <Route exact path={'/parent'} component={Parent} />
            <Route exact path={'/about'} component={About} />
            {/* <Route path={'/planets'} component={Planet} />
            <Route path={'/add-planet'} component={AddPlanet} />
            <Route path={"/edit-planet/:id"} component={AddPlanet} /> */}
        </Switch>
        
    );
}

export default AppRouter;
