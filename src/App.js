import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Backdrop from './hocs/Backdrop';
import Gradient from './hocs/Gradient';
import Contain from './hocs/Contain';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Backdrop>
        <Gradient>
          <Contain>

            <Routes>
              <Route path="/" element={<Home/>} />
            </Routes>

          </Contain>
        </Gradient>
      </Backdrop>
    </Router>
  );
}

export default App;
