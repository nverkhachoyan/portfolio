import {useState, useEffect, createContext} from 'react'

const ThemeContext = createContext()

function UseThemeContext({children}) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved || ''
  })

  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)")


  const toggleTheme = () => {
    setTheme(() => {
      if (localStorage.getItem('theme')) {
        const existingTheme = localStorage.getItem('theme')
        localStorage.setItem('theme', existingTheme === 'light' ? 'dark' : 'light')
        return localStorage.getItem('theme')
      } else {
        localStorage.setItem('theme', darkThemeMq === 'light' ? 'dark' : 'light')
        return localStorage.getItem('theme')
      }
    })
  }

  useEffect(() => {
      if (localStorage.getItem('theme')) {
        setTheme(localStorage.getItem('theme'))
      }
      else if (darkThemeMq.matches) {
          // Theme set to dark.
          setTheme('dark')
      } else {
          // Theme set to light.
          setTheme('light')
      }
  }, [darkThemeMq])

  return (
    <ThemeContext.Provider value={{toggleTheme, theme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export {UseThemeContext, ThemeContext}