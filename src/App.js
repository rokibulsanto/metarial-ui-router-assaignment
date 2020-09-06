import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePost from './Components/HomePost/HomePost';
import NoMatch from './Components/NoMatch/NoMatch';
import PostDetails from './Components/PostDetails/PostDetails';
import Header from './Components/Header/Header';




function App() {
  return (
    <div >
      <Header></Header>
    <Router>
      <Switch>
        <Route path="/home">
          <HomePost></HomePost>
        </Route>
        <Route exact path="/">
          <HomePost></HomePost>
        </Route>
        <Route path="/post/:postId">
            <PostDetails></PostDetails>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
