import { BrowserRouter as Router } from 'react-router-dom';
import { CenterScreenContextProvider } from '~/context/CenterScreen';
import Backdrop from '~/hocs/Backdrop';
import Window from '~/hocs/Window';
import Contain from '~/hocs/Contain';
import Navigation from '~/components/Navigation';
import AnimatedRoutes from '~/AnimatedRoutes';

const App = () => {
  return (
    <CenterScreenContextProvider>
      <Backdrop>

        <Router>
        <Window>

          <Navigation />

          <Contain>
            <AnimatedRoutes />
          </Contain>

        </Window>
        </Router>

      </Backdrop>
    </CenterScreenContextProvider>
  );
}

export default App;
