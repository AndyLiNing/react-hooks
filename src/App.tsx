import React from 'react';
import {
    ClassComponent,
    FunctionalComponent,
    useThemeToggleContext
} from './hooks/use-context.hook';
import { UseEffectHook } from './hooks/use-effect.hook';
import { UseStateHook } from './hooks/use-state.hook';
import './App.css';

function App() {
    const toggleTheme = useThemeToggleContext();
    return (
      <>

          <UseEffectHook></UseEffectHook>

          {/* useContext */}
          {/*<button onClick={toggleTheme}> Toggle Theme </button>*/}
          {/*    <FunctionalComponent></FunctionalComponent>*/}
          {/*    <ClassComponent></ClassComponent>*/}


      </>
  );
}

export default App;
