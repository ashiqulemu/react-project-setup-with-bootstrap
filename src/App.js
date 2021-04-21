
    import React from 'react'
    import Home from './components/Pages/Home'
    import About from './components/Pages/About' 
    import Team from './components/Pages/Team' 
    import Header from './components/global/Header'
    import Footer from './components/global/Footer'
    import Events from './components/Pages/Events'
    import TeamDetails from './components/Pages/Team-Details'
    import {
      BrowserRouter as Router,
      Switch,
      Route,
      Link
    } from "react-router-dom";
    
    import 'bootstrap/dist/js/bootstrap.js'
    import '../src/assets/scss/app.scss' 

    function App() {
      return (   
          <Router>
          <div>

            <Header/> 

            <Switch>
              <Route exact path="/">
                <Home />
              </Route> 
              <Route path="/about">
                <About />
              </Route> 
              <Route path="/team">
                <Team />
              </Route> 
              <Route path="/team-details">
                <TeamDetails />
              </Route>
              <Route path="/events">
                <Events />
              </Route>
            </Switch>

            <Footer/>
          </div>
        </Router> 
      

      );
    }

    export default App;
