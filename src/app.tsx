import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';

import './app.scss';

import { configService } from './config/config.service';

function App() {
  return (
    <Router>
      {configService.links &&
        <Routes>
          {configService.links.map((l, i) =>
            <Route
              key={i}
              path={l.path}
              element={<l.comp />}
            />
          )}
        </Routes>
      }
    </Router>
  );
}

export default App;
