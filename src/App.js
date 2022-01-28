import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { indexScreen } from '../src/screen/index';

function App() {
  return (
    <Router>
      <Route path='/' component={indexScreen} exact></Route>
    </Router>
  );
}

export default App;
