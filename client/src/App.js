import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import VideosPage from "./pages/VideosPage";
import VideoStage from "./pages/VideoStage";

import Top from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Top />
      <Switch>
        <Route exact path="/" component={VideosPage} />
        <Route exact path="/video/:id" component={VideoStage} />
      </Switch>
    </div>
  </Router>
);

export default App;
