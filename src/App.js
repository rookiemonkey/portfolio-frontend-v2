import Backdrop from './hocs/Backdrop';
import Contain from './hocs/Contain';
import Home from './pages/Home';
import SVGHalftone from './components/SVGHalftone';

function App() {
  return (
    <Backdrop>
      <Contain>

        <SVGHalftone className='halftone' leftOffset={-0.1} topOffset={0.05} />

        <Home />
        
      </Contain>
    </Backdrop>
  );
}

export default App;
