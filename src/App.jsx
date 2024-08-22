import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Titles from './pages/Titles';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/titles" component={Titles} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
