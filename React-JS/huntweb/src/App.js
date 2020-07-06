import React from 'react';
import './styles.css';
import Header from './components/Header';
import Main from './pages/main';  
import Routes from './routes';

const App = () => (

  <div className="App">

    <Header />
    <Routes />
  
  </div>
 

);

export default App;

// Mesma com com sintaxe diferente
/* function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App; */
