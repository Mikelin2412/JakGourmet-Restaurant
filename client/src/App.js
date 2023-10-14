import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import './styles/MainPage.css';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;