import { BrowserRouter as Router } from 'react-router-dom';
import { CenterScreenContextProvider } from '~/context/CenterScreen';
import Backdrop from '~/hocs/Backdrop';
import Gradient from '~/hocs/Gradient';
import Contain from '~/hocs/Contain';
import Navigation from '~/components/Navigation';
import AnimatedRoutes from '~/AnimatedRoutes';

const App = () => {
  return (
    <CenterScreenContextProvider>
      <Backdrop>

        <Router>
        <Gradient>

          <Navigation />

          <Contain>
            <AnimatedRoutes />
          </Contain>

        </Gradient>
        </Router>

      </Backdrop>
    </CenterScreenContextProvider>
  );
}

export default App;
