import  React  from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import Routes from './routes';

function loadScript(src, position, id, publicKey) {
  if (!position) {
    return;
  }

  const script = document.createElement('script');
  script.setAttribute('async', '');
  script.setAttribute("data-public-key", publicKey)
  script.setAttribute('id', id);
  script.src = src;
  position.appendChild(script);
}

function App() {

  if (typeof window !== 'undefined') {
    // if (!document.querySelector('#wompi-script')) {
    //   loadScript(
    //     "https://cdn.wompi.co/libs/js/v1.js",
    //     document.querySelector('head'),
    //     'wompi-script',
    //     "pub_prod_Kw4aC0rZVgLZQn209NbEKPuXLzBD28Zx"
    //   );
    // }
    // loaded.current = true;
  }
 
  return (
      <BrowserRouter >
          <Routes />
      </BrowserRouter>
  );
}

export default App;
