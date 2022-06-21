import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Backdrop from './hocs/Backdrop';
import Gradient from './hocs/Gradient';
import Contain from './hocs/Contain';
import Home from './pages/Home';
import DeveloperJourney from './pages/DeveloperJourney';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Backdrop>
        <Gradient>
          <Contain>

            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/developer-journey" element={<DeveloperJourney />}/>
            </Routes>

          </Contain>
        </Gradient>
      </Backdrop>
    </Router>
  );
}

export default App;
