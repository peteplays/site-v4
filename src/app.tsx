import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './app.scss';

import { configService } from './config/config.service';

function App() {
  return (
    <Router>
      {configService.links &&
        <Switch>
          {configService.links.map((l, i) =>
            <Route
              key={i}
              exact path={l.path}
              render={() => <l.comp />}
            />
          )}
        </Switch>
      }
    </Router>
  );
}

export default App;
