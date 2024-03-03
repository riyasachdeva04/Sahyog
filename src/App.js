import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login';
import Shop from './components/Shop';
import Language from './components/Language';

function App() {
  return (
    <>
    <Router>
    <div className="container">
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/languages" element={<Language />} />
          <Route path="/search" element={<Home />} />
          <Route path="/login" element={<Login/>} />
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
