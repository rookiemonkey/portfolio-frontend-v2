import { BrowserRouter as Router } from 'react-router-dom';
import { CenterScreenContextProvider } from '~/context/CenterScreen';
import { GreetingsContextProvider } from '~/context/Greetings';
import Backdrop from '~/hocs/Backdrop';
import Window from '~/hocs/Window';
import Contain from '~/hocs/Contain';
import Navigation from '~/components/Navigation';
import Greetings from './components/Greetings';
import AnimatedRoutes from '~/AnimatedRoutes';

const App = () => {
  return (
    <CenterScreenContextProvider>
    <GreetingsContextProvider>
      <Backdrop>

        <Router>
          <Window>

            <Navigation/>

            <Contain>

              <Greetings />

              <AnimatedRoutes/>

            </Contain>

          </Window>
        </Router>

      </Backdrop>
    </GreetingsContextProvider>
    </CenterScreenContextProvider>
  );
}

export default App;
