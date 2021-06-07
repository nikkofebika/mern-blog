import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../../components/molecules/Footer";
import Navbar from "../../components/molecules/Navbar";
import CreateBlog from "../CreateBlog";
import DetailBlog from "../DetailBlog";
import Contoh from "../Contoh";
import Home from "../Home";

const MainApp = () => {
  return (
    <div className="container mx-auto flex flex-col">
      <Router>
        <Navbar />
        <div className="h-screen">
          <Switch>
            <Route path="/create-blog">
              <CreateBlog />
            </Route>
            <Route path="/detail-blog">
              <DetailBlog />
            </Route>
            <Route path="/contoh">
              <Contoh />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
};

export default MainApp;
