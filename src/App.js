import  React  from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import Routes from './routes';
import Home from './components/Home';


function App() {
 

  return (
      <BrowserRouter >
        <div>
          <Home />
          <Routes />
         </div>
      </BrowserRouter>
  );
}

export default App;
