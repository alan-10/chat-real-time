import React from 'react';
import { BrowserRouter, Switch , Route } from 'react-router-dom';

import PageMain from './pages/PageMain';


function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PageMain} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;