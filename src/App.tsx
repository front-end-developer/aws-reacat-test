import React from 'react';
import './App.css';
import { LoginComponent } from './shared/components/login-component/login-component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        header text
      </header>
      <section>
        <LoginComponent />
      </section>
    </div>
  );
}

export default App;
