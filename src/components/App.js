import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Route exact path="/" component={Home} />
      {/* Use the render prop (accepts an inline function) over the component prop when you need to pass props to the component you're rendering*/}
      {/* Below, we made a title prop with the value of About */}
      <Route path="/about" render={() => <About title="About" />} />
      <Route path="/teachers" component={Teachers} />
      <Route path="/courses" component={Courses} />
    </div>
  </BrowserRouter>
);

export default App;