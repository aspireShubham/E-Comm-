
// import "./styles.css";
// import Navbar from "./Components/Nabvar";
import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar";
import { Provider } from "react-redux";
import store from "./store/store";

const App: FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Provider>
    </div>
  );
};

export default App;