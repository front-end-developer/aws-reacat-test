import React, { useState } from 'react';
import './App.css';
import { HooksComponent } from './shared/components/hooks/hooks-component';
import { LoginComponent } from './shared/components/login-component/login-component';
import { UseRefHook } from './shared/components/usehooks/use-ref-hook';
import { UseRefHookAsVar } from './shared/components/usehooks/use-ref-hook-as-var';
import { UsehooksComponent } from './shared/components/usehooks/usehooks-component';

function App() {
  const [showUseRefHookAsVar, setShowUseRefHookAsVar] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        header text
      </header>
      <section>
        <LoginComponent />
        <UsehooksComponent />
        <HooksComponent />
        <UseRefHook />

        { /* contains var that re-render dos not reset to 0 */}
        <br /><br />
        <button onClick={
          () => setShowUseRefHookAsVar(!showUseRefHookAsVar)}>
            Toggle
        </button>
        {showUseRefHookAsVar && <UseRefHookAsVar />}
        <br /><br />
      </section>
    </div>
  );
}

export default App;
