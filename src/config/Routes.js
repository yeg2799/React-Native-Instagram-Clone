import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Home from '../pages/Home.js';
import About from '../pages/About.js';
import Likes from '../pages/Likes.js';

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene
        key="home"
        component={Home}
        title="Home"
        initial={true}
        hideNavBar
      />
      <Scene key="about" component={About} title="About" />
      <Scene key="likes" component={Likes} title="Likes" />
    </Scene>
  </Router>
);
export default Routes;
