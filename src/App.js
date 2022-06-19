import { MaxViewPortContextProvider } from './context/MaxViewPort';
import Backdrop from './components/Backdrop';
import Contain from './components/Contain';
import Home from './pages/Home';

function App() {
  return (
    <MaxViewPortContextProvider>
      <Backdrop>
        <Contain>
          <Home></Home>
        </Contain>
      </Backdrop>
    </MaxViewPortContextProvider>
  );
}

export default App;
