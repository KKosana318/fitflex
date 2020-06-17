import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Collection from './components/collection/collection.component';



function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route exact path='/collection' component={ ShopPage } />
        <Route exact path='/collection/hats' component={ Collection } />
        <Route exact path='/collection/jackets' component={ Collection } />
        <Route exact path='/collection/bestfits' component={ Collection } />
        <Route exact path='/collection/fullcollection' component={ Collection } />
      </Switch>
    </div>
  )
}

export default App;
