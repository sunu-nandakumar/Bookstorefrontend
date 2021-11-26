

import React from 'react';
import Cart from './components/Cart';
import BookDetails from './components/BookDetails';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Cart}></Route>

          <Route path="/book" exact component={BookDetails}></Route>


        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
