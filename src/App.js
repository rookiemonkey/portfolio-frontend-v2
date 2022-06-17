import Backdrop from './components/Backdrop';
import Contain from './components/Contain';
import Home from './pages/Home';

function App() {
  return (
    <Backdrop>
      <Contain>
        <Home></Home>
      </Contain>
    </Backdrop>
  );
}

export default App;
