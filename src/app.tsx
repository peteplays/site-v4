import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';

import './app.scss';

import { configService } from './config/config.service';

function App() {
  return (
    <Router>
      {configService.links && (
        <Routes>
          {configService.links.map((link, index) => (
            <Route key={index} path={link.path} element={link.element} />
          ))}
        </Routes>
      )}
    </Router>
  );
}

export default App;
