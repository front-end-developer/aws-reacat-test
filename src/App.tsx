import React, { useState } from 'react';
import './App.css';
import { HooksComponent } from './shared/components/hooks/hooks-component';
import { LoginComponent } from './shared/components/login-component/login-component';
import { UseCallbackHook } from './shared/components/usehooks/use-callback-hook';
import { UseMemoHook } from './shared/components/usehooks/use-memo-hook';
import { UseRefHook } from './shared/components/usehooks/use-ref-hook';
import { UseRefHookAsVar } from './shared/components/usehooks/use-ref-hook-as-var';
import { UseCallbackWithUseEffectHook } from './shared/components/usehooks/usecallback-with-useeffect-hook';
import { UsehooksComponent } from './shared/components/usehooks/usehooks-component';
import { UseLayoutEffectHook } from './shared/components/usehooks/user-layout-effect-hook';

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
        <UseLayoutEffectHook />
        <UseRefHook />
        <UseCallbackHook />

        { /* contains var that re-render dos not reset to 0 */}
        <br /><br />
        <h1>useRef hook as a var : Example</h1>
        <button onClick={
          () => setShowUseRefHookAsVar(!showUseRefHookAsVar)}>
            Toggle
        </button>
        {showUseRefHookAsVar && <UseRefHookAsVar />}
        <br /><br />


        <UseCallbackWithUseEffectHook />
        <UseMemoHook />
      </section>
    </div>
  );
}

export default App;
