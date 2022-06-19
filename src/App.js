import Backdrop from './hocs/Backdrop';
import Contain from './hocs/Contain';
import Home from './pages/Home';

function App() {
  return (
    <Backdrop>
      <Contain>
        <Home />
      </Contain>
    </Backdrop>
  );
}

export default App;
