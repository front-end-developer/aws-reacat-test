import React from 'react';
import './App.css';
import { HooksComponent } from './shared/components/hooks/hooks-component';
import { LoginComponent } from './shared/components/login-component/login-component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        header text
      </header>
      <section>
        <LoginComponent />
        <HooksComponent />
      </section>
    </div>
  );
}

export default App;
