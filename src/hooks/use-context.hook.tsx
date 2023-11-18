import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext<Theme>('dark');
const ThemeToggleContext = React.createContext<() => void>(() => undefined);

export const useThemeToggleContext = () => useContext(ThemeToggleContext);


export const UseContextHook = ({ children }: any) => {
    const [theme, setTheme] = useState<Theme>('light')
    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
    }
    return (
                <ThemeContext.Provider value = { theme }>
                    <ThemeToggleContext.Provider value={ toggleTheme }>
                        {children}
                    </ThemeToggleContext.Provider>
                </ThemeContext.Provider>
            )
}

export const FunctionalComponent = () => {
    const theme  = useContext(ThemeContext);
    const themeStyle = theme === 'light' ? light : dark;
    return(
        <div style={themeStyle}>
            Functional Component
        </div>
    )
}

export class ClassComponent extends React.Component {
    render() {
       return <ThemeContext.Consumer>
           {
               (theme) => {
                   const themeStyle = theme !== 'light' ? light : dark;
                   return <div style={themeStyle}>
                       Class Component
                   </div>
               }
           }
       </ThemeContext.Consumer>
    }
}

const dark = {
    backgroundColor: '#333',
    color: '#CCC',
    padding: '3rem',
    margin: '3rem'
}

const light = {
    backgroundColor: '#CCC',
    color: '#333',
    padding: '3rem',
    margin: '3rem'
}

type Theme = 'dark' | 'light'
