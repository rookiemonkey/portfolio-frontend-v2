import Backdrop from './hocs/Backdrop';
import Gradient from './hocs/Gradient';
import Contain from './hocs/Contain';
import Home from './pages/Home';

function App() {
  return (
    <Backdrop>
      <Gradient>
        <Contain>

          <Home />

        </Contain>
      </Gradient>
    </Backdrop>
  );
}

export default App;
