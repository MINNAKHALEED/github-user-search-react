


import { useState } from 'react'

import './App.css'

import Main from './component/maincomponent/Main'

import TopWrapper from './component/topcomponent/TopWrapper'

import {createContext} from 'react'




export const ThemeContext = createContext(null)


function App() {

const [theme, setTheme] = useState("light");




  return (
    <div className={` app ${theme + "body"}`}>
      

<ThemeContext.Provider value={{theme, setTheme}}>
<TopWrapper/>
<Main/>
</ThemeContext.Provider>

  
    </div>
  )
}

export default App
