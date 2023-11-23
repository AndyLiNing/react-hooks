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

          {/* 3, useLayoutEffect */}

          {/* 4, useContext */}
          {/*<button onClick={toggleTheme}> Toggle Theme </button>*/}
          {/*    <FunctionalComponent/>*/}
          {/*    <ClassComponent/>*/}

          {/* 5, useRef */}
          {/*<UseRefHook/>*/}

          {/* 6, useMemo */}
          <UseMemoHook/>

          {/* 7, useCallback */}

          {/* 8, useReducer */}

          {/*9, useTransition */}

          {/* 10, useDeferredValue */}


      </>
  );
}

export default App;
