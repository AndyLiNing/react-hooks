import React from 'react';
import {
    ClassComponent,
    FunctionalComponent,
    useThemeToggleContext
} from './hooks/use-context.hook';
import { UseEffectHook } from './hooks/use-effect.hook';
import { UseMemoHook } from './hooks/use-memo.hook';
import { UseRefHook } from './hooks/use-ref.hook';
import { UseStateHook } from './hooks/use-state.hook';
import './App.css';

function App() {
    const toggleTheme = useThemeToggleContext();
    return (
      <>

          {/* 1, useState */}
          {/*  <UseStateHook/>*/}

          {/* 2, useEffect */}
          {/*<UseEffectHook/>*/}

          {/* 3, useContext */}
          {/*<button onClick={toggleTheme}> Toggle Theme </button>*/}
          {/*    <FunctionalComponent/>*/}
          {/*    <ClassComponent/>*/}

          {/* 4, useRef */}
          {/*<UseRefHook/>*/}

          {/* 5, useMemo */}
          <UseMemoHook/>

      </>
  );
}

export default App;
