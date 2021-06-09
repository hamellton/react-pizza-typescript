import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={Cart} />
    </div>
  );
};

export default App;
