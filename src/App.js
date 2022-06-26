import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CenterScreenContextProvider } from './context/CenterScreen';
import Backdrop from './hocs/Backdrop';
import Gradient from './hocs/Gradient';
import Contain from './hocs/Contain';
import Home from './pages/Home';
import DeveloperJourney from './pages/DeveloperJourney';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <CenterScreenContextProvider>
        <Backdrop>
          <Gradient>
            <Contain>

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/developer-journey" element={<DeveloperJourney />} />
              </Routes>

            </Contain>
          </Gradient>
        </Backdrop>
      </CenterScreenContextProvider>
    </Router>
  );
}

export default App;
