import React, { useContext } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js';
import SideBar from './components/SideBar.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import Heatmap from './Pages/Heatmap';
import { StateContext } from './contexts/StateContext.js';
import { CSSTransition } from 'react-transition-group';

function App() {
  const { is_logged_in, dark_mode, show_date_picker, show_sidebar } = useContext(StateContext);
  const isLoggedIn = is_logged_in[0];
  const darkMode = dark_mode[0];
  const [showDatePicker, setShowDatePicker] = show_date_picker;
  const [showSideBar, setShowSideBar] = show_sidebar;

  const datePickerToggle = () => {
    setShowDatePicker(!showDatePicker);
  };

  const style = {
    transition: '0.3s',
    background: darkMode ? '#1d2038' : 'transparent',
  };

  // const bg_style = {
  //   opacity: showDatePicker ? 1 : 0,
  //   visibility: showDatePicker ? 'visible' : 'hidden'
  // };

  return (
    <div style={style} className="App">
      <Router>
        <SideBar />
        <CSSTransition
          in={showDatePicker}
          timeout={300}
          classNames="greyLayer"
          unmountOnExit
        ><div className={"bg_layer"} onClick={datePickerToggle}></div>
        </CSSTransition>
        <CSSTransition
          in={showSideBar}
          timeout={300}
          classNames="greyLayer"
          unmountOnExit
        ><div className={"bg_layer-2"} onClick={() => setShowSideBar(false)}></div>
        </CSSTransition>
        <Navbar />
        {!darkMode ? <div className="header_bg"></div> : null}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/heatmap" component={Heatmap} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
