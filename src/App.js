import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import QRGenerator from './components/QRGenerator';
import MenuPage from './components/MenuPage';

function App() {
  return (
    <Router>
      {/* <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link to="/">Home</Link>
      </nav> */}
      <Switch>
        <Route exact path="/" component={QRGenerator} />
        <Route path="/menu/:tableId/:category" component={MenuPage} />
        
      </Switch>
    </Router>
  );
}

export default App;
