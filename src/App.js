import { BrowserRouter as Router } from 'react-router-dom';
import { CenterScreenContextProvider } from '~/context/CenterScreen';
import Backdrop from '~/hocs/Backdrop';
import Gradient from '~/hocs/Gradient';
import Contain from '~/hocs/Contain';
import AnimatedRoutes from '~/AnimatedRoutes';

const App = () => {
  return (
    <CenterScreenContextProvider>
      <Backdrop>
        <Gradient>
          <Contain>

            <Router>
              <AnimatedRoutes />
            </Router>

          </Contain>
        </Gradient>
      </Backdrop>
    </CenterScreenContextProvider>
  );
}

export default App;
