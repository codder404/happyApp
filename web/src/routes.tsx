import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/app" component={OrphanagesMap} exact />
        <Route path="/orphanage/create" component={CreateOrphanage} exact />
        <Route path="/orphanage/:id" component={Orphanage} />
      </Switch>
    </Router>
  )
}

export default Routes;
